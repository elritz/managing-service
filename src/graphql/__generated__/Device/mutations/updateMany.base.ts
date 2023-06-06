import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyDeviceMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceWhereInput, required: false }),
      data: t.arg({ type: Inputs.DeviceUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.device.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyDeviceMutation = defineMutation((t) => ({
  updateManyDevice: t.field(updateManyDeviceMutationObject(t)),
}));
