import builder from "@builder";

export const ErrorManagingObject = builder.simpleObject("ErrorManaging", {
  description: "Long necks, cool patterns, taller than you.",
  fields: (t) => ({
    errorCode: t.string(),
    message: t.string(),
  }),
});
