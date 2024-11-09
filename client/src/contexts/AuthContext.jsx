import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authSchema } from "../utils/validationSchemas";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    return token ? { token, username, role } : null;
  });

  const navigate = useNavigate();

  // Use useEffect to update the context when the token changes (login/logout)
  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("username", user.username); // Store username
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("username"); // Remove username on logout
    }
  }, [user]);

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
      const { token, role, username } = response.data; // Get username from response

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username); // Store username in localStorage

      const userObject = {
        token,
        role,
        username,
      };

      console.log(userObject);
      setUser(userObject); // Update user state with username
      navigate("/");

      return null;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username"); // Remove username on logout
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
