import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import left_img from "../../assets/feature_card/feature_card_left.jpg";
import right_img from "../../assets/feature_card/feature_card_right.jpeg";

const FeatureCard = ({
  direction,
  heading,
  description,
  subheading,
  subtext,
}) => {
  switch (direction) {
    case "left":
      return (
        <section className="w-full bg-gray-950 py-24 px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-between">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {heading}
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                {description}
              </p>
              <div className="flex items-center space-x-4">
                <CheckBadgeIcon className="h-14 w-14 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {subheading}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {subtext}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={left_img}
              alt="hero_bg"
              className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      );
    case "right":
      return (
        <section className="w-full bg-gray-950 py-24 px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-between">
            <img
              src={right_img}
              alt="hero_bg"
              className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {heading}
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                {description}
              </p>
              <div className="flex items-center space-x-4">
                <CheckBadgeIcon className="w-14 h-14 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {subheading}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    default:
      return (
        <section className="w-full bg-gray-950 py-24 px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-between">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Explore the world of pixelated glory!
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                Find the games according to your taste and PC specification.
              </p>
            </div>
            <img
              src={myImage}
              alt="hero_bg"
              className="hidden lg:block w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      );
  }
};

export default FeatureCard;
