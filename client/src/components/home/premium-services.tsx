import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Car, TagIcon, Gavel } from "lucide-react";

export default function PremiumServices() {
  const services = [
    {
      icon: Car,
      title: "Buy it for Me",
      description: "Let our experts find and negotiate the perfect car for you, saving you time and money.",
      link: "/services/buy-for-me",
    },
    {
      icon: TagIcon,
      title: "Sell it for Me",
      description: "We handle the entire selling process from listing to negotiation, getting you the best possible price.",
      link: "/services/sell-for-me",
    },
    {
      icon: Gavel,
      title: "Bidding System",
      description: "Place bids on your favorite cars and negotiate prices directly with sellers through our platform.",
      link: "/services/bidding",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2 text-center font-montserrat">
          Our Premium Services
        </h2>
        <p className="text-neutral-600 text-center mb-10">
          Making car buying and selling easier for everyone
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2 font-montserrat">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <Button
                  variant="link"
                  className="text-primary font-medium p-0 hover:text-primary-light"
                >
                  Learn More <span className="ml-1">→</span>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
