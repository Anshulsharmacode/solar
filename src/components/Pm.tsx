import React, { useEffect, useRef } from "react";
import {
  FaSun,
  FaHandsHelping,
  FaLeaf,
  FaCheckCircle,
  FaClipboardList,
  FaSolarPanel,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";

const PMSuryaGhar: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      id="pm-surya-scheme"
      className="min-h-screen bg-gradient-to-b from-primary-500/10 to-primary-500/30 py-16 px-0"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.section className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-4">
            PM Surya Ghar: Muft Bijli Yojana
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
            Imagine never paying an electricity bill again. With the PM Surya
            Ghar: Muft Bijli Yojana, this dream can become your reality.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-white rounded-lg shadow-xl p-6 sm:p-8"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-500">
                Why Choose PM Surya Ghar?
              </h2>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaSun className="text-primary-500 text-xl sm:text-2xl mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    <strong>Free Electricity for Life:</strong> Say goodbye to
                    monthly electricity bills!
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaHandsHelping className="text-primary-500 text-xl sm:text-2xl mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    <strong>Significant Government Savings:</strong> Helps the
                    government save Rs. 75,000 crore annually.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaLeaf className="text-primary-500 text-xl sm:text-2xl mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    <strong>Environmental Impact:</strong> Contribute to a
                    greener planet.
                  </span>
                </motion.li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <FaSolarPanel className="text-primary-500 text-6xl sm:text-7xl md:text-9xl" />
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-primary-500">
            Benefits Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 sm:p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-primary-500 flex items-center">
                <FaChartLine className="mr-4 flex-shrink-0" />
                Tailored Solar Capacity
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    0-150 Units: 1 – 2 kW system
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    150-300 Units: 2 – 3 kW system
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    300+ Units: Above 3 kW system
                  </span>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 sm:p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-primary-500 flex items-center">
                <FaFileAlt className="mr-4 flex-shrink-0" />
                Substantial Subsidy
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Up to 2 kW: Rs. 30,000/- per kW
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Additional up to 3 kW: Rs. 18,000/- per kW
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Total Cap for ≥3 kW: Rs 78,000
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 bg-primary-500 text-white rounded-lg shadow-xl p-6 sm:p-8 text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Eligibility and Requirements
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            If you are a homeowner with a valid proof of identity, address,
            electricity bill, and roof ownership certificate, you are eligible.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-white rounded-lg shadow-xl p-6 sm:p-8"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-primary-500">
                Hassle-Free Application Process
              </h2>
              <ol className="space-y-4">
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="bg-primary-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </span>
                  <span className="text-sm sm:text-base">
                    <strong>Online Registration:</strong> Visit the official
                    portal.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="bg-primary-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </span>
                  <span className="text-sm sm:text-base">
                    <strong>Login and Application:</strong> Fill out the online
                    form.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="bg-primary-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </span>
                  <span className="text-sm sm:text-base">
                    <strong>Approval and Installation:</strong> Wait for DISCOM
                    approval.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="bg-primary-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </span>
                  <span className="text-sm sm:text-base">
                    <strong>Commissioning and Subsidy:</strong> Get your subsidy
                    within 30 days.
                  </span>
                </motion.li>
              </ol>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/application-process.svg"
                alt="Application Process"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        <motion.div className="text-center" variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/register">
            <Button
              size="lg"
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-primary-500 hover:bg-primary-500/90 whitespace-normal h-auto"
            >
              <FaClipboardList className="mr-2 sm:mr-4 flex-shrink-0" />
              <span className="flex-grow">
                Join the PM Surya Ghar: Muft Bijli Yojana Today!
              </span>
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PMSuryaGhar;
