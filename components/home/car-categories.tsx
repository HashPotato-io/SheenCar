import Link from "next/link";
import { Car, Truck, Zap, Crown } from "lucide-react";

export default function CarCategories() {
  const categories = [
    {
      name: "Sedans",
      icon: Car,
      description: "Comfortable and efficient",
      href: "/search?category=sedan"
    },
    {
      name: "SUVs",
      icon: Truck,
      description: "Spacious and versatile",
      href: "/search?category=suv"
    },
    {
      name: "Electric",
      icon: Zap,
      description: "Eco-friendly driving",
      href: "/search?category=electric"
    },
    {
      name: "Luxury",
      icon: Crown,
      description: "Premium experience",
      href: "/search?category=luxury"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect vehicle for your lifestyle and needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                  <Icon className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}