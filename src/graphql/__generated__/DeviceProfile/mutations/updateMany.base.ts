import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceProfileWhereInput, required: false }),
      data: t.arg({ type: Inputs.DeviceProfileUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.deviceProfile.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyDeviceProfileMutation = defineMutation((t) => ({
  updateManyDeviceProfile: t.field(updateManyDeviceProfileMutationObject(t)),
}));
