import { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselTexts = [
    "The Sun is Free – Why Pay for Power?",
    "Your Roof, Our Care, End-to-End Solar Solutions, No Middlemen",
    "Save with PM Surya Ghar Yojana subsidies on solar installations. With 0% EMI and flexible financing options, think solar is out of reach? Think again!",
    "Introducing our cyclone-proof solar system! Our mounts are engineered to withstand heavy rains, fierce storms, and cyclones with wind speeds up to 170 km/h.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselTexts.length]);

  return (
    <div className="w-full h-screen bg-primary-900 relative overflow-hidden">
      <img
        src="./hero.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        alt="Hero Image"
      />
      <div className="absolute top-0 left-0 w-full h-full p-4 flex items-center justify-center">
        {carouselTexts.map((text, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="rounded-lg p-6">
              <p className="text-center text-3xl text-white px-16">{text}</p>
            </div>
          </div>
        ))}
      </div>
     <a href="#leadform">
      <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black bg-white hover:bg-primary-600 hover:text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
        Get Free Quota
      </button>
      </a>
    </div>
  );
};

export default CarouselComponent;
