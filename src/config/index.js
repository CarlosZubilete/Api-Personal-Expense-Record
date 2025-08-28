import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || "development",
  saltRounds: process.env.SALT_ROUNDS || 10,
  jwtSign: process.env.JWT_SIGN || "env-secret-jwt-sign",
};
