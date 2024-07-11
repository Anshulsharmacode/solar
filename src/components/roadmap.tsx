interface stepInterface {
  title: string;
  description: string;
}

const Step = ({ title, description }: stepInterface) => {
  return (
    <div className="flex-row w-full">
        <div className="w-auto" ></div>
        <div className="w-60 bg-gray-500"></div>
        <div className="w-auto">  <h2>{title}</h2>
        <p>{description}</p>  </div>
            
        
        
      
     </div>
  );
};

const Roadmap = () => {
  return (
    <div className="max-w-4xl mt-32 mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Making Solar Simple
      </h2>

      <Step
        title="Complimentary Home Consultation"
        description="Our expert will visit your home to conduct a thorough survey, answer all your questions, and create a tailored digital design of your solar system. Schedule Your Free Consultation Today"
      />

      <Step
        title="Tailored Solar Plan & Dedicated Support"
        description="Our team will design a customized solar proposal based on your unique needs. You’ll also have a dedicated Project Manager to address your queries and keep you informed every step of the way."
      />

      <Step
        title="Streamlined Paperwork & Subsidy Support"
        description="We handle all the paperwork from start to finish, ensuring hassle-free coordination with local authorities and securing your government subsidy effortlessly."
      />

      <Step
        title="Seamless & Secure Installation Process"
        description="Submit your advance payment, and our sleek delivery vans will promptly bring your rooftop system. Experience a swift, tidy, and professional installation from start to finish."
      />

      <Step
        title="Seamless Grid Integration"
        description="We handle all coordination with the utility company to connect your system to the power grid and install a new electricity meter, ensuring a smooth and hassle-free process."
      />

      <Step
        title="Activate Your New System"
        description="Turn on your system to enjoy lower electricity bills and embrace an energy-independent future."
      />
    </div>
  );
};

export default Roadmap;
