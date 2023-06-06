import prismaClient from "@pclient";
import SchemaBuilder from "@pothos/core";
import DirectivesPlugin from "@pothos/plugin-directives";
import FederationPlugin from "@pothos/plugin-federation";
import PrismaPlugin from "@pothos/plugin-prisma";
import PrismaUtilsPlugin from "@pothos/plugin-prisma-utils";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import WithInputPlugin from "@pothos/plugin-with-input";
import { Prisma } from "@prisma/client";
import { ClientDeviceManager } from "@types";
import { Request, Response } from "express";
import { Scalars } from "prisma-generator-pothos-codegen";
import type PrismaTypes from "../prisma/generated";
import SheildPlugin from "./plugins/shield-plugin";

const builder = new SchemaBuilder<{
  Context: {
    authorization?: string;
    ClientDeviceManager?: ClientDeviceManager;
    res: Response;
    req: Request;
  };
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >;
}>({
  plugins: [
    SheildPlugin,
    PrismaPlugin,
    PrismaUtilsPlugin,
    WithInputPlugin,
    SimpleObjectsPlugin,
    DirectivesPlugin,
    FederationPlugin,
  ],
  prisma: {
    client: prismaClient,
    filterConnectionTotalCount: true,
  },
  useGraphQLToolsUnorderedDirectives: true,
});

export default builder;
