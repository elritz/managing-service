import * as Inputs from '@graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RefreshTokenObject = definePrismaObject('RefreshToken', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', RefreshTokenIdFieldObject),
    token: t.exposeString('token', RefreshTokenTokenFieldObject),
    DeviceProfile: t.relation('DeviceProfile', RefreshTokenDeviceProfileFieldObject),
    DeviceProfileId: t.exposeString('DeviceProfileId', RefreshTokenDeviceProfileIdFieldObject),
    createdAt: t.field(RefreshTokenCreatedAtFieldObject),
    updatedAt: t.field(RefreshTokenUpdatedAtFieldObject),
  }),
});

export const RefreshTokenIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const RefreshTokenTokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RefreshTokenDeviceProfileFieldObject = defineRelationObject('RefreshToken', 'DeviceProfile', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const RefreshTokenDeviceProfileIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const RefreshTokenCreatedAtFieldObject = defineFieldObject('RefreshToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const RefreshTokenUpdatedAtFieldObject = defineFieldObject('RefreshToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});
