import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);

    console.log(`Connected to database: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
  }
};

export default connectDB;
