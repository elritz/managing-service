/*
  Warnings:

  - Made the column `venueProfileId` on table `JoinedPersonalOut` required. This step will fail if there are existing NULL values in that column.
  - Made the column `personalProfileId` on table `TotaledPersonalOut` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venueProfileId` on table `TotaledPersonalOut` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JoinedPersonalOut" ALTER COLUMN "venueProfileId" SET NOT NULL;

-- AlterTable
ALTER TABLE "TotaledPersonalOut" ALTER COLUMN "personalProfileId" SET NOT NULL,
ALTER COLUMN "venueProfileId" SET NOT NULL;
