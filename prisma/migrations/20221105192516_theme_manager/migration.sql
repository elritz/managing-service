/*
  Warnings:

  - You are about to drop the column `chatroomId` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_chatroomId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "chatroomId";

-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "appVersions" DOUBLE PRECISION[],
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "mobile" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThemeManager" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThemeManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileTheme" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "themeId" TEXT NOT NULL,
    "themeManagerId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfileTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChatroomToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ThemeManager_profileId_key" ON "ThemeManager"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatroomToProfile_AB_unique" ON "_ChatroomToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatroomToProfile_B_index" ON "_ChatroomToProfile"("B");

-- AddForeignKey
ALTER TABLE "ThemeManager" ADD CONSTRAINT "ThemeManager_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileTheme" ADD CONSTRAINT "ProfileTheme_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileTheme" ADD CONSTRAINT "ProfileTheme_themeManagerId_fkey" FOREIGN KEY ("themeManagerId") REFERENCES "ThemeManager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatroomToProfile" ADD FOREIGN KEY ("A") REFERENCES "Chatroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatroomToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
