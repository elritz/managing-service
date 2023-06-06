import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnePushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PushToken',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.PushTokenWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.PushTokenUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.pushToken.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnePushTokenMutation = defineMutation((t) => ({
  updateOnePushToken: t.prismaField(updateOnePushTokenMutationObject(t)),
}));
