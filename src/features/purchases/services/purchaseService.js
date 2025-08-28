import Purchase from "../models/purchaseModel.js";

export const createOne = async (payload) => {
  const document = new Purchase(payload);
  return document.save();
};

export const getList = async () => {
  const [total, data] = await Promise.all([
    Purchase.countDocuments({ deleted: false }),
    Purchase.find({ deleted: false }).select({
      deleted: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    }),
  ]);
  return { total, data };
};

export const getById = async (id) => {
  return Purchase.findById(id).select("-__v -createdAt -updatedAt -deleted");
};

export const findAndUpdate = async (id, payload) => {
  return Purchase.findByIdAndUpdate(id, payload, { new: true });
};

export const findAndDelete = async (id, payload) => {
  return Purchase.findByIdAndUpdate(id, payload, { new: true });
};
