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

  useEffect(() => {
    getGame(id);
    getGameRatings(id);
  }, [id, getGame, getGameRatings]);

  const handleAddRating = async () => {
    const ratingData = { score: ratingValue, comment };
    const rate = await addRating(id, ratingData);
    console.log(rate);
    setRatingValue(0);
    setComment("");
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={`http://localhost:3000/uploads/${game.image}`}
          alt={game.title}
          className="object-cover mx-auto w-[60%] h-full rounded-md"
        />
      </div>

      {/* Game Details Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white">{game.title}</h1>
        <h2 className="text-xl text-gray-400">{game.genre}</h2>
        <p className="mt-4 text-lg text-white">{game.description}</p>
        <div className="flex items-center mt-6 text-white">
          <span className="font-semibold">Average Rating:</span>
          <div className="ml-2 text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < Math.round(game.averageRating)
                    ? "text-amber-500"
                    : "text-gray-600"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-6 text-white">
          <span className="font-semibold">Price:</span>
          <span className="ml-2 text-amber-500 text-2xl">₹{game.price}</span>
        </div>
      </div>

      {/* Rating Box*/}
      {user && (
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="text-white bg-gray-900">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Add Your Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <span className="text-gray-400">Rating: </span>
                <select
                  value={ratingValue}
                  onChange={(e) => setRatingValue(Number(e.target.value))}
                  className="ml-2 bg-gray-700 text-white p-2 rounded-md"
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} ★
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full bg-gray-700 text-white p-3 rounded-md mt-4"
                rows="4"
              ></textarea>
              <button
                onClick={handleAddRating}
                className="bg-amber-500 text-white px-6 py-3 rounded-lg mt-4 w-full hover:bg-amber-600 transition duration-200"
              >
                Submit Rating
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
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < rating.score
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-gray-400">
                    - {rating.userId.username}
                  </span>
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
