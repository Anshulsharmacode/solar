import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Aditya Solar Solutions
            </h3>
            <p className="text-xs sm:text-sm text-left">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Right Section */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF className="text-lg sm:text-xl" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaTwitter className="text-lg sm:text-xl" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="text-lg sm:text-xl" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
