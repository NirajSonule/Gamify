import express from "express";
import { addRating, getGameRatings } from "../controllers/ratingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/games/:gameId/rating", authMiddleware, addRating);
router.get("/games/:gameId/ratings", authMiddleware, getGameRatings);

export default router;
