import * as purchaseService from "../services/purchaseService.js";

export const create = async (req, res) => {
  try {
    const result = await purchaseService.createOne(req.body);
    if (!result)
      return res.status(404).json({ message: "Purchase haven not created" });
    else res.status(200).json({ message: "Purchase create" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const findCollection = async (req, res) => {
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

export const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await purchaseService.getById(id);
    if (!result)
      return res
        .status(404)
        .json({ success: false, message: "Purchase not found" });
    else res.status(200).json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await purchaseService.findAndUpdate(id, req.body);
    if (!result)
      return res
        .status(404)
        .json({ success: false, message: "Purchase not found" });
    else res.status(200).json({ success: true, message: "Purchase updated" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
