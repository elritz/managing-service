import * as Inputs from '@graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const DeviceManagerObject = definePrismaObject('DeviceManager', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', DeviceManagerIdFieldObject),
    Device: t.relation('Device', DeviceManagerDeviceFieldObject),
    DeviceProfile: t.relation('DeviceProfile', DeviceManagerDeviceProfileFieldObject(t)),
    createdAt: t.field(DeviceManagerCreatedAtFieldObject),
    updatedAt: t.field(DeviceManagerUpdatedAtFieldObject),
  }),
});

export const DeviceManagerIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const DeviceManagerDeviceFieldObject = defineRelationObject('DeviceManager', 'Device', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const DeviceManagerDeviceProfileFieldObject = defineRelationFunction('DeviceManager', (t) =>
  defineRelationObject('DeviceManager', 'DeviceProfile', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceProfileWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.DeviceProfileOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.DeviceProfileScalarFieldEnum], required: false }),
    },
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const DeviceManagerCreatedAtFieldObject = defineFieldObject('DeviceManager', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const DeviceManagerUpdatedAtFieldObject = defineFieldObject('DeviceManager', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});
