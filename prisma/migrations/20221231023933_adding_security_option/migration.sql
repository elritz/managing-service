-- CreateEnum
CREATE TYPE "SecureDataType" AS ENUM ('FRIENDING', 'JOINING');

-- CreateTable
CREATE TABLE "Security" (
    "id" TEXT NOT NULL,
    "purpose" "SecureDataType" NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Security_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Security_key_key" ON "Security"("key");

-- AddForeignKey
ALTER TABLE "Security" ADD CONSTRAINT "Security_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
