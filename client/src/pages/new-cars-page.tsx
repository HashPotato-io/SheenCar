import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Heart, ArrowRight } from "lucide-react";
import { carMakes, carModels } from "@/lib/car-types";
import { Link } from 'wouter';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Sample data for the new cars listings
const carsListings = Array(16).fill(null).map((_, index) => ({
  id: index + 1,
  title: "Toyota Corolla Altis",
  year: 2025,
  price: 42000,
  imageUrl: index % 2 === 0 
    ? "https://images.unsplash.com/photo-1583267746897-2cf4865e2cbb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3" 
    : "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3",
  isFavorite: false
}));

export default function NewCarsPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([20000, 80000]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([20000, 80000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2019, 2023]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Banner */}
      <div className="relative h-64 bg-gray-800 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="New Cars Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-4xl font-bold mb-2">Drive the Future: Explore the Latest</h1>
          <h2 className="text-2xl font-semibold mb-6"><span className="text-amber-500">New Cars</span> Today!</h2>
          
          {/* Search Bar */}
          <div className="flex max-w-lg mx-auto">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="What do you need help with?" 
                className="py-6 pl-10 pr-4 rounded-l-full rounded-r-none border-0 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <Button className="rounded-r-full rounded-l-none bg-green-900 hover:bg-green-800 px-6">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <h3 className="text-xl font-semibold mb-6">134 Cars Listed Under New Cars</h3>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="w-full md:w-1/4 bg-white p-6 rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Filters</h3>
            
            <div className="space-y-6">
              {/* ZIP Code Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <Input type="text" placeholder="Enter ZIP code" className="w-full" />
              </div>
              
              {/* Make Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Make</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {carMakes.map(make => (
                      <SelectItem key={make.id} value={make.id}>{make.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Model Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Model</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {carModels.filter(model => model.makeId === 'toyota').map(model => (
                      <SelectItem key={model.id} value={model.id}>{model.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <div className="flex justify-between text-sm mb-2">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
                <Slider
                  defaultValue={[20000, 80000]}
                  min={0}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="my-4"
                />
                <div className="h-2 bg-green-100 rounded-full relative">
                  <div 
                    className="absolute h-full bg-green-600 rounded-full" 
                    style={{ 
                      left: `${(priceRange[0] / 100000) * 100}%`, 
                      width: `${((priceRange[1] - priceRange[0]) / 100000) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Mileage Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Mileage</label>
                <div className="flex justify-between text-sm mb-2">
                  <span>{mileageRange[0].toLocaleString()}</span>
                  <span>{mileageRange[1].toLocaleString()}</span>
                </div>
                <Slider
                  defaultValue={[20000, 80000]}
                  min={0}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setMileageRange(value as [number, number])}
                  className="my-4"
                />
                <div className="h-2 bg-green-100 rounded-full relative">
                  <div 
                    className="absolute h-full bg-green-600 rounded-full" 
                    style={{ 
                      left: `${(mileageRange[0] / 100000) * 100}%`, 
                      width: `${((mileageRange[1] - mileageRange[0]) / 100000) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-right text-gray-500">84,344 miles</div>
              </div>
              
              {/* Year Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Year Range</label>
                <div className="flex justify-between text-sm mb-2">
                  <span>{yearRange[0]}</span>
                  <span>{yearRange[1]}</span>
                </div>
                <Slider
                  defaultValue={[2019, 2023]}
                  min={2000}
                  max={2023}
                  step={1}
                  onValueChange={(value) => setYearRange(value as [number, number])}
                  className="my-4"
                />
                <div className="h-2 bg-green-100 rounded-full relative">
                  <div 
                    className="absolute h-full bg-green-600 rounded-full" 
                    style={{ 
                      left: `${((yearRange[0] - 2000) / 23) * 100}%`, 
                      width: `${((yearRange[1] - yearRange[0]) / 23) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Seller Type */}
              <div>
                <label className="block text-sm font-medium mb-4">Seller Type</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="private-seller" className="rounded-sm" />
                    <Label htmlFor="private-seller" className="ml-2">Private Seller</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="dealer" className="rounded-sm" />
                    <Label htmlFor="dealer" className="ml-2">Dealer</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Car Listings Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {carsListings.map((car) => (
                <div key={car.id} className="bg-white rounded-md overflow-hidden shadow-sm relative">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={car.imageUrl} 
                      alt={car.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <button 
                      onClick={() => toggleFavorite(car.id)}
                      className={`rounded-full p-1.5 ${favorites.includes(car.id) ? 'bg-green-600 text-white' : 'bg-white text-gray-500'}`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{car.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{car.year}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-green-800 text-lg font-medium">Price: ${car.price.toLocaleString()}</p>
                      <Link href={`/cars/${car.id}`}>
                        <button className="rounded-full p-2 bg-green-900 text-white">
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <span className="text-gray-400">«</span>
              <span className="text-gray-400">‹</span>
              <button className="h-8 w-8 rounded-full bg-green-900 text-white flex items-center justify-center">1</button>
              {[2, 3, 4].map(page => (
                <button key={page} className="h-8 w-8 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-gray-100">
                  {page}
                </button>
              ))}
              <button className="text-gray-400 hover:text-gray-600">›</button>
              <button className="text-gray-400 hover:text-gray-600">»</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}