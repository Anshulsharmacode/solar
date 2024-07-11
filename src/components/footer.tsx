const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-bold">Aditya Solar Solutions</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
