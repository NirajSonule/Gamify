import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Separator } from "@/components/ui/separator";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { GameProvider } from "./contexts/GameContext";
import { RatingProvider } from "./contexts/RatingContext";
import Explore from "./pages/Explore";
import ProtectedRoute from "./components/ProtectedRoute";
import GameDetail from "./pages/GameDetail";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GameProvider>
          <RatingProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/explore" element={<Explore />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/game/:id" element={<GameDetail />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<UserProfile />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>
            </Routes>
            <Separator />
            <Footer />
          </RatingProvider>
        </GameProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
