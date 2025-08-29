import dotenv from "dotenv";
dotenv.config();
// 40c29cda-36ca-4611-ba87-7b2672d342ff
export default {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || "development",
  saltRounds: process.env.SALT_ROUNDS || 10,
  jwtSign: process.env.JWT_SING,
};
