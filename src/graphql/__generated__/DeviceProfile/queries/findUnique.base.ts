import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueDeviceProfileQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'DeviceProfile',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueDeviceProfileQuery = defineQuery((t) => ({
  findUniqueDeviceProfile: t.prismaField(findUniqueDeviceProfileQueryObject(t)),
}));
