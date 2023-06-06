import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RefreshToken',
    nullable: false,
    args: { data: t.arg({ type: Inputs.RefreshTokenCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.create({ data: args.data, ...query }),
  }),
);

export const createOneRefreshTokenMutation = defineMutation((t) => ({
  createOneRefreshToken: t.prismaField(createOneRefreshTokenMutationObject(t)),
}));
