/*
  Warnings:

  - Made the column `createdAt` on table `FriendRequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `FriendRequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `NotificationStatus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `NotificationStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FriendRequest" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "NotificationStatus" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
