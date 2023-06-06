import sgMail from "@sendgrid/mail";

console.log(`String(process.env.SENDGRID_API_KEY)`);
sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

interface msgProps {
  to: string;
  from: "christian@barfriends.com";
  subject: string;
  code: string;
  html: string;
}

interface msgProps2 {
  to: string;
  from: {
    name: string;
    email: string;
  };
  subject: string;
  templateId: string;
  dynamicTemplateData: {
    confirmation_code: String;
  };
}

export const emailVerificationCodeSendGrid = async (props: msgProps) => {
  await sgMail
    .send({
      to: props.to, // Change to your recipient
      from: props.from, // Change to your verified sender
      subject: props.subject,
      html: props.html,
    })
    // .then((e) => {
    //   console.log('Email sent',)
    // })
    .catch((error) => {
      console.error(error);
    });
};

type SgMailResponse = {
  error?: any;
  statusCode?: number;
  headers?: any;
};
export const emailVerificationCodeSendGridDynamic = async (
  props: msgProps2
): Promise<SgMailResponse> => {
  return (async () => {
    try {
      const sendEmail = await sgMail.send({
        to: props.to,
        from: {
          name: props.from.name,
          email: props.from.email,
        },
        subject: props.subject,
        templateId: props.templateId,
        dynamicTemplateData: props.dynamicTemplateData,
      });
      return {
        statusCode: sendEmail[0].statusCode,
        headers: sendEmail[0].headers,
      };
    } catch (error: any) {
      return {
        error: error.reponse.body,
      };
    }
  })();
};
