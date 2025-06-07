import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoute.js";
import ratingRoutes from "./routes/ratingRoutes.js";

dotenv.config();

const app = express();

// Connect to database
connectDB();

// app middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//Api Routes
app.use("/api/auth", authRoutes);
app.use("/api", gameRoutes);
app.use("/api", ratingRoutes);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
