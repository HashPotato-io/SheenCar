import { Link } from "wouter";
import { carTypes } from "@/lib/car-types";

export default function CarCategories() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2 text-center font-montserrat">
          Browse by Type
        </h2>
        <p className="text-neutral-600 text-center mb-10">
          Find the perfect vehicle for your needs
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {carTypes.map((type) => (
            <Link key={type.id} href={`/search?type=${type.id}`}>
              <div className="car-type-icon text-center cursor-pointer">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <type.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="text-neutral-800 font-medium">{type.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
