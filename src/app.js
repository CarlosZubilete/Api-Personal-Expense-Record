import express from "express";
import cors from "cors";
import purchaseRoutes from "./features/purchases/routes/purchaseRouter.js";
import authRoutes from "./features/auth/routes/auth.routes.js";
const app = express();
// Middleware
app.use(express.json());
app.use(cors());

// Purchase API
app.use("/purchases", purchaseRoutes);
// Auth API
// todo: Implement cookie for /auth.
app.use("/auth", authRoutes);
export default app;
