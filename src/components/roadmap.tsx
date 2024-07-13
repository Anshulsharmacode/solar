import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaMapMarkedAlt,
  FaFileAlt,
  FaHammer,
  FaPlug,
  FaLightbulb,
} from "react-icons/fa";

interface StepInterface {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const steps: StepInterface[] = [
  {
    title: "Complimentary Home Consultation",
    description:
      "Our expert will visit your home to conduct a thorough survey, answer all your questions, and create a tailored digital design of your solar system.",
    icon: <FaHome size={64} />,
  },
  {
    title: "Tailored Solar Plan & Dedicated Support",
    description:
      "Our team will design a customized solar proposal based on your unique needs with dedicated Project Manager support.",
    icon: <FaMapMarkedAlt size={64} />,
  },
  {
    title: "Streamlined Paperwork & Subsidy Support",
    description:
      "We handle all the paperwork, ensuring hassle-free coordination with local authorities and securing your subsidy effortlessly.",
    icon: <FaFileAlt size={64} />,
  },
  {
    title: "Seamless & Secure Installation Process",
    description:
      "Submit your advance payment, and our delivery vans will bring your rooftop system. Enjoy a tidy, professional installation.",
    icon: <FaHammer size={64} />,
  },
  {
    title: "Seamless Grid Integration",
    description:
      "We coordinate with the utility company to connect your system to the power grid and install a new electricity meter.",
    icon: <FaPlug size={64} />,
  },
  {
    title: "Activate Your New System",
    description:
      "Turn on your system to enjoy lower electricity bills and embrace an energy-independent future.",
    icon: <FaLightbulb size={64} />,
  },
];

const Step = ({
  title,
  description,
  icon,
  alignLeft,
  isVisible,
}: StepInterface & { alignLeft: boolean; isVisible: boolean }) => {
  return (
    <div
      className={`flex flex-col ${
        alignLeft ? "items-start text-left" : "items-end text-right"
      } p-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`text-white rounded-full p-4 mt-4 ${
          alignLeft ? "self-start" : "self-end"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const rect = step.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.75 && rect.bottom >= 0) {
            setVisibleSteps((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative pt-16 bg-blue-100 p-8 shadow-lg bg-primary-500">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 text-white">
        Making Solar Simple
      </h2>
      <h2 className="text-xl lg:text-3xl font text-center mb-4 text-white">
        Switching to solar can be overwhelming, but we make it easy. Here's how:
      </h2>
      <div className="relative text-gray-100">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-4 border-blue-500"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`flex flex-col items-center relative md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div
                className={`absolute w-4 h-4 bg-blue-500 rounded-full left-0 md:left-1/2 transform md:-translate-x-1/2`}
                style={{ top: `${index * 10 + 5}rem` }}
              ></div>
              <Step
                title={step.title}
                description={step.description}
                icon={step.icon}
                alignLeft={isMobile || index % 2 === 0}
                isVisible={visibleSteps[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
