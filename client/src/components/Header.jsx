import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logo/logo.svg";
import ButtonComponent from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleProfileClick = () => {
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="sticky top-0 left-0 w-full h-16 bg-gray-950 z-50 py-4">
      <header className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 relative">
        <a href="/" className="flex-shrink-0 ml-24">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </a>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-x-8">
          <a
            href="/"
            className="text-white hover:text-amber-500 transition duration-30"
          >
            Home
          </a>
          <a
            href="/explore"
            className="text-white hover:text-amber-500 transition duration-30"
          >
            Explore
          </a>
          <a
            href="/about"
            className="text-white hover:text-amber-500 transition duration-30"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-x-2 ml-auto mr-24">
          {user ? (
            <>
              <ButtonComponent
                className="bg-gray-500 hover:bg-gray-600 text-white mr-4"
                onClick={handleProfileClick}
              >
                {user.username.toUpperCase()}
              </ButtonComponent>
              <ButtonComponent
                onClick={handleLogoutClick}
                className="bg-red-500 hover:bg-red-600"
              >
                Logout
              </ButtonComponent>
            </>
          ) : (
            <>
              <ButtonComponent
                onClick={handleLoginClick}
                className="bg-amber-500 hover:bg-amber-600 hidden sm:block"
              >
                Login
              </ButtonComponent>
              <ButtonComponent
                onClick={handleRegisterClick}
                className="bg-violet-500 hover:bg-violet-600 hidden sm:block"
              >
                Register
              </ButtonComponent>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
