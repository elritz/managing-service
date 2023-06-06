// Original file: grpc/proto/services.proto


export interface PushNotificationRequests {
  'profileIds'?: (string)[];
  'title'?: (string);
  'subtitle'?: (string);
  'body'?: (string);
  'jsondata'?: (string);
}

export interface PushNotificationRequests__Output {
  'profileIds': (string)[];
  'title': (string);
  'subtitle': (string);
  'body': (string);
  'jsondata': (string);
}
