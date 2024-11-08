// Login.jsx
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ButtonComponent from "@/components/Button";
import { Input } from "@/components/ui/input";
import login_img from "../assets/login_register/login_img.jpg";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };

    setIsLoading(true);

    try {
      await login(credentials);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center backdrop-blur-sm"
      style={{ backgroundImage: `url(${login_img})`, loading: "lazy" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"></div>

      <div className="absolute flex items-center justify-center w-full h-full text-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl sm:text-4xl text-center font-bold mb-6">
            Welcome back! 👋
          </h2>
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
          <ButtonComponent
            isLoading={isLoading}
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg mt-6"
          >
            Login
          </ButtonComponent>
        </form>
      </div>
    </section>
  );
};

export default Login;
