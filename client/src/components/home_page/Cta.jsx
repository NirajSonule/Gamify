import { Input } from "@/components/ui/input";
import ButtonComponent from "../Button";

const Cta = () => {
  return (
    <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <h2 className="text-4xl font-extrabold text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-xl text-slate-300 mt-2">
            Get the latest news and updates straight to your inbox.
          </p>
        </div>
        <div className="flex w-full max-w-sm items-end space-x-2">
          <Input
            type="email"
            placeholder="Email"
            className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <ButtonComponent className="bg-amber-500 hover:bg-amber-600">
            Subscribe
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default Cta;
