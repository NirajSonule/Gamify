import logo from "../assets/logo/logo.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import discordIcon from "../assets/icons/discord-icon.svg";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 w-full h-auto bg-gray-950 z-50 py-8">
      <footer className="flex item-center justify-between px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col gap-6 ml-24">
          <a href="/">
            <img src={logo} alt="logo" className="h-8 w-auto" />
          </a>
          <p className="text-16-regular w-64">
            Explore the world of pixelated glory!
          </p>
          <div className="flex items-center gap-x-4">
            <a href="/">
              <img src={facebookIcon} alt="facebook" className="h-6 w-auto" />
            </a>
            <a href="/">
              <img src={instagramIcon} alt="instagram" className="h-6 w-auto" />
            </a>
            <a href="/">
              <img src={twitterIcon} alt="twitter" className="h-6 w-auto" />
            </a>
            <a href="/">
              <img src={discordIcon} alt="discord" className="h-6 w-auto" />
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-x-24 ml-auto mr-24">
          <div className="flex flex-col gap-4 text-start">
            <p className="text-16-regular text-slate-100">Platform</p>
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
          <div className="flex flex-col gap-4 text-start">
            <p className="text-16-regular text-slate-100">Legal</p>
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
      </footer>
      <div className="flex items-center justify-center w-full h-auto mt-4">
        <p>© 2024 Gamify All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
