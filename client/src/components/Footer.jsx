import { useState } from "react";
import logo from "../assets/logo/logo.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import discordIcon from "../assets/icons/discord-icon.svg";
import Modal from "./Modal";

const Footer = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  const termsContent = (
    <>
      <h3 className="font-semibold">1. Introduction</h3>
      <p>
        Welcome to Gamify! These Terms of Service govern your access to and use
        of our website and services. By using our website, you agree to comply
        with these terms.
      </p>
      <h3 className="font-semibold">2. User Responsibilities</h3>
      <p>
        You agree not to misuse the services provided by Gamify and to follow
        all applicable laws when using the platform.
      </p>
      <h3 className="font-semibold">3. Limitation of Liability</h3>
      <p>
        We are not liable for any damages resulting from the use or inability to
        use the services, including any errors or interruptions.
      </p>
    </>
  );

  const privacyContent = (
    <>
      <h3 className="font-semibold">1. Data Collection</h3>
      <p>
        We collect personal information, such as your name and email address, to
        provide a better user experience and improve our services.
      </p>
      <h3 className="font-semibold">2. Use of Data</h3>
      <p>
        Your personal information may be used for marketing purposes, improving
        our platform, and communicating with you.
      </p>
      <h3 className="font-semibold">3. Data Security</h3>
      <p>
        We take appropriate measures to protect your personal information from
        unauthorized access or disclosure.
      </p>
    </>
  );

  const cookieContent = (
    <>
      <h3 className="font-semibold">1. What are Cookies?</h3>
      <p>
        Cookies are small files that are stored on your device to enhance your
        user experience on our website.
      </p>
      <h3 className="font-semibold">2. Types of Cookies</h3>
      <p>
        We use both session cookies (which expire when you close your browser)
        and persistent cookies (which remain on your device for a specified
        time).
      </p>
      <h3 className="font-semibold">3. Managing Cookies</h3>
      <p>You can manage or disable cookies through your browser settings.</p>
    </>
  );

  return (
    <div className="w-full bg-gray-950 py-12">
      <footer className="px-6 sm:px-12 lg:px-16 mx-auto sm:mx-24">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-12 sm:gap-0">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-4">
            <a href="/" className="mb-4">
              <img src={logo} alt="logo" className="h-10 w-auto" />
            </a>
            <p className="text-center sm:text-left text-white text-sm sm:text-base w-64 mb-4 sm:mb-0">
              Explore the world of pixelated glory!
            </p>
            <div className="flex gap-6 justify-center sm:justify-start">
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
          <div className="flex flex-wrap justify-center sm:justify-between sm:ml-auto gap-8 sm:gap-24 mt-8 sm:mt-0">
            {/* Platform Links */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4">
              <p className="text-lg font-medium text-slate-100 mb-4">
                Platform
              </p>
              <a
                href="/"
                className="hover:text-amber-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="/explore"
                className="hover:text-amber-500 transition duration-300"
              >
                Explore
              </a>
              <a
                href="/about"
                className="hover:text-amber-500 transition duration-300"
              >
                About
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4">
              <p className="text-lg font-medium text-slate-100 mb-4">Legal</p>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-white hover:text-amber-500 transition duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-white hover:text-amber-500 transition duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsCookieModalOpen(true)}
                className="text-white hover:text-amber-500 transition duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="mt-8 text-center text-white text-sm">
        <p>© 2024 Gamify. All rights reserved.</p>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms of Service"
        content={termsContent}
      />
      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
        content={privacyContent}
      />
      <Modal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        title="Cookie Policy"
        content={cookieContent}
      />
    </div>
  );
};

export default Footer;
