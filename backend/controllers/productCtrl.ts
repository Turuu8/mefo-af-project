import { Request, Response } from "express";
import { productValidator } from "../utils/productError";
import { ProductModel } from "../models/productModel";

export const productCtrl = {
  getProducts: async (req: Request, res: Response) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  createNewProduct: async (req: Request, res: Response) => {
    try {
      // const {
        // title,
        // price,
        // images,
        // gender,
        // unique,
        // category,
        // quantity,
        // description,
      // } = req.body;
      // const err = productValidator(
      //   title,
      //   price,
      //   images,
      //   gender,
      //   category,
      //   quantity,
      //   description
      // );
      // if (Object.keys(err).length > 0) return res.json({ msg: err });
      // const newProduct = new ProductModel({
      //   title,
      //   price,
      //   images,
      //   gender,
      //   unique,
      //   category,
      //   quantity,
      //   description,
      // });
      // res.status(200).json({ newProduct });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  deleteProduct: async (req: Request, res: Response) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  updateProduct: async (req: Request, res: Response) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
};
