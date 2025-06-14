import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connectDb = async (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Unable to connect Database"
        })
    }
}