import myImage from "../../assets/hero/hero_bg.png";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          What our customers say
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mt-4 mx-auto max-w-3xl">
          We have worked with some of the best in the industry, and here’s what
          they have to say about us.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 justify-between mx-4 sm:mx-8 lg:mx-16">
        <TestimonialsCard
          name="John Doe"
          job="CEO"
          content="This product completely transformed the way our team works. The efficiency and ease of use are unparalleled."
          image={myImage}
        />
        <TestimonialsCard
          name="Jane Smith"
          job="Product Manager"
          content="The interface is intuitive and the performance is top-notch. Highly recommend it to others!"
          image={myImage}
        />
        <TestimonialsCard
          name="Alice Brown"
          job="Lead Developer"
          content="A game changer for our workflow. It's easy to integrate and the results speak for themselves."
          image={myImage}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
