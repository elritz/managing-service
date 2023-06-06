-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('PERSONAL', 'VENUE', 'GUEST');

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "ProfileType" "ProfileType" NOT NULL DEFAULT E'GUEST';
