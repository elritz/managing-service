import builder from "@builder";
import "@src/schema/objects/commonobjects";
import "@src/schema/objects/datamodelobjects";
import "@src/schema/resolvers";
import "@src/schema/resolvers/features";

export const schema = builder.toSubGraphSchema({});
