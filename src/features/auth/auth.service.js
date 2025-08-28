import User from "./auth.model.js";
import bcrypt from "bcryptjs";
import config from "../../config/index.js";
import jwt from "jsonwebtoken";

export const createUser = async ({ username, password, email, name }) => {
  const passwordHash = await bcrypt.hash(password, config.saltRounds);
  const user = new User({ username, email, name, passwordHash });
  return user.save();
};

export const authenticate = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;

  //const payload = { sub: user._id, username: user.username, role: user.role };
  //return { payload };
  // generate a token JWT
  const payload = { sub: user._id, username: user.username, role: user.role };
  const token = jwt.sign(payload, config.jwtSign, { expiresIn: "2h" });
  return { user, token };
};
