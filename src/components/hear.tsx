import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      testimonial:
        "Achieved energy independence and saved significantly on energy costs. The solar system has been a game-changer for our household!",
    },
    {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      testimonial:
        "The installation process was smooth, and the ongoing support has been excellent. I'm impressed with the energy savings!",
    },
    {
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      testimonial:
        "Transformed our energy experience with these solar systems. The team was professional, and the results exceeded our expectations.",
    },
  ];

  return (
    <div className="bg-primary-500 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hear from Our Happy Customers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our solar systems have transformed the energy experience for
            countless households. Read these real stories from our satisfied
            customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white h-full transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-semibold mb-2 text-primary-600">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
