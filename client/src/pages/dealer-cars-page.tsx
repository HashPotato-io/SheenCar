import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCards from "@/components/cards/car-cards";

// Mock dealer cars data
const dealerCars = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    make: ["Toyota", "Honda", "BMW", "Audi"][index % 4],
    model: ["Corolla Altis", "Civic RS", "X3", "Q5"][index % 4],
    year: 2023,
    price: 42000 + index * 500,
    image: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ][index % 4],
  }));

export default function DealerCarsPage() {
  const carsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dealerCars.length / carsPerPage);
  const { dealerId } = useParams();

  const startIndex = (currentPage - 1) * carsPerPage;
  const visibleCars = dealerCars.slice(startIndex, startIndex + carsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">
            Recent <span className="text-amber-500">Car</span> Listings
          </h1>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            {dealerId &&
              visibleCars?.map((car) => (
                <CarCards
                  key={car.id}
                  car={{
                    id: car.id,
                    make: car.make,
                    model: car.model,
                    year: car.year,
                    price: car.price,
                    image: car.image,
                  }}
                  linkUrl={`/services/dealer/${dealerId}/cars/${car.id}`}
                />
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
                      ? "bg-[#003A2F] text-white hover:bg-[#00251C]"
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
