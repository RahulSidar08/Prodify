import mongoose from "mongoose";
import { Product } from "../models/productModel.js";
import cloudinary from "../utils/cloudinary.js";


export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const uploadResult = await cloudinary.uploader.upload_stream(
      {
        folder: "product_catalog",
        resource_type: "image",
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Cloudinary upload failed", error });
        }

        const product = await Product.create({
          name,
          description,
          price,
          category,
          image: result.secure_url,
          createdBy: req.id, // Assuming user is attached via auth middleware
        });

        res.status(201).json({ message: "Product created", product });
      }
    );

    // Pipe the file buffer to cloudinary uploader
    uploadResult.end(req.file.buffer);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "All products fetched successfully.",
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products.",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "product fetched successfully.",
      product,
    });

  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product.",
    });
  }
}


export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID.",
      });
    }

    // Make sure there's something to update
    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No data provided for update.",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product: updatedProduct,
    });

  } catch (error) {
    console.error("Error in updating product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update product.",
    });
  }
};


export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID.",
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      product: deletedProduct,
    });

  } catch (error) {
    console.error("Error in deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete product.",
    });
  }
};

