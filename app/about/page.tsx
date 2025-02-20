import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <Header />

      <main className="bg-gray-900 py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About CodeGenesis</h1>
          
          {/* Channel Mission Section */}
          <section className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
            <p className="text-gray-300 mb-4">
              CodeGenesis is my passion project, created to help aspiring developers and tech enthusiasts level up their skills. My mission is to provide high-quality tutorials, tips, and coding projects to help you master programming and stay updated with the latest tech trends.
            </p>
            <p className="text-gray-300 mb-4">
              Whether you're just starting out or looking to improve your knowledge, I aim to deliver content that caters to all skill levels—from beginner to advanced.
            </p>
          </section>

          {/* Subscribe to CodeGenesis Section */}
          <section className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Subscribe to CodeGenesis</h2>
            <p className="text-gray-300 mb-4">
              Stay up-to-date with the latest tutorials and content by subscribing to my YouTube channel. Click the link below to join the CodeGenesis community and start learning today!
            </p>
            <a 
              href="https://www.youtube.com/@CodeGenesis335?sub_confirmation=1" // Replace with your actual YouTube channel link
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Subscribe Now
            </a>
          </section>
          <section className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
            <p className="text-gray-300 mb-4">
              CodeGenesis started as a passion project to help others learn how to code in a practical, hands-on way. Over time, it has become a platform for those who want to dive deeper into programming and technology.
            </p>
            <p className="text-gray-300 mb-4">
              From Python and JavaScript tutorials to full-stack web development, my content is designed to make coding accessible, engaging, and enjoyable. Join me on this journey and let's start coding today!
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
