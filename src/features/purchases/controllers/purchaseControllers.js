import * as purchaseService from "../services/purchaseService.js";

export const create = async (req, res) => {
  try {
    const result = await purchaseService.createPurchase(req.body);
    if (!result)
      return res.status(404).json({ message: "Purchase haven not created" });
    else return res.status(200).json({ message: "Purchase create" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
