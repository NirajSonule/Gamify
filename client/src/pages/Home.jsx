import BrandSection from "@/components/home_page/BrandSection";
import Cta from "@/components/home_page/Cta";
import FeatureCard from "@/components/home_page/FeatureCard";
import Hero from "@/components/home_page/Hero";
import TestimonialSection from "@/components/home_page/TestimonialSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureCard
        direction="left"
        heading="Personalized Game Recommendations"
        description="Discover the perfect games for you, based on your preferences and ratings. Our recommendation algorithm tailors suggestions to match your unique gaming style."
        subheading="Games Across Multiple Platforms"
        subtext="Whether you're a PC gamer, console enthusiast, or prefer mobile gaming, our app suggests titles from all major platforms, ensuring a seamless gaming experience regardless of where you play."
      />
      <FeatureCard
        direction="right"
        heading="Advanced Game Filtering"
        description="Tailor your game recommendations by filtering based on your specific preferences. Whether you want games that match your PC’s specs, a particular genre, or fall within your budget, our filters make it easy to find the perfect game."
        subheading="Filter by System Requirements, Genre, or Price"
        subtext="Easily refine your search by selecting the required system specifications (CPU, RAM, GPU), your favorite genres, or setting a price range. With these advanced filters, you can find games that not only suit your taste but also fit your PC’s capabilities and budget."
      />

      <BrandSection />
      <TestimonialSection />
      <Cta />
    </>
  );
};

export default Home;
