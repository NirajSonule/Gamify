import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logo/logo.svg";
import ButtonComponent from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setMenuOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-gray-950 z-50 shadow-md">
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          <a
            href="/"
            className="text-white hover:text-amber-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="/explore"
            className="text-white hover:text-amber-500 transition duration-300"
          >
            Explore
          </a>
          <a
            href="/about"
            className="text-white hover:text-amber-500 transition duration-300"
          >
            About
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-x-4">
          {user ? (
            <>
              <ButtonComponent
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
                onClick={handleProfileClick}
              >
                {user.username.toUpperCase()}
              </ButtonComponent>
              <ButtonComponent
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleLogoutClick}
              >
                Logout
              </ButtonComponent>
            </>
          ) : (
            <>
              <ButtonComponent
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
                onClick={handleLoginClick}
              >
                Login
              </ButtonComponent>
              <ButtonComponent
                className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
                onClick={handleRegisterClick}
              >
                Register
              </ButtonComponent>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 px-4 py-4 border-t border-gray-700">
          <a
            href="/"
            className="block py-2 text-white hover:text-amber-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/explore"
            className="block py-2 text-white hover:text-amber-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Explore
          </a>
          <a
            href="/about"
            className="block py-2 text-white hover:text-amber-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <div className="mt-4 border-t border-gray-700 pt-4">
            {user ? (
              <>
                <ButtonComponent
                  className="w-full mb-2 bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={handleProfileClick}
                >
                  {user.username.toUpperCase()}
                </ButtonComponent>
                <ButtonComponent
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                  onClick={handleLogoutClick}
                >
                  Logout
                </ButtonComponent>
              </>
            ) : (
              <>
                <ButtonComponent
                  className="w-full mb-2 bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={handleLoginClick}
                >
                  Login
                </ButtonComponent>
                <ButtonComponent
                  className="w-full bg-violet-500 hover:bg-violet-600 text-white"
                  onClick={handleRegisterClick}
                >
                  Register
                </ButtonComponent>
              </>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
