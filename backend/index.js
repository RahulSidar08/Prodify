import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { connectDb } from './config/connectDb.js'
dotenv.config()


import authRoutes from "../backend/routes/auth.route.js"
import adminRoutes from "../backend/routes/admin.route.js"
import userRoutes from "../backend/routes/user.route.js"


const app = express()
const port = process.env.port || 5000
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));
app.use(cookieParser())

app.use("/auth",authRoutes)
app.use("/admin",adminRoutes)
app.use("/user",userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})