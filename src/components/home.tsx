import React from "react";
import CarouselComponent from "./carousel";
import LeadForm from "./leadForm";
import WhyChooseUs from "./whyUs";
import Roadmap from "./roadmap";
import FAQAccordion from "./faq";

import LogoGrid from "./logoGrid";
import Pm from "./Pm";
import SolarInfo from "./myth";
import SolarSystemCard from "./grid";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import OutSolutions from "./outSolutions";
import CustomerTestimonials from "./hear"
const Home: React.FC = () => {
  return (
    <div>
      <CarouselComponent />
      <OutSolutions />
      <LeadForm />
      <LogoGrid />
      <WhyChooseUs />
      <div
        className="h-64"
        style={{
          backgroundImage: `url("/carousel/groupSetup.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "top left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Roadmap />
      <Pm />
      <SolarSystemCard />
      <CustomerTestimonials/>
      <SolarInfo />
      
      <FAQAccordion />
      <LeadForm />
    </div>
  );
};

export default Home;
