import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT ?? 6969;
import blogsRouter from "../routes/blogsRoutes.js";
import userRouter from "../routes/userRouter.js";
import { blogModel } from "../models/DBmodel.js";
import { userModel } from "../models/DBmodel.js";
import connectDB from "./connectDB.js";


connectDB();

app.use('/blogs',blogsRouter);
app.use(`/user`,userRouter);

app.listen(PORT,()=>{
    console.log("Server live ;)");
})