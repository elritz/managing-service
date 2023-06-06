import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueDeviceQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Device',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.device.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueDeviceQuery = defineQuery((t) => ({
  findUniqueDevice: t.prismaField(findUniqueDeviceQueryObject(t)),
}));
