import { MyContext } from "@src/@types/apollo";
import { rule } from "graphql-shield";

export const isAuthenticated = rule({ cache: "contextual" })(
  (parent, args, ctx: MyContext, info) => {
    if (!ctx.authorization || !ctx.ClientDeviceManager) {
      return false;
    }
    return true;
  }
);

export const isPublic = rule({ cache: "contextual" })(
  (parent, args, ctx: MyContext) => {
    return true;
  }
);
