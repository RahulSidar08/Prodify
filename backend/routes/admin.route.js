import express from "express";

// import { isAdmin } from "../middlewares/roleChecker.js";
import { addProduct } from "../controllers/product.controller.js";
import { upload } from "../middleware/multerConfig.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.post("/add", isAuthenticated, upload.single("image"), addProduct);

export default router;
