import builder from "@builder";

builder.queryType();

builder.mutationType({
  fields: (t) => ({
    checkManaging: t.field({
      type: "Boolean",
      resolve: async (query, args, context, info) => {
        return true;
      },
    }),
  }),
});
