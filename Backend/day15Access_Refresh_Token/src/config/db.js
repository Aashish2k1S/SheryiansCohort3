// import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    console.log(config.MONGO_URI);
    
    // await mongoose.connect(config.MONGO_URI); 
    console.log("connected to DB");   
}

export default connectDB; 
