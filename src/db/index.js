import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`✅ MongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`🚨 MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;