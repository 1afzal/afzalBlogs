import express from "express";
const app = express;
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT ?? 6969;
app.use(express.json());
import blogsRouter from "../routes/blogsRoutes";
import userRouter from "../routes/userRouter";
import { blogModel } from "../models/DBmodel";
import { userModel } from "../models/DBmodel";

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }
    catch(err){
        console.log(`error is ${err.message} `)
    }
}


app.use('/blogs',blogsRouter);
app.use(`/user`,userRouter);

app.listen(PORT,()=>{
    console.log("Server live ;)");
})