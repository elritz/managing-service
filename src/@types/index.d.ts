import { ProfileType, PushToken } from "@prisma/client";
interface Authorized {
  authorization: string;
}

export type AppType = "BARFRIENDS" | "PETFRIENDS";

export type TOKEN_TYPE =
  | "AUTHORIZATION_TOKEN"
  | "ACCESS_TOKEN"
  | "REFRESH_TOKEN";

export type AuthorizationDecoded =
  | {
      devicemanager: string;
      iat: number;
      exp: number;
    }
  | null
  | undefined;

export type StorageDecoded =
  | {
      service: string;
      app: string;
      iat: number;
    }
  | null
  | undefined;

export type AccessTokenDecoded =
  | {
      profileid: string;
      AppType: string;
      iat: number;
      exp: number;
    }
  | null
  | undefined;

export type RefreshTokenDecoded =
  | {
      profileid: string;
      AppType: string;
      iat: number;
      exp: number;
    }
  | null
  | undefined;

export interface TokenProps {
  app: AppType;
  type: TOKEN_TYPE;
  value: string;
}

export type DeviceManager = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  Device: Device;
  DeviceProfile: DeviceProfile;
};

export type ClientDeviceManager = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  Device: ClientDevice;
  DeviceProfile: ClientDeviceProfile;
};

export interface ClientDeviceProfile {
  id: string;
  AppType: AppType | null;
  ProfileType: ProfileType | null;
  Profile: Profile;
  profileId: string | null;
  isActive: boolean;
  deviceManagerId: string;
  accesstoken: string | null;
  refreshtoken: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export type ClientDevice = {
  id: string;
  deviceManagerId: string;
  deviceType: string | null;
  pushTokenId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Profile = {
  id: string | null;
};

export type DeviceProfile = {
  id: number;
  AppType: AppType | null;
  deviceManagerId: string;
  isActive: boolean;
  profileId: string;
  Profile: Profile;
  accesstoken: string;
  refreshtoken: string;
};

// Managing Service types

export type Device = {
  id: string;
  deviceManagerId: string;
  deviceType: string | null;
  PushToken: PushToken;
  pushTokenId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
