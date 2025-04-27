import mongoose from "mongoose";
import { DB_URI } from "../config/index";


export const connectToDatabase = async () => {
  try {
    if (!DB_URI) throw new Error("DB_URI not provided in environment variables");
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
