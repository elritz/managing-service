-- AlterTable
ALTER TABLE "FriendRequest" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "NotificationStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "messagePushNotifications" BOOLEAN NOT NULL,
    "eventPushNotifications" BOOLEAN NOT NULL,
    "PushNotifications" BOOLEAN NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_profileId_key" ON "Settings"("profileId");

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
