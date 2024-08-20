import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, Sun, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToPMSuryaScheme = () => {
    if (window.location.pathname === "/") {
      const element = document.getElementById("pm-surya-scheme");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "pm-surya-scheme" } });
    }
    closeMenu();
  };

  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      window.history.state?.state?.scrollTo === "pm-surya-scheme"
    ) {
      const element = document.getElementById("pm-surya-scheme");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav className="bg-primary-600 text-white font-sans w-screen">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Sun className="h-6 w-6 text-yellow-300" />
            <p className="text-xl font-bold">Special Offer</p>
          </div>
          <div className="text-center mb-2 md:mb-0 flex-grow">
            <p className="text-lg font-semibold">
              Get this website now for just ₹10,000 or $200
            </p>
            <p className="text-sm">
              Limited time offer. Contact us for details or your own custom
              website.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="tel:+917489989634"
              className="flex items-center bg-white text-green-800 font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-100"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Call:</span> +91 7489 989 634
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black text-white py-2">
        <div className="text-center">
          <p>नान्तोऽस्ति मम दिव्यानां विभूतीनां</p>
          <p>There is no end to my divine manifestations and glories</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 md:px-16 py-2">
        <div className="flex items-center">
          <p className="text-2xl font-bold">Solar Solutions</p>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            About
          </Link>
          <button
            onClick={scrollToPMSuryaScheme}
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            PM Surya Ghar
          </button>
          <Link
            to="/contact"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Contact
          </Link>
          <Link
            to="/register"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Register Now for Free Solar Saving
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <Link
              to="/"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToPMSuryaScheme}
              className="block w-full text-left hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
            >
              PM Surya Ghar
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="block hover:bg-white hover:text-primary hover:text-white px-3 py-2 rounded"
              onClick={closeMenu}
            >
              Register Now for Free Solar Saving
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
