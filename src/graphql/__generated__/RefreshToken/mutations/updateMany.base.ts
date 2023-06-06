import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RefreshTokenWhereInput, required: false }),
      data: t.arg({ type: Inputs.RefreshTokenUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.refreshToken.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyRefreshTokenMutation = defineMutation((t) => ({
  updateManyRefreshToken: t.field(updateManyRefreshTokenMutationObject(t)),
}));
