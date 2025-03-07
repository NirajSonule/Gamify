import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
    },
    score: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const rating = mongoose.model("Rating", ratingSchema);
export default rating;
