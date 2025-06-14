import express from "express"
import { login, logout, register } from "../controllers/auth.controller.js";
const router = express.Router();

router.route("/sign-up").post(register)
router.route("/login").post(login);
router.route("/logout").get(logout)

export default router