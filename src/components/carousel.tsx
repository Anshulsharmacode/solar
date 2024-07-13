import { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  const carouselImages = [
    "/carousel/homeSetup.jpg",
    "/carousel/groupSetup.jpg",
    "/carousel/commercialSetup.jpg",
    "/carousel/commercialSetup1.jpg",
  ];

  const carouselTexts = [
    "The Sun is Free – Why Pay for Power?",
    "Your Roof, Our Care, End-to-End Solar Solutions, No Middlemen",
    "Save with PM Surya Ghar Yojana subsidies on solar installations. With 0% EMI and flexible financing options, think solar is out of reach? Think again!",
    "Introducing our cyclone-proof solar system! Our mounts are engineered to withstand heavy rains, fierce storms, and cyclones with wind speeds up to 170 km/h.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, carouselTexts.length]);

  return (
    <div className="w-screen h-screen bg-primary-900 relative overflow-hidden">
      {carouselImages.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 w-full h-full object-cover opacity-10 transition-transform duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "translate-x-0 opacity-60"
              : index === prevIndex
              ? "-translate-x-full opacity-60"
              : "translate-x-full opacity-0"
          }`}
          alt="Hero Image"
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full p-4 flex items-center justify-center">
        {carouselTexts.map((text, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index === prevIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="rounded-lg p-6">
              <p className="text-center text-xl lg:text-3xl text-white px-4 sm:px-8 md:px-16">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a href="/register">
        <button className="absolute bottom-24 lg:bottom-48 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black bg-white hover:bg-primary-600 hover:text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
          Get Free Quota
        </button>
      </a>
    </div>
  );
};

export default CarouselComponent;
