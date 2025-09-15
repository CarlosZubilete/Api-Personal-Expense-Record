import * as categoryService from "../services/category.service.js";

export const createCategory = async (req, res) => {
  try {
    //
    const payload = {
      name: req.body.name,
      user_id: req.user.sub, // assuming req.user is set by auth middleware
    };
    const document = await categoryService.createOne(payload);

    if (!document)
      return res.status(404).json({ message: "Category haven not created" });
    else res.status(200).json({ message: "Category created", data: document });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const user = req.user.sub;
    console.log("User ID from token:", user);
    const documents = await categoryService.findAllByUser(user);
    if (!documents)
      return res.status(404).json({ message: "No categories found" });
    else
      res.status(200).json({
        success: true,
        total: documents.total,
        data: documents.data,
      });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await categoryService.findOneById(id);
    if (!document)
      return res.status(404).json({ message: "Category not found" });
    else res.status(200).json({ success: true, data: document });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const updates = req.body;
    const document = await categoryService.findAndUpdate(id, updates);
    if (!document)
      return res.status(404).json({ message: "Category not found" });
    else res.status(200).json({ success: true, message: "Category updated" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await categoryService.findAndDelete(id, { deleted: true });
    if (!result) return res.status(404).json({ message: "Category not found" });
    else res.status(200).json({ success: true, message: "Category deleted" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
