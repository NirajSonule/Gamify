import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { gameSchema } from "../utils/validationSchemas";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  const getAllGames = async (filters = {}) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/games?${queryParams}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setGames(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllGames();
  }, []);

  const getGame = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/games/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setGame(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const createGame = async (formData) => {
    // Extract non-file data
    const gameData = {
      title: formData.get("title"),
      genre: formData.get("genre"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      systemRequirements: JSON.parse(formData.get("systemRequirements")),
      image: formData.get("image"),
    };

    const result = gameSchema.safeParse(gameData);
    if (!result.success) {
      console.error("Validation failed:", result.error.format());
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/games`,
        gameData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Game Created", response.data.message);
      getAllGames();
    } catch (error) {
      console.error(
        "Error creating game",
        error.response ? error.response.data : error
      );
    }
  };

  const updateGame = async (id, formData) => {
    const gameData = {
      title: formData.get("title"),
      genre: formData.get("genre"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      systemRequirements: JSON.parse(formData.get("systemRequirements")),
      image: formData.get("image"),
    };

    const result = gameSchema.safeParse(gameData);
    if (!result.success) {
      console.error("Validation failed:", result.error.format());
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/games/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Game Updated", response.data.message);
      getAllGames();
    } catch (error) {
      console.error(
        "Error updating game",
        error.response ? error.response.data : error
      );
    }
  };

  const deleteGame = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/games/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response.data.message);
      getAllGames();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <GameContext.Provider
      value={{
        games,
        game,
        getAllGames,
        getGame,
        createGame,
        updateGame,
        deleteGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
