"use client"

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedListings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const featuredCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2024,
      price: 28500,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "Chicago, IL"
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      year: 2023,
      price: 26800,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "New York, NY"
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      year: 2024,
      price: 42000,
      image: "https://images.unsplash.com/photo-1558986377-c44f6a2b50d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "Dallas, TX"
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2024,
      price: 38990,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "Los Angeles, CA"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, featuredCars.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured <span className="text-amber-500">Listings</span>
            </h2>
            <p className="text-gray-600">
              Hand-picked vehicles from trusted sellers
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-green-800 text-white hover:bg-green-900 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= featuredCars.length - 3}
              className="p-2 rounded-full bg-green-800 text-white hover:bg-green-900 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCars.slice(currentIndex, currentIndex + 3).map((car) => (
            <Link key={car.id} href={`/cars/${car.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {car.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{car.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-800">
                      ${car.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">View Details</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/search">
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition-colors">
              View All Listings
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}