import Image from "next/image";
import Link from "next/link";
import data from "../DataBase/Feature.json"; // Import the JSON data

const FeaturedVideosSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Featured Videos</h2>
        <p className="text-lg sm:text-xl mb-12">
          Check out our latest and most popular tutorials, tips, and projects on our YouTube channel.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((video) => (
            <div key={video.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={video.thumbnail} // Use the thumbnail from the JSON data
                alt={video.title}
                width={500}
                height={280}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{video.title}</h3>
                <p className="text-gray-300 mb-4">{video.description}</p>
                <Link
                  href={video.url} // Use the video URL from the JSON data
                  target="_blank"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            href="https://www.youtube.com/@CodeGenesis335" // Replace with your actual YouTube channel URL
            target="_blank"
            className="bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Visit Our YouTube Channel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideosSection;
