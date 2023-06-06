import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { PushNotificationRequest } from '../../generated/services/PushNotificationRequest'
import { ProtoGrpcType } from '../../generated/services'

const PROTO_PATH = __dirname + '/../../proto/services.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})

export const gRPCManagingSendPushNotification = (
  data: PushNotificationRequest,
) => {
  console.log('Called')
  // client.ProfilingPost(
  //   { profiles: data.profiles },
  //   (err: any, response: any) => {
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     return response
  //   },
  // )
}
