import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquePushTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'PushToken',
    nullable: true,
    args: { where: t.arg({ type: Inputs.PushTokenWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.pushToken.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquePushTokenQuery = defineQuery((t) => ({
  findUniquePushToken: t.prismaField(findUniquePushTokenQueryObject(t)),
}));
