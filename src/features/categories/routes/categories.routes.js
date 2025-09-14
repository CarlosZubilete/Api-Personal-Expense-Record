import { Router } from "express";
import * as ctrl from "../controllers/category.controller.js";
import { verifyToken } from "../../auth/middlewares/auth.middleware.js";

const router = Router();

router.post("/", verifyToken, ctrl.createCategory);

export default router;
