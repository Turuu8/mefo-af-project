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
      const { products } = req.body;
      if (!products) return res.status(400).json({ msg: "Choose product" });
      const storedProducts = products.map(async (item: any) => {
        const tempOrder = new BagModel({
          owner: req.user?._id,
          proID: item.proDetail._id,
          amount: item.amount,
          size: item.size,
        });
        await tempOrder.save();
        return { msg: "Stored" };
      });
      Promise.all(storedProducts).then((result) => {
        res.status(200).json({ msg: "Stored" });
      });
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
