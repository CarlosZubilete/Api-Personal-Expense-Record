import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    name: { type: String },
    role: { type: String, default: "user" },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
