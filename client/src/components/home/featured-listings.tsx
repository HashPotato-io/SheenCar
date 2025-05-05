import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import CarCard from "@/components/car/car-card";
import { Car } from "@shared/schema";

export default function FeaturedListings() {
  const { data: cars, isLoading, error } = useQuery<Car[]>({
    queryKey: ["/api/cars/featured"],
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-2 font-montserrat">Featured Listings</h2>
            <p className="text-neutral-600">Explore our hand-picked selection of quality vehicles</p>
          </div>
          <Link href="/search">
            <Button variant="link" className="text-primary hover:text-primary-light">
              View All <span className="ml-1">→</span>
            </Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">Failed to load featured listings. Please try again later.</p>
          </div>
        ) : cars && cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} featured />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p>No featured listings available at the moment.</p>
            <Link href="/post-ad">
              <Button className="mt-4">Post Your Ad</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
