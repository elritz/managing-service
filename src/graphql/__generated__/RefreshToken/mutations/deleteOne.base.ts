import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RefreshToken',
    nullable: true,
    args: { where: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRefreshTokenMutation = defineMutation((t) => ({
  deleteOneRefreshToken: t.prismaField(deleteOneRefreshTokenMutationObject(t)),
}));
