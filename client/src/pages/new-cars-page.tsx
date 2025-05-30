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
import NewCarsBanner from "../assets/newcarsHS.png";
import CarListing from "@/components/CarListing";

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

export default function NewCars() {
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
              className="text-center mb-2 mx-auto"
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "100%",
                letterSpacing: "-1%",
                color: "#FFFFFF",
                width: "788px",
              }}
            >
              Drive the Future: Explore the Latest{" "}
              <span style={{ color: "#AF8C32" }}>New Cars</span>Today!
            </div>
          </>
        }
        bgImage={NewCarsBanner}
      />
      <CarListing
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
        cars={cars}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        carsCount={
          <>
            <span className="text-amber-500">134</span> Cars Listed Under New
            Cars
          </>
        }
      />
      <Footer />
    </div>
  );
}
