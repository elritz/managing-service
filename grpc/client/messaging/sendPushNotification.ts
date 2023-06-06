import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../../generated/services'

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

export const gRPCMessage = () => {
  const client = new services.Messaging(
    'localhost:50002',
    grpc.credentials.createInsecure(),
  )
}
