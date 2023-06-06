import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceManager',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceManagerWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.DeviceManagerCreateInput, required: true }),
      update: t.arg({ type: Inputs.DeviceManagerUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceManager.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneDeviceManagerMutation = defineMutation((t) => ({
  upsertOneDeviceManager: t.prismaField(upsertOneDeviceManagerMutationObject(t)),
}));
