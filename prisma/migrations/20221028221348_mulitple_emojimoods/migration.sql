/*
  Warnings:

  - You are about to drop the column `emojimoodId` on the `Story` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_emojimoodId_fkey";

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "emojimoodId";

-- CreateTable
CREATE TABLE "_EmojimoodToStory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmojimoodToStory_AB_unique" ON "_EmojimoodToStory"("A", "B");

-- CreateIndex
CREATE INDEX "_EmojimoodToStory_B_index" ON "_EmojimoodToStory"("B");

-- AddForeignKey
ALTER TABLE "_EmojimoodToStory" ADD FOREIGN KEY ("A") REFERENCES "Emojimood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmojimoodToStory" ADD FOREIGN KEY ("B") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
