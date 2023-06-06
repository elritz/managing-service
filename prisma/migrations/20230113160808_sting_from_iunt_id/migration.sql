/*
  Warnings:

  - The primary key for the `DeviceProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_DeviceProfileId_fkey";

-- AlterTable
ALTER TABLE "DeviceProfile" DROP CONSTRAINT "DeviceProfile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DeviceProfile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DeviceProfile_id_seq";

-- AlterTable
ALTER TABLE "RefreshToken" ALTER COLUMN "DeviceProfileId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_DeviceProfileId_fkey" FOREIGN KEY ("DeviceProfileId") REFERENCES "DeviceProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
