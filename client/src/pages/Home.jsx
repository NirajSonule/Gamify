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
        heading="lorem ipsum dolor sit amet"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula"
        subheading="Games from variuos platforms"
        subtext="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."
      />
      <FeatureCard
        direction="right"
        heading="lorem ipsum dolor sit amet"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula"
        subheading="Games from variuos platforms"
        subtext="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."
      />
      <BrandSection />
      <TestimonialSection />
      <Cta />
    </>
  );
};

export default Home;
