import { IBag } from "../utils/types";
import { Schema, model, Types } from "mongoose";

const BagSchema = new Schema(
  {
    owner: { type: Types.ObjectId, ref: "User" },
    proID: { type: Types.ObjectId, ref: "Product" },
    size: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

export const BagModel = model<IBag>("Bag", BagSchema);
