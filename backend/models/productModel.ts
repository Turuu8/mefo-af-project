import { IProduct } from "../utils/types";
import { Schema, model, Types } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    images: [{ type: Types.ObjectId, required: true, ref: "Image" }],
    category: { type: Types.ObjectId, ref: "Category" },
    unique: { type: Boolean, default: false },
    quantity: { type: Number, required: true },
    gender: { type: String, default: "" },
  },
  { timestamps: true }
);

export const ProductModel = model<IProduct>("Product", ProductSchema);
