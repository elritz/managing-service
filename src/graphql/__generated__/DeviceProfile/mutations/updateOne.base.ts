import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceProfile',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.DeviceProfileUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneDeviceProfileMutation = defineMutation((t) => ({
  updateOneDeviceProfile: t.prismaField(updateOneDeviceProfileMutationObject(t)),
}));
