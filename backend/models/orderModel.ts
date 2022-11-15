import { Schema, model, Types } from "mongoose";

const OrderSchema = new Schema({}, { timestamps: true });

export const OrderModel = model("Order", OrderSchema);
