import Link from "next/link";
import { Shield, Calculator, History, Users } from "lucide-react";

export default function PremiumServices() {
  const services = [
    {
      name: "Vehicle History Reports",
      description: "Get detailed history and accident reports",
      icon: History,
      href: "/services/history"
    },
    {
      name: "Finance Calculator",
      description: "Calculate monthly payments and loan options",
      icon: Calculator,
      href: "/services/calculator"
    },
    {
      name: "Warranty Protection",
      description: "Extended warranty options for peace of mind",
      icon: Shield,
      href: "/services/warranty"
    },
    {
      name: "Dealer Network",
      description: "Connect with certified dealers nationwide",
      icon: Users,
      href: "/dealers"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Premium <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Additional tools and services to help you make the right decision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-gray-50 rounded-lg p-6 hover:bg-green-50 transition-colors border hover:border-green-200"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                    <Icon className="h-8 w-8 text-green-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}