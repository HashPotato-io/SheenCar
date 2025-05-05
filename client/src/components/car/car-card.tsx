import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car } from "@shared/schema";
import { Gauge, Fuel, Settings, Eye } from "lucide-react";

interface CarCardProps {
  car: Car;
  featured?: boolean;
  premium?: boolean;
}

export default function CarCard({ car, featured, premium }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={car.images?.[0] || "https://via.placeholder.com/400x240?text=No+Image"} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary">
            Featured
          </Badge>
        )}
        {premium && (
          <Badge className="absolute top-2 right-2 bg-secondary text-black">
            Premium
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-montserrat font-bold text-lg text-neutral-800">
          {car.make} {car.model}
        </h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-neutral-600">{car.year}</span>
          <span className="font-bold text-primary">${car.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-sm text-neutral-600 mt-3 space-x-4">
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1" />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center">
            <Settings className="h-4 w-4 mr-1" />
            <span>{car.transmission}</span>
          </div>
        </div>
        <Link href={`/cars/${car.id}`}>
          <Button className="w-full mt-4 flex items-center justify-center">
            <Eye className="h-4 w-4 mr-2" /> View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
