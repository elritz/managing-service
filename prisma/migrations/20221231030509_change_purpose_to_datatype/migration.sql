/*
  Warnings:

  - You are about to drop the column `purpose` on the `Security` table. All the data in the column will be lost.
  - Added the required column `SecureDataType` to the `Security` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Security" DROP COLUMN "purpose",
ADD COLUMN     "SecureDataType" "SecureDataType" NOT NULL;
