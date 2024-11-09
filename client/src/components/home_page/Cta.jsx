import { Input } from "@/components/ui/input";
import ButtonComponent from "../Button";

const Cta = () => {
  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Subscribe to our newsletter
          </h2>
          <p className="text-xl text-slate-300 mt-2">
            Get the latest news and updates straight to your inbox.
          </p>
        </div>

        {/* Input and Button Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:max-w-sm w-full mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 placeholder-gray-400"
          />
          <ButtonComponent className="w-full sm:w-auto bg-amber-500 text-white rounded-lg px-6 py-3 mt-4 sm:mt-0 hover:bg-amber-600 transition-all duration-300">
            Subscribe
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default Cta;
