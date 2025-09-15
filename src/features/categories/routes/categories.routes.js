import { Router } from "express";
import * as ctrl from "../controllers/category.controller.js";
import { verifyToken } from "../../auth/middlewares/auth.middleware.js";

const router = Router();
router.use(verifyToken); // all routes below require authentication

router.post("/", ctrl.createCategory);
router.get("/", ctrl.getCategories);
router.get("/:id", ctrl.findOne);
router.patch("/:id", ctrl.updateOne);
router.delete("/:id", ctrl.deleteOne); // soft delete

export default router;
