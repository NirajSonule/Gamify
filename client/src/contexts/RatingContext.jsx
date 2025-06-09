import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import { ratingSchema } from "../utils/validationSchemas";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);

  const addRating = useCallback(async (gameId, ratingData) => {
    const result = ratingSchema.safeParse(ratingData);
    if (!result.success) {
      console.log("Validation errors", result.error.format());
      return result.error.format();
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/games/${gameId}/rating`,
        ratingData,
        { withCredentials: true }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
    }
  }, []);

  const getGameRatings = useCallback(async (gameId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games/${gameId}/ratings`,
        { withCredentials: true }
      );
      setRatings(response.data.ratings);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      ratings,
      addRating,
      getGameRatings,
    }),
    [ratings, addRating, getGameRatings]
  );

  return (
    <RatingContext.Provider value={value}>{children}</RatingContext.Provider>
  );
};

export const useRating = () => useContext(RatingContext);
