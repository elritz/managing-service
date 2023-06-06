import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
  //   if (process.env.NODE_ENV === "development") {
  //     await seedDevelopment();
  //   }
  //   if (process.env.NODE_ENV === "production") {
  //     await seedProduction();
  //   }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
