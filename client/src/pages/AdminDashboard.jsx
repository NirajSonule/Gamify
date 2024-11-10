import { useState, useEffect } from "react";
import { useGame } from "../contexts/GameContext";
import ButtonComponent from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AdminDashboard = () => {
  const { games, getAllGames, createGame, updateGame, deleteGame } = useGame();
  const [newGameData, setNewGameData] = useState({
    title: "",
    genre: "",
    description: "",
    price: "",
    systemRequirements: { cpu: "", gpu: "", ram: "", storage: "" },
    image: null,
  });

  const handleFileChange = (e) => {
    setNewGameData({
      ...newGameData,
      image: e.target.files[0],
    });
  };

  useEffect(() => {
    getAllGames();
  }, [getAllGames]);

  const handleCreateGame = async () => {
    const formData = new FormData();

    formData.append("title", newGameData.title);
    formData.append("genre", newGameData.genre);
    formData.append("description", newGameData.description);
    formData.append("price", newGameData.price);
    formData.append(
      "systemRequirements",
      JSON.stringify(newGameData.systemRequirements)
    );

    if (newGameData.image) {
      formData.append("image", newGameData.image);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}`, value);
    }

    try {
      const response = await createGame(formData);
      setNewGameData({
        title: "",
        genre: "",
        description: "",
        price: "",
        systemRequirements: { cpu: "", gpu: "", ram: "", storage: "" },
        image: null,
      });
      console.log(response);
    } catch (error) {
      console.error("Error creating game", error);
    }
  };

  const handleUpdateGame = async (id) => {
    const formData = new FormData();

    formData.append("title", newGameData.title);
    formData.append("genre", newGameData.genre);
    formData.append("description", newGameData.description);
    formData.append("price", newGameData.price.toString());
    formData.append(
      "systemRequirements",
      JSON.stringify(newGameData.systemRequirements)
    );

    if (newGameData.image) {
      formData.append("image", newGameData.image);
    }

    try {
      const response = await updateGame(id, formData);
      console.log("Game updated", response);
      getAllGames();
    } catch (error) {
      console.error("Error updating game", error);
    }
  };

  const handleDeleteGame = async (id) => {
    await deleteGame(id);
  };

  return (
    <section>
      <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-4xl text-center text-white font-bold mb-6">
            Admin Dashboard
          </h1>

          {/* Create Game Form */}
          <div className="flex flex-col gap-6 mb-6">
            <h2 className="text-2xl text-white font-semibold text-center">
              Create New Game
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateGame();
              }}
            >
              {/* Title */}
              <div className="mb-4">
                <Label className="text-white">Title</Label>
                <Input
                  type="text"
                  value={newGameData.title}
                  onChange={(e) =>
                    setNewGameData({ ...newGameData, title: e.target.value })
                  }
                  placeholder="Enter Game Title"
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
              </div>

              {/* Genre */}
              <div className="mb-4">
                <Label className="text-white">Genre</Label>
                <Input
                  type="text"
                  value={newGameData.genre}
                  onChange={(e) =>
                    setNewGameData({ ...newGameData, genre: e.target.value })
                  }
                  placeholder="Enter Game Genre"
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <Label className="text-white">Description</Label>
                <Textarea
                  value={newGameData.description}
                  onChange={(e) =>
                    setNewGameData({
                      ...newGameData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter Game Description"
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <Label className="text-white">Price</Label>
                <Input
                  type="number"
                  value={newGameData.price}
                  onChange={(e) =>
                    setNewGameData({
                      ...newGameData,
                      price: parseFloat(e.target.value),
                    })
                  }
                  placeholder="Enter Game Price"
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
              </div>

              {/* System Requirements */}
              <label className="text-white">System Requirements</label>
              <div className="space-y-4">
                {/* CPU */}
                <div>
                  <Label className="text-white">CPU</Label>
                  <Input
                    type="text"
                    value={newGameData.systemRequirements.cpu}
                    onChange={(e) =>
                      setNewGameData({
                        ...newGameData,
                        systemRequirements: {
                          ...newGameData.systemRequirements,
                          cpu: e.target.value,
                        },
                      })
                    }
                    placeholder="Enter CPU"
                    className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
                {/* GPU */}
                <div>
                  <Label className="text-white">GPU</Label>
                  <Input
                    type="text"
                    value={newGameData.systemRequirements.gpu}
                    onChange={(e) =>
                      setNewGameData({
                        ...newGameData,
                        systemRequirements: {
                          ...newGameData.systemRequirements,
                          gpu: e.target.value,
                        },
                      })
                    }
                    placeholder="Enter GPU"
                    className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
                {/* RAM */}
                <div>
                  <Label className="text-white">RAM</Label>
                  <Input
                    type="text"
                    value={newGameData.systemRequirements.ram}
                    onChange={(e) =>
                      setNewGameData({
                        ...newGameData,
                        systemRequirements: {
                          ...newGameData.systemRequirements,
                          ram: e.target.value,
                        },
                      })
                    }
                    placeholder="Enter RAM"
                    className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
                {/* Storage */}
                <div>
                  <Label className="text-white">Storage</Label>
                  <Input
                    type="text"
                    value={newGameData.systemRequirements.storage}
                    onChange={(e) =>
                      setNewGameData({
                        ...newGameData,
                        systemRequirements: {
                          ...newGameData.systemRequirements,
                          storage: e.target.value,
                        },
                      })
                    }
                    placeholder="Enter Storage"
                    className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label className="text-white">Image</Label>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
              </div>

              {/* Submit Button */}
              <ButtonComponent
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition mt-8"
              >
                Create Game
              </ButtonComponent>
            </form>
          </div>
        </div>
      </section>
      <div className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <div className="max-w-screen-xl w-full">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            All Games
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {games.map((game) => (
              <div
                key={game._id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Game Card */}
                <div
                  className="relative w-full h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://localhost:3000/uploads/${
                      game.image || "placeholder.jpg"
                    })`,
                  }}
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute bottom-4 left-4 z-10 text-white">
                    <h3 className="text-lg font-bold">{game.title}</h3>
                    <p className="text-sm">{game.genre}</p>
                  </div>
                </div>
                <div className="p-4 text-white">
                  {/* Game Details */}
                  <p className="text-sm text-gray-300 mb-4">
                    {game.description.slice(0, 120)}...
                  </p>
                  <p className="font-semibold text-lg mb-4">{`₹${game.price.toFixed(
                    2
                  )}`}</p>
                  <div className="flex justify-between items-center">
                    <ButtonComponent
                      onClick={() => handleUpdateGame(game._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition"
                    >
                      Update
                    </ButtonComponent>
                    <ButtonComponent
                      onClick={() => handleDeleteGame(game._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm transition"
                    >
                      Delete
                    </ButtonComponent>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
