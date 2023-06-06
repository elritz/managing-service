import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import chalk from "chalk";
import { ProtoGrpcType } from "grpc/generated/services";
import ManagerSendPushNotification from "./functions/ManagerSendPushNotification";

const PROTO_PATH = __dirname + "/../proto/services.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const { services } = grpc.loadPackageDefinition(
  packageDefinition
) as any as ProtoGrpcType;

const server = new grpc.Server();

server.addService(services.Managing.service, {
  ManagerSendPushNotification,
});

server.bindAsync(
  "0.0.0.0:50002",
  grpc.ServerCredentials.createInsecure(),
  () => {
    const message = `
    The gRPC server is being started on ${chalk.bold(
      chalk.blueBright(`http://0.0.0.0:50002`)
    )}.
    See ${chalk.bold(
      `package.json`
    )} for a list of all available scripts or use ${chalk.bold(`BloomRPC`)} 
    )}).
`;
    server.start();
  }
);
