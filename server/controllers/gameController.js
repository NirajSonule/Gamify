import Game from "../models/Game.js";

// Create a game (admin only)
export const createGame = async (req, res) => {
  const { title, genre, desciption, price, systemRequirements } = req.body;

  try {
    if (!title || !genre || !price || !systemRequirements) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const newGame = new Game({
      title,
      genre,
      description: desciption || "",
      price,
      systemRequirements,
    });

    const savedGame = await newGame.save();

    res.status(201).json({
      message: "Game created successfully",
      game: savedGame,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update a game (admin only)
export const updateGame = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGame = await Game.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedGame);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating game",
    });
  }
};

// Delete a game (admin only)
export const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    await Game.findByIdAndDelete(id);
    res.status(204).json({
      message: "Game deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error deleting game",
    });
  }
};
// Get game by gameId
export const getGame = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await Game.findById(id);
    res.json(game);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while fetching Game",
    });
  }
};

// Get all the games
export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching games",
    });
  }
};
