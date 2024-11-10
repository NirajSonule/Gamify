import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating",
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    systemRequirements: {
      cpu: {
        type: String,
        required: true,
      },
      gpu: {
        type: String,
        required: true,
      },
      ram: {
        type: String,
        required: true,
      },
      storage: {
        type: String,
        required: true,
      },
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const game = mongoose.model("Game", gameSchema);
export default game;
