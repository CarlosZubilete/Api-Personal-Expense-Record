import Joi from "joi";
export const loginSchemaValidator = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Username cannot be empty",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username cannot be longer than 30 characters",
  }),
  password: Joi.string().min(6).required(),
});
