import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import AboutUs from "./AboutUs";
import Register from "./register";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-600 text-white font-sans w-screen">
      <div className="flex justify-center items-center bg-black text-white py-2">
        <div className="text-center">
          <p>नान्तोऽस्ति मम दिव्यानां विभूतीनां</p>
          <p>There is no end to my divine manifestations and glories</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-16 py-2">
        <div className="flex items-center">
          <img src="./logo.png" alt="Logo" className="h-24 w-24 mx-4" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/pm-surya-ghar"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            PM Surya Ghar
          </Link>
          <Link
            to="/contact"
            className="hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Contact
          </Link>
          
            <Link
              to="/register "
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              
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
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={AboutUs}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pm-surya-ghar"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={toggleMenu}
            >
              PM Surya Ghar
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Register Now for Free Solar Saving"
              className="block hover:bg-white hover:text-black hover:text-white px-3 py-2 rounded"
              onClick={Register}
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
