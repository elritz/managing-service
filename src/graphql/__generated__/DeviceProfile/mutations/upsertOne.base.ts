import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneDeviceProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'DeviceProfile',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.DeviceProfileWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.DeviceProfileCreateInput, required: true }),
      update: t.arg({ type: Inputs.DeviceProfileUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.deviceProfile.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneDeviceProfileMutation = defineMutation((t) => ({
  upsertOneDeviceProfile: t.prismaField(upsertOneDeviceProfileMutationObject(t)),
}));
