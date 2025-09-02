import Joi from "joi";

export const userSchemaValidator = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Username cannot be empty",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username cannot be longer than 30 characters",
  }),

  password: Joi.string()
    .min(6)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .messages({
      "string.empty": "Password cannot be empty",
      "string.min": "Password must be at least 6 characters long",
      "string.pattern.base": "Password must contain only letters and numbers",
    }),

  email: Joi.string().email().messages({
    "string.email": "Please enter a valid email address",
  }),

  name: Joi.string().min(2).max(50).messages({
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot be longer than 50 characters",
  }),
});

// export const loginSchemaValidator = Joi.object({
//   username: Joi.string().min(3).max(30).required().messages({
//     "string.empty": "Username cannot be empty",
//     "string.min": "Username must be at least 3 characters long",
//     "string.max": "Username cannot be longer than 30 characters",
//   }),
//   password: Joi.string().min(6).required().message({
//     "string.empty": "Password cannot be empty",
//     "string.min": "Password must be at least 6 characters long",
//   }),
// });
