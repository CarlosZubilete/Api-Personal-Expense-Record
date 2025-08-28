import { Router } from "express";
import * as ctrl from "./auth.controller.js";

const router = Router();

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

// router.post("/logout", ctrl.logout);
export default router;
