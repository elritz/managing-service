import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnePushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PushToken',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.PushTokenWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.PushTokenCreateInput, required: true }),
      update: t.arg({ type: Inputs.PushTokenUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.pushToken.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnePushTokenMutation = defineMutation((t) => ({
  upsertOnePushToken: t.prismaField(upsertOnePushTokenMutationObject(t)),
}));
