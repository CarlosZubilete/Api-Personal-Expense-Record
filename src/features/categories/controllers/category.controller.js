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
