import logo from "../assets/logo/logo.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import discordIcon from "../assets/icons/discord-icon.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 py-8">
      <footer className="px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-4 ml-0 sm:ml-24">
            <a href="/" className="mb-4">
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </a>
            <p className="text-center sm:text-left text-white text-sm sm:text-base w-64 mb-4 sm:mb-0">
              Explore the world of pixelated glory!
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="/" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="h-6 w-auto" />
              </a>
              <a href="/" aria-label="Instagram">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-6 w-auto"
                />
              </a>
              <a href="/" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="h-6 w-auto" />
              </a>
              <a href="/" aria-label="Discord">
                <img src={discordIcon} alt="Discord" className="h-6 w-auto" />
              </a>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-wrap justify-center sm:justify-between sm:ml-auto gap-8 sm:gap-24 mt-8 sm:mt-0 mr-0 sm:mr-24">
            {/* Platform Links */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4">
              <p className="text-lg font-medium text-slate-100">Platform</p>
              <a href="/" className="text-white">
                Home
              </a>
              <a href="/explore" className="text-white">
                Explore
              </a>
              <a href="/about" className="text-white">
                About
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4">
              <p className="text-lg font-medium text-slate-100">Legal</p>
              <a href="/policy" className="text-white">
                Terms of Service
              </a>
              <a href="/policy" className="text-white">
                Privacy Policy
              </a>
              <a href="/policy" className="text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="mt-6 sm:mt-8 text-center text-white text-sm">
        <p>© 2024 Gamify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
