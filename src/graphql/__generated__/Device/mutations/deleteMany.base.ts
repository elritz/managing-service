import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.device.deleteMany({ where: args.where }),
  }),
);

export const deleteManyDeviceMutation = defineMutation((t) => ({
  deleteManyDevice: t.field(deleteManyDeviceMutationObject(t)),
}));
