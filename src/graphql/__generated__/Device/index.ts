export {
  DeviceObject,
  DeviceIdFieldObject,
  DeviceDeviceTypeFieldObject,
  DeviceDeviceManagerFieldObject,
  DeviceDeviceManagerIdFieldObject,
  DevicePushTokenFieldObject,
  DevicePushTokenIdFieldObject,
  DeviceCreatedAtFieldObject,
  DeviceUpdatedAtFieldObject
} from './object.base';
export {
  createManyDeviceMutation,
  createOneDeviceMutation,
  deleteManyDeviceMutation,
  deleteOneDeviceMutation,
  updateManyDeviceMutation,
  updateOneDeviceMutation,
  upsertOneDeviceMutation,
  createManyDeviceMutationObject,
  createOneDeviceMutationObject,
  deleteManyDeviceMutationObject,
  deleteOneDeviceMutationObject,
  updateManyDeviceMutationObject,
  updateOneDeviceMutationObject,
  upsertOneDeviceMutationObject
} from './mutations';
export {
  findFirstDeviceQuery,
  findManyDeviceQuery,
  countDeviceQuery,
  findUniqueDeviceQuery,
  findFirstDeviceQueryObject,
  findManyDeviceQueryObject,
  countDeviceQueryObject,
  findUniqueDeviceQueryObject
} from './queries';
