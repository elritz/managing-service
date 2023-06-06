/*
  Warnings:

  - Added the required column `friendProfileId` to the `Relationship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Relationship" ADD COLUMN     "friendProfileId" TEXT NOT NULL;
