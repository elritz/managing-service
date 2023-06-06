import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countDeviceQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.DeviceOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.DeviceWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.DeviceScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.device.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countDeviceQuery = defineQuery((t) => ({
  countDevice: t.field(countDeviceQueryObject(t)),
}));
