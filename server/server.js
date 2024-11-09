import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoute.js";
import ratingRoutes from "./routes/ratingRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

//Api Routes
app.use("/auth", authRoutes);
app.use("/", gameRoutes);
app.use("/", ratingRoutes);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

server.timeout = 120000;
