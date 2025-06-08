import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonComponent from "./Button";
import { useNavigate } from "react-router-dom";

const GameCard = ({ id, title, genre, price, description, image }) => {
  const navigate = useNavigate();
  const handleShowClick = () => {
    navigate(`/game/${id}`);
  };

  return (
    <Card className="w-[320px] rounded-2xl bg-gray-900 text-white overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={`${image}`}
          alt="Game Image"
          className="object-cover w-full h-full opacity-80 transition-opacity duration-300 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
      </div>

      <CardHeader className="p-4 flex space-x-4">
        <div>
          <CardTitle className="text-xl font-semibold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-amber-400">
            {genre}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-2">
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center px-4 pb-4 pt-2 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-violet-500">
            ₹{price}
          </span>
          <span className="text-xs text-gray-400">/game</span>
        </div>
        <ButtonComponent
          onClick={handleShowClick}
          className="bg-amber-500 hover:bg-amber-600 rounded-lg px-4 py-1 text-xs font-medium tracking-wide transition"
        >
          Show
        </ButtonComponent>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
