import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Device',
    nullable: false,
    args: { data: t.arg({ type: Inputs.DeviceCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.device.create({ data: args.data, ...query }),
  }),
);

export const createOneDeviceMutation = defineMutation((t) => ({
  createOneDevice: t.prismaField(createOneDeviceMutationObject(t)),
}));
