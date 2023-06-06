/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AddressComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthenticationProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chatroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Code` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DetailInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emojimood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FriendRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Geometry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `H3Index5VenueRecommendation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `H3Index6VenueRecommendation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IdentifiableInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JoinedOut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LegalAgreement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LiveOutPersonal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LiveOutVenue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MetricsHomeCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Password` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Path` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Personal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Phone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PluseCode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PopularSearchService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileSearchesService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileTheme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Relationship` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SecuredDataKeys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Story` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ThemeManager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TonightPath` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TotaledOut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Venue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VenueStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthenticationProviderToEmail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthenticationProviderToPhone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChatroomToProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DetailInformationToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EmojimoodToStory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FriendRequestToNotifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GroupToProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AddressComponent" DROP CONSTRAINT "AddressComponent_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Code" DROP CONSTRAINT "Code_authenitcationProviderId_fkey";

-- DropForeignKey
ALTER TABLE "Credentials" DROP CONSTRAINT "Credentials_authenticationProviderId_fkey";

-- DropForeignKey
ALTER TABLE "Credentials" DROP CONSTRAINT "Credentials_profileId_fkey";

-- DropForeignKey
ALTER TABLE "DetailInformation" DROP CONSTRAINT "DetailInformation_profileId_fkey";

-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_notificationStatusId_fkey";

-- DropForeignKey
ALTER TABLE "IdentifiableInformation" DROP CONSTRAINT "IdentifiableInformation_profileId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedOut" DROP CONSTRAINT "JoinedOut_liveOutPersonalId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedOut" DROP CONSTRAINT "JoinedOut_liveOutVenueId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedOut" DROP CONSTRAINT "JoinedOut_personalStatsId_fkey";

-- DropForeignKey
ALTER TABLE "JoinedOut" DROP CONSTRAINT "JoinedOut_venueStatsId_fkey";

-- DropForeignKey
ALTER TABLE "LegalAgreement" DROP CONSTRAINT "LegalAgreement_credentialsId_fkey";

-- DropForeignKey
ALTER TABLE "LegalAgreement" DROP CONSTRAINT "LegalAgreement_documentId_fkey";

-- DropForeignKey
ALTER TABLE "LiveOutPersonal" DROP CONSTRAINT "LiveOutPersonal_personalId_fkey";

-- DropForeignKey
ALTER TABLE "LiveOutVenue" DROP CONSTRAINT "LiveOutVenue_venueId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_geometryId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_pluseCodeId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_venueId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_chatroomId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_responseId_fkey";

-- DropForeignKey
ALTER TABLE "MetricsHomeCollection" DROP CONSTRAINT "MetricsHomeCollection_h3Index5VenueRecommendationId_fkey";

-- DropForeignKey
ALTER TABLE "MetricsHomeCollection" DROP CONSTRAINT "MetricsHomeCollection_h3Index6VenueRecommendationId_fkey";

-- DropForeignKey
ALTER TABLE "Notifications" DROP CONSTRAINT "Notifications_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Password" DROP CONSTRAINT "Password_authenitcationProviderId_fkey";

-- DropForeignKey
ALTER TABLE "Path" DROP CONSTRAINT "Path_TonightPathId_fkey";

-- DropForeignKey
ALTER TABLE "Personal" DROP CONSTRAINT "Personal_personalStatsId_fkey";

-- DropForeignKey
ALTER TABLE "Personal" DROP CONSTRAINT "Personal_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_storyId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileSearchesService" DROP CONSTRAINT "ProfileSearchesService_profileId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileTheme" DROP CONSTRAINT "ProfileTheme_themeId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileTheme" DROP CONSTRAINT "ProfileTheme_themeManagerId_fkey";

-- DropForeignKey
ALTER TABLE "Relationship" DROP CONSTRAINT "Relationship_profileId_fkey";

-- DropForeignKey
ALTER TABLE "SecuredDataKeys" DROP CONSTRAINT "SecuredDataKeys_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Settings" DROP CONSTRAINT "Settings_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_profileId_fkey";

-- DropForeignKey
ALTER TABLE "ThemeManager" DROP CONSTRAINT "ThemeManager_profileId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledOut" DROP CONSTRAINT "TotaledOut_liveOutPersonalId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledOut" DROP CONSTRAINT "TotaledOut_liveOutVenueId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledOut" DROP CONSTRAINT "TotaledOut_personalStatsId_fkey";

-- DropForeignKey
ALTER TABLE "TotaledOut" DROP CONSTRAINT "TotaledOut_venueStatsId_fkey";

-- DropForeignKey
ALTER TABLE "Venue" DROP CONSTRAINT "Venue_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Venue" DROP CONSTRAINT "Venue_venueStatsId_fkey";

-- DropForeignKey
ALTER TABLE "_AuthenticationProviderToEmail" DROP CONSTRAINT "_AuthenticationProviderToEmail_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthenticationProviderToEmail" DROP CONSTRAINT "_AuthenticationProviderToEmail_B_fkey";

-- DropForeignKey
ALTER TABLE "_AuthenticationProviderToPhone" DROP CONSTRAINT "_AuthenticationProviderToPhone_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthenticationProviderToPhone" DROP CONSTRAINT "_AuthenticationProviderToPhone_B_fkey";

