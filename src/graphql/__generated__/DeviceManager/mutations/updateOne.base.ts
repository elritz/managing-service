import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceManager',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.DeviceManagerWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.DeviceManagerUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneDeviceManagerMutation = defineMutation((t) => ({
  updateOneDeviceManager: t.prismaField(updateOneDeviceManagerMutationObject(t)),
}));
