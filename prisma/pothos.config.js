/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: "./src/graphql/__generated__/inputs.ts",
    prismaCaller: "prismaClient",
    resolverImports: `import prismaClient from '@pclient';`,
  },
  crud: {
    outputDir: "./src/graphql/__generated__/",
    inputsImporter: "import * as Inputs from '@graphql/__generated__/inputs';",
    prismaCaller: "prismaClient",
    resolverImports: `import prismaClient from '@pclient';`,
  },
  global: {
    builderImporter: `import builder from '@builder';`,
  },
};
