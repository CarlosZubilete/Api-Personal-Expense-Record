import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories", //
      required: false, // todo: create a default category "Un-categorized"
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("purchases", purchaseSchema);

// todo: all user will be a default category,
