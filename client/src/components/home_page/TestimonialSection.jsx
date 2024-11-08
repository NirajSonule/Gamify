import myImage from "../../assets/hero/hero_bg.png";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          What our customers say
        </h2>
        <p className="text-xl text-slate-300 mt-2">
          We have worked with some of the best in the industry.
        </p>
      </div>
      <div className="flex flex-col justify-between sm:flex-row mx-24 ">
        <TestimonialsCard
          name="John Doe"
          job="CEO"
          content="This product completely transformed the way our team works. The efficiency and ease of use are unparalleled."
          image={myImage}
        />
        <TestimonialsCard
          name="John Doe"
          job="CEO"
          content="This product completely transformed the way our team works. The efficiency and ease of use are unparalleled."
          image={myImage}
        />
        <TestimonialsCard
          name="John Doe"
          job="CEO"
          content="This product completely transformed the way our team works. The efficiency and ease of use are unparalleled."
          image={myImage}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
