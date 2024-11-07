import { Link } from "react-router-dom";
import myImage from "../../assets/hero/hero_bg.png";
import ButtonComponent from "../Button";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center backdrop-blur-sm"
      style={{ backgroundImage: `url(${myImage})`, loading: "lazy" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"></div>
      <div className="absolute flex items-center justify-center w-full h-full text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore the world of
            <br />
            <span className="block text-amber-500">pixelated glory!</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Find the games according to your taste and PC specification.
          </p>
          <Link to="/explore">
            <ButtonComponent className="px-12 py-3 mt-4 text-lg bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg">
              Get Started
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
