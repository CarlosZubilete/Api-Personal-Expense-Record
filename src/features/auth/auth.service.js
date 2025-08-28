import User from "./auth.model.js";
import bcrypt from "bcryptjs";
import config from "../../config/index.js";
// tu config con JWT_SECRET
// import jwt from "jsonwebtoken";
// import config from "../../config/index.js";

// const SALT_ROUNDS = 10;

export const createUser = async ({ username, password, email, name }) => {
  const passwordHash = await bcrypt.hash(password, config.salt_rounds);
  const user = new User({ username, email, name, passwordHash });
  return user.save();
};

export const authenticate = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;

  const payload = { sub: user._id, username: user.username, role: user.role };
  return { payload };
  // genera token JWT
  //const payload = { sub: user._id, username: user.username, role: user.role };
  //const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "2h" });
  //return { user, token };
};
