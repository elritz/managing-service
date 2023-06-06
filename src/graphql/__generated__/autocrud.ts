import builder from '@builder';
import * as PushToken from './PushToken';
import * as Device from './Device';
import * as DeviceManager from './DeviceManager';
import * as DeviceProfile from './DeviceProfile';
import * as RefreshToken from './RefreshToken';
import * as Objects from './objects';

type Model = Objects.Model;

export const Cruds: Record<
  Objects.Model,
  {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
  }
> = {
  PushToken: {
    Object: PushToken.PushTokenObject,
    queries: {
      findFirst: PushToken.findFirstPushTokenQueryObject,
      findMany: PushToken.findManyPushTokenQueryObject,
      count: PushToken.countPushTokenQueryObject,
      findUnique: PushToken.findUniquePushTokenQueryObject,
    },
    mutations: {
      createMany: PushToken.createManyPushTokenMutationObject,
      createOne: PushToken.createOnePushTokenMutationObject,
      deleteMany: PushToken.deleteManyPushTokenMutationObject,
      deleteOne: PushToken.deleteOnePushTokenMutationObject,
      updateMany: PushToken.updateManyPushTokenMutationObject,
      updateOne: PushToken.updateOnePushTokenMutationObject,
      upsertOne: PushToken.upsertOnePushTokenMutationObject,
    },
  },
  Device: {
    Object: Device.DeviceObject,
    queries: {
      findFirst: Device.findFirstDeviceQueryObject,
      findMany: Device.findManyDeviceQueryObject,
      count: Device.countDeviceQueryObject,
      findUnique: Device.findUniqueDeviceQueryObject,
    },
    mutations: {
      createMany: Device.createManyDeviceMutationObject,
      createOne: Device.createOneDeviceMutationObject,
      deleteMany: Device.deleteManyDeviceMutationObject,
      deleteOne: Device.deleteOneDeviceMutationObject,
      updateMany: Device.updateManyDeviceMutationObject,
      updateOne: Device.updateOneDeviceMutationObject,
      upsertOne: Device.upsertOneDeviceMutationObject,
    },
  },
  DeviceManager: {
    Object: DeviceManager.DeviceManagerObject,
    queries: {
      findFirst: DeviceManager.findFirstDeviceManagerQueryObject,
      findMany: DeviceManager.findManyDeviceManagerQueryObject,
      count: DeviceManager.countDeviceManagerQueryObject,
      findUnique: DeviceManager.findUniqueDeviceManagerQueryObject,
    },
    mutations: {
      createMany: DeviceManager.createManyDeviceManagerMutationObject,
      createOne: DeviceManager.createOneDeviceManagerMutationObject,
      deleteMany: DeviceManager.deleteManyDeviceManagerMutationObject,
      deleteOne: DeviceManager.deleteOneDeviceManagerMutationObject,
      updateMany: DeviceManager.updateManyDeviceManagerMutationObject,
      updateOne: DeviceManager.updateOneDeviceManagerMutationObject,
      upsertOne: DeviceManager.upsertOneDeviceManagerMutationObject,
    },
  },
  DeviceProfile: {
    Object: DeviceProfile.DeviceProfileObject,
    queries: {
      findFirst: DeviceProfile.findFirstDeviceProfileQueryObject,
      findMany: DeviceProfile.findManyDeviceProfileQueryObject,
      count: DeviceProfile.countDeviceProfileQueryObject,
      findUnique: DeviceProfile.findUniqueDeviceProfileQueryObject,
    },
    mutations: {
      createMany: DeviceProfile.createManyDeviceProfileMutationObject,
      createOne: DeviceProfile.createOneDeviceProfileMutationObject,
      deleteMany: DeviceProfile.deleteManyDeviceProfileMutationObject,
      deleteOne: DeviceProfile.deleteOneDeviceProfileMutationObject,
      updateMany: DeviceProfile.updateManyDeviceProfileMutationObject,
      updateOne: DeviceProfile.updateOneDeviceProfileMutationObject,
      upsertOne: DeviceProfile.upsertOneDeviceProfileMutationObject,
    },
  },
  RefreshToken: {
    Object: RefreshToken.RefreshTokenObject,
    queries: {
      findFirst: RefreshToken.findFirstRefreshTokenQueryObject,
      findMany: RefreshToken.findManyRefreshTokenQueryObject,
      count: RefreshToken.countRefreshTokenQueryObject,
      findUnique: RefreshToken.findUniqueRefreshTokenQueryObject,
    },
    mutations: {
      createMany: RefreshToken.createManyRefreshTokenMutationObject,
      createOne: RefreshToken.createOneRefreshTokenMutationObject,
      deleteMany: RefreshToken.deleteManyRefreshTokenMutationObject,
      deleteOne: RefreshToken.deleteOneRefreshTokenMutationObject,
      updateMany: RefreshToken.updateManyRefreshTokenMutationObject,
      updateOne: RefreshToken.updateOneRefreshTokenMutationObject,
      upsertOne: RefreshToken.upsertOneRefreshTokenMutationObject,
    },
  },
};

const crudEntries = Object.entries(Cruds);

type ResolverType = "Query" | "Mutation";
function generateResolversByType(type: ResolverType, opts?: CrudOptions) {
  return crudEntries
    .filter(([modelName]) => includeModel(modelName, opts))
    .map(([modelName, config]) => {
      const resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);

      return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
        const resolverName = operationName + modelName;
        const isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
        const isPrismaField = !isntPrismaFieldList.includes(operationName);

        const getFields = (t: any) => {
          const field = resolverObjectDefiner(t);
          const handledField = opts?.handleResolver
            ? opts.handleResolver({
                field,
                modelName: modelName as Model,
                operationName,
                resolverName,
                t,
                isPrismaField,
                type,
              })
            : field;

          return {
            [resolverName]: isPrismaField
              ? t.prismaField(handledField)
              : t.field(handledField),
          }
        }

        return type === "Query"
          ? builder.queryFields((t) => getFields(t))
          : builder.mutationFields((t) => getFields(t));
      });
    });
}

export function generateAllObjects(opts?: CrudOptions) {
  return crudEntries
    .filter(([md]) => includeModel(md, opts))
    .map(([modelName, { Object }]) => {
      return builder.prismaObject(modelName as Model, Object); // Objects is all imports
    });
}

export function generateAllQueries(opts?: CrudOptions) {
  generateResolversByType("Query", opts);
}

export function generateAllMutations(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
}

export function generateAllResolvers(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
  generateResolversByType("Query", opts);
}

type CrudOptions = {
  include?: Model[];
  exclude?: Model[];
  /**
   * Caution: This is not type safe
   * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
   */
  handleResolver?: (props: {
    modelName: Model;
    field: any;
    operationName: string;
    resolverName: string;
    t: any;
    isPrismaField: boolean;
    type: ResolverType;
  }) => any;
};

const includeModel = (model: string, opts?: CrudOptions): boolean => {
  if (!opts) return true;
  if (opts.include) return opts.include.includes(model as Model);
  if (opts.exclude) return !opts.exclude.includes(model as Model);
  return true;
};

export function generateAllCrud(opts?: CrudOptions) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}
