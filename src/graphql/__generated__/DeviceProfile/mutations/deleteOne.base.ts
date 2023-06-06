import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceProfile',
    nullable: true,
    args: { where: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneDeviceProfileMutation = defineMutation((t) => ({
  deleteOneDeviceProfile: t.prismaField(deleteOneDeviceProfileMutationObject(t)),
}));
