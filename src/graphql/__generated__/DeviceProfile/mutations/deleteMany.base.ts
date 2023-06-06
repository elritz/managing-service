import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceProfileWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.deviceProfile.deleteMany({ where: args.where }),
  }),
);

export const deleteManyDeviceProfileMutation = defineMutation((t) => ({
  deleteManyDeviceProfile: t.field(deleteManyDeviceProfileMutationObject(t)),
}));
