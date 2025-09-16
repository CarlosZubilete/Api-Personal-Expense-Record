import User from "../models/auth.model.user.js";
import bcrypt from "bcryptjs";
import config from "../../../config/index.js";
import jwt from "jsonwebtoken";
// import Token from "../models/auth.model.token.js";
// import * as tokenService from "./token.service";

export const createUser = async ({ username, password, email, name }) => {
  const passwordHash = await bcrypt.hash(password, config.saltRounds);
  const user = new User({ username, email, name, passwordHash });
  return user.save();
};

export const authenticate = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) return null;

  // Check password ...
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;

  //const payload = { sub: user._id, username: user.username, role: user.role };
  //return { payload };

  // Generate a token - JSON-WebToken
  const payload = { sub: user._id, username: user.username, role: user.role };
  const token = jwt.sign(payload, config.jwtSign, { expiresIn: "1h" }); // in 1 hour the token will expire

  // save token in a whitelist
  // const tokenDoc = new Token({ user_id: user._id, token });
  // await tokenDoc.save(); // todo: error handling and create a service for tokens
  // await tokenService.createTokenDoc(user._id, token);

  return { user, token };
};

// export const logout = async (id) => {
//   return Token.findByIdAndUpdate(id, { isActive: false }, { new: true });
// };
