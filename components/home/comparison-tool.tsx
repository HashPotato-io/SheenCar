"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ComparisonTool() {
  const [selectedCars, setSelectedCars] = useState<any[]>([null, null]);

  const carOptions = [
    { make: "Toyota", model: "Camry" },
    { make: "Honda", model: "Accord" },
    { make: "Ford", model: "F-150" },
    { make: "Tesla", model: "Model 3" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare <span className="text-amber-500">Cars</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare specifications, features, and pricing side by side
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Car 1 */}
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Car" />
                  </SelectTrigger>
                  <SelectContent>
                    {carOptions.map((car, index) => (
                      <SelectItem key={index} value={`${car.make}-${car.model}`}>
                        {car.make} {car.model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* VS Badge */}
            <div className="text-center">
              <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-lg">
                VS
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Car" />
                  </SelectTrigger>
                  <SelectContent>
                    {carOptions.map((car, index) => (
                      <SelectItem key={index} value={`${car.make}-${car.model}`}>
                        {car.make} {car.model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/compare">
              <Button className="bg-green-800 hover:bg-green-900 px-8 py-3 text-lg">
                Start Comparison
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}