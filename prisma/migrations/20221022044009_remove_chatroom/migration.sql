/*
  Warnings:

  - You are about to drop the `JoinedPersonalOut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TotaledPersonalOut` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JoinedPersonalOut" DROP CONSTRAINT "JoinedPersonalOut_liveOutPersonalId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedPersonalOut" DROP CONSTRAINT "JoinedPersonalOut_liveOutVenueId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedPersonalOut" DROP CONSTRAINT "JoinedPersonalOut_personalStatsId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedPersonalOut" DROP CONSTRAINT "JoinedPersonalOut_venueStatsId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledPersonalOut" DROP CONSTRAINT "TotaledPersonalOut_liveOutPersonalId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledPersonalOut" DROP CONSTRAINT "TotaledPersonalOut_liveOutVenueId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledPersonalOut" DROP CONSTRAINT "TotaledPersonalOut_personalStatsId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledPersonalOut" DROP CONSTRAINT "TotaledPersonalOut_venueStatsId_fkey";

-- DropTable
DROP TABLE "JoinedPersonalOut";

-- DropTable
DROP TABLE "TotaledPersonalOut";

-- CreateTable
CREATE TABLE "JoinedOut" (
    "id" TEXT NOT NULL,
    "personalProfileId" TEXT,
    "venueProfileId" TEXT NOT NULL,
    "liveOutVenueId" TEXT,
    "liveOutPersonalId" TEXT,
    "leftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "venueStatsId" TEXT,
    "personalStatsId" TEXT,

    CONSTRAINT "JoinedOut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TotaledOut" (
    "id" TEXT NOT NULL,
    "personalProfileId" TEXT NOT NULL,
    "venueProfileId" TEXT NOT NULL,
    "venueStatsId" TEXT,
    "personalStatsId" TEXT,
    "liveOutVenueId" TEXT,
    "leftAt" TIMESTAMP(3),
    "liveOutPersonalId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TotaledOut_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JoinedOut" ADD CONSTRAINT "JoinedOut_liveOutVenueId_fkey" FOREIGN KEY ("liveOutVenueId") REFERENCES "LiveOutVenue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedOut" ADD CONSTRAINT "JoinedOut_liveOutPersonalId_fkey" FOREIGN KEY ("liveOutPersonalId") REFERENCES "LiveOutPersonal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedOut" ADD CONSTRAINT "JoinedOut_venueStatsId_fkey" FOREIGN KEY ("venueStatsId") REFERENCES "VenueStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedOut" ADD CONSTRAINT "JoinedOut_personalStatsId_fkey" FOREIGN KEY ("personalStatsId") REFERENCES "PersonalStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledOut" ADD CONSTRAINT "TotaledOut_venueStatsId_fkey" FOREIGN KEY ("venueStatsId") REFERENCES "VenueStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledOut" ADD CONSTRAINT "TotaledOut_personalStatsId_fkey" FOREIGN KEY ("personalStatsId") REFERENCES "PersonalStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledOut" ADD CONSTRAINT "TotaledOut_liveOutVenueId_fkey" FOREIGN KEY ("liveOutVenueId") REFERENCES "LiveOutVenue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledOut" ADD CONSTRAINT "TotaledOut_liveOutPersonalId_fkey" FOREIGN KEY ("liveOutPersonalId") REFERENCES "LiveOutPersonal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
