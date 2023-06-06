import bcrypt from "bcryptjs";
import { GraphQLError } from "graphql";

export const comparePassword = async (
  passwordToCheck: string,
  encryptedPassword: string
) => {
  const valid = await bcrypt.compare(passwordToCheck, encryptedPassword);
  if (!valid) {
    throw new GraphQLError("Invalid credentials", {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }
};

type hashPasswordProps = {
  passwordToHash: string;
  salts?: number | 10;
};

export const hashPassword = async (props: hashPasswordProps) => {
  const genSalt = await bcrypt.genSalt(props.salts);
  return await bcrypt.hash(props.passwordToHash, genSalt);
};
