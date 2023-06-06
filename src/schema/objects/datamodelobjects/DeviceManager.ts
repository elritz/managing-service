import builder from "@builder";
import prismaClient from "@pclient";
import { ErrorManagingObject } from "@schema/commonobjects";
import { DeviceObject } from "@src/graphql/__generated__/Device/object.base";
import { DeviceManagerObject } from "@src/graphql/__generated__/DeviceManager/object.base";
import { DeviceProfileObject } from "@src/graphql/__generated__/DeviceProfile/object.base";
import { PushTokenObject } from "@src/graphql/__generated__/PushToken/object.base";
import { RefreshTokenObject } from "@src/graphql/__generated__/RefreshToken/object.base";

export const Device = builder.prismaObject("Device", DeviceObject);

export const PushToken = builder.prismaObject("PushToken", PushTokenObject);

export const RefreshToken = builder.prismaObject(
  "RefreshToken",
  RefreshTokenObject
);

export const DeviceManager = builder.prismaObject("DeviceManager", {
  ...DeviceManagerObject,
  fields: (t) => {
    const { ...fields } = DeviceManagerObject.fields(t);
    return {
      ...fields,
      // customField: t.field({ type: "String", resolve: () => "Hello world!" }),
    };
  },
});

export const ClientDeviceManager = builder.simpleObject("ClientDeviceManager", {
  fields: (t) => ({
    id: t.string(),
    Device: t.field({
      type: Device,
      nullable: true,
    }),
    DeviceProfile: t.field({
      type: ClientDeviceProfile,
      nullable: true,
    }),
    createdAt: t.field({ type: "DateTime", nullable: true }),
    updatedAt: t.field({ type: "DateTime", nullable: true }),
  }),
});

export const Profile = builder
  .externalRef("Profile", builder.selection<{ id: string }>("id"))
  .implement({
    externalFields: (t) => ({
      id: t.string({ nullable: true }),
    }),
  });

export const ClientDeviceProfile = builder.prismaObject("DeviceProfile", {
  name: "ClientDeviceProfile",
  ...DeviceProfileObject,
  fields: (t) => {
    const { ...fields } = DeviceProfileObject.fields(t);
    return {
      ...fields,
      refreshtoken: t.string({
        resolve: async (parent, args, context, info) => {
          const refreshtoken = await prismaClient.refreshToken.findFirst({
            where: {
              DeviceProfileId: {
                equals: parent.id,
              },
            },
          });
          return refreshtoken?.token;
        },
        nullable: true,
      }),
      Profile: t.field({
        type: Profile,
        resolve: (parent, args, context, info) => {
          return {
            id: String(parent.profileId),
          };
        },
      }),
    };
  },
});

export const DeviceManagerDeviceProfiles = builder.simpleObject(
  "DeviceManagerDeviceProfiles",
  {
    fields: (t) => ({
      DeviceProfiles: t.field({
        type: [ClientDeviceProfile],
      }),
    }),
  }
);

export const DeviceManagerDeviceProfilesResponseUnion = builder.unionType(
  "DeviceManagerDeviceProfilesResponseUnion",
  {
    types: [DeviceManagerDeviceProfiles, ErrorManagingObject],
    resolveType: (item: any) => {
      if (item.errorCode) {
        return "ErrorManaging";
      }
      if (item.DeviceProfiles.length) {
        return "DeviceManagerDeviceProfiles";
      }
      return null;
    },
  }
);

export const RefreshDeviceManagerDeviceManagerResponseUnion = builder.unionType(
  "RefreshDeviceManagerDeviceManagerResponseUnion",
  {
    types: [ClientDeviceManager, ErrorManagingObject],
    resolveType: (item: any) => {
      if (item.errorCode) {
        return "ErrorManaging";
      }
      if (item.id) {
        return "ClientDeviceManager";
      }
      return null;
    },
  }
);
