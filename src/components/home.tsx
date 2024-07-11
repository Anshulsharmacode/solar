import React from "react";
import CarouselComponent from "./carousel";
import LeadForm from "./leadForm";
import WhyChooseUs from "./whyUs";
import Roadmap from "./roadmap";
import FAQAccordion from "./faq";
import Footer from "./footer";
import LogoGrid from "./logoGrid";
import Pm from "./Pm"

const Home: React.FC = () => {
  return (
    <div>
      <CarouselComponent />
      
      <LeadForm />
      <LogoGrid />
      <WhyChooseUs />
      <Roadmap />
      <Pm/>
      <FAQAccordion />
      <Footer />
    </div>
  );
};

export default Home;
