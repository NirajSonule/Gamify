import { createContext, useContext, useState } from "react";
import axios from "axios";
import { ratingSchema } from "../utils/validationSchemas";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);

  const addRating = async (gameId, ratingData) => {
    const result = ratingSchema.safeParse(ratingData);
    if (!result.success) {
      return result.error.format();
    }
    try {
      const response = await axios.post(`/games/${gameId}/rating`, ratingData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getGameRatings = async (gameId) => {
    try {
      const response = await axios.get(`/games/${gameId}/ratings`);
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
