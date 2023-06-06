/*
  Warnings:

  - You are about to drop the `Security` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Security" DROP CONSTRAINT "Security_profileId_fkey";

-- DropTable
DROP TABLE "Security";

-- CreateTable
CREATE TABLE "SecuredDataKeys" (
    "id" TEXT NOT NULL,
    "SecureDataType" "SecureDataType" NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "SecuredDataKeys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SecuredDataKeys_key_key" ON "SecuredDataKeys"("key");

-- AddForeignKey
ALTER TABLE "SecuredDataKeys" ADD CONSTRAINT "SecuredDataKeys_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
