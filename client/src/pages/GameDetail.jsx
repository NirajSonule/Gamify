import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { useRating } from "../contexts/RatingContext";
import { useAuth } from "../contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GameDetails = () => {
  const { id } = useParams();
  const { game, getGame } = useGame();
  const { ratings, getGameRatings, addRating } = useRating();
  const { user } = useAuth();

  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await getGame(id);
      await getGameRatings(id);
    }
    fetchData();
  }, [id, getGame, getGameRatings]);

  const handleAddRating = async () => {
    if (ratingValue === 0) return; // prevent submission if no rating

    setLoading(true);
    const ratingData = { score: ratingValue, comment };
    try {
      await addRating(id, ratingData);
      // Reset form after successful submission
      setRatingValue(0);
      setComment("");
      await getGameRatings(id); // Refresh ratings
    } catch (error) {
      console.error("Failed to add rating:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!game) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative w-full h-80 overflow-hidden flex justify-center">
        <img
          src={`${game.image}`}
          alt={game.title || "Game Cover"}
          className="object-cover w-3/5 h-full rounded-md"
        />
      </div>

      {/* Game Details Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white">{game.title}</h1>
        <h2 className="text-xl text-gray-400">{game.genre}</h2>
        <p className="mt-4 text-lg text-white">{game.description}</p>
        <div className="flex items-center mt-6 text-white">
          <span className="font-semibold">Average Rating:</span>
          <div className="ml-2 text-yellow-400 flex items-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < Math.round(game.averageRating)
                    ? "text-amber-500"
                    : "text-gray-600"
                }
                aria-hidden="true"
              >
                ★
              </span>
            ))}
            <span
              className="ml-2 text-gray-300"
              aria-label={`Average rating: ${game.averageRating.toFixed(
                1
              )} out of 5`}
            >
              {game.averageRating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-6 text-white">
          <span className="font-semibold">Price:</span>
          <span className="ml-2 text-amber-500 text-2xl">₹{game.price}</span>
        </div>
      </div>

      {/* Rating Box */}
      {user && (
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="text-white bg-gray-900">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Add Your Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label
                htmlFor="rating-select"
                className="block text-gray-400 mb-2"
              >
                Rating:
              </label>
              <select
                id="rating-select"
                value={ratingValue}
                onChange={(e) => setRatingValue(Number(e.target.value))}
                className="bg-gray-700 text-white p-2 rounded-md w-full max-w-xs"
              >
                <option value={0}>Select rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} ★
                  </option>
                ))}
              </select>

              <label
                htmlFor="comment"
                className="block text-gray-400 mt-4 mb-2"
              >
                Comment:
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full bg-gray-700 text-white p-3 rounded-md"
                rows={4}
              ></textarea>

              <button
                onClick={handleAddRating}
                disabled={ratingValue === 0 || loading}
                className={`mt-4 w-full px-6 py-3 rounded-lg text-white transition duration-200 ${
                  ratingValue === 0 || loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}
                aria-disabled={ratingValue === 0 || loading}
              >
                {loading ? "Submitting..." : "Submit Rating"}
              </button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* User Ratings Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl font-semibold text-white">User Ratings:</h3>
        <div className="space-y-4 mt-4">
          {ratings.length === 0 ? (
            <p className="text-gray-400">No ratings yet.</p>
          ) : (
            ratings.map((rating) => (
              <Card key={rating._id} className="bg-gray-800 p-4 rounded-lg">
                <div
                  className="flex items-center text-yellow-400"
                  aria-label={`Rating: ${rating.score} stars by ${rating.userId}`}
                >
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < rating.score
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-gray-400">- {rating.userId}</span>
                </div>
                <p className="mt-2 text-gray-300">{rating.comment}</p>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
