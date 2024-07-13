import { GiStarFormation, GiSolarPower } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaMoneyCheckAlt, FaHammer } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { ReactNode, useEffect, useState, useRef } from "react";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";

interface featureItemInterface {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: featureItemInterface) => {
  return (
    <div className="flex flex-col items-left p-4 bg-white shadow-md rounded-lg h-full">
      <div className="mr-4 flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedWhyUs");
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem("hasVisitedWhyUs", "true");
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div
      className="bg-primary-500 p-4 sm:p-8 md:p-16 lg:p-24 justify-center"
      ref={ref}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-white pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 2 }}
      >
        Why Choose Aditya Solar Solutions?
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            icon: (
              <HiMiniBuildingOffice2 className="text-3xl sm:text-4xl text-blue-500" />
            ),
            title: "Government Endorsement",
            description:
              "As a government empanelled vendor, we uphold the highest standards of quality and reliability.",
          },
          {
            icon: (
              <FaMoneyCheckAlt className="text-3xl sm:text-4xl text-blue-500" />
            ),
            title: "Easy Government Subsidies",
            description:
              "We help you access and benefit from substantial Govt subsidies and simplified application processes under PM Surya Ghar Yojana.",
          },
          {
            icon: <MdPeople className="text-3xl sm:text-4xl text-blue-500" />,
            title: "Affordable and Easy EMI Options",
            description:
              "Switch to solar with ease using our flexible 0% EMI financing options.",
          },
          {
            icon: (
              <GiSolarPower className="text-3xl sm:text-4xl text-blue-500" />
            ),
            title: "Peace of Mind",
            description:
              "Every installation includes a 5-year professional maintenance plan for continued optimal performance.",
          },
          {
            icon: (
              <AiOutlineSafetyCertificate className="text-3xl sm:text-4xl text-blue-500" />
            ),
            title: "Robust and Safe",
            description:
              "Our cyclone-proof installations withstand severe weather conditions, ensuring safety and durability.",
          },
          {
            icon: <FaHammer className="text-3xl sm:text-4xl text-blue-500" />,
            title: "Proven Excellence",
            description:
              "A track record of successful projects, delivering top-notch solar solutions.",
          },
        ].map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <FeatureItem
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col items-left p-4 mt-4 bg-white shadow-md rounded-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="mr-4 flex-shrink-0">
          <FaHammer className="text-3xl sm:text-4xl text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Seamless Experience</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            From initial consultation through installation to ongoing
            maintenance, we provide comprehensive end-to-end solutions, ensuring
            a hassle-free journey and top-tier support at every step.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
