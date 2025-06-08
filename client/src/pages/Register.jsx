import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import ButtonComponent from "@/components/Button";
import login_img from "../assets/login_register/register_img.jpg";
import { authSchema } from "@/utils/validationSchemas";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [showAdminSecret, setShowAdminSecret] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setFormErrors({});

    const role = adminSecret ? "admin" : "user";

    const formData = {
      username,
      email,
      password,
      role,
      adminSecret,
    };

    const validation = authSchema.safeParse(formData);

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
      const result = await register(
        username,
        email,
        password,
        role,
        adminSecret
      );
      if (!result.success) {
        setErrorMsg(result.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminClick = () => {
    setShowAdminSecret((prev) => !prev);
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center backdrop-blur-sm"
      style={{ backgroundImage: `url(${login_img})`, loading: "lazy" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"></div>

      <div className="absolute flex items-center justify-center w-full h-full text-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl sm:text-4xl text-center font-bold mb-6">
            New Account
          </h2>

          {errorMsg && (
            <p className="text-red-400 text-center font-medium">{errorMsg}</p>
          )}

          <div>
            <label className="text-white">Username:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {formErrors.username && (
              <p className="text-red-400 text-sm">{formErrors.username}</p>
            )}
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
              {formErrors.adminSecret && (
                <p className="text-red-400 text-sm">{formErrors.adminSecret}</p>
              )}
            </div>
          )}

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

export default Register;
