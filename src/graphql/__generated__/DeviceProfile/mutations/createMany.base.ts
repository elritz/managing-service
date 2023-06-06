import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['DeviceProfile'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.DeviceProfileCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prismaClient.$transaction(args.data.map((data) => prismaClient.deviceProfile.create({ data }))),
  }),
);

export const createManyDeviceProfileMutation = defineMutation((t) => ({
  createManyDeviceProfile: t.prismaField(createManyDeviceProfileMutationObject(t)),
}));
