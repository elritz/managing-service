import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceManager',
    nullable: false,
    args: { data: t.arg({ type: Inputs.DeviceManagerCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.create({ data: args.data, ...query }),
  }),
);

export const createOneDeviceManagerMutation = defineMutation((t) => ({
  createOneDeviceManager: t.prismaField(createOneDeviceManagerMutationObject(t)),
}));
