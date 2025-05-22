import React, { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock dealer cars data
const dealerCars = Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  make: ['Toyota', 'Honda', 'BMW', 'Audi'][index % 4],
  model: ['Corolla Altis', 'Civic RS', 'X3', 'Q5'][index % 4],
  year: 2023,
  price: 42000 + (index * 500),
  image: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1617814076449-2e97c0ffd9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  ][index % 4]
}));

export default function DealerCarsPage() {
  const carsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dealerCars.length / carsPerPage);
  
  const startIndex = (currentPage - 1) * carsPerPage;
  const visibleCars = dealerCars.slice(startIndex, startIndex + carsPerPage);
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Recent <span className="text-amber-500">Car</span> Listings</h1>
          
          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            {visibleCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                <div className="h-44 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.make} ${car.model}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded">
                    {car.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-900">{car.make} {car.model}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-base font-bold text-gray-900">Price: ${car.price.toLocaleString()}</p>
                    <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all hover:bg-green-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-1 py-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              <ChevronLeft className="w-4 h-4 -ml-2" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              // Calculate page numbers to show (always show 5 if possible, centered around current page)
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="icon"
                  className={`rounded-md w-8 h-8 ${
                    currentPage === pageNum
                      ? "bg-green-800 text-white hover:bg-green-900"
                      : "border-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </Button>
              );
            })}
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}