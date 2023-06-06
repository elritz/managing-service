/*
  Warnings:

  - The `Status` column on the `Relationship` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('FRIENDS', 'DATING');

-- AlterTable
ALTER TABLE "Relationship" DROP COLUMN "Status",
ADD COLUMN     "Status" "RelationshipStatus"[];

-- DropEnum
DROP TYPE "Status";
