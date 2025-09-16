import { Router } from "express";
import * as ctrl from "../controllers/auth.controller.js";
import {
  validateUser,
  verifyLogin,
  verifyToken,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validateUser, ctrl.register);
router.post("/login", verifyLogin, ctrl.login);
router.post("/logout", verifyToken, ctrl.logout);

export default router;
