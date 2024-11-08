import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authSchema } from "../utils/validationSchemas";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = async (userData) => {
    const result = authSchema.safeParse(userData);
    if (!result.success) {
      return result.error.format();
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        userData
      );
      console.log(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const login = async (credentials) => {
    const result = authSchema
      .pick({ email: true, password: true })
      .safeParse(credentials);
    if (!result.success) {
      return result.error.format();
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);
      setUser({ token: response.data.token, role: response.data.role });
      navigate("/");
      return null;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
