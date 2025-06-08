import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ButtonComponent from "@/components/Button";
import { Input } from "@/components/ui/input";
import login_img from "../assets/login_register/login_img.jpg";
import { authSchema } from "@/utils/validationSchemas";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});
    setErrorMsg("");

    const credentials = { email, password };
    const validation = authSchema
      .pick({ email: true, password: true })
      .safeParse(credentials);

    if (!validation.success) {
      const formatted = Object.fromEntries(
        Object.entries(validation.error.format()).map(([key, value]) => [
          key,
          value?._errors?.[0],
        ])
      );
      setFormErrors(formatted);
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(email, password);
      if (!result.success) {
        setErrorMsg(result.message);
      }

      navigate("/explore");
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong. Please try again.");
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

          {errorMsg && (
            <p className="text-red-400 text-center font-medium">{errorMsg}</p>
          )}

          <div>
            <label className="text-white">Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {formErrors.email && (
              <p className="text-red-400 text-sm">{formErrors.email}</p>
            )}
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
            {formErrors.password && (
              <p className="text-red-400 text-sm">{formErrors.password}</p>
            )}
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
