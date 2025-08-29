import { Router } from "express";
import * as purchaseCTRL from "../controllers/purchaseControllers.js";
import verifyLogin from "../../auth/auth.middleware.js";

const router = Router();

router.post("/new", purchaseCTRL.create);
router.get("/", [verifyLogin], purchaseCTRL.findCollection);
router.get("/:id", purchaseCTRL.findOne);
router.patch("/:id", purchaseCTRL.updateOne);
router.delete("/:id", purchaseCTRL.deleteOne);

export default router;
