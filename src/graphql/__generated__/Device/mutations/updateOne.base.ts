import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Device',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.DeviceWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.DeviceUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.device.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneDeviceMutation = defineMutation((t) => ({
  updateOneDevice: t.prismaField(updateOneDeviceMutationObject(t)),
}));
