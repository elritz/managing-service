/*
  Warnings:

  - You are about to drop the `_PhotoToStory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PhotoToStory" DROP CONSTRAINT "_PhotoToStory_A_fkey";

-- DropForeignKey
ALTER TABLE "_PhotoToStory" DROP CONSTRAINT "_PhotoToStory_B_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "storyId" TEXT;

-- DropTable
DROP TABLE "_PhotoToStory";

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;
