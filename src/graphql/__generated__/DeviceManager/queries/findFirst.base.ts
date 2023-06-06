import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstDeviceManagerQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'DeviceManager',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.DeviceManagerWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.DeviceManagerOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.DeviceManagerWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.DeviceManagerScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.findFirst({
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

export const findFirstDeviceManagerQuery = defineQuery((t) => ({
  findFirstDeviceManager: t.prismaField(findFirstDeviceManagerQueryObject(t)),
}));
