import { useEffect, useState } from "react";
import { useGame } from "@/contexts/GameContext";
import GameCard from "@/components/GameCard";
import { Input } from "@/components/ui/input";

const Explore = () => {
  const { games, getAllGames } = useGame();
  const [filters, setFilters] = useState({
    price: "",
    genre: "",
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getAllGames(filters);
  }, [filters]);

  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-14">
        Explore Games
      </h2>
      <div className="flex flex-col justify-between sm:flex-row mx-24 gap-4 mb-8 mr-24 sm:mr-12 lg:mr-24">
        <div>
          <label className="text-white">Max Price:</label>
          <Input
            type="text"
            name="price"
            placeholder="Max Price"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="text-white">Genre:</label>
          <Input
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="text-white">CPU:</label>
          <Input
            type="text"
            name="cpu"
            placeholder="AMD Ryzen 7"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="text-white">GPU:</label>
          <Input
            type="text"
            name="gpu"
            placeholder="NVIDIA RTX 3090"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="text-white">RAM:</label>
          <Input
            type="text"
            name="ram"
            placeholder="8GB"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="text-white">Storage:</label>
          <Input
            type="text"
            name="storage"
            placeholder="14GB"
            onChange={handleFilterChange}
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mx-4 sm:mx-12 lg:mx-24">
        {games.map((game) => (
          <GameCard
            key={game._id}
            id={game._id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            description={game.description}
            image={game.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
