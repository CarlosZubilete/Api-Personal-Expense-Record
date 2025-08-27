import * as purchaseService from "../services/purchaseService.js";

export const create = async (req, res) => {
  try {
    const result = await purchaseService.createOne(req.body);
    if (!result)
      return res.status(404).json({ message: "Purchase haven not created" });
    else return res.status(200).json({ message: "Purchase create" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const result = await purchaseService.getList();
    return res.status(200).json({
      success: true,
      total: result.total,
      data: result.data,
    });
  } catch (e) {
    res.status(500).json({ error: message.e });
  }
};
