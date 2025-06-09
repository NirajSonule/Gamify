import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import { gameSchema } from "../utils/validationSchemas";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  // Wrap in useCallback to avoid re-creation on every render
  const getAllGames = useCallback(async (filters = {}) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games?${queryParams}`,
        { withCredentials: true }
      );
      setGames(response.data);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
    }
  }, []);

  const getGame = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games/${id}`,
        { withCredentials: true }
      );
      setGame(response.data);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
    }
  }, []);

  const createGame = useCallback(
    async (gameData) => {
      const result = gameSchema.safeParse(gameData);
      if (!result.success) {
        console.error("Validation failed:", result.error.format());
        return;
      }
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/games`,
          gameData,
          { withCredentials: true }
        );
        console.log("Game Created", response.data.message);
        await getAllGames();
        return response.data;
      } catch (error) {
        console.error(
          "Error creating game",
          error?.response?.data || error.message
        );
      }
    },
    [getAllGames]
  );

  const updateGame = useCallback(
    async (id, gameData) => {
      const result = gameSchema.safeParse(gameData);
      if (!result.success) {
        console.error("Validation failed:", result.error.format());
        return;
      }
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/games/${id}`,
          gameData,
          { withCredentials: true }
        );
        console.log("Game Updated", response.data.message);
        await getAllGames();
        return response.data;
      } catch (error) {
        console.error(
          "Error updating game",
          error?.response?.data || error.message
        );
      }
    },
    [getAllGames]
  );

  const deleteGame = useCallback(
    async (id) => {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/games/${id}`,
          { withCredentials: true }
        );
        console.log(response.data.message);
        await getAllGames();
        return response.data;
      } catch (error) {
        console.error(error?.response?.data?.message || error.message);
      }
    },
    [getAllGames]
  );

  // Memoize the context value so it only changes if dependencies change
  const value = useMemo(
    () => ({
      games,
      game,
      getAllGames,
      getGame,
      createGame,
      updateGame,
      deleteGame,
    }),
    [games, game, getAllGames, getGame, createGame, updateGame, deleteGame]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
