const BrandSection = () => {
  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Our Trusted Brands
        </h2>
        <p className="text-xl text-slate-300 mt-2">
          We partner with some of the best in the industry.
        </p>
      </div>

      {/* Brand Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center mx-4 sm:mx-12 lg:mx-24">
        {/* Brand 1 - Esports */}
        <div className="border rounded-lg text-center border-amber-500 text-white hover:bg-amber-500 transition-all duration-300">
          <h1 className="font-bold py-4 text-lg sm:text-xl md:text-2xl truncate cursor-context-menu">
            Nintendo
          </h1>
        </div>

        {/* Brand 2 - Riot */}
        <div className="border rounded-lg text-center border-amber-500 text-white hover:bg-amber-500 transition-all duration-300">
          <h1 className="font-bold py-4 text-lg sm:text-xl md:text-2xl truncate cursor-context-menu">
            Riot Games
          </h1>
        </div>

        {/* Brand 3 - Gameloft */}
        <div className="border rounded-lg text-center border-amber-500 text-white hover:bg-amber-500 transition-all duration-300">
          <h1 className="font-bold py-4 text-lg sm:text-xl md:text-2xl truncate cursor-context-menu">
            PlayStation
          </h1>
        </div>

        {/* Brand 4 - Sony */}
        <div className="border rounded-lg text-center border-amber-500 text-white hover:bg-amber-500 transition-all duration-300">
          <h1 className="font-bold py-4 text-lg sm:text-xl md:text-2xl truncate cursor-context-menu">
            RockStar
          </h1>
        </div>

        {/* Brand 5 - Epic Games */}
        <div className="border rounded-lg text-center border-amber-500 text-white hover:bg-amber-500 transition-all duration-300">
          <h1 className="font-bold py-4 text-lg sm:text-xl md:text-2xl truncate cursor-context-menu">
            Epic Games
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
