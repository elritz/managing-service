import { PrismaClient } from "@prisma/client";
import requireText from "require-text";
const privacy = requireText(
  "../../src/utils/data/documents/privacy.html",
  require
);
const service = requireText(
  "../../src/utils/data/documents/service.html",
  require
);
const prisma = new PrismaClient();

const Documents = async () => {
  console.log(`creating Documents .....`);
  // const lastPrivacyPolicy = await prisma.document.findFirst({
  //   where: {
  //     TypeOfDocument: {
  //       equals: "PROFILE_PRIVACY_POLICY",
  //     },
  //   },
  // });

  // const lastTermsOfService = await prisma.document.findFirst({
  //   where: {
  //     TypeOfDocument: {
  //       equals: "PROFILE_TERMS_OF_SERVICE",
  //     },
  //   },
  // });

  // if (!lastPrivacyPolicy) {
  //   console.log(`creating PRIVACY ..... `);
  // await prisma.document.create({
  //   data: {
  //     id: 1,
  //     TypeOfDocument: "PROFILE_PRIVACY_POLICY",
  //     content: privacy,
  //   },
  // });
  // }

  // if (!lastTermsOfService) {
  //   console.log(`creating SERVICE ..... `);
  //   await prisma.document.create({
  //     data: {
  //       id: 2,
  //       TypeOfDocument: "PROFILE_TERMS_OF_SERVICE",
  //       content: service,
  //     },
  //   });
  // }
};

export default Documents;
