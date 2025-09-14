import Category from "../models/Category.js";

export const createOne = async (payload) => {
  const document = new Category(payload);
  return document.save();
};
