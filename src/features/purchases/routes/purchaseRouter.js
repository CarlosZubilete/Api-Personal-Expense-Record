import { Router } from "express";
import * as purchaseCTRL from "../controllers/purchaseControllers.js";

const router = Router();

router.post("/new", purchaseCTRL.create);
router.get("/", purchaseCTRL.findCollection);
router.get("/:id", purchaseCTRL.findOne);
router.patch("/:id", purchaseCTRL.updateOne);
// router.delete("/:id", purchaseCTRL.delete);

export default router;
