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
        `http://localhost:3000/games?${queryParams}`,
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
      const response = await axios.get(`http://localhost:3000/games/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGame(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const createGame = async (gameData) => {
    const result = gameSchema.safeParse(gameData);
    if (!result.success) {
      return result.error.format();
    }
    try {
      console.log("Creating game with data from context:", gameData);
      const response = await axios.post(
        "http://localhost:3000/games",
        gameData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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

  const updateGame = async (id, gameData) => {
    const result = gameSchema.safeParse(gameData);
    if (!result.success) {
      return result.error.format();
    }
    try {
      console.log("Updating game with data from context:", gameData);
      const response = await axios.put(
        `http://localhost:3000/games/${id}`,
        gameData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response.data.message);
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
      const response = await axios.delete(`http://localhost:3000/games/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
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
