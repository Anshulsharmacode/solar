import React from "react";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaHandshake,
  FaMoneyBillWave,
  FaTools,
  FaShieldAlt,
  FaWrench,
  FaSun,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/path/to/john.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/path/to/jane.jpg" },
  { name: "Mike Johnson", role: "Lead Engineer", image: "/path/to/mike.jpg" },
  {
    name: "Sarah Brown",
    role: "Marketing Director",
    image: "/path/to/sarah.jpg",
  },
];

const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Introduction Section */}
      <motion.section variants={itemVariants} className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to Solar Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          India's fastest-growing solar system company and a proud certified
          vendor under the prestigious PM Surya Ghar Yojana. Our commitment to
          excellence and a proven track record of successful projects make us
          your ideal partner in embracing clean, affordable energy.
        </p>
      </motion.section>

      {/* Features Grid */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Our Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <FaSolarPanel className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">Our Promise</h3>
            <p className="text-gray-700">
              As a government-empanelled vendor, we uphold the highest standards
              of quality and reliability in every solar project we undertake,
              ensuring you get the best.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaSun className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Vision for the Future
            </h3>
            <p className="text-gray-700">
              Our vision is to democratize clean energy, making it accessible to
              every home and business across India. We are dedicated to driving
              a sustainable future powered by renewable energy.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaHandshake className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Benefit from PM Surya Ghar Yojana
            </h3>
            <p className="text-gray-700">
              Our certification highlights our commitment to quality and
              government-backed support. With the PM Surya Ghar Yojana, we offer
              substantial subsidies, making solar installations highly
              cost-effective for you.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaTools className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Seamless Experience
            </h3>
            <p className="text-gray-700">
              At Solar Solutions, we provide a hassle-free journey from initial
              consultation to ongoing maintenance. Our comprehensive end-to-end
              solutions ensure efficiency, reliability, and maximum energy
              savings for your home or business.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaMoneyBillWave className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Flexible Financing Options
            </h3>
            <p className="text-gray-700">
              Switching to solar is made easy and affordable with our 0% EMI
              financing plans. Invest in solar energy without financial strain
              and start enjoying immediate savings on your electricity bills.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaShieldAlt className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Cyclone-Proof, Safe Rooftop Solar
            </h3>
            <p className="text-gray-700">
              Our installations are engineered to withstand severe weather
              conditions, including storms and winds up to 170 km/h, ensuring
              safety and durability.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FaWrench className="text-5xl sm:text-6xl text-primary-500" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Professional Maintenance Included
            </h3>
            <p className="text-gray-700">
              Every installation includes a 5-year professional maintenance
              plan, giving you peace of mind and ensuring continued optimal
              performance of your solar system.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-base sm:text-lg">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section variants={itemVariants} className="text-center">
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Join Solar Solutions in embracing a sustainable future. Let us help
          you harness the power of the sun and achieve energy independence
          effortlessly with our reliable, high-quality solar solutions.
        </p>
        <Button
          size="lg"
          onClick={() => window.open("tel:+1234567890")}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base whitespace-normal h-auto"
        >
          Schedule Your Free Consultation Today
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;
