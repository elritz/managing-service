import { IncomingMessage, ServerResponse } from "http";
import { ClientDeviceManager } from "./../index.d";

export interface MyContext {
  authorization?: string;
  ClientDeviceManager?: ClientDeviceManager;
  req: IncomingMessage;
  res: ServerResponse<IncomingMessage>;
}
