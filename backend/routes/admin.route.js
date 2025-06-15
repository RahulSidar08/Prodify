import express from "express";

// import { isAdmin } from "../middlewares/roleChecker.js";
import { addProduct, deleteProductById, getProductById, updateProduct } from "../controllers/product.controller.js";
import { upload } from "../middleware/multerConfig.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.post("/add", isAuthenticated, upload.single("image"), addProduct);
router.get("/product/:id",isAuthenticated,getProductById)
router.delete("/product/:id",isAuthenticated,deleteProductById)
router.patch("/product/:id",isAuthenticated,updateProduct)
export default router;
