import { GiStarFormation, GiSolarPower } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaMoneyCheckAlt, FaHammer } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { ReactNode } from "react";

interface featureItemInterface {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: featureItemInterface) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg min-w-48">
      <div className="mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Aditya Solar Solutions?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Item 1 */}
        <FeatureItem
          icon={<GiStarFormation className="text-4xl text-blue-500" />}
          title="Government Endorsement"
          description="As a government empanelled vendor, we uphold the highest standards of quality and reliability."
        />

        {/* Item 2 */}
        <FeatureItem
          icon={<FaHammer className="text-4xl text-blue-500" />}
          title="Seamless Experience"
          description="From initial consultation through installation to ongoing maintenance, we provide comprehensive end-to-end solutions, ensuring a hassle-free journey and top-tier support at every step."
        />

        {/* Item 3 */}
        <FeatureItem
          icon={<FaMoneyCheckAlt className="text-4xl text-blue-500" />}
          title="Easy Government Subsidies"
          description="We help you access and benefit from substantial Govt subsidies and simplified application processes under PM Surya Ghar Yojana."
        />

        {/* Item 4 */}
        <FeatureItem
          icon={<MdPeople className="text-4xl text-blue-500" />}
          title="Affordable and Easy EMI Options"
          description="Switch to solar with ease using our flexible 0% EMI financing options."
        />

        {/* Item 5 */}
        <FeatureItem
          icon={<GiSolarPower className="text-4xl text-blue-500" />}
          title="Peace of Mind"
          description="Every installation includes a 5-year professional maintenance plan for continued optimal performance."
        />

        {/* Item 6 */}
        <FeatureItem
          icon={
            <AiOutlineSafetyCertificate className="text-4xl text-blue-500" />
          }
          title="Robust and Safe"
          description="Our cyclone-proof installations withstand severe weather conditions, ensuring safety and durability."
        />

        {/* Item 7 */}
        <FeatureItem
          icon={<FaHammer className="text-4xl text-blue-500" />}
          title="Proven Excellence"
          description="A track record of successful projects, delivering top-notch solar solutions."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
