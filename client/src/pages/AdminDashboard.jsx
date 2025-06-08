import { useState, useEffect } from "react";
import { useGame } from "../contexts/GameContext";
import ButtonComponent from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { gameSchema } from "@/utils/validationSchemas";

const AdminDashboard = () => {
  const { games, getAllGames, createGame, updateGame, deleteGame } = useGame();

  const [newGameData, setNewGameData] = useState({
    title: "",
    genre: "",
    description: "",
    price: "",
    systemRequirements: { cpu: "", gpu: "", ram: "", storage: "" },
    image: "",
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateGameId, setUpdateGameId] = useState(null);

  useEffect(() => {
    getAllGames();
  }, [getAllGames]);

  // Convert file to base64 string helper
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setNewGameData((prev) => ({
        ...prev,
        image: base64,
      }));
    }
  };

  // Handle input changes for system requirements
  const handleSystemRequirementChange = (field, value) => {
    setNewGameData((prev) => ({
      ...prev,
      systemRequirements: {
        ...prev.systemRequirements,
        [field]: value,
      },
    }));
  };

  // Handle form input changes (title, genre, description, price)
  const handleInputChange = (name, value) => {
    setNewGameData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset form to empty
  const resetForm = () => {
    setNewGameData({
      title: "",
      genre: "",
      description: "",
      price: "",
      systemRequirements: { cpu: "", gpu: "", ram: "", storage: "" },
      image: "",
    });
    setIsUpdateMode(false);
    setUpdateGameId(null);
  };

  // Validate and prepare data for submit
  const prepareAndValidateData = () => {
    const preparedData = {
      ...newGameData,
      price: parseFloat(newGameData.price),
      image: newGameData.image || undefined,
    };

    const validation = gameSchema.safeParse(preparedData);
    if (!validation.success) {
      alert(
        "Validation errors:\n" +
          JSON.stringify(validation.error.flatten().fieldErrors, null, 2)
      );
      return null;
    }
    return preparedData;
  };

  // Handle create game submit
  const handleCreateGame = async () => {
    const validatedData = prepareAndValidateData();
    if (!validatedData) return;

    try {
      const response = await createGame(validatedData);
      console.log("Game created:", response);
      resetForm();
      getAllGames();
    } catch (error) {
      console.error("Error creating game", error);
    }
  };

  // Handle update game submit
  const handleUpdateGame = async () => {
    if (!updateGameId) return;

    const validatedData = prepareAndValidateData();
    if (!validatedData) return;

    try {
      const response = await updateGame(updateGameId, validatedData);
      console.log("Game updated:", response);
      resetForm();
      getAllGames();
    } catch (error) {
      console.error("Error updating game", error);
    }
  };

  // Click on Update button on card -> fill form with that game's data
  const onClickUpdateButton = (game) => {
    setNewGameData({
      title: game.title,
      genre: game.genre,
      description: game.description || "",
      price: game.price.toString(),
      systemRequirements: {
        cpu: game.systemRequirements.cpu,
        gpu: game.systemRequirements.gpu,
        ram: game.systemRequirements.ram,
        storage: game.systemRequirements.storage,
      },
      image: "", // Clear image base64 — keep empty, user must reupload if needed
    });
    setIsUpdateMode(true);
    setUpdateGameId(game._id);
  };

  // Handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      handleUpdateGame();
    } else {
      handleCreateGame();
    }
  };

  return (
    <section>
      <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-4xl text-center text-white font-bold mb-6">
            Admin Dashboard
          </h1>

          {/* Create / Update Form */}
          <div className="flex flex-col gap-6 mb-6">
            <h2 className="text-2xl text-white font-semibold text-center">
              {isUpdateMode ? "Update Game" : "Create Game"}
            </h2>

            <form onSubmit={onSubmit}>
              {[
                {
                  label: "Title",
                  name: "title",
                  type: "text",
                  placeholder: "Enter Game Title",
                },
                {
                  label: "Genre",
                  name: "genre",
                  type: "text",
                  placeholder: "Enter Game Genre",
                },
                {
                  label: "Description",
                  name: "description",
                  type: "textarea",
                  placeholder: "Enter Game Description",
                },
                {
                  label: "Price",
                  name: "price",
                  type: "number",
                  placeholder: "Enter Game Price",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div className="mb-4" key={name}>
                  <Label className="text-white">{label}</Label>
                  {type === "textarea" ? (
                    <Textarea
                      value={newGameData[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      placeholder={placeholder}
                      className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                    />
                  ) : (
                    <Input
                      type={type}
                      value={newGameData[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      placeholder={placeholder}
                      className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                      min={type === "number" ? 0 : undefined}
                      step={type === "number" ? "any" : undefined}
                    />
                  )}
                </div>
              ))}

              {/* System Requirements */}
              <Label className="text-white">System Requirements</Label>
              <div className="space-y-4 mb-6">
                {[
                  { label: "CPU", field: "cpu", placeholder: "Enter CPU" },
                  { label: "GPU", field: "gpu", placeholder: "Enter GPU" },
                  { label: "RAM", field: "ram", placeholder: "Enter RAM" },
                  {
                    label: "Storage",
                    field: "storage",
                    placeholder: "Enter Storage",
                  },
                ].map(({ label, field, placeholder }) => (
                  <div key={field}>
                    <Label className="text-white">{label}</Label>
                    <Input
                      type="text"
                      value={newGameData.systemRequirements[field]}
                      onChange={(e) =>
                        handleSystemRequirementChange(field, e.target.value)
                      }
                      placeholder={placeholder}
                      className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                    />
                  </div>
                ))}
              </div>

              {/* Image input */}
              <div className="mb-6">
                <Label className="text-white">Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                />
                {/* Show preview if base64 image exists */}
                {newGameData.image && (
                  <img
                    src={newGameData.image}
                    alt="Preview"
                    className="mt-4 max-h-40 rounded-md"
                  />
                )}
              </div>

              {/* Submit Button */}
              <ButtonComponent
                type="submit"
                className={`w-full ${
                  isUpdateMode
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white py-3 rounded-lg transition`}
              >
                {isUpdateMode ? "Update Game" : "Create Game"}
              </ButtonComponent>

              {/* Cancel Update Button */}
              {isUpdateMode && (
                <ButtonComponent
                  type="button"
                  onClick={resetForm}
                  className="w-full mt-2 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg transition"
                >
                  Cancel Update
                </ButtonComponent>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* All Games Display */}
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
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute bottom-4 left-4 z-10 text-white">
                    <h3 className="text-lg font-bold">{game.title}</h3>
                    <p className="text-sm">{game.genre}</p>
                  </div>
                </div>

                <div className="p-4 text-white">
                  <p className="text-sm text-gray-300 mb-4">
                    {game.description?.slice(0, 120)}...
                  </p>
                  <p className="font-semibold text-lg mb-4">{`₹${game.price.toFixed(
                    2
                  )}`}</p>
                  <div className="flex justify-between items-center">
                    <ButtonComponent
                      type="button"
                      onClick={() => onClickUpdateButton(game)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition"
                    >
                      Update
                    </ButtonComponent>
                    <ButtonComponent
                      onClick={() => deleteGame(game._id).then(getAllGames)}
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
