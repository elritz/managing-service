import * as Inputs from '@graphql/__generated__/inputs';import prismaClient from '@pclient';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyPushTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['PushToken'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.PushTokenCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prismaClient.$transaction(args.data.map((data) => prismaClient.pushToken.create({ data }))),
  }),
);

export const createManyPushTokenMutation = defineMutation((t) => ({
  createManyPushToken: t.prismaField(createManyPushTokenMutationObject(t)),
}));
