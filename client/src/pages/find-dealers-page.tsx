import React, { useState } from "react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

import DealerBanner from "../assets/DealerHS.png";
import HeroSection from "@/components/hero-section";
import DealerFilter from "@/components/dealer/dealer-filter";
import DealerCard from "@/components/dealer/dealer-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FilterIcon } from "@/components/icons";
import { useMobileDevice } from "@/hooks/useMobileDevice";
import { CustomPagination } from "@/components/ui/custom-pagination";

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
  const isMobile = useMobileDevice();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  const totalDealers = 134;
  const totalPages = Math.ceil(totalDealers / 10);

  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>(dealers);
  const itemsPerPage = 10;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
  };

  const getCurrentPageDealers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDealers.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can add additional logic here, like fetching new data
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
            {!isMobile ? (
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
            ) : null}

            {/* Dealers List */}
            <div>
              <h2 className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] text-black">
                <span className="text-[#AF8C32]">{totalDealers}</span> Car
                Dealers Found
              </h2>
              {isMobile ? (
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    marginBottom: "16px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={() => setIsFilterModalOpen(true)}
                >
                  <FilterIcon />{" "}
                  <span
                    style={{
                      fontFamily: "Gilroy-Medium",
                      fontWeight: 400,
                      fontSize: "17.56px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#595959",
                    }}
                  >
                    Filters
                  </span>
                </div>
              ) : null}

              <div className="p-4">
                <div className="space-y-4">
                  {getCurrentPageDealers()?.map((dealer) => (
                    <DealerCard key={dealer.id} dealer={dealer} />
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <CustomPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobile && (
        <Dialog open={isFilterModalOpen} onOpenChange={setIsFilterModalOpen}>
          <DialogContent
            style={{
              width: "90%",
              maxWidth: "297px",
              padding: "30px 20px",
              borderRadius: "12px",
              background: "#FFFFFF",
              boxShadow: "2px 2px 16px 1px #0000001A",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            className="sm:max-w-[425px]"
          >
            <DealerFilter
              onFilterChange={(filters) => {
                setZipCode(filters.zipCode);
                setMake(filters.make);
                setModel(filters.model);
                setBodyType(filters.bodyType);
                setCondition(filters.condition);
                setRating(filters.rating);
              }}
            />
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
}
