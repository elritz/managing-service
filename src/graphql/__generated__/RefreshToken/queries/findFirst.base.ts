import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstRefreshTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'RefreshToken',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.RefreshTokenWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.RefreshTokenOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.RefreshTokenWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.RefreshTokenScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.refreshToken.findFirst({
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

export const findFirstRefreshTokenQuery = defineQuery((t) => ({
  findFirstRefreshToken: t.prismaField(findFirstRefreshTokenQueryObject(t)),
}));
