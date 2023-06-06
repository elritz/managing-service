import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Device',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.DeviceCreateInput, required: true }),
      update: t.arg({ type: Inputs.DeviceUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.device.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneDeviceMutation = defineMutation((t) => ({
  upsertOneDevice: t.prismaField(upsertOneDeviceMutationObject(t)),
}));
