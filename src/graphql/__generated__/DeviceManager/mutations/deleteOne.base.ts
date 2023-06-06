import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceManager',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceManagerWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneDeviceManagerMutation = defineMutation((t) => ({
  deleteOneDeviceManager: t.prismaField(deleteOneDeviceManagerMutationObject(t)),
}));
