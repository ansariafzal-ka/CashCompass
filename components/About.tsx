import { ChartNoAxesCombined, Users } from "lucide-react";

const About = () => {
  return (
    <section className="px-6 py-12">
      <h1 className="text-4xl font-medium mb-10 lg:text-center">
        One platform for all your money things{" "}
      </h1>
      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="bg-green-800 p-5">
          <div className="flex items-stretch gap-2">
            <ChartNoAxesCombined
              className="text-white"
              width={32}
              height={32}
            />
            <h1 className="text-3xl text-white font-medium mb-2">
              Grow Savings Faster
            </h1>
          </div>
          <p className="text-white font-medium">
            Accelerate your savings with ease using our platform. Our innovative
            tools and insights help you maximize your savings potential, track
            progress, and achieve your financial goals faster. Start growing
            your savings today and watch your finance improve.
          </p>
        </div>
        <div className="bg-blue-600 p-5">
          <div className="flex items-stretch gap-2">
            <Users className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Who are we?
            </h1>
          </div>
          <p className="font-medium text-white">
            We are a dedicated team of tech innovators committed to helping you
            achieve your financial goals. Our platform combines cutting-edge
            technology with personalized support to simplify and enhance your
            financial journey. Join us to take control of your finances and
            secure a brighter future.
          </p>
        </div>
        <div className="bg-orange-600 p-5">
          <div className="flex items-stretch gap-2">
            <Users className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Who are we?
            </h1>
          </div>
          <p className="font-medium text-white">
            We are a dedicated team of tech innovators committed to helping you
            achieve your financial goals. Our platform combines cutting-edge
            technology with personalized support to simplify and enhance your
            financial journey. Join us to take control of your finances and
            secure a brighter future.
          </p>
        </div>
        <div className="bg-yellow-400 p-5">
          <div className="flex items-stretch gap-2">
            <Users className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Who are we?
            </h1>
          </div>
          <p className="font-medium text-white">
            We are a dedicated team of tech innovators committed to helping you
            achieve your financial goals. Our platform combines cutting-edge
            technology with personalized support to simplify and enhance your
            financial journey. Join us to take control of your finances and
            secure a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
