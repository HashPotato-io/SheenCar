import React, { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CarDealer from "../assets/car-dealer.png";
import DealerBanner from "../assets/DealerHS.png";
import HeroSection from "@/components/hero-section";
import DealerFilter from "@/components/dealer/dealer-filter";
import DealerCard from "@/components/dealer/dealer-card";

interface Dealer {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  premium: boolean;
  certified: boolean;
  description: string;
  location: string;
  zipCode: string;
  phoneNumber: string;
  websiteUrl: string;
  isOpen: boolean;
  hoursToday: string;
}

const dealers: Dealer[] = [
  {
    id: 1,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description:
      "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM",
  },
  {
    id: 2,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description:
      "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM",
  },
  {
    id: 3,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description:
      "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM",
  },
  {
    id: 4,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description:
      "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM",
  },
];

export default function FindDealersPage() {
  const [condition, setCondition] = useState<"used" | "new">("used");
  const [zipCode, setZipCode] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [bodyType, setBodyType] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalDealers = 134;
  const totalPages = Math.ceil(totalDealers / 10);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Dealer Search */}
      <HeroSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        headingContent={
          <>
            <div className="flex justify-center items-center w-full">
              <div className="w-[926px] font-['Gilroy-SemiBold'] font-normal text-[50px] leading-[100%] tracking-[-0.01em] text-center text-white">
                Find Your <span style={{ color: "#AF8C32" }}>Perfect Ride</span>{" "}
                – Search, Buy, and Drive Away!
              </div>
            </div>
          </>
        }
        bgImage={DealerBanner}
      />

      {/* Main Content Area */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-[20px]">
            {/* Filters Sidebar */}
            <div>
              <DealerFilter 
                onFilterChange={(filters) => {
                  // Handle filter changes here
                  setZipCode(filters.zipCode);
                  setMake(filters.make);
                  setModel(filters.model);
                  setBodyType(filters.bodyType);
                  setCondition(filters.condition);
                  setRating(filters.rating);
                }} 
              />
            </div>

            {/* Dealers List */}
            <div>
              <h2 className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] text-black">
                <span className="text-[#AF8C32]">{totalDealers}</span> Car
                Dealers Found
              </h2>

              <div className="p-4">
                <div className="space-y-4">
                  {dealers.map((dealer) => (
                    <DealerCard key={dealer.id} dealer={dealer} />
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 text-gray-500"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    «
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 text-gray-500"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    ‹
                  </Button>
                  <Button
                    variant="default"
                    size="icon"
                    className="rounded w-8 h-8 bg-[#003A2F] text-white hover:bg-[#00251C]"
                    onClick={() => setCurrentPage(1)}
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 bg-gray-100"
                    onClick={() => setCurrentPage(2)}
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 bg-gray-100"
                    onClick={() => setCurrentPage(3)}
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 bg-gray-100"
                    onClick={() => setCurrentPage(4)}
                  >
                    4
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 text-gray-500"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                  >
                    ›
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded w-8 h-8 border-gray-200 text-gray-500"
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    »
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
