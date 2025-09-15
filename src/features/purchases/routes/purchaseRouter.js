import { Router } from "express";
import * as ctrl from "../controllers/purchaseControllers.js";
import { verifyToken } from "../../auth/middlewares/auth.middleware.js";

const router = Router();

router.use(verifyToken); // all routes below require authentication

router.post("/", ctrl.create);
router.get("/", ctrl.findCollection); // only logged-in users can see purchases
router.get("/:id", ctrl.findOne);
router.patch("/:id", ctrl.updateOne);
router.delete("/:id", ctrl.deleteOne);

export default router;
