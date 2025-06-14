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