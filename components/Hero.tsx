import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Welcome to CodeGenesis
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Explore tech tutorials, tips, and more. Join the CodeGenesis community and level up your coding skills!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="/tutorials"
              className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Explore Tutorials
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/left.jpg" // Ensure the file name is URL-safe
            alt="CodeGenesis YouTube Channel"
            width={500}
            height={400}
            className="w-full h-auto max-w-sm md:max-w-lg object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Dark Mode Button */}
      <div className="absolute top-4 right-4">
        <button className="text-white bg-gray-800 p-2 rounded-md">
          🌙
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
