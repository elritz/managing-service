import * as Inputs from '@graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyRefreshTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.RefreshTokenWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prismaClient.refreshToken.deleteMany({ where: args.where }),
  }),
);

export const deleteManyRefreshTokenMutation = defineMutation((t) => ({
  deleteManyRefreshToken: t.field(deleteManyRefreshTokenMutationObject(t)),
}));
