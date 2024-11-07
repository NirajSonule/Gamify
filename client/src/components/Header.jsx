import logo from "../assets/logo/logo.svg";
import ButtonComponent from "./Button";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full h-16 bg-gray-950 z-50 py-4">
      <header className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 ml-24">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </a>

        {/* Center the nav using absolute positioning */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-x-8">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/explore" className="text-white">
            Explore
          </a>
          <a href="/about" className="text-white">
            About
          </a>
        </nav>

        {/* Button Section on the right */}
        <div className="flex items-center gap-x-2 ml-auto mr-24">
          <ButtonComponent>Login</ButtonComponent>
          <ButtonComponent className="bg-violet-500 hover:bg-violet-600 text-white rounded-lg shadow-lg">
            Register
          </ButtonComponent>
        </div>
      </header>
    </div>
  );
};

export default Header;
