import * as Inputs from '@graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const PushTokenObject = definePrismaObject('PushToken', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', PushTokenIdFieldObject),
    isExpired: t.exposeBoolean('isExpired', PushTokenIsExpiredFieldObject),
    expoToken: t.exposeString('expoToken', PushTokenExpoTokenFieldObject),
    androidToken: t.exposeString('androidToken', PushTokenAndroidTokenFieldObject),
    appleToken: t.exposeString('appleToken', PushTokenAppleTokenFieldObject),
    Device: t.relation('Device', PushTokenDeviceFieldObject),
    receipts: t.field(PushTokenReceiptsFieldObject),
    createdAt: t.field(PushTokenCreatedAtFieldObject),
    updatedAt: t.field(PushTokenUpdatedAtFieldObject),
  }),
});

export const PushTokenIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const PushTokenIsExpiredFieldObject = defineExposeObject('Boolean', {
  description: undefined,
  nullable: false,
});

export const PushTokenExpoTokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const PushTokenAndroidTokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const PushTokenAppleTokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const PushTokenDeviceFieldObject = defineRelationObject('PushToken', 'Device', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const PushTokenReceiptsFieldObject = defineFieldObject('PushToken', {
  type: [Inputs.Json],
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.receipts,
});

export const PushTokenCreatedAtFieldObject = defineFieldObject('PushToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.createdAt,
});

export const PushTokenUpdatedAtFieldObject = defineFieldObject('PushToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.updatedAt,
});
