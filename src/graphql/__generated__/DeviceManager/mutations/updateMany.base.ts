import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceManagerWhereInput, required: false }),
      data: t.arg({ type: Inputs.DeviceManagerUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.deviceManager.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyDeviceManagerMutation = defineMutation((t) => ({
  updateManyDeviceManager: t.field(updateManyDeviceManagerMutationObject(t)),
}));
