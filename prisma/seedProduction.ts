import { PrismaClient } from "@prisma/client";

// import Documents from './seed/Documents'

const prisma = new PrismaClient();

const seedProduction = async () => {
  console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
};

export default seedProduction;
