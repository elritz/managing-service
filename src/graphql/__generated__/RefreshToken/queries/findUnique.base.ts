import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueRefreshTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'RefreshToken',
    nullable: true,
    args: { where: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueRefreshTokenQuery = defineQuery((t) => ({
  findUniqueRefreshToken: t.prismaField(findUniqueRefreshTokenQueryObject(t)),
}));
