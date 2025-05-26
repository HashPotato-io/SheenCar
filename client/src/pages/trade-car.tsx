import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CarFilter from "@/components/car/car-filter";
import SearchResults from "@/components/search/search-results";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCards from "@/components/cards/car-cards";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import HeroSection from "@/components/hero-section";

// Add this type definition above your component if not already defined elsewhere:
type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  sellerId: number;
};

export default function TradeCar() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  // Mock data for demonstration
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2022,
      price: 24000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 101,
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 21000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400", // replaced with Toyota Camry image
      sellerId: 102,
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: 35000,
      image:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=400",
      sellerId: 103,
    },
    {
      id: 4,
      make: "BMW",
      model: "3 Series",
      year: 2022,
      price: 41000,
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=400",
      sellerId: 104,
    },
    {
      id: 5,
      make: "Audi",
      model: "A4",
      year: 2021,
      price: 39000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 105,
    },
    {
      id: 6,
      make: "Mercedes",
      model: "C-Class",
      year: 2022,
      price: 42000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 106,
    },
    {
      id: 7,
      make: "Hyundai",
      model: "Elantra",
      year: 2020,
      price: 18000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 107,
    },
    {
      id: 8,
      make: "Kia",
      model: "Optima",
      year: 2021,
      price: 20000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 108,
    },
    {
      id: 9,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 48000,
      image:
        "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&w=400",
      sellerId: 109,
    },
    {
      id: 10,
      make: "Volkswagen",
      model: "Passat",
      year: 2020,
      price: 23000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 110,
    },
    {
      id: 11,
      make: "Mazda",
      model: "Mazda3",
      year: 2021,
      price: 21000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 111,
    },
    {
      id: 12,
      make: "Chevrolet",
      model: "Malibu",
      year: 2022,
      price: 22000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 112,
    },
    {
      id: 13,
      make: "Nissan",
      model: "Altima",
      year: 2021,
      price: 21000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 113,
    },
    {
      id: 14,
      make: "Subaru",
      model: "Impreza",
      year: 2020,
      price: 19000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 114,
    },
    {
      id: 15,
      make: "Lexus",
      model: "IS",
      year: 2022,
      price: 38000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 115,
    },
    {
      id: 16,
      make: "Toyota",
      model: "Corolla",
      year: 2021,
      price: 17000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 116,
    },
    {
      id: 17,
      make: "Honda",
      model: "Accord",
      year: 2022,
      price: 25000,
      image:
        "https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg?auto=compress&w=400",
      sellerId: 117,
    },
    {
      id: 18,
      make: "Ford",
      model: "Fusion",
      year: 2020,
      price: 20000,
      image:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=400",
      sellerId: 118,
    },
    {
      id: 19,
      make: "BMW",
      model: "5 Series",
      year: 2021,
      price: 52000,
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=400",
      sellerId: 119,
    },
    {
      id: 20,
      make: "Audi",
      model: "A6",
      year: 2022,
      price: 57000,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
      sellerId: 120,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(cars.length / pageSize);
  const paginatedCars = cars.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Add handleSearchSubmit function
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement search logic here
    // For now, just log the input
    console.log("Search:", searchInput);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        headingContent={
          <>
            <div
              className="text-center mb-2"
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                fontSize: "50px",
                lineHeight: "100%",
                letterSpacing: "-1%",
                color: "#FFFFFF",
              }}
            >
              Best Cars Available for{" "}
              <span style={{ color: "#AF8C32" }}>Trade</span>, Find <br />
              what suites you!, Endless Choices:
            </div>
          </>
        }
      />
      <main className="flex-1 bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setFilterVisible(!filterVisible)}
              className="w-full"
            >
              {filterVisible ? (
                <>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Hide Filters
                </>
              ) : (
                <>
                  <ChevronRight className="mr-2 h-4 w-4" /> Show Filters
                </>
              )}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div
              className={`lg:w-1/4 ${
                filterVisible ? "block" : "hidden"
              } lg:block`}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 font-montserrat">
                  Filters
                </h2>
                <CarFilter />
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-6">
                  <span className="text-amber-500">24</span> Cars Listed Under
                  Trade
                </h1>
                <div className="flex gap-4 flex-wrap -mx-2">
                  {paginatedCars?.map((car) => (
                    <CarCards
                      key={car?.id}
                      car={{
                        id: car.id,
                        make: car.make,
                        model: car.model,
                        year: car.year,
                        price: car.price,
                        image: car.image,
                        sellerId: car.sellerId,
                      }}
                      linkUrl={`/trade-car/sellers/${car?.sellerId}/cars/${car?.id}`}
                      small
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
                  {Array.from({ length: Math.min(5, totalPages) }).map(
                    (_, i) => {
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
                          variant={
                            currentPage === pageNum ? "default" : "outline"
                          }
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
                    }
                  )}
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
