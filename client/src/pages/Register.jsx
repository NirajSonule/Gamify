import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import ButtonComponent from "@/components/Button";
import login_img from "../assets/login_register/register_img.jpg";

const Login = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [showAdminSecret, setShowAdminSecret] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = adminSecret ? "admin" : "user";

    const userData = {
      username,
      email,
      password,
      role,
      adminSecret,
    };

    setIsLoading(true);

    try {
      await register(userData);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminClick = () => {
    setShowAdminSecret((prev) => !prev); // Toggle the display of Admin Secret
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center backdrop-blur-sm"
      style={{ backgroundImage: `url(${login_img})`, loading: "lazy" }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Blur effect */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"></div>

      {/* Centered form content */}
      <div className="absolute flex items-center justify-center w-full h-full text-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md p-6 rounded-lg shadow-lg"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl text-center font-bold mb-6">
            New Account
          </h2>

          <div>
            <label className="text-white">Username:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="text-white">Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="text-white">Password:</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Admin Secret input that only shows when the "Admin" link is clicked */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              showAdminSecret ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {showAdminSecret && (
              <div>
                <label className="text-white">Admin Secret:</label>
                <Input
                  type="password"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                  placeholder="Enter your admin secret"
                  className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            )}
          </div>

          <div className="flex justify-between w-full mt-4 items-end gap-24">
            <ButtonComponent
              isLoading={isLoading}
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg"
            >
              Register
            </ButtonComponent>
            <ButtonComponent
              type="button"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 ease-in-out"
              onClick={handleAdminClick}
            >
              Admin
            </ButtonComponent>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
