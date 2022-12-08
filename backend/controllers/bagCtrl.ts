import { Request, Response } from "express";
import { BagModel } from "../models/bagModel";
import { CustomRequest } from "../utils/customInterfaces";

export const bagCtrl = {
  getStored: async (req: CustomRequest, res: Response) => {
    try {
      const storedPros = await BagModel.find({ owner: req.user?._id }).populate("proID");
      res.status(200).json({ msg: storedPros });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  storeInBag: async (req: CustomRequest, res: Response) => {
    try {
      const { product } = req.body;
      if (!product) return res.status(400).json({ msg: "Choose product" });
      const tempOrder = new BagModel({
        owner: req.user?._id,
        proID: product.proDetail._id,
        amount: product.amount,
        size: product.size,
      });
      await tempOrder.save();
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  removeInBag: async (req: Request, res: Response) => {
    try {
      await BagModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
};
