import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Device'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.DeviceCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prismaClient.$transaction(args.data.map((data) => prismaClient.device.create({ data }))),
  }),
);

export const createManyDeviceMutation = defineMutation((t) => ({
  createManyDevice: t.prismaField(createManyDeviceMutationObject(t)),
}));
