import "http";

declare namespace Express {
  interface Request {
    authorization?: string;
  }
  interface Response {
    authorization?: string;
  }
}

declare module "http" {
  interface IncomingHttpHeaders {
    authorization?: string;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    authorization?: string;
  }
  interface Response {
    authorization?: string;
  }
}
