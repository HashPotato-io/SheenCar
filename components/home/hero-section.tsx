"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Car
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Browse thousands of cars from trusted dealers and private sellers. 
            Get the best deals on new and used vehicles.
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <select className="p-3 border border-gray-300 rounded-md text-gray-900">
                <option value="">Select Make</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="chevrolet">Chevrolet</option>
              </select>
              
              <select className="p-3 border border-gray-300 rounded-md text-gray-900">
                <option value="">Select Model</option>
                <option value="camry">Camry</option>
                <option value="accord">Accord</option>
                <option value="f150">F-150</option>
              </select>
              
              <select className="p-3 border border-gray-300 rounded-md text-gray-900">
                <option value="">Max Price</option>
                <option value="20000">$20,000</option>
                <option value="30000">$30,000</option>
                <option value="50000">$50,000</option>
              </select>
              
              <input
                type="text"
                placeholder="ZIP Code"
                className="p-3 border border-gray-300 rounded-md text-gray-900"
              />
            </div>
            
            <Link href="/search">
              <Button className="w-full bg-green-800 hover:bg-green-900 text-white py-3 text-lg">
                <Search className="mr-2 h-5 w-5" />
                Search Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}