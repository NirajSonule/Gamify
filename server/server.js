import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoute.js";
import ratingRoutes from "./routes/ratingRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

server.timeout = 120000;
