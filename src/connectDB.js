import mongoose from "mongoose";
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongoDB successfully\n");
    }
    catch(err){
        console.log(`error is ${err.message} `)
    }
}
export default connectDB;