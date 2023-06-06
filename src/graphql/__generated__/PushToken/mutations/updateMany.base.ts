import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyPushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.PushTokenWhereInput, required: false }),
      data: t.arg({ type: Inputs.PushTokenUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.pushToken.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyPushTokenMutation = defineMutation((t) => ({
  updateManyPushToken: t.field(updateManyPushTokenMutationObject(t)),
}));
