import * as Inputs from '@graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const DeviceObject = definePrismaObject('Device', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', DeviceIdFieldObject),
    deviceType: t.exposeString('deviceType', DeviceDeviceTypeFieldObject),
    DeviceManager: t.relation('DeviceManager', DeviceDeviceManagerFieldObject),
    deviceManagerId: t.exposeString('deviceManagerId', DeviceDeviceManagerIdFieldObject),
    PushToken: t.relation('PushToken', DevicePushTokenFieldObject),
    pushTokenId: t.exposeString('pushTokenId', DevicePushTokenIdFieldObject),
    createdAt: t.field(DeviceCreatedAtFieldObject),
    updatedAt: t.field(DeviceUpdatedAtFieldObject),
  }),
});

export const DeviceIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const DeviceDeviceTypeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const DeviceDeviceManagerFieldObject = defineRelationObject('Device', 'DeviceManager', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const DeviceDeviceManagerIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const DevicePushTokenFieldObject = defineRelationObject('Device', 'PushToken', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const DevicePushTokenIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const DeviceCreatedAtFieldObject = defineFieldObject('Device', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.createdAt,
});

export const DeviceUpdatedAtFieldObject = defineFieldObject('Device', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.updatedAt,
});
