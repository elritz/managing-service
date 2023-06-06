/*
  Warnings:

  - You are about to drop the column `friend` on the `Relationship` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Relationship` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Relationship" DROP COLUMN "friend",
DROP COLUMN "status",
ADD COLUMN     "Status" "Status"[];

-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" TEXT NOT NULL,
    "friendRequestId" TEXT NOT NULL,
    "senderProfileId" TEXT NOT NULL,
    "receiverProfileId" TEXT NOT NULL,
    "notificationStatusId" TEXT NOT NULL,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationStatus" (
    "id" TEXT NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,
    "isAnswered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "NotificationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_profileId_key" ON "Notifications"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_notificationStatusId_key" ON "FriendRequest"("notificationStatusId");

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_friendRequestId_fkey" FOREIGN KEY ("friendRequestId") REFERENCES "Notifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_notificationStatusId_fkey" FOREIGN KEY ("notificationStatusId") REFERENCES "NotificationStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
