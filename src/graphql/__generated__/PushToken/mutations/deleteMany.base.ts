import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyPushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.PushTokenWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.pushToken.deleteMany({ where: args.where }),
  }),
);

export const deleteManyPushTokenMutation = defineMutation((t) => ({
  deleteManyPushToken: t.field(deleteManyPushTokenMutationObject(t)),
}));