-- DropForeignKey
ALTER TABLE "_ChatroomToProfile" DROP CONSTRAINT "_ChatroomToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChatroomToProfile" DROP CONSTRAINT "_ChatroomToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_DetailInformationToTag" DROP CONSTRAINT "_DetailInformationToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_DetailInformationToTag" DROP CONSTRAINT "_DetailInformationToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_EmojimoodToStory" DROP CONSTRAINT "_EmojimoodToStory_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmojimoodToStory" DROP CONSTRAINT "_EmojimoodToStory_B_fkey";

-- DropForeignKey
ALTER TABLE "_FriendRequestToNotifications" DROP CONSTRAINT "_FriendRequestToNotifications_A_fkey";

-- DropForeignKey
ALTER TABLE "_FriendRequestToNotifications" DROP CONSTRAINT "_FriendRequestToNotifications_B_fkey";

-- DropForeignKey
ALTER TABLE "_GroupToProfile" DROP CONSTRAINT "_GroupToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupToProfile" DROP CONSTRAINT "_GroupToProfile_B_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "AddressComponent";

-- DropTable
DROP TABLE "AuthenticationProvider";

-- DropTable
DROP TABLE "Chatroom";

-- DropTable
DROP TABLE "Code";

-- DropTable
DROP TABLE "Credentials";

-- DropTable
DROP TABLE "DetailInformation";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "Email";

-- DropTable
DROP TABLE "Emojimood";

-- DropTable
DROP TABLE "FriendRequest";

-- DropTable
DROP TABLE "Geometry";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "H3Index5VenueRecommendation";

-- DropTable
DROP TABLE "H3Index6VenueRecommendation";

-- DropTable
DROP TABLE "IdentifiableInformation";

-- DropTable
DROP TABLE "JoinedOut";

-- DropTable
DROP TABLE "LegalAgreement";

-- DropTable
DROP TABLE "LiveOutPersonal";

-- DropTable
DROP TABLE "LiveOutVenue";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "MetricsHomeCollection";

-- DropTable
DROP TABLE "NotificationStatus";

-- DropTable
DROP TABLE "Notifications";

-- DropTable
DROP TABLE "Password";

-- DropTable
DROP TABLE "Path";

-- DropTable
DROP TABLE "Personal";

-- DropTable
DROP TABLE "PersonalStats";

-- DropTable
DROP TABLE "Phone";

-- DropTable
DROP TABLE "Photo";

-- DropTable
DROP TABLE "PluseCode";

-- DropTable
DROP TABLE "PopularSearchService";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "ProfileSearchesService";

-- DropTable
DROP TABLE "ProfileTheme";

-- DropTable
DROP TABLE "Relationship";

-- DropTable
DROP TABLE "SecuredDataKeys";

-- DropTable
DROP TABLE "Settings";

-- DropTable
DROP TABLE "Story";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "Theme";

-- DropTable
DROP TABLE "ThemeManager";

-- DropTable
DROP TABLE "TonightPath";

-- DropTable
DROP TABLE "TotaledOut";

-- DropTable
DROP TABLE "Venue";

-- DropTable
DROP TABLE "VenueStats";

-- DropTable
DROP TABLE "_AuthenticationProviderToEmail";

-- DropTable
DROP TABLE "_AuthenticationProviderToPhone";

-- DropTable
DROP TABLE "_ChatroomToProfile";

-- DropTable
DROP TABLE "_DetailInformationToTag";

-- DropTable
DROP TABLE "_EmojimoodToStory";

-- DropTable
DROP TABLE "_FriendRequestToNotifications";

-- DropTable
DROP TABLE "_GroupToProfile";

-- DropEnum
DROP TYPE "Permission";

-- DropEnum
DROP TYPE "PhotoType";

-- DropEnum
DROP TYPE "RelationshipStatus";

-- DropEnum
DROP TYPE "SecureDataType";

-- DropEnum
DROP TYPE "TagType";

-- DropEnum
DROP TYPE "TypeOfDocument";

-- CreateTable
CREATE TABLE "PushToken" (
    "id" TEXT NOT NULL,
    "isExpired" BOOLEAN NOT NULL DEFAULT false,
    "expoToken" TEXT,
    "androidToken" TEXT,
    "appleToken" TEXT,
    "receipts" JSONB[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PushToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "deviceType" TEXT,
    "deviceManagerId" TEXT NOT NULL,
    "pushTokenId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceManager" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeviceManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceProfile" (
    "id" SERIAL NOT NULL,
    "AppType" "AppType",
    "ProfileType" "ProfileType",
    "profileId" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "accesstoken" TEXT,
    "deviceManagerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "DeviceProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "DeviceProfileId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_deviceManagerId_key" ON "Device"("deviceManagerId");

-- CreateIndex
CREATE UNIQUE INDEX "Device_pushTokenId_key" ON "Device"("pushTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_DeviceProfileId_key" ON "RefreshToken"("DeviceProfileId");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_deviceManagerId_fkey" FOREIGN KEY ("deviceManagerId") REFERENCES "DeviceManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_pushTokenId_fkey" FOREIGN KEY ("pushTokenId") REFERENCES "PushToken"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceProfile" ADD CONSTRAINT "DeviceProfile_deviceManagerId_fkey" FOREIGN KEY ("deviceManagerId") REFERENCES "DeviceManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_DeviceProfileId_fkey" FOREIGN KEY ("DeviceProfileId") REFERENCES "DeviceProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
