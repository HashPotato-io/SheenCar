import React, { useState } from 'react';
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
          <div className="flex flex-col md:flex-row">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 pr-0 md:pr-6">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-bold text-xl mb-4">Filters</h3>
                
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
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-amber-500">{totalDealers}</span> Car Dealers Found
              </h2>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="space-y-4">
                  {dealers.map((dealer) => (
                    <div key={dealer.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <div className="flex p-4">
                        <div className="w-[100px] h-[100px] bg-neutral-800 rounded overflow-hidden relative mr-4">
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <svg width="70" height="45" viewBox="0 0 229 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                              <path d="M186.897 30.4313C184.578 30.4313 182.465 30.7358 180.536 31.262C177.405 25.1649 170.997 20.9624 163.676 20.9624C161.009 20.9624 158.342 21.4886 155.955 22.4582C152.129 15.1803 144.329 10.1211 135.358 10.1211C132.86 10.1211 130.447 10.5646 128.128 11.3679C125.382 6.37598 120.12 3.24561 114.084 3.24561C107.932 3.24561 102.6 6.5071 99.9322 11.6724C97.6131 10.9518 95.1151 10.5646 92.6172 10.5646C83.5616 10.5646 75.8456 15.6238 72.0192 22.9845C69.632 22.0148 67.0525 21.4886 64.3823 21.4886C57.0613 21.4886 50.6534 25.6911 47.5224 31.788C45.5942 31.2618 43.4808 30.9572 41.1617 30.9572C32.4457 30.9572 25.4285 37.3846 25.4285 45.3358C25.4285 53.2869 32.4457 59.7143 41.1617 59.7143H186.897C200.29 59.7143 211.19 49.6639 211.19 37.2018C211.19 24.8224 200.29 30.4313 186.897 30.4313Z" fill="white" fillOpacity="0.12"/>
                              <path d="M12.7495 87.5711L12.7495 39.9992M12.7495 39.9992L7.3999 48.3989M12.7495 39.9992L18.4741 48.3989" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M140.532 72.3713H100.282C100.282 72.3713 100.282 80.3558 106.95 80.3558H138.115C140.54 80.3558 141.753 79.1429 140.532 76.7172L140.532 72.3713Z" fill="white" fillOpacity="0.12"/>
                              <path d="M147.2 92.4846C158.096 92.4846 166.907 83.6737 166.907 72.7773C166.907 61.8809 158.096 53.07 147.2 53.07C136.303 53.07 127.492 61.8809 127.492 72.7773C127.492 83.6737 136.303 92.4846 147.2 92.4846Z" fill="white" fillOpacity="0.12"/>
                              <path d="M80.5748 92.4846C91.4712 92.4846 100.282 83.6737 100.282 72.7773C100.282 61.8809 91.4712 53.07 80.5748 53.07C69.6783 53.07 60.8674 61.8809 60.8674 72.7773C60.8674 83.6737 69.6783 92.4846 80.5748 92.4846Z" fill="white" fillOpacity="0.12"/>
                              <path d="M149.617 72.7773C149.617 75.1055 148.695 77.3389 147.05 78.9838C145.405 80.6287 143.172 81.5503 140.843 81.5503C138.515 81.5503 136.282 80.6287 134.637 78.9838C132.992 77.3389 132.07 75.1055 132.07 72.7773C132.07 70.4491 132.992 68.2158 134.637 66.5709C136.282 64.926 138.515 64.0043 140.843 64.0043C143.172 64.0043 145.405 64.926 147.05 66.5709C148.695 68.2158 149.617 70.4491 149.617 72.7773Z" fill="white" fillOpacity="0.12"/>
                              <path d="M83.1531 72.7773C83.1531 75.1055 82.2315 77.3389 80.5866 78.9838C78.9417 80.6287 76.7084 81.5503 74.3802 81.5503C72.052 81.5503 69.8186 80.6287 68.1737 78.9838C66.5288 77.3389 65.6072 75.1055 65.6072 72.7773C65.6072 70.4491 66.5288 68.2158 68.1737 66.5709C69.8186 64.926 72.052 64.0043 74.3802 64.0043C76.7084 64.0043 78.9417 64.926 80.5866 66.5709C82.2315 68.2158 83.1531 70.4491 83.1531 72.7773Z" fill="white" fillOpacity="0.12"/>
                              <path d="M216.25 39.9992C216.25 36.0928 218.45 32.5631 221.846 30.927C223.32 30.2017 225.059 29.9993 226.6 30.9992V48.9992C225.059 49.9991 223.32 49.7968 221.846 49.0714C218.45 47.4354 216.25 43.9057 216.25 39.9992Z" fill="white" fillOpacity="0.12"/>
                              <path d="M216.25 39.9992H198.25V48.9992H216.25V39.9992Z" fill="white" fillOpacity="0.12"/>
                              <path d="M0 30.9992H26.9999V48.9992H0V30.9992Z" fill="white" fillOpacity="0.12"/>
                              <path d="M169.324 29.7845H187.324C187.324 29.7845 186.523 21.5 182.324 21.5H169.324V29.7845Z" fill="white" fillOpacity="0.12"/>
                              <path d="M80.5747 55.4845H147.2V39.9991H104.864C90.3648 39.9991 80.5747 41.8537 80.5747 55.4845Z" fill="white" fillOpacity="0.12"/>
                              <path d="M36 52.4845L44.4997 38.7346H67.9997L59.5 52.4845H36Z" fill="white" fillOpacity="0.12"/>
                              <path d="M67.9998 38.7346H156.5V29.7844H76.4995L67.9998 38.7346Z" fill="white" fillOpacity="0.12"/>
                              <path d="M169.324 21.5H76.4993L67.9996 29.7845H169.324V21.5Z" fill="white" fillOpacity="0.12"/>
                            </svg>
                            <div className="text-white text-xs absolute bottom-0 w-full text-center py-1 bg-green-800 font-bold">
                              SALES • PARTS
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col">
                            <h3 className="font-bold text-lg text-gray-800">{dealer.name}</h3>
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
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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