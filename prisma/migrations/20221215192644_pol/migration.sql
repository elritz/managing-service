/*
  Warnings:

  - You are about to drop the column `Status` on the `Relationship` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Relationship" DROP COLUMN "Status",
ADD COLUMN     "RelationshipStatus" "RelationshipStatus"[];
