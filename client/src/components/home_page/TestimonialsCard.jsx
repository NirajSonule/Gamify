import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TestimonialsCard = ({ name, job, content, image }) => {
  return (
    <Card className="w-[350px] p-6 rounded-xl bg-gray-950 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="flex items-center space-x-6">
        {/* Profile Image */}
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-amber-500 transition-transform transform hover:scale-105"
        />
        <div>
          <CardTitle className="text-2xl font-semibold text-white">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-gray-400">
            {job}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-6">
        {/* Testimonial Content */}
        <p className="text-lg italic text-gray-300">&quot;{content}&quot;</p>
      </CardContent>
      <CardFooter className="mt-6 text-sm text-gray-400">
        {/* Footer or additional info */}
        <p className="text-right text-amber-400">Highly recommended!</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsCard;
