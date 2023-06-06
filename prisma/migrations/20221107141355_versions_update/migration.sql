/*
  Warnings:

  - You are about to drop the column `appVersions` on the `Theme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Theme" DROP COLUMN "appVersions",
ADD COLUMN     "mobileVersions" TEXT[],
ADD COLUMN     "webVersions" TEXT[];
