import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Device',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.device.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneDeviceMutation = defineMutation((t) => ({
  deleteOneDevice: t.prismaField(deleteOneDeviceMutationObject(t)),
}));
