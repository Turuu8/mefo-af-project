import cloudinary from "cloudinary";
import { config } from "./imageCtrl";
import { Request, Response } from "express";
import { ProductModel } from "../models/productModel";
import { findProductByID } from "../utils/findDocument";
import { productValidator } from "../utils/productError";

enum sortDir {
  up = 1,
  down = -1,
}

export const productCtrl = {
  getProducts: async (req: Request, res: Response) => {
    try {
      const { page, sort, category, limit, search } = req.query;
      const pageQ = Number(page) - 1 || 0;
      const limitQ = Number(limit) || 10;
      const searchQ = search || ""
      const sortQ = sort || ""
      const categoryQ = category || ""
      // const allProducts = await ProductModel.find({
      //   category,
      //   title: { $regex: title },
      // }).limit(Number(limit));
      // if (sort === "latest") {
      //   const newProducts = await ProductModel.find()
      //     .sort({
      //       createdAt: sortDir.up,
      //     })
      //     .limit(Number(limit));
      //   res.status(200).json({ products: newProducts });
      // } else if (sort === "earliest") {
      //   const oldProducts = await ProductModel.find().sort({
      //     createdAt: sortDir.down,
      //   });
      //   res.status(200).json({ products: oldProducts });
      // }
      // res
      //   .status(200)
      //   .json({ length: allProducts.length, products: allProducts });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  createNewProduct: async (req: Request, res: Response) => {
    try {
      const {
        title,
        price,
        images,
        gender,
        unique,
        category,
        quantity,
        description,
      } = req.body;
      const err = productValidator(
        title,
        price,
        gender,
        category,
        quantity,
        description
      );
      if (Object.keys(err).length > 0) return res.json({ msg: err });
      const newProduct = new ProductModel({
        title,
        price,
        images,
        gender,
        unique,
        category,
        quantity,
        description,
      });
      await newProduct.save();
      res.status(200).json({ msg: "New product created." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  deleteProduct: async (req: Request, res: Response) => {
    try {
      const product = await findProductByID(req.params.id);
      const productImgs = product?.images;
      productImgs?.map(async (item: object) => {
        await cloudinary.v2.api.delete_resources((<any>item).public_id, config);
      });
      await ProductModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Product deleted." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  updateProduct: async (req: Request, res: Response) => {
    try {
      const {
        title,
        price,
        images,
        gender,
        unique,
        category,
        quantity,
        description,
      } = req.body;
      await ProductModel.findByIdAndUpdate(req.params.id, {
        title,
        price,
        images,
        gender,
        unique,
        category,
        quantity,
        description,
      });
      res.status(200).json({ msg: "Product updated." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
};
