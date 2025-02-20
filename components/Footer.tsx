import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About CodeGenesis</h3>
            <p className="text-gray-400">
              CodeGenesis is your go-to platform for tech tutorials, coding tips, and programming resources. Join us as we explore the world of coding and development.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="text-gray-400 hover:text-indigo-600">Home</Link></li>
              <li><Link href="/tutorials" className="text-gray-400 hover:text-indigo-600">Tutorials</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-indigo-600">About</Link></li>
              <li><Link href="https://www.youtube.com/@CodeGenesis335" className="text-gray-400 hover:text-indigo-600">YouTube Dashboard</Link></li> {/* Updated link */}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">YouTube Channel Dashboard</h3> {/* Updated heading */}
            <p className="text-gray-400">Visit our <Link href="https://www.youtube.com/@CodeGenesis335" className="text-indigo-600 hover:text-indigo-800">YouTube Channel Dashboard</Link> for the latest updates and content.</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-indigo-600">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-600">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-600">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-600">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} CodeGenesis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
