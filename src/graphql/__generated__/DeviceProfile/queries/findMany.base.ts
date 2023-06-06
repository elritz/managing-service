import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyDeviceProfileQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['DeviceProfile'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceProfileWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.DeviceProfileOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.DeviceProfileScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.findMany({
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

export const findManyDeviceProfileQuery = defineQuery((t) => ({
  findManyDeviceProfile: t.prismaField(findManyDeviceProfileQueryObject(t)),
}));
