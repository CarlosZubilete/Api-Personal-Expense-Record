// services/token.service.js
import Token from "../models/auth.model.token";

export const createTokenDoc = async (userId, token) => {
  const tokenDoc = new Token({ user_id: userId, token });
  return tokenDoc.save();
};

export const findActiveToken = async (token) => {
  return Token.findOne({ token, isActive: true });
};

export const invalidateToken = async (token) => {
  return Token.findOneAndUpdate({ token }, { isActive: false }, { new: true });
};
