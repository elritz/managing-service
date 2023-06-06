import builder from "@builder";
import prismaClient from "@pclient";
import { ClientDeviceProfile } from "@src/@types";
import { ProfileType } from "@src/graphql/__generated__/inputs";
import {
  ClientDeviceManager,
  DeviceManagerDeviceProfilesResponseUnion,
  RefreshDeviceManagerDeviceManagerResponseUnion,
} from "@src/schema/objects/datamodelobjects";
import { isAuthenticated, isPublic } from "@utils/graphql-shield";
import { decodeToken, generateToken } from "@utils/helpers/JWT";
import { GraphQLError } from "graphql";
import { allow } from "graphql-shield";

builder.mutationFields((t) => ({
  createADeviceManager: t.field({
    type: ClientDeviceManager,
    shield: allow,
    args: {
      profileId: t.arg({ type: "String", required: true }),
    },
    resolve: async (query, args, context, info) => {
      const accesstoken = generateToken({
        type: "ACCESS_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      });

      const refreshtoken = generateToken({
        type: "REFRESH_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      });

      if (!refreshtoken) {
        throw new GraphQLError("Couldn't generate refresh token", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      const newDeviceManager = await prismaClient.deviceManager.create({
        data: {
          Device: {
            create: {
              deviceType: "PHONE",
            },
          },
          DeviceProfile: {
            create: {
              isActive: true,
              AppType: "BARFRIENDS",
              ProfileType: "GUEST",
              accesstoken,
              RefreshToken: {
                create: {
                  token: refreshtoken,
                },
              },
              profileId: args.profileId,
            },
          },
        },
        include: {
          Device: true,
          DeviceProfile: true,
        },
      });

      if (!newDeviceManager.Device) {
        throw new GraphQLError("Not Authorized!", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      const newClientDeviceProfile: ClientDeviceProfile = {
        id: newDeviceManager.DeviceProfile[0].id,
        isActive: true,
        AppType: "BARFRIENDS",
        ProfileType: "GUEST",
        deviceManagerId: newDeviceManager.id,
        Profile: {
          id: args.profileId,
        },
        profileId: args.profileId,
        accesstoken: String(accesstoken),
        refreshtoken: refreshtoken,
        createdAt: newDeviceManager.createdAt,
        updatedAt: newDeviceManager.updatedAt,
      };

      const clientDeviceManager = {
        ...newDeviceManager,
        DeviceProfile: newClientDeviceProfile,
      };

      const authorizationtoken = generateToken({
        type: "AUTHORIZATION_TOKEN",
        value: JSON.stringify(clientDeviceManager),
        app: "BARFRIENDS",
      });

      if (!clientDeviceManager) {
        throw new GraphQLError("Couldn't create client Device Manager", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      if (authorizationtoken) {
        context.res.set("authorization", authorizationtoken);
      }

      return {
        ...clientDeviceManager,
      };
    },
  }),
  switchDeviceProfile: t.field({
    type: RefreshDeviceManagerDeviceManagerResponseUnion,
    shield: isAuthenticated,
    args: {
      profileId: t.arg({ type: "String", required: true }),
      profileType: t.arg({ type: ProfileType, defaultValue: "GUEST" }),
    },
    resolve: async (query, args, context, info) => {
      const accesstoken = generateToken({
        type: "ACCESS_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      }) as string;

      const refreshtoken = generateToken({
        type: "REFRESH_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      }) as string;

      const getDeviceManagerFromAuthorization =
        await prismaClient.deviceManager.findFirst({
          where: {
            id: context.ClientDeviceManager?.id,
          },
          include: {
            DeviceProfile: true,
            Device: true,
          },
        });

      if (!getDeviceManagerFromAuthorization) {
        return {
          errorCode: "ERR_DEVICE_MANAGER_NOT_FOUND",
          message: "WHooops",
        };
      }

      await Promise.allSettled(
        getDeviceManagerFromAuthorization?.DeviceProfile.map(async (item) => {
          if (args.profileId === item.profileId) {
            await prismaClient.deviceProfile.update({
              where: {
                id: item.id,
              },
              data: {
                accesstoken,
                RefreshToken: {
                  create: {
                    token: refreshtoken,
                  },
                },
                isActive: true,
              },
            });
          } else {
            await prismaClient.deviceProfile.update({
              where: {
                id: item.id,
              },
              data: {
                isActive: false,
              },
            });
          }
        })
      );

      if (!args.profileId) {
        // set all active DeviceProfiles active to false, set GUEST profile to active
        await Promise.all(
          getDeviceManagerFromAuthorization.DeviceProfile.map(async (item) => {
            if (item.ProfileType === "GUEST") {
              return prismaClient.deviceProfile.update({
                where: {
                  id: item.id,
                },
                data: {
                  isActive: true,
                },
              });
            } else {
              return prismaClient.deviceProfile.update({
                where: {
                  id: item.id,
                },
                data: {
                  isActive: false,
                },
              });
            }
          })
        );
      }

      const findDeviceProfileWithProfileId =
        getDeviceManagerFromAuthorization?.DeviceProfile.find(
          (item) => item.profileId === args.profileId
        );

      if (!findDeviceProfileWithProfileId) {
        const createDeviceProfileWithProfileId =
          await prismaClient.deviceProfile.create({
            data: {
              isActive: true,
              ProfileType: args.profileType,
              AppType: "BARFRIENDS",
              accesstoken,
              RefreshToken: {
                create: {
                  token: refreshtoken,
                },
              },
              DeviceManager: {
                connect: {
                  id: context.ClientDeviceManager?.id,
                },
              },
              profileId: args.profileId,
            },
          });

        const newClientDeviceProfile: ClientDeviceProfile = {
          ...createDeviceProfileWithProfileId,
          Profile: { id: String(args.profileId) },
          AppType: "BARFRIENDS",
          isActive: createDeviceProfileWithProfileId.isActive,

          ProfileType: createDeviceProfileWithProfileId.ProfileType,
          profileId: args.profileId,
          refreshtoken,
          accesstoken,
        };

        if (context.ClientDeviceManager?.DeviceProfile) {
          context.ClientDeviceManager.DeviceProfile = newClientDeviceProfile;
        }
      } else {
        const getFinalClientDeviceProfile =
          await prismaClient.deviceProfile.findFirst({
            where: {
              profileId: args.profileId,
              isActive: true,
            },
          });

        if (!getFinalClientDeviceProfile) {
          return {
            message: "Cound't generate client device",
            errorCode: "ERR_DEVICE_MANAGER_NOT_FOUND",
          };
        }

        const newClientDeviceProfile: ClientDeviceProfile = {
          ...getFinalClientDeviceProfile,
          isActive: true,
          AppType: "BARFRIENDS",
          ProfileType: "GUEST",
          deviceManagerId: getFinalClientDeviceProfile.deviceManagerId,
          Profile: {
            id: args.profileId,
          },
          profileId: args.profileId,
          accesstoken: String(accesstoken),
          refreshtoken: refreshtoken,
        };

        if (!context.ClientDeviceManager?.DeviceProfile) {
          throw new GraphQLError("Not able to be Authorized", {
            extensions: {
              code: "OPERATION_RESOLUTION_FAILURE",
            },
          });
        }
        context.ClientDeviceManager.DeviceProfile = newClientDeviceProfile;
      }

      const finalDeviceManagerString = JSON.stringify(
        context.ClientDeviceManager
      );

      const authorizationtoken = generateToken({
        type: "AUTHORIZATION_TOKEN",
        value: finalDeviceManagerString,
        app: "BARFRIENDS",
      });

      if (!context.ClientDeviceManager) {
        throw new GraphQLError("Not Authorized", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }
      context.res.set("authorization", authorizationtoken);

      return {
        ...context.ClientDeviceManager,
      };
    },
  }),
  refreshDeviceManager: t.field({
    type: RefreshDeviceManagerDeviceManagerResponseUnion,
    // shield: isAuthenticated,
    shield: allow,
    resolve: async (query, args, context, info) => {
      if (!context.ClientDeviceManager) {
        throw new GraphQLError("Couldn't send back device profiles", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      const accesstoken = generateToken({
        type: "ACCESS_TOKEN",
        value: context.ClientDeviceManager.DeviceProfile.Profile?.id || "",
        app: "BARFRIENDS",
      }) as string;

      const refreshtoken = generateToken({
        type: "REFRESH_TOKEN",
        value: context.ClientDeviceManager.DeviceProfile.Profile?.id || "",
        app: "BARFRIENDS",
      }) as string;

      const getDeviceManager = await prismaClient.deviceManager.findUnique({
        where: {
          id: context.ClientDeviceManager.id,
        },
        include: {
          DeviceProfile: true,
        },
      });

      const decodedAccessToken = decodeToken({
        app: "BARFRIENDS",
        type: "ACCESS_TOKEN",
        value: String(context.ClientDeviceManager.DeviceProfile.accesstoken),
      });

      if (!decodedAccessToken) {
        const decodedRefreshToken = decodeToken({
          app: "BARFRIENDS",
          type: "REFRESH_TOKEN",
          value: String(context.ClientDeviceManager.DeviceProfile.refreshtoken),
        });

        if (!decodedRefreshToken) {
          await prismaClient.deviceProfile.update({
            where: {
              id: context.ClientDeviceManager.DeviceProfile.id,
            },
            data: {
              isActive: false,
              accesstoken: "",
              RefreshToken: {
                disconnect: true,
              },
            },
          });

          const findGuestProfile = getDeviceManager?.DeviceProfile.find(
            (item) => {
              item.ProfileType === "GUEST";
            }
          );

          const setGuestProfileActive = await prismaClient.deviceProfile.update(
            {
              where: {
                id: findGuestProfile?.id,
              },
              data: {
                isActive: true,
                accesstoken,
                RefreshToken: {
                  create: {
                    token: refreshtoken,
                  },
                },
              },
            }
          );

          const setGuestActiveClientDeviceProfile: ClientDeviceProfile = {
            ...setGuestProfileActive,
            id: setGuestProfileActive.id,
            isActive: true,
            AppType: "BARFRIENDS",
            ProfileType: "GUEST",
            Profile: {
              id: String(setGuestProfileActive.profileId),
            },
            profileId: String(setGuestProfileActive.profileId),
            accesstoken: String(accesstoken),
            refreshtoken: refreshtoken,
          };

          context.ClientDeviceManager.DeviceProfile =
            setGuestActiveClientDeviceProfile;
        } else {
          const updateCurrentClientDeviceProfile: ClientDeviceProfile = {
            ...context.ClientDeviceManager.DeviceProfile,
            isActive: true,
            AppType: "BARFRIENDS",
            ProfileType: "GUEST",
            Profile: {
              id: String(context.ClientDeviceManager.DeviceProfile.Profile.id),
            },
            profileId: String(
              context.ClientDeviceManager.DeviceProfile.Profile.id
            ),
            accesstoken,
            refreshtoken,
          };

          context.ClientDeviceManager.DeviceProfile =
            updateCurrentClientDeviceProfile;
        }
      } else {
        const updateCurrentClientDeviceProfile: ClientDeviceProfile = {
          ...context.ClientDeviceManager.DeviceProfile,
          isActive: true,
          AppType: "BARFRIENDS",
          ProfileType: "GUEST",
          Profile: {
            id: String(context.ClientDeviceManager.DeviceProfile.Profile.id),
          },
          profileId: context.ClientDeviceManager.DeviceProfile.Profile.id,
          accesstoken,
          refreshtoken,
        };

        context.ClientDeviceManager.DeviceProfile =
          updateCurrentClientDeviceProfile;
      }

      const finalDeviceManagerString = JSON.stringify(
        context.ClientDeviceManager
      );

      const authorizationtoken = generateToken({
        type: "AUTHORIZATION_TOKEN",
        value: finalDeviceManagerString,
        app: "BARFRIENDS",
      });

      context.res.set("authorization", authorizationtoken);

      if (!context.ClientDeviceManager) {
        throw new GraphQLError("Not Authorized!", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      return context.ClientDeviceManager;
    },
  }),
  removeDeviceProfileFromDeviceManager: t.field({
    type: "Boolean",
    shield: isAuthenticated,
    args: {
      profileId: t.arg({ type: "String", required: true }),
      profileType: t.arg({ type: ProfileType, defaultValue: "GUEST" }),
    },
    resolve: async (query, args, context, info) => {
      const accesstoken = generateToken({
        type: "ACCESS_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      }) as string;

      const refreshtoken = generateToken({
        type: "REFRESH_TOKEN",
        value: String(args.profileId),
        app: "BARFRIENDS",
      }) as string;

      if (!context.ClientDeviceManager) {
        return false;
      }

      const dbDeviceManger = await prismaClient.deviceManager.findUnique({
        where: {
          id: context.ClientDeviceManager.id,
        },
        include: {
          DeviceProfile: true,
        },
      });

      if (!dbDeviceManger) {
        return false;
      }

      const findDeviceManagerDeviceProfileToRemove =
        dbDeviceManger.DeviceProfile.find(
          (item) => item.profileId === args.profileId
        );

      const findDeviceManagerDeviceProfileGuest =
        dbDeviceManger.DeviceProfile.find(
          (item) => item.ProfileType === "GUEST"
        );

      if (
        findDeviceManagerDeviceProfileToRemove?.isActive &&
        findDeviceManagerDeviceProfileGuest
      ) {
        await prismaClient.deviceProfile.update({
          where: {
            id: findDeviceManagerDeviceProfileToRemove.id,
          },
          data: {
            isActive: false,
          },
        });

        await prismaClient.deviceManager.update({
          where: {
            id: context.ClientDeviceManager.id,
          },
          data: {
            DeviceProfile: {
              disconnect: {
                id: findDeviceManagerDeviceProfileToRemove?.id,
              },
              update: {
                where: {
                  id: findDeviceManagerDeviceProfileGuest?.id,
                },
                data: {
                  isActive: true,
                },
              },
            },
          },
        });

        const newClientDeviceProfile: ClientDeviceProfile = {
          ...findDeviceManagerDeviceProfileGuest,
          Profile: {
            id: String(findDeviceManagerDeviceProfileGuest?.profileId),
          },
          profileId: String(findDeviceManagerDeviceProfileGuest?.profileId),
          isActive: true,
          AppType: "BARFRIENDS",
          ProfileType: "GUEST",
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        };

        context.ClientDeviceManager.DeviceProfile = newClientDeviceProfile;

        const finalDeviceManagerString = JSON.stringify(
          context.ClientDeviceManager
        );

        const authorizationtoken = generateToken({
          type: "AUTHORIZATION_TOKEN",
          value: finalDeviceManagerString,
          app: "BARFRIENDS",
        });

        // context.res.set("authorization", authorizationtoken);

        return true;
      } else {
        const updatedDeviceManager = await prismaClient.deviceManager.update({
          where: {
            id: context.ClientDeviceManager.id,
          },
          data: {
            DeviceProfile: {
              disconnect: {
                id: findDeviceManagerDeviceProfileToRemove?.id,
              },
            },
          },
        });

        if (!updatedDeviceManager) {
          return false;
        }
      }

      const finalDeviceManagerString = JSON.stringify(
        context.ClientDeviceManager
      );

      const authorizationtoken = generateToken({
        type: "AUTHORIZATION_TOKEN",
        value: finalDeviceManagerString,
        app: "BARFRIENDS",
      });

      // context.res.set("authorization", authorizationtoken);

      return true;
    },
  }),
  upsertDevicePushToken: t.field({
    type: "Boolean",
    shield: isAuthenticated,
    args: {
      androidToken: t.arg({ type: "String" }),
      appleToken: t.arg({ type: "String" }),
      expoToken: t.arg({ type: "String" }),
    },
    resolve: async (query, args, context, info) => {
      if (
        (!args.appleToken && !args.androidToken && !args.expoToken) ||
        !context.ClientDeviceManager?.id
      ) {
        return false;
      }

      if (context.ClientDeviceManager) {
        const getDeviceManagerFromAuthorization =
          await prismaClient.deviceManager.findFirst({
            where: {
              id: context.ClientDeviceManager.id,
            },
            include: {
              Device: {
                include: {
                  PushToken: true,
                },
              },
            },
          });
        if (!getDeviceManagerFromAuthorization?.Device) {
          return false;
        }

        if (!getDeviceManagerFromAuthorization.Device.PushToken) {
          const createDevicePushToken = await prismaClient.pushToken.create({
            data: {
              androidToken: args.androidToken || "",
              appleToken: args.appleToken || "",
              expoToken: args.expoToken || "",
              Device: {
                connect: {
                  id: getDeviceManagerFromAuthorization.Device.id,
                },
              },
            },
          });
          if (!createDevicePushToken) {
            return false;
            // return {
            //   errorCode: 'NOPE',
            //   message: 'failed to update tokens',
            // }
          }
        } else {
          const updateDevice = await prismaClient.device.update({
            where: {
              id: getDeviceManagerFromAuthorization.Device.id,
            },
            data: {
              PushToken: {
                update: {
                  isExpired: true,
                },
                disconnect: true,
                create: {
                  androidToken: args.androidToken || "",
                  appleToken: args.appleToken || "",
                  expoToken: args.expoToken || "",
                },
              },
            },
          });
          if (!updateDevice) {
            return false;
            // return {
            //   errorCode: 'NOPE',
            //   message: 'failed to update tokens',
            // }
          }
        }
      }
      return true;
    },
  }),
}));

builder.queryFields((t) => ({
  getADeviceManager: t.field({
    type: DeviceManagerDeviceProfilesResponseUnion,
    shield: isPublic,
    resolve: async (root, args, context, info) => {
      if (!context.ClientDeviceManager?.id) {
        throw new GraphQLError("Not Authorized No Device manager!", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }
      const deviceManager = await prismaClient.deviceManager.findUniqueOrThrow({
        where: {
          id: context.ClientDeviceManager.id,
        },
        include: {
          Device: true,
          DeviceProfile: {
            include: {
              DeviceManager: true,
              RefreshToken: true,
            },
          },
        },
      });

      const returnDeviceProfiles: ClientDeviceProfile[] =
        deviceManager.DeviceProfile.map((item) => {
          return {
            id: item.id,
            accesstoken: item.accesstoken,
            refreshtoken: item.RefreshToken?.token,
            AppType: item.AppType,
            ProfileType: item.ProfileType,
            profileId: item.profileId,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            deviceManagerId: item.deviceManagerId,
            isActive: item.isActive,
            Profile: {
              id: item.profileId,
            },
          };
        });

      if (!returnDeviceProfiles.length) {
        throw new GraphQLError("Couldn't send back device profiles", {
          extensions: {
            code: "OPERATION_RESOLUTION_FAILURE",
          },
        });
      }

      return {
        DeviceProfiles: returnDeviceProfiles,
      };
    },
  }),
}));
