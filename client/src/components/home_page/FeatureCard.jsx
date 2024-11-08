import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import myImage from "../../assets/hero/hero_bg.png";

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
        <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-16 items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">{heading}</h2>
              <p className="text-14-regular md:text-16-regular mb-6">
                {description}
              </p>
              <div>
                <div className="flex gap-2">
                  <CheckBadgeIcon className="h-12 w-12 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-bold mb-4">{subheading}</h3>
                    <p className="text-12-regular md:text-14-regular mb-6 text-gray-300">
                      {subtext}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckBadgeIcon className="h-12 w-12 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-bold mb-4">{subheading}</h3>
                    <p className="text-12-regular md:text-14-regular mb-6 text-gray-300">
                      {subtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={myImage}
              alt="hero_bg"
              className="hidden md:block w-2/4 h-auto"
            />
          </div>
        </section>
      );
    case "right":
      return (
        <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-16 items-center justify-between">
            <img
              src={myImage}
              alt="hero_bg"
              className="hidden md:block w-2/4 h-auto"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">{heading}</h2>
              <p className="text-14-regular md:text-16-regular mb-6">
                {description}
              </p>
              <div>
                <div className="flex gap-2">
                  <CheckBadgeIcon className="h-12 w-12 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-bold mb-4">{subheading}</h3>
                    <p className="text-12-regular md:text-14-regular mb-6 text-gray-300">
                      {subtext}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckBadgeIcon className="h-12 w-12 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-bold mb-4">{subheading}</h3>
                    <p className="text-12-regular md:text-14-regular mb-6 text-gray-300">
                      {subtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    default:
      return (
        <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-16 items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Explore the world of pixelated glory!
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Find the games according to your taste and PC specification.
              </p>
            </div>
            <img
              src={myImage}
              alt="hero_bg"
              className="hidden lg:block w-2/4 h-auto"
            />
          </div>
        </section>
      );
  }
};

export default FeatureCard;
