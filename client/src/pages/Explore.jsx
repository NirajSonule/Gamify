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
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v.trim() !== "")
      );
      getAllGames(activeFilters);
    }, 500);

    return () => clearTimeout(handler);
  }, [filters, getAllGames]);

  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-14">
        Explore Games
      </h2>
      <div className="flex flex-col justify-between sm:flex-row mx-24 gap-4 mb-8 mr-24 sm:mr-12 lg:mr-24">
        {[
          { label: "Max Price:", name: "price", placeholder: "Max Price" },
          { label: "Genre:", name: "genre", placeholder: "Genre" },
          { label: "CPU:", name: "cpu", placeholder: "AMD Ryzen 7" },
          { label: "GPU:", name: "gpu", placeholder: "NVIDIA RTX 3090" },
          { label: "RAM:", name: "ram", placeholder: "8GB" },
          { label: "Storage:", name: "storage", placeholder: "14GB" },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="text-white">{label}</label>
            <Input
              type="text"
              name={name}
              value={filters[name]}
              placeholder={placeholder}
              onChange={handleFilterChange}
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        ))}
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
