import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginInlineTraceDisabled } from "@apollo/server/plugin/disabled";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  AuthorizationDecoded,
  Authorized,
  ClientDeviceManager,
} from "@src/@types";
import { MyContext } from "@src/@types/apollo";
import { schema } from "@src/schema";
import { decodeToken } from "@src/utils/helpers/JWT";
import { GraphQLError } from "graphql";

const addProfileAuthorization = ({
  authorization,
}: Authorized): ClientDeviceManager => {
  const decodedAuthorization = decodeToken({
    value: String(authorization),
    type: "AUTHORIZATION_TOKEN",
    app: "BARFRIENDS",
  }) as AuthorizationDecoded;

  if (!decodedAuthorization) {
    throw new GraphQLError(
      "MANAGING: Not Authorized addProfileAuthentication failed",
      {
        extensions: {
          code: "OPERATION_RESOLUTION_FAILURE",
        },
      }
    );
  }

  const authorizedProfileParsed = JSON.parse(
    String(decodedAuthorization.devicemanager)
  ) as ClientDeviceManager;

  if (!authorizedProfileParsed.id) {
    throw new GraphQLError(
      "MANAGING: Not Authorized addProfileAuthentication failed",
      {
        extensions: {
          code: "OPERATION_RESOLUTION_FAILURE",
        },
      }
    );
  }

  return {
    ...authorizedProfileParsed,
  };
};

const mainServer = (async function () {
  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginInlineTraceDisabled()],
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      if (req.headers.authorization) {
        const ClientDeviceManager = addProfileAuthorization({
          authorization: req.headers.authorization,
        });

        return {
          req: req,
          res: res,
          authorization: req.headers.authorization,
          ClientDeviceManager: ClientDeviceManager,
        };
      } else {
        return {
          req: req,
          res: res,
          authorization: req.headers.authorization,
          authorizedProfile: undefined,
        };
      }
    },
    listen: { port: Number(process.env.PORT) },
  });

  console.info(`🚀 Server ready at ${url}graphql`);
})();

export default mainServer;
