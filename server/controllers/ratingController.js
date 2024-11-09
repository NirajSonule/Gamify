import mongoose from "mongoose";
import Rating from "../models/Rating.js";
import Game from "../models/Game.js";

export const addRating = async (req, res) => {
  console.log("req.user in controller", req.user);
  const { score, comment } = req.body;
  const { gameId } = req.params;
  const { userId } = req.user.userId;

  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({
        message: "Game not found",
      });
    }

    const existingRating = await Rating.findOne({ userId, gameId });
    if (existingRating) {
      return res.status(400).json({
        message: "You have already rated this game",
      });
    }

    const newRating = new Rating({
      userId,
      gameId,
      score,
      comment,
    });

    await newRating.save();

    const allRatings = await Rating.find({ gameId });
    const averageRating =
      allRatings.reduce((acc, rating) => acc + rating.score, 0) /
      allRatings.length;

    game.averageRating = averageRating;
    await game.save();

    res.status(201).json({
      message: "Rating and comment added successfully!",
      rating: newRating,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getGameRatings = async (req, res) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    return res.status(400).json({ message: "Invalid gameId format" });
  }

  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    const ratings = await Rating.find({ gameId })
      .populate("userId", "username")
      .sort({ createdAt: -1 });

    res.status(200).json({ ratings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
