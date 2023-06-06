import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RefreshToken',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.RefreshTokenCreateInput, required: true }),
      update: t.arg({ type: Inputs.RefreshTokenUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneRefreshTokenMutation = defineMutation((t) => ({
  upsertOneRefreshToken: t.prismaField(upsertOneRefreshTokenMutationObject(t)),
}));
