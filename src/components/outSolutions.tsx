import React, { useState } from "react";
import { motion } from "framer-motion";

const OutSolutions: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    { image: "/carousel/home.jpg", name: "Homes" },
    { image: "/carousel/building.jpg", name: "Housing Society" },
    { image: "/carousel/commer.jpg", name: "Commercial " },
  ];

  return (
    <div className="bg-primary-100 p-8 py-24 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary-500">
        Our Solutions
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer w-full md:w-1/3"
            animate={{
              flex: hoveredIndex === index ? 2 : 1,
              transition: { duration: 0.3 },
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div
              className="h-[300px] md:h-[500px] w-full bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${solution.image})` }}
            />
            <div className="mt-4 text-center text-primary-500 font-semibold text-xl md:text-2xl">
              {solution.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OutSolutions;
