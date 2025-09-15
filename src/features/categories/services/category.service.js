import Category from "../models/Category.js";

export const createOne = async (payload) => {
  const document = new Category(payload);
  return document.save();
};

export const findAllByUser = async (user_id) => {
  const filter = { user_id: user_id, deleted: false };

  const [total, data] = await Promise.all([
    Category.countDocuments(filter),
    Category.find(filter).select({
      deleted: 0,
      createdAt: 0,
      updatedAt: 0,
      _v: 0,
    }),
  ]);
  return { total, data };
};

export const findOneById = async (id) => {
  return Category.findById(id).select({
    deleted: 0,
    createdAt: 0,
    updatedAt: 0,
    _v: 0,
  });
};

export const findAndUpdate = async (id, payload) => {
  return Category.findByIdAndUpdate(id, payload, { new: true });
};

export const findAndDelete = async (id, payload) => {
  return Category.findByIdAndUpdate(id, payload, { new: true });
};
