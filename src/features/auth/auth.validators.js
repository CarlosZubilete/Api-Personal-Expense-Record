import User from "./auth.model.js";
import { userSchemaValidator } from "./auth.validator.model.js";

export const validateUser = async (payload) => {
  // First validate the schema
  const { error } = userSchemaValidator.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    return { error: error.details.map((detail) => detail.message) };
  }

  // Then check if user already exists
  const existingUser = await User.findOne({
    $or: [{ username: payload.username }, { email: payload.email }],
  });

  if (existingUser) {
    return {
      error: [
        `User with this ${
          existingUser.username === payload.username ? "username" : "email"
        } already exists`,
      ],
    };
  }

  return { value: payload };
};
