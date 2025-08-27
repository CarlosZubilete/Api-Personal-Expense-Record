import { Router } from "express";
import * as purchaseCTRL from "../controllers/purchaseControllers.js";

const router = Router();

router.post("/new", purchaseCTRL.create);
router.get("/", purchaseCTRL.getPurchases);
export default router;
