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
      <div className="relative w-full bg-gradient-to-r from-neutral-900 to-neutral-800 py-12">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Trusted <span className="text-amber-500">Dealerships</span>, Endless
            Choices:
          </h1>
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Find Your Perfect Car!
          </h2>

          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between bg-white rounded-full shadow-md overflow-hidden pl-4 pr-2 py-1">
              <div className="flex items-center flex-grow">
                <SearchIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="What do you need help with?"
                  className="w-full border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 py-2 px-0"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="bg-green-800 hover:bg-green-900 rounded-full px-6 py-2 text-white ml-2"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 pr-0 md:pr-6">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-bold text-xl mb-4">Filters</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Label htmlFor="zipcode" className="text-sm font-medium">
                        ZIP Code
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="zipcode"
                        type="text"
                        placeholder="Enter ZIP code"
                        className="w-full"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Make</Label>
                    <Select value={make} onValueChange={setMake}>
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="ford">Ford</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="mercedes">
                            Mercedes-Benz
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Model</Label>
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="camry">Camry</SelectItem>
                          <SelectItem value="accord">Accord</SelectItem>
                          <SelectItem value="f150">F-150</SelectItem>
                          <SelectItem value="3series">3 Series</SelectItem>
                          <SelectItem value="cclass">C-Class</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Body Type</Label>
                    <Select value={bodyType} onValueChange={setBodyType}>
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select body type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="coupe">Coupe</SelectItem>
                          <SelectItem value="convertible">
                            Convertible
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Condition</Label>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="used"
                            name="condition"
                            className="w-4 h-4 accent-green-800"
                            checked={condition === "used"}
                            onChange={() => setCondition("used")}
                          />
                          <Label htmlFor="used" className="cursor-pointer ml-2">
                            Used
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="new"
                            name="condition"
                            className="w-4 h-4 accent-green-800"
                            checked={condition === "new"}
                            onChange={() => setCondition("new")}
                          />
                          <Label htmlFor="new" className="cursor-pointer ml-2">
                            New
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Customer Ratings
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rating5"
                          name="rating"
                          className="mr-2"
                          onClick={() => setRating("5")}
                        />
                        <label htmlFor="rating5" className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rating4"
                          name="rating"
                          className="mr-2"
                          onClick={() => setRating("4")}
                        />
                        <label htmlFor="rating4" className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                          <Star className="w-4 h-4 text-amber-500" />
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rating3"
                          name="rating"
                          className="mr-2"
                          onClick={() => setRating("3")}
                        />
                        <label htmlFor="rating3" className="flex">
                          {[...Array(3)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500" />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rating2"
                          name="rating"
                          className="mr-2"
                          onClick={() => setRating("2")}
                        />
                        <label htmlFor="rating2" className="flex">
                          {[...Array(2)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500" />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rating1"
                          name="rating"
                          className="mr-2"
                          onClick={() => setRating("1")}
                        />
                        <label htmlFor="rating1" className="flex">
                          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500" />
                          ))}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dealers List */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-amber-500">{totalDealers}</span> Car
                Dealers Found
              </h2>

              <div className="bg-gray-100 rounded-lg p-4">
                <div className="space-y-4">
                  {dealers.map((dealer) => (
                    <div
                      key={dealer.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <Link href={`/services/dealer/${dealer.id}`}>
                        <div className="flex p-4">
                          <div className="w-[203px] h-[161px] bg-neutral-800 rounded overflow-hidden relative mr-4">
                            <img src={CarDealer} alt="car-dealer" />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col">
                              <h3 className="font-bold text-lg text-gray-800">
                                {dealer.name}
                              </h3>
                              <div className="flex items-center mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(dealer.rating)
                                          ? "fill-amber-500 text-amber-500"
                                          : "text-amber-500"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="ml-1 text-gray-500 text-xs">
                                  ({dealer.reviewCount} Ratings)
                                </span>
                              </div>

                              <div className="flex items-center text-xs text-gray-500 mb-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                ZIP Code: {dealer.zipCode}
                              </div>

                              <div className="flex items-center text-xs text-gray-500 mb-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                                Phone: {dealer.phoneNumber}
                              </div>

                              <p className="text-xs text-gray-600 line-clamp-3">
                                {dealer.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
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
                    className="rounded w-8 h-8 bg-green-800 text-white hover:bg-green-900"
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
