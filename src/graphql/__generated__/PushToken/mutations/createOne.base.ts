import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnePushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PushToken',
    nullable: false,
    args: { data: t.arg({ type: Inputs.PushTokenCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prismaClient.pushToken.create({ data: args.data, ...query }),
  }),
);

export const createOnePushTokenMutation = defineMutation((t) => ({
  createOnePushToken: t.prismaField(createOnePushTokenMutationObject(t)),
}));
