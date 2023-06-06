import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['RefreshToken'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.RefreshTokenCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prismaClient.$transaction(args.data.map((data) => prismaClient.refreshToken.create({ data }))),
  }),
);

export const createManyRefreshTokenMutation = defineMutation((t) => ({
  createManyRefreshToken: t.prismaField(createManyRefreshTokenMutationObject(t)),
}));
