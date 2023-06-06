-- CreateEnum
CREATE TYPE "AppType" AS ENUM ('BARFRIENDS', 'PETFRIENDS');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FRIENDS', 'DATING');

-- CreateEnum
CREATE TYPE "TypeOfDocument" AS ENUM ('PROFILE_PRIVACY_POLICY', 'PROFILE_TERMS_OF_SERVICE');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('OWNER', 'ADMINISTATOR', 'GENERAL');

-- CreateEnum
CREATE TYPE "PhotoType" AS ENUM ('BANNER', 'LOGO');

-- CreateEnum
CREATE TYPE "TagType" AS ENUM ('ACTIVITY', 'TYPE');

-- CreateTable
CREATE TABLE "TonightPath" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TonightPath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Path" (
    "id" TEXT NOT NULL,
    "TonightPathId" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Path_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalStats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonalStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenueStats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VenueStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JoinedPersonalOut" (
    "id" TEXT NOT NULL,
    "personalProfileId" TEXT NOT NULL,
    "venueProfileId" TEXT NOT NULL,
    "liveOutVenueId" TEXT,
    "liveOutPersonalId" TEXT,
    "leftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "venueStatsId" TEXT,
    "personalStatsId" TEXT,

    CONSTRAINT "JoinedPersonalOut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TotaledPersonalOut" (
    "id" TEXT NOT NULL,
    "personalProfileId" TEXT NOT NULL,
    "venueProfileId" TEXT NOT NULL,
    "venueStatsId" TEXT,
    "personalStatsId" TEXT,
    "liveOutVenueId" TEXT,
    "liveOutPersonalId" TEXT,
    "leftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TotaledPersonalOut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveOutPersonal" (
    "id" TEXT NOT NULL,
    "personalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LiveOutPersonal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveOutVenue" (
    "id" TEXT NOT NULL,
    "venueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LiveOutVenue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopularSearchService" (
    "id" TEXT NOT NULL,
    "popularVenues" JSONB[],
    "popularPersonals" JSONB[],

    CONSTRAINT "PopularSearchService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "H3Index5VenueRecommendation" (
    "id" TEXT NOT NULL,
    "h3Index5" TEXT NOT NULL,
    "venuesProfileIds" TEXT[],

    CONSTRAINT "H3Index5VenueRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "H3Index6VenueRecommendation" (
    "id" TEXT NOT NULL,
    "h3Index6" TEXT NOT NULL,
    "venuesProfileIds" TEXT[],

    CONSTRAINT "H3Index6VenueRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricsHomeCollection" (
    "id" SERIAL NOT NULL,
    "h3Index15" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "h3Index5VenueRecommendationId" TEXT,
    "h3Index6VenueRecommendationId" TEXT,

    CONSTRAINT "MetricsHomeCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileSearchesService" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "searches" JSONB[],

    CONSTRAINT "ProfileSearchesService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bfsprofileid" TEXT NOT NULL,
    "DeviceManager" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personal" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "personalStatsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venue" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "name" TEXT,
    "venueStatsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Venue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TagType" NOT NULL,
    "emoji" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relationship" (
    "id" TEXT NOT NULL,
    "profileId" TEXT,
    "friend" TEXT NOT NULL,
    "status" "Status"[],
    "venueMetAt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "emojimoodId" INTEGER,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailInformation" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "capacity" INTEGER,
    "established" TIMESTAMP(3),
    "profileId" TEXT NOT NULL,

    CONSTRAINT "DetailInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentifiableInformation" (
    "id" TEXT NOT NULL,
    "storageId" TEXT,
    "username" TEXT NOT NULL,
    "fullname" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "nickname" TEXT,
    "surname" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" TEXT,
    "lookfor" TEXT,
    "hometown" TEXT,
    "currenttown" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "IdentifiableInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credentials" (
    "id" TEXT NOT NULL,
    "authenticationProviderId" TEXT,
    "profileId" TEXT NOT NULL,
    "createdtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthenticationProvider" (
    "id" TEXT NOT NULL,

    CONSTRAINT "AuthenticationProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "authenitcationProviderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "authenitcationProviderId" TEXT,
    "canUseAsRecovery" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "canUseAsRecovery" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "completeNumber" TEXT,
    "countryCode" TEXT,
    "canUseAsRecovery" BOOLEAN DEFAULT true,
    "countryCallingCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalAgreement" (
    "id" TEXT NOT NULL,
    "aggreed" BOOLEAN NOT NULL DEFAULT true,
    "documentId" INTEGER NOT NULL,
    "credentialsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalAgreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emojimood" (
    "id" SERIAL NOT NULL,
    "colors" TEXT[],
    "emojiname" TEXT,
    "emoji" TEXT,

    CONSTRAINT "Emojimood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "blurhash" TEXT,
    "ratio" TEXT,
    "type" "PhotoType",
    "active" BOOLEAN NOT NULL DEFAULT true,
    "groupId" TEXT,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "h3Index" TEXT NOT NULL,
    "pluseCodeId" TEXT,
    "addressId" TEXT,
    "geometryId" INTEGER,
    "venueId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PluseCode" (
    "id" TEXT NOT NULL,
    "globalCode" TEXT NOT NULL,
    "compoundCode" TEXT,

    CONSTRAINT "PluseCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "formattedAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressComponent" (
    "id" SERIAL NOT NULL,
    "h3Index15" TEXT,
    "long_name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "types" TEXT[],
    "addressId" TEXT,

    CONSTRAINT "AddressComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Geometry" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "h3Index15" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Geometry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "TypeOfDocument" "TypeOfDocument" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DetailInformationToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PhotoToStory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthenticationProviderToPhone" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthenticationProviderToEmail" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LiveOutPersonal_personalId_key" ON "LiveOutPersonal"("personalId");

-- CreateIndex
CREATE UNIQUE INDEX "LiveOutVenue_venueId_key" ON "LiveOutVenue"("venueId");

-- CreateIndex
CREATE UNIQUE INDEX "H3Index5VenueRecommendation_h3Index5_key" ON "H3Index5VenueRecommendation"("h3Index5");

-- CreateIndex
CREATE UNIQUE INDEX "H3Index6VenueRecommendation_h3Index6_key" ON "H3Index6VenueRecommendation"("h3Index6");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSearchesService_profileId_key" ON "ProfileSearchesService"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_bfsprofileid_key" ON "Profile"("bfsprofileid");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_profileId_key" ON "Personal"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_personalStatsId_key" ON "Personal"("personalStatsId");

-- CreateIndex
CREATE UNIQUE INDEX "Venue_profileId_key" ON "Venue"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Venue_venueStatsId_key" ON "Venue"("venueStatsId");

-- CreateIndex
CREATE UNIQUE INDEX "DetailInformation_profileId_key" ON "DetailInformation"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "IdentifiableInformation_username_key" ON "IdentifiableInformation"("username");

-- CreateIndex
CREATE UNIQUE INDEX "IdentifiableInformation_profileId_key" ON "IdentifiableInformation"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_authenticationProviderId_key" ON "Credentials"("authenticationProviderId");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_profileId_key" ON "Credentials"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Password_authenitcationProviderId_key" ON "Password"("authenitcationProviderId");

-- CreateIndex
CREATE UNIQUE INDEX "Code_authenitcationProviderId_key" ON "Code"("authenitcationProviderId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_pluseCodeId_key" ON "Location"("pluseCodeId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_geometryId_key" ON "Location"("geometryId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_venueId_key" ON "Location"("venueId");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToProfile_AB_unique" ON "_GroupToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToProfile_B_index" ON "_GroupToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DetailInformationToTag_AB_unique" ON "_DetailInformationToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_DetailInformationToTag_B_index" ON "_DetailInformationToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoToStory_AB_unique" ON "_PhotoToStory"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoToStory_B_index" ON "_PhotoToStory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthenticationProviderToPhone_AB_unique" ON "_AuthenticationProviderToPhone"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthenticationProviderToPhone_B_index" ON "_AuthenticationProviderToPhone"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthenticationProviderToEmail_AB_unique" ON "_AuthenticationProviderToEmail"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthenticationProviderToEmail_B_index" ON "_AuthenticationProviderToEmail"("B");

-- AddForeignKey
ALTER TABLE "Path" ADD CONSTRAINT "Path_TonightPathId_fkey" FOREIGN KEY ("TonightPathId") REFERENCES "TonightPath"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedPersonalOut" ADD CONSTRAINT "JoinedPersonalOut_liveOutVenueId_fkey" FOREIGN KEY ("liveOutVenueId") REFERENCES "LiveOutVenue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedPersonalOut" ADD CONSTRAINT "JoinedPersonalOut_liveOutPersonalId_fkey" FOREIGN KEY ("liveOutPersonalId") REFERENCES "LiveOutPersonal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedPersonalOut" ADD CONSTRAINT "JoinedPersonalOut_venueStatsId_fkey" FOREIGN KEY ("venueStatsId") REFERENCES "VenueStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinedPersonalOut" ADD CONSTRAINT "JoinedPersonalOut_personalStatsId_fkey" FOREIGN KEY ("personalStatsId") REFERENCES "PersonalStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledPersonalOut" ADD CONSTRAINT "TotaledPersonalOut_venueStatsId_fkey" FOREIGN KEY ("venueStatsId") REFERENCES "VenueStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledPersonalOut" ADD CONSTRAINT "TotaledPersonalOut_personalStatsId_fkey" FOREIGN KEY ("personalStatsId") REFERENCES "PersonalStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledPersonalOut" ADD CONSTRAINT "TotaledPersonalOut_liveOutVenueId_fkey" FOREIGN KEY ("liveOutVenueId") REFERENCES "LiveOutVenue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotaledPersonalOut" ADD CONSTRAINT "TotaledPersonalOut_liveOutPersonalId_fkey" FOREIGN KEY ("liveOutPersonalId") REFERENCES "LiveOutPersonal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveOutPersonal" ADD CONSTRAINT "LiveOutPersonal_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "Personal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveOutVenue" ADD CONSTRAINT "LiveOutVenue_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricsHomeCollection" ADD CONSTRAINT "MetricsHomeCollection_h3Index5VenueRecommendationId_fkey" FOREIGN KEY ("h3Index5VenueRecommendationId") REFERENCES "H3Index5VenueRecommendation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricsHomeCollection" ADD CONSTRAINT "MetricsHomeCollection_h3Index6VenueRecommendationId_fkey" FOREIGN KEY ("h3Index6VenueRecommendationId") REFERENCES "H3Index6VenueRecommendation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileSearchesService" ADD CONSTRAINT "ProfileSearchesService_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_personalStatsId_fkey" FOREIGN KEY ("personalStatsId") REFERENCES "PersonalStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venue" ADD CONSTRAINT "Venue_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venue" ADD CONSTRAINT "Venue_venueStatsId_fkey" FOREIGN KEY ("venueStatsId") REFERENCES "VenueStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_emojimoodId_fkey" FOREIGN KEY ("emojimoodId") REFERENCES "Emojimood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailInformation" ADD CONSTRAINT "DetailInformation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentifiableInformation" ADD CONSTRAINT "IdentifiableInformation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_authenticationProviderId_fkey" FOREIGN KEY ("authenticationProviderId") REFERENCES "AuthenticationProvider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_authenitcationProviderId_fkey" FOREIGN KEY ("authenitcationProviderId") REFERENCES "AuthenticationProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Code" ADD CONSTRAINT "Code_authenitcationProviderId_fkey" FOREIGN KEY ("authenitcationProviderId") REFERENCES "AuthenticationProvider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalAgreement" ADD CONSTRAINT "LegalAgreement_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalAgreement" ADD CONSTRAINT "LegalAgreement_credentialsId_fkey" FOREIGN KEY ("credentialsId") REFERENCES "Credentials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_pluseCodeId_fkey" FOREIGN KEY ("pluseCodeId") REFERENCES "PluseCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_geometryId_fkey" FOREIGN KEY ("geometryId") REFERENCES "Geometry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddressComponent" ADD CONSTRAINT "AddressComponent_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToProfile" ADD FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailInformationToTag" ADD FOREIGN KEY ("A") REFERENCES "DetailInformation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailInformationToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoToStory" ADD FOREIGN KEY ("A") REFERENCES "Photo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoToStory" ADD FOREIGN KEY ("B") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthenticationProviderToPhone" ADD FOREIGN KEY ("A") REFERENCES "AuthenticationProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthenticationProviderToPhone" ADD FOREIGN KEY ("B") REFERENCES "Phone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthenticationProviderToEmail" ADD FOREIGN KEY ("A") REFERENCES "AuthenticationProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthenticationProviderToEmail" ADD FOREIGN KEY ("B") REFERENCES "Email"("id") ON DELETE CASCADE ON UPDATE CASCADE;
