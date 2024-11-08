import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { gameSchema } from "../utils/validationSchemas";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  const getAllGames = async () => {
    try {
      const response = await axios.get("/games");
      setGames(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getGame = async (id) => {
    try {
      const response = await axios.get(`/games/${id}`);
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
      const response = await axios.post("/games", gameData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response.data.message);
      getAllGames();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const updateGame = async (id, gameData) => {
    const result = gameSchema.safeParse(gameData);
    if (!result.success) {
      return result.error.format();
    }
    try {
      const response = await axios.put(`/games/${id}`, gameData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response.data.message);
      getAllGames();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const deleteGame = async (id) => {
    try {
      const response = await axios.delete(`/games/${id}`, {
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
