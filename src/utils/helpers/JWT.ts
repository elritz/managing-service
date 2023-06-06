import {
  AccessTokenDecoded,
  AuthorizationDecoded,
  RefreshTokenDecoded,
  TokenProps,
} from "@types";
import jwt from "jsonwebtoken";

export const generateToken = (props: TokenProps): string | undefined => {
  let expiresIn: any;
  let token: string;

  switch (props.type) {
    case "AUTHORIZATION_TOKEN":
      token = jwt.sign(
        { devicemanager: props.value, app: props.app },
        String(process.env.AUTHORIZATION_TOKEN_SECRET)
      );
      return token;
    case "ACCESS_TOKEN":
      expiresIn = Number(process.env.JWT_ACCESS_TOKEN_EXPIRES_SEC_IN) || "7m"; // default 7 days
      token = jwt.sign(
        { profileId: props.value, app: props.app },
        String(process.env.ACCESS_TOKEN_SECRET),
        {
          expiresIn,
        }
      );
      return token;
    case "REFRESH_TOKEN":
      expiresIn = Number(process.env.JWT_REFRESH_TOKEN_EXPIRES_SEC_IN) || "1y"; // default 1 yeardays
      token = jwt.sign(
        { profileId: props.value, app: props.app },
        String(process.env.REFRESH_TOKEN_SECRET),
        {
          expiresIn,
        }
      );
      return token;
  }
};

export const decodeToken = (
  props: TokenProps
): AuthorizationDecoded | RefreshTokenDecoded | AccessTokenDecoded => {
  const token = props.value;
  let decodedToken:
    | AuthorizationDecoded
    | RefreshTokenDecoded
    | AccessTokenDecoded;
  try {
    switch (props.type) {
      case "AUTHORIZATION_TOKEN":
        decodedToken = jwt.verify(
          token,
          String(process.env.AUTHORIZATION_TOKEN_SECRET)
        ) as AuthorizationDecoded;

        return decodedToken;

      case "ACCESS_TOKEN":
        decodedToken = jwt.verify(
          token,
          String(process.env.ACCESS_TOKEN_SECRET)
        ) as AccessTokenDecoded;
        return decodedToken;

      case "REFRESH_TOKEN":
        decodedToken = jwt.verify(
          token,
          String(process.env.REFRESH_TOKEN_SECRET)
        ) as RefreshTokenDecoded;
        return decodedToken;
      default:
        return undefined;
    }
  } catch (error) {
    // console.error("JWT error", error);
    return decodedToken;
  }
};
