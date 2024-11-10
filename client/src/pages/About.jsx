import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  UserIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

import frontendDevImage from "../assets/team/frontend-dev.jpg";
import backendDevImage from "../assets/team/backend-dev.jpg";
import researchDevImage from "../assets/team/research-dev.jpeg";

const About = () => {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-12 text-center bg-gradient-to-r from-gray-800 to-black">
        <h1 className="text-5xl font-extrabold text-white mb-4">Gamify</h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore the world of pixelated glory!
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A web application that allows users to discover and receive
          recommendations for games based on their preferences and ratings.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-12">
        <h2 className="text-3xl font-semibold text-center text-amber-500 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <Card className="bg-gray-900 border border-gray-700 overflow-hidden">
            <CardHeader className="bg-violet-500 text-white text-lg font-semibold">
              <UserIcon className="h-8 w-8 text-white" />
              User Authentication
            </CardHeader>
            <CardContent className="text-gray-300 mt-6">
              <p>
                User sign-up, login, password hashing, and JWT-based session
                management for secure access.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700 overflow-hidden">
            <CardHeader className="bg-violet-500 text-white text-lg font-semibold">
              <ServerStackIcon className="h-8 w-8 text-white" />
              Game Database
            </CardHeader>
            <CardContent className="text-gray-300 mt-6">
              <p>
                A collection of games with details, integrated with APIs to
                fetch up-to-date game data.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700 overflow-hidden">
            <CardHeader className="bg-violet-500 text-white text-lg font-semibold">
              <PuzzlePieceIcon className="h-8 w-8 text-white" />
              Search and Filter
            </CardHeader>
            <CardContent className="text-gray-300 mt-6">
              <p>
                Find games by title, genre, platform, and filter by rating,
                release date, or popularity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Developers */}
      <section className="py-16 px-6 sm:px-12 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-amber-500 mb-12">
          Meet the Developers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Developer */}
          <Card className="bg-gray-800 text-white border border-gray-700 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg hover:border-violet-500">
            <CardHeader className="bg-gray-500 text-white text-center relative group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={frontendDevImage}
                  alt="Frontend Developer"
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-150 group-hover:object-cover"
                />
              </div>
              <CardTitle className="text-xl font-semibold">
                Omkar Gaud
              </CardTitle>
              <p className="text-sm">Frontend Developer</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mt-8">
                Omkar is the mastermind behind the sleek and user-friendly
                interface. He ensures the app is intuitive and engaging for
                every user.
              </p>
            </CardContent>
          </Card>

          {/* Backend Developer */}
          <Card className="bg-gray-800 text-white border border-gray-700 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg hover:border-violet-500">
            <CardHeader className="bg-gray-500 text-white text-center relative group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={backendDevImage}
                  alt="Backend Developer"
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-150 group-hover:object-cover"
                />
              </div>
              <CardTitle className="text-xl font-semibold">
                Pranali Dalbanjan
              </CardTitle>
              <p className="text-sm">Backend Developer</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mt-8">
                Pranali is responsible for managing databases and implementing
                the APIs that make Gamify’s recommendations so powerful.
              </p>
            </CardContent>
          </Card>

          {/* Research and Gathering Developer */}
          <Card className="bg-gray-800 text-white border border-gray-700 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg hover:border-violet-500">
            <CardHeader className="bg-gray-500 text-white text-center relative group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={researchDevImage}
                  alt="Research Developer"
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-150 group-hover:object-cover"
                />
              </div>
              <CardTitle className="text-xl font-semibold">
                Shubham Niwate
              </CardTitle>
              <p className="text-sm">Research & Gathering Developer</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mt-8">
                Shubham focuses on gathering the best gaming data and ensuring
                the recommendation algorithm is accurate and relevant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
