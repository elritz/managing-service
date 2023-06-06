import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyRefreshTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['RefreshToken'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RefreshTokenWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.RefreshTokenOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.RefreshTokenScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyRefreshTokenQuery = defineQuery((t) => ({
  findManyRefreshToken: t.prismaField(findManyRefreshTokenQueryObject(t)),
}));
