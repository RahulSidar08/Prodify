import express from "express";

// import { isAdmin } from "../middlewares/roleChecker.js";
import { getAllProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.get("/products", isAuthenticated, getAllProduct);

export default router;
