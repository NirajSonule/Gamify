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
      <CardHeader className="flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
        />
        <div>
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <CardDescription className="text-sm text-gray-400">
            {job}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        {/* Testimonial Content */}
        <p className="text-lg italic text-gray-300">&quot;{content}&quot;</p>
      </CardContent>
      <CardFooter className="mt-4 text-sm text-gray-400">
        {/* Footer or additional info */}
        <p>Highly recommended!</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsCard;
