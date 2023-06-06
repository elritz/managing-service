import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueDeviceManagerQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'DeviceManager',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceManagerWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueDeviceManagerQuery = defineQuery((t) => ({
  findUniqueDeviceManager: t.prismaField(findUniqueDeviceManagerQueryObject(t)),
}));
