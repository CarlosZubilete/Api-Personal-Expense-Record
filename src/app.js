import express from "express";
import cors from "cors";
import purchaseRoutes from "./features/purchases/routes/purchaseRouter.js";
import authRoutes from "./features/auth/routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();
// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
// Purchase API
app.use("/purchases", purchaseRoutes);
// Auth API

app.use("/auth", authRoutes);
export default app;
