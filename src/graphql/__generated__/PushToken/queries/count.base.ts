import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countPushTokenQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.PushTokenWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.PushTokenOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.PushTokenWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.PushTokenScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.pushToken.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countPushTokenQuery = defineQuery((t) => ({
  countPushToken: t.field(countPushTokenQueryObject(t)),
}));
