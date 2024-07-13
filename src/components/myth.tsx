import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SolarInfo = () => {
  const mythsAndFacts = [
    {
      myth: "Solar panels don't work in cloudy or cold climates.",
      fact: "Solar panels can still generate electricity even on cloudy days. While they are most efficient in direct sunlight, modern solar panels can still produce power in diffused light and colder temperatures.",
    },
    {
      myth: "Solar panels are too expensive and not worth the investment.",
      fact: "While solar panel installation can have upfront costs, they can significantly reduce electricity bills over their lifetime. Many governments offer incentives and subsidies to offset installation costs, making solar more affordable.",
    },
    {
      myth: "Solar panels require a lot of maintenance.",
      fact: "Solar panels are generally low-maintenance. They have no moving parts and are designed to withstand various weather conditions. Occasional cleaning to remove dust and debris is usually sufficient.",
    },
    {
      myth: "Solar panels are not reliable and have a short lifespan.",
      fact: "Most solar panels come with warranties of 25 years or more, and they can continue to generate electricity for decades beyond that. Properly installed panels are durable and reliable.",
    },
    {
      myth: "Solar energy is only for environmental enthusiasts, not for practical use.",
      fact: "Solar energy offers practical benefits beyond environmental advantages. It can significantly reduce or eliminate electricity bills, provide energy independence, and increase property value.",
    },
    {
      myth: "Solar panels are not aesthetically pleasing and will detract from the home's appearance.",
      fact: "Solar panels are available in various designs and colors to blend with different roof types and aesthetics. They can even enhance a home's value and curb appeal.",
    },
    {
      myth: "Solar panels will make my home less energy-efficient or lead to higher electricity costs.",
      fact: "Solar panels are designed to integrate seamlessly with the grid, allowing homeowners to use solar energy when it's available and draw from the grid when needed. This typically leads to overall energy savings.",
    },
    {
      myth: "Installing solar panels is complicated and disrupts daily life.",
      fact: "Solar panel installation is typically straightforward and can be completed within a few days, depending on the system size. Reputable installers minimize disruption to daily routines.",
    },
  ];

  return (
    <div className="bg-primary-500 p-8 md:p-16 pt-16 lg:p-24">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-white">
        Still have doubts about solar system?
      </h2>
      <h2 className="text-xl lg:text-3xl text-center mb-16 text-white">
        Let's debunk the myths and reveal the truth!
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {mythsAndFacts.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-4 bg-white rounded-lg shadow-md"
          >
            <AccordionTrigger className="px-6 py-4 text-l lg:text-xl font-semibold text-red-500 hover:text-red-600">
              Myth: {item.myth}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700 text-l">
              <strong className="text-green-600">Fact:</strong> {item.fact}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SolarInfo;
