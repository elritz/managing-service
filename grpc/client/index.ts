import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../generated/services'

const PROTO_PATH = __dirname + '/../../proto/services.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})

const { services } = grpc.loadPackageDefinition(
  packageDefinition,
) as any as ProtoGrpcType

export const profilingClient = new services.Profiling(
  'localhost:50001',
  grpc.credentials.createInsecure(),
)

export const messagingClient = new services.Messaging(
  'localhost:50003',
  grpc.credentials.createInsecure(),
)
