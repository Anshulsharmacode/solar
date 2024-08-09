import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const LogoGrid = () => {
  const logos = [
    { id: 1, name: "tata-logo.png", imageUrl: "/tata-logo.png" },
    {
      id: 2,
      name: "Adani-Logo-PNG-Cutout.png",
      imageUrl: "/Adani-Logo-PNG-Cutout.png",
    },
    {
      id: 3,
      name: "UTL-Solar-Logo-PNG.png",
      imageUrl: "/UTL-Solar-Logo-PNG.png",
    },
    {
      id: 4,
      name: "waaree-solar-logo.png",
      imageUrl: "/waaree-solar-logo.png",
    },
    { id: 5, name: "images.png", imageUrl: "/images.png" },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="p-16 bg-gray-100">
      <h2 className="text-center font-bold text-3xl mb-8">Our Partners</h2>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-16"
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div key={index} className="min-w-[20rem] min-h-[20rem]">
              <img
                src={logo.imageUrl}
                alt={logo.name}
                className="w-full h-full object-contain"
                height={"64px"}
                style={{ transition: "all 0.3s ease" }} // Added smooth transition
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoGrid;
