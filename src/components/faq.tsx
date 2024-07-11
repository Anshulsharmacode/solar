import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const FAQAccordion = () => {
  const faqData = [
    {
      question: "What is an on-grid solar system?",
      answer:
        "An on-grid solar system is a solar power setup that is connected to the public electricity grid. It allows you to use solar power during the day and draw electricity from the grid when solar power is insufficient.",
    },
    {
      question: "How does an on-grid solar system work?",
      answer:
        "Solar panels convert sunlight into electricity, which powers your home or business. Any excess power is sent back to the grid, and you can earn credits or payments for this surplus energy.",
    },
    {
      question: "What are the benefits of installing an on-grid solar system?",
      answer:
        "Benefits include reduced electricity bills, potential earnings from surplus power, environmental impact reduction, and eligibility for government subsidies.",
    },
    {
      question: "How much roof space do I need for solar panels?",
      answer:
        "The space required depends on the size of the solar system. On average, a 1kW system needs about 100 square feet of space.",
    },
    {
      question: "What is net metering, and how does it work?",
      answer:
        "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If you generate more electricity than you use, the excess is sent to the grid, and you receive credits on your electricity bill.",
    },
    {
      question: "Can solar panels work during power outages?",
      answer:
        "On-grid solar systems do not provide power during outages for safety reasons unless paired with a battery backup system.",
    },
    {
      question: "How much does an on-grid solar system cost?",
      answer:
        "The cost depends on the size and type of the system. Generally, prices range from ₹30000 to ₹1,50,000 per kW, including installation.",
    },
    {
      question:
        "Are there any government subsidies available for solar installations?",
      answer:
        "Yes, the government offers subsidies for residential solar installations, which can cover up to 30% of the installation cost.",
    },
    {
      question:
        "What financing options are available for installing solar systems?",
      answer:
        "Many banks and financial institutions offer loans for solar installations at attractive interest rates. We at Aditya Solar Solutions provide end-to-end low-cost financing options with easy EMI.",
    },
    {
      question: "How long does it take to install a solar system?",
      answer:
        "Installation typically takes 2 to 5 days, depending on the system size and complexity.",
    },
    {
      question: "What kind of maintenance is required for solar panels?",
      answer:
        "Solar panels require minimal maintenance, mainly cleaning to remove dust and debris. Annual inspections by a professional are also recommended.",
    },
    {
      question: "What is the lifespan of a solar panel?",
      answer:
        "Solar panels typically have a lifespan of 25 to 30 years, with a gradual reduction in efficiency over time.",
    },
    {
      question: "Is Bihar a good location for solar energy?",
      answer:
        "Yes, Patna receives ample sunlight throughout the year. It lies just above the Tropic of Cancer, making it an ideal location for solar energy generation.",
    },
    {
      question: "How can I apply for government subsidies in Patna?",
      answer:
        "We provide end-to-end support to avail government subsidies. You just need to have basic documents.",
    },
    {
      question:
        "What are the local regulations for installing solar panels in Patna?",
      answer:
        "Local regulations include obtaining necessary permissions from the municipal authority and ensuring compliance with building codes. We take care of all these from our end.",
    },
    {
      question: "Can I sell excess electricity back to the grid in Patna?",
      answer:
        "Yes, through the net metering policy, you can sell excess electricity back to the grid and receive credits on your electricity bill.",
    },
    {
      question: "What warranties are available for solar panels and inverters?",
      answer:
        "Most solar panels come with a 25-year performance warranty, and inverters typically have a warranty of 5 to 10 years.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ's</h2>

      <Accordion type="multiple">
        {faqData.map((faq, index) => (
          <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
