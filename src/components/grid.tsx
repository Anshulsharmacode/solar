import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaCity,
  FaHome,
  FaBatteryFull,
  FaCheck,
  FaTimes,
  FaUser,
} from "react-icons/fa";

interface SolarSystemCardProps {
  title: string;
  description: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  icon: React.ReactElement;
  color: string;
}

const Typography: React.FC<{
  variant: string;
  className?: string;
  children: React.ReactNode;
}> = ({ variant, className, children }) => {
  const baseClass = "text-gray-900";
  const variantClasses = {
    h2: "text-3xl md:text-4xl font-bold",
    h6: "text-lg md:text-xl font-semibold",
  };
  return (
    <div
      className={`${baseClass} ${
        variantClasses[variant as keyof typeof variantClasses]
      } ${className}`}
    >
      {children}
    </div>
  );
};

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="space-y-2">{children}</ul>;
};

const ListItem: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <li className={`flex items-center ${className}`}>{children}</li>;
};

const SolarSystemCardComponent: React.FC<SolarSystemCardProps> = ({
  title,
  description,
  bestFor,
  pros,
  cons,
  icon,
  
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500 flex items-center justify-center mb-4 mx-auto">
          {React.cloneElement(icon, { size: 32, color: "white" })}
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Typography variant="h6" className="mt-4 mb-2">
          Best For:
        </Typography>
        <List>
          {bestFor.map((item, index) => (
            <ListItem key={index} className="text-sm md:text-base">
              <FaUser className="mr-2 text-primary-500" />
              <span>{item}</span>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" className="mt-4 mb-2">
          Pros:
        </Typography>
        <List>
          {pros.map((item, index) => (
            <ListItem key={index} className="text-sm md:text-base">
              <FaCheck className="mr-2 text-green-500" />
              <span>{item}</span>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" className="mt-4 mb-2">
          Cons:
        </Typography>
        <List>
          {cons.map((item, index) => (
            <ListItem key={index} className="text-sm md:text-base">
              <FaTimes className="mr-2 text-red-500" />
              <span>{item}</span>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary-500 text-sm md:text-base">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

const SolarSystemCard: React.FC = () => {
  const solarSystems: SolarSystemCardProps[] = [
    {
      title: "On-Grid Solar System",
      description:
        "Connected to the public electricity grid. Uses solar power during the day and draws power from the grid when solar power is insufficient.",
      bestFor: [
        "Urban and Suburban Homes",
        "Businesses",
        "Cost-Conscious Customers",
      ],
      pros: [
        "Lower initial cost",
        "Earn credits for excess power",
        "Reliable power supply with grid backup",
      ],
      cons: ["No power during grid outages", "Dependent on the public grid"],
      icon: <FaCity />,
      color: "#4CAF50",
    },
    {
      title: "Off-Grid Solar System",
      description:
        "Completely independent of the public electricity grid. Uses solar panels and battery storage to provide power.",
      bestFor: [
        "Remote Areas",
        "Sustainable Living",
        "Resilience Against Outages",
      ],
      pros: [
        "Complete energy independence",
        "No electricity bills",
        "Resilient to grid outages",
      ],
      cons: ["Higher initial cost due to battery storage and backup systems"],
      icon: <FaHome />,
      color: "#2196F3",
    },
    {
      title: "Hybrid Solar System",
      description:
        "Combines on-grid and off-grid systems. Connected to the grid but also has battery storage.",
      bestFor: [
        "Homes and Businesses in areas with occasional power outages",
        "Energy Savers",
        "Future-Proofing",
      ],
      pros: [
        "Backup power during outages",
        "Optimizes solar energy usage",
        "Can earn credits for excess power",
      ],
      cons: [
        "Higher initial cost due to battery storage",
        "More complex installation and maintenance",
      ],
      icon: <FaBatteryFull />,
      color: "#FF9800",
    },
  ];

  return (
    <div className="bg-primary-100 p-4 md:p-12">
      <Typography variant="h2" className="text-center mb-6 md:mb-8">
        Choose Your Solar System
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {solarSystems.map((system, index) => (
          <SolarSystemCardComponent key={index} {...system} />
        ))}
      </div>
    </div>
  );
};

export default SolarSystemCard;
