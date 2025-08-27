import mongoose from "mongoose";
import config from "./index.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

// export function connectDB() {
//   return mongoose.connect(config.mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }
