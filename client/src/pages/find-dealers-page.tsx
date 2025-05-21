import React, { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
    description: "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM"
  },
  {
    id: 2,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description: "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM"
  },
  {
    id: 3,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description: "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM"
  },
  {
    id: 4,
    name: "Prestige Auto Gallery",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    premium: true,
    certified: true,
    description: "Prestige Auto Gallery is your premier destination for luxury vehicles. We offer a curated selection of high-end cars, from sleek sedans to powerful SUVs, all meticulously inspected to ensure top quality. Our knowledgeable staff is dedicated to providing an exceptional car-buying experience, guiding you through every step with personalized service.",
    location: "Chicago, IL",
    zipCode: "60210",
    phoneNumber: "(312) 555-7890",
    websiteUrl: "https://prestigeautogallery.com",
    isOpen: true,
    hoursToday: "9:00 AM - 7:00 PM"
  }
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
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Dealer Search */}
      <div className="relative w-full bg-gradient-to-r from-neutral-900 to-neutral-800 py-12">
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Trusted <span className="text-amber-500">Dealerships</span>, Endless Choices:
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
              <Button type="submit" className="bg-green-800 hover:bg-green-900 rounded-full px-6 py-2 text-white ml-2">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="w-full md:w-64 pr-0 md:pr-6">
              <div className="text-xl font-semibold text-neutral-800 mb-4">
                <span className="text-amber-500">{totalDealers}</span> Car Dealers Found
              </div>
              
              {/* Filters Sidebar */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-bold text-lg mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <Label htmlFor="zipcode" className="text-sm font-medium">ZIP Code</Label>
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
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
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
                          <SelectItem value="convertible">Convertible</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Condition</Label>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input type="radio" id="used" name="condition" className="w-4 h-4 accent-green-800" 
                            checked={condition === "used"} 
                            onChange={() => setCondition("used")} 
                          />
                          <Label htmlFor="used" className="cursor-pointer ml-2">Used</Label>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input type="radio" id="new" name="condition" className="w-4 h-4 accent-green-800" 
                            checked={condition === "new"} 
                            onChange={() => setCondition("new")} 
                          />
                          <Label htmlFor="new" className="cursor-pointer ml-2">New</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Customer Ratings</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="rating5" name="rating" className="mr-2" onClick={() => setRating("5")} />
                        <label htmlFor="rating5" className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="rating4" name="rating" className="mr-2" onClick={() => setRating("4")} />
                        <label htmlFor="rating4" className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                          <Star className="w-4 h-4 text-amber-500" />
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="rating3" name="rating" className="mr-2" onClick={() => setRating("3")} />
                        <label htmlFor="rating3" className="flex">
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500" />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="rating2" name="rating" className="mr-2" onClick={() => setRating("2")} />
                        <label htmlFor="rating2" className="flex">
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500" />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="rating1" name="rating" className="mr-2" onClick={() => setRating("1")} />
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
            <div className="flex-1 bg-gray-100 rounded-lg p-4">
              <div className="space-y-4">
                {dealers.map((dealer) => (
                  <div key={dealer.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="flex p-4">
                      <div className="w-24 h-24 bg-neutral-800 rounded overflow-hidden relative mr-4">
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-16 text-white" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M171.3 96H224v96H111.3l30.4-96h29.6zM272 192V96h81.2c9.7 0 16.8 8.8 17.2 18.5l4 96h-102.4zm170.2 0l-3.2-77.3c-.8-14.8-13.1-26.7-28-26.7H351.3l4.8 104H442.2zm39.7 0h-19.4l-4.8-104h45.5l-5.9 29.4c-.8 4.1 2.3 7.8 6.4 7.8h11.4c4.1 0 7.2-3.8 6.4-7.8l-5.8-29.4H624c8.8 0 16 7.2 16 16v80.8c-1.8-1.2-3.7-2.4-5.8-3.5-5.4-2.5-11.4-4.5-18-5.6-4.2-.7-8.5-1.1-12.8-1.1-2.1 0-4.1.1-6.2.2-17.3 1.7-32.8 9.5-44.2 21.6zM624 352c0-53-43-96-96-96s-96 43-96 96s43 96 96 96s96-43 96-96zm-96-32c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM351.2 416c43 0 46.3-35 52.4-63.9c2.1-9.9 11-16.5 21.1-16l20.9 1c10.2 .5 18.4 9 18.4 19.2c0 10.2-8.1 18.4-18.2 19l-7.5 .3c-3.7 16.8-9.9 33.9-20.4 47.6c-19 24.7-48.3 36.9-87.4 36.9H144c-39.1 0-68.4-12.2-87.4-36.9c-10.5-13.6-16.7-30.7-20.4-47.6l-7.5-.3c-10.1-.5-18.2-8.8-18.2-19c0-10.2 8.2-18.6 18.4-19.2l20.9-1c10.1-.5 19 6.1 21.1 16c6.1 28.9 9.4 63.9 52.4 63.9H351.2zM208 416c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H208zm432-256c0 8.8-7.2 16-16 16H502.7l37.4-46.2c3.2-3.9 8.9-4.6 12.9-1.4l9.5 7.6c4 3.2 4.6 8.9 1.4 12.9L527.5 192H608c8.8 0 16 7.2 16 16c0 8.8-7.2 16-16 16h-53.5c-7.2 22.8-22.7 41.3-42.7 52c.3 2.6 .2 5.4-.5 8l-14.1 52.8c-2.2 8.5-11 13.7-19.5 11.4l-19.7-5.3c-8.5-2.3-13.6-11.1-11.3-19.6l5.4-20c-20.7-8.5-37.6-24-47.5-43.4H159c-9.9 19.4-26.8 34.9-47.5 43.4l5.4 20c2.3 8.5-2.8 17.3-11.3 19.6l-19.7 5.3c-8.5 2.3-17.3-2.9-19.5-11.4l-14.1-52.8c-.7-2.6-.8-5.4-.5-8c-20-10.6-35.6-29.2-42.7-52H16c-8.8 0-16-7.2-16-16c0-8.8 7.2-16 16-16h112c-2.7-5.4-5-11-6.2-16.9c-.2-1-1.1-1.7-2.1-1.6l-63 4c-10.1 .6-18.7-7.3-18.7-17.5c0-9.3 7.3-17.1 16.6-17.7l79.3-5c2.8-.2 5.6-.4 8.3-.4H223.5l-33.8 106.1c-1.9 6.1-7.6 10.1-13.9 10.1H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h73.2l32-100.7c2.2-6.9 8.7-11.3 15.8-11.3h85c.2-7.1 3.1-14 8.5-19c6.3-5.8 14.5-8.3 22.7-7.1L486 74c8.3 1.2 15.6 6.5 19.3 14.5l60.1 130c4 8.5 3.5 18.6-1.3 26.8c2.3 6.2 3.9 12.9 4.9 19.6H608c8.8 0 16 7.2 16 16c0 8.8-7.2 16-16 16H456.9c-4 13.7-11.2 26-20.9 36v.4l-11.4 49.4c-2 8.5-10.6 13.9-19.1 12l-26.5-6.2c-8.6-2-14-10.6-12-19.2l1.3-5.4c-41 1.2-71.2-1.6-97.5-9c-24.6-6.9-45.1-18.1-64.3-33l-16.8 72.8c-2 8.6-10.6 14-19.2 12l-13.3-3.1c-8.5-2-14-10.6-12-19.1l24.5-105.5c-30.7-6.9-53.5-34.3-53.5-67.3c0-4.7 .5-9.3 1.4-13.8c-1.2-3.3-1.4-7-0-10.5L32.6 52.3C35.3 45.1 42.3 40 50 40h19.3c8.8 0 16 7.2 16 16s-7.2 16-16 16H62L79.1 96z"/>
                          </svg>
                          <div className="text-white text-xs absolute bottom-0 w-full text-center py-1 bg-green-800 font-bold">
                            SALES • PARTS
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-lg text-gray-800">{dealer.name}</h3>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(dealer.rating) ? "fill-amber-500 text-amber-500" : "text-amber-500"}`} 
                                />
                              ))}
                            </div>
                            <span className="ml-1 text-gray-500 text-xs">({dealer.reviewCount} Ratings)</span>
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            ZIP Code: {dealer.zipCode}
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Phone: {dealer.phoneNumber}
                          </div>
                          
                          <p className="text-xs text-gray-600 line-clamp-3">
                            {dealer.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center">
                  <Button 
                    variant="default" 
                    size="icon"
                    className="rounded-none bg-green-800 text-white hover:bg-green-900"
                    onClick={() => setCurrentPage(1)}
                  >
                    1
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-none border-gray-300"
                    onClick={() => setCurrentPage(2)}
                  >
                    2
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-none border-gray-300"
                    onClick={() => setCurrentPage(3)}
                  >
                    3
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-none border-gray-300"
                    onClick={() => setCurrentPage(4)}
                  >
                    4
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-none border-gray-300"
                  >
                    <span className="text-lg leading-none">...</span>
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