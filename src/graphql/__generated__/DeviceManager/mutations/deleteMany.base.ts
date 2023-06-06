import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyDeviceManagerMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceManagerWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.deviceManager.deleteMany({ where: args.where }),
  }),
);

export const deleteManyDeviceManagerMutation = defineMutation((t) => ({
  deleteManyDeviceManager: t.field(deleteManyDeviceManagerMutationObject(t)),
}));
