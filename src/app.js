import express from "express";
import cors from "cors";

import purchaseRoutes from "./features/purchases/routes/purchaseRouter.js";

const app = express();
// Middleware
app.use(express.json());
app.use(cors());

// Purchase API
app.use("/purchases", purchaseRoutes);
export default app;
