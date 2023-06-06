import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceProfile',
    nullable: false,
    args: { data: t.arg({ type: Inputs.DeviceProfileCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.create({ data: args.data, ...query }),
  }),
);

export const createOneDeviceProfileMutation = defineMutation((t) => ({
  createOneDeviceProfile: t.prismaField(createOneDeviceProfileMutationObject(t)),
}));
