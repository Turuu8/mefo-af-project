import { IProduct } from "../utils/types";
import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    images: { type: Array, default: [] },
    gender: String,
    unique: { type: Boolean, default: false },
    special: { type: Boolean, default: false },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ProductModel = model<IProduct>("Product", ProductSchema);
