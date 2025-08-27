import Purchase from "../models/purchaseModel.js";

export const createPurchase = async (payload) => {
  const document = new Purchase(payload);
  return document.save();
};
