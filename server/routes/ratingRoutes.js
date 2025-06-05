import express from "express";
import { addRating, getGameRatings } from "../controllers/ratingController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/games/:gameId/rating", isAuthenticated, addRating);
router.get("/games/:gameId/ratings", isAuthenticated, getGameRatings);

export default router;
