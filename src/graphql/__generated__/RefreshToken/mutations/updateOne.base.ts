import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RefreshToken',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.RefreshTokenUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneRefreshTokenMutation = defineMutation((t) => ({
  updateOneRefreshToken: t.prismaField(updateOneRefreshTokenMutationObject(t)),
}));
