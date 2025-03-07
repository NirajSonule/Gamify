import { createContext, useContext, useState } from "react";
import axios from "axios";
import { ratingSchema } from "../utils/validationSchemas";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);

  const addRating = async (gameId, ratingData) => {
    const result = ratingSchema.safeParse(ratingData);
    if (!result.success) {
      console.log("Validation errors", result.error.format());
      return result.error.format();
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/games/${gameId}/rating`,
        ratingData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getGameRatings = async (gameId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/games/${gameId}/ratings`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setRatings(response.data.ratings);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <RatingContext.Provider value={{ ratings, addRating, getGameRatings }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = () => useContext(RatingContext);
