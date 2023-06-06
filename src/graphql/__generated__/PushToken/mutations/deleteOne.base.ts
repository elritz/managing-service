import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnePushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PushToken',
    nullable: true,
    args: { where: t.arg({ type: Inputs.PushTokenWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.pushToken.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnePushTokenMutation = defineMutation((t) => ({
  deleteOnePushToken: t.prismaField(deleteOnePushTokenMutationObject(t)),
}));
