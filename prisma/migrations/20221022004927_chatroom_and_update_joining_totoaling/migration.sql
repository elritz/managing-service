-- AlterTable
ALTER TABLE "JoinedPersonalOut" ALTER COLUMN "personalProfileId" DROP NOT NULL,
ALTER COLUMN "venueProfileId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "chatroomId" TEXT;

-- AlterTable
ALTER TABLE "TotaledPersonalOut" ALTER COLUMN "personalProfileId" DROP NOT NULL,
ALTER COLUMN "venueProfileId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Chatroom" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "chatroomId" TEXT,
    "responseId" TEXT,
    "senderId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_chatroomId_fkey" FOREIGN KEY ("chatroomId") REFERENCES "Chatroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatroomId_fkey" FOREIGN KEY ("chatroomId") REFERENCES "Chatroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
