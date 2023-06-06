import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['DeviceManager'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.DeviceManagerCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prismaClient.$transaction(args.data.map((data) => prismaClient.deviceManager.create({ data }))),
  }),
);

export const createManyDeviceManagerMutation = defineMutation((t) => ({
  createManyDeviceManager: t.prismaField(createManyDeviceManagerMutationObject(t)),
}));
