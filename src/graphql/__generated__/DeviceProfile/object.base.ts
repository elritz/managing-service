import * as Inputs from '@graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const DeviceProfileObject = definePrismaObject('DeviceProfile', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', DeviceProfileIdFieldObject),
    AppType: t.field(DeviceProfileAppTypeFieldObject),
    ProfileType: t.field(DeviceProfileProfileTypeFieldObject),
    profileId: t.exposeString('profileId', DeviceProfileProfileIdFieldObject),
    isActive: t.exposeBoolean('isActive', DeviceProfileIsActiveFieldObject),
    DeviceManager: t.relation('DeviceManager', DeviceProfileDeviceManagerFieldObject),
    accesstoken: t.exposeString('accesstoken', DeviceProfileAccesstokenFieldObject),
    RefreshToken: t.relation('RefreshToken', DeviceProfileRefreshTokenFieldObject),
    deviceManagerId: t.exposeString('deviceManagerId', DeviceProfileDeviceManagerIdFieldObject),
    createdAt: t.field(DeviceProfileCreatedAtFieldObject),
    updatedAt: t.field(DeviceProfileUpdatedAtFieldObject),
  }),
});

export const DeviceProfileIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const DeviceProfileAppTypeFieldObject = defineFieldObject('DeviceProfile', {
  type: Inputs.AppType,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.AppType,
});

export const DeviceProfileProfileTypeFieldObject = defineFieldObject('DeviceProfile', {
  type: Inputs.ProfileType,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.ProfileType,
});

export const DeviceProfileProfileIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const DeviceProfileIsActiveFieldObject = defineExposeObject('Boolean', {
  description: undefined,
  nullable: false,
});

export const DeviceProfileDeviceManagerFieldObject = defineRelationObject('DeviceProfile', 'DeviceManager', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const DeviceProfileAccesstokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const DeviceProfileRefreshTokenFieldObject = defineRelationObject('DeviceProfile', 'RefreshToken', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const DeviceProfileDeviceManagerIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const DeviceProfileCreatedAtFieldObject = defineFieldObject('DeviceProfile', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const DeviceProfileUpdatedAtFieldObject = defineFieldObject('DeviceProfile', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});
