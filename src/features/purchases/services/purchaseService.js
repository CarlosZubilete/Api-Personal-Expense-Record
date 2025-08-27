import Purchase from "../models/purchaseModel.js";

export const createOne = async (payload) => {
  const document = new Purchase(payload);
  return document.save();
};

export const getList = async () => {
  const [total, data] = await Promise.all([
    Purchase.countDocuments({ deleted: false }),
    Purchase.find({ deleted: false }).select(
      "-__v -createdAt -updatedAt -deleted"
    ),
  ]);
  return { total, data };
};
