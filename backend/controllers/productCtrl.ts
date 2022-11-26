import cloudinary from "cloudinary";
import { config } from "./imageCtrl";
import { SortOrder } from "mongoose";
import { Request, Response } from "express";
import { ProductModel } from "../models/productModel";
import { findProductByID } from "../utils/findDocument";
import { productValidator } from "../utils/productError";

export const productCtrl = {
  getProducts: async (req: Request, res: Response) => {
    try {
      const { page, sort, limit, gender } = req.query;
      let genderQ = gender || "All";
      const limitQ = Number(limit) || 20;
      const pageQ = Number(page) - 1 || 0;
      genderQ === "All"
        ? (genderQ = ["Men", "Women"])
        : gender === "Men"
        ? (genderQ = ["Men"])
        : (genderQ = ["Women"]);
      const sortBy:
        | null
        | string
        | undefined
        | { [key: string]: SortOrder | { $meta: "textScore" } }
        | [string, SortOrder][] = {};
      if (sort === "mostExp") {
        sortBy.price = "desc";
      } else if (sort === "cheapest") {
        sortBy.price = "asc";
      } else if (sort === "earliest") {
        sortBy.createdAt = "asc";
      } else if (sort === "latest") {
        sortBy.createdAt = "desc";
      } else if (sort === "latest,cheapest") {
        sortBy.createdAt = "desc";
        sortBy.price = "asc";
      } else if (sort === "latest,mostExp") {
        sortBy.createdAt = "desc";
        sortBy.price = "desc";
      } else if (sort === "earliest,cheapest") {
        sortBy.createdAt = "asc";
        sortBy.price = "asc";
      } else if (sort === "earliest,mostExp") {
        sortBy.createdAt = "asc";
        sortBy.price = "desc";
      }

      const allProducts = await ProductModel.find()
        .where("gender")
        .in([...genderQ])
        .skip(pageQ * limitQ)
        .limit(limitQ)
        .sort(sortBy)
        .populate("artist","-createdAt -updatedAt")
      res.status(200).json({ length: allProducts.length, products: allProducts });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  createNewProduct: async (req: Request, res: Response) => {
    try {
      const { title, price, images, unique, special, category, quantity, description, artist } = req.body;
      const err = productValidator(title, price, category, quantity, description, artist);
      if (Object.keys(err).length > 0) return res.json({ msg: err });
      const newProduct = new ProductModel({
        title,
        price,
        images,
        unique,
        special,
        category,
        quantity,
        description,
        artist,
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
      const { title, price, images, gender, unique, category, quantity, description } = req.body;
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
