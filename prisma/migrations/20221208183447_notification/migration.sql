/*
  Warnings:

  - You are about to drop the column `friendRequestId` on the `FriendRequest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_friendRequestId_fkey";

-- AlterTable
ALTER TABLE "FriendRequest" DROP COLUMN "friendRequestId";

-- CreateTable
CREATE TABLE "_FriendRequestToNotifications" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FriendRequestToNotifications_AB_unique" ON "_FriendRequestToNotifications"("A", "B");

-- CreateIndex
CREATE INDEX "_FriendRequestToNotifications_B_index" ON "_FriendRequestToNotifications"("B");

-- AddForeignKey
ALTER TABLE "_FriendRequestToNotifications" ADD FOREIGN KEY ("A") REFERENCES "FriendRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FriendRequestToNotifications" ADD FOREIGN KEY ("B") REFERENCES "Notifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
