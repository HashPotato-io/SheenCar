import React from "react";
import { Check, X } from "lucide-react";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "../ui/custom-select";
import { CustomTable } from "../ui/custom-table";
import { CarDetails } from "../../lib/types";

// Mock data for demonstration
const mockCars = [
  {
    id: 1,
    make: "Suzuki",
    model: "Cultus",
    engine: "1.0L K10B Inline-3",
    fuelType: "Gasoline",
    year: 2023,
    mileage: 15000,
    transmission: "Manual",
    driveType: "FWD",
    cylinders: 3,
  },
  {
    id: 2,
    make: "Suzuki",
    model: "Wagon R",
    engine: "1.0L K10B Inline-3",
    fuelType: "Gasoline",
    year: 2023,
    mileage: 12000,
    transmission: "CVT",
    driveType: "FWD",
    cylinders: 4,
  },
  {
    id: 3,
    make: "Honda",
    model: "Accord",
    engine: "1.5L K15B Inline-4",
    fuelType: "Gasoline",
    year: 2023,
    mileage: 8000,
    transmission: "CVT",
    driveType: "FWD",
    cylinders: 8,
  },
];

interface ComparisonResultsProps {
  selectedCars: CarDetails[];
  emblaRef: any;
  scrollPrev: () => void;
  scrollNext: () => void;
}

export default function ComparisonResults({ selectedCars, emblaRef, scrollPrev, scrollNext }: ComparisonResultsProps) {
  // Remove the mockCars constant since we're now using props
  // const selectedCars = mockCars;

  const featureColumns = [
    {
      header: "Feature",
      accessor: "feature",
    },
    ...selectedCars.map((car) => ({
      header: `${car.make} ${car.model}`,
      accessor: car.id,
    })),
  ];

  const featureData = [
    {
      feature: "No. of Airbags",
      ...selectedCars.reduce((acc, car, index) => ({
        ...acc,
        [car.id]: index === 0 ? "2" : "1",
      }), {}),
    },
    {
      feature: "No. of Seatbelts",
      ...selectedCars.reduce((acc, car, index) => ({
        ...acc,
        [car.id]: index === 0 ? "5" : "4",
      }), {}),
    },
    {
      feature: "Immobilizer",
      ...selectedCars.reduce((acc, car, index) => ({
        ...acc,
        [car.id]: index === 2 ? (
          <span className="text-gray-500">N/A</span>
        ) : (
          <div className="w-4 h-4 bg-black rounded-full mx-auto"></div>
        ),
      }), {}),
    },
    {
      feature: "ABS (Anti-Lock Braking)",
      ...selectedCars.reduce((acc, car, index) => ({
        ...acc,
        [car.id]: index === 2 ? (
          <span className="text-gray-500">N/A</span>
        ) : (
          <div className="w-4 h-4 bg-black rounded-full mx-auto"></div>
        ),
      }), {}),
    },
    {
      feature: "Child Lock",
      ...selectedCars.reduce((acc, car) => ({
        ...acc,
        [car.id]: <div className="w-4 h-4 bg-black rounded-full mx-auto"></div>,
      }), {}),
    },
    {
      feature: "ISOFIX Child Seat Anchors",
      ...selectedCars.reduce((acc, car) => ({
        ...acc,
        [car.id]: <div className="w-4 h-4 bg-black rounded-full mx-auto"></div>,
      }), {}),
    },
  ];

  const specificationColumns = [
    {
      header: "Specification",
      accessor: "specification",
    },
    ...selectedCars.map((car) => ({
      header: `${car.make} ${car.model}`,
      accessor: car.id,
    })),
  ];

  const specificationData = [
    {
      specification: "Engine Type",
      ...selectedCars.reduce((acc, car) => ({ ...acc, [car.id]: car.engine }), {}),
    },
    {
      specification: "Transmission",
      ...selectedCars.reduce((acc, car) => ({ ...acc, [car.id]: car.transmission }), {}),
    },
    {
      specification: "Fuel Type",
      ...selectedCars.reduce((acc, car) => ({ ...acc, [car.id]: car.fuelType }), {}),
    },
  ];

  return (
    <div className="min-h-screen mt-[20px]">
      {/* Features Comparison */}
      <div className="mb-12 bg-[#FFFFFF] p-6">
        <h2 className="text-2xl lg:text-[40px] font-[400] leading-[100%] tracking-[-0.01em] text-black font-['Gilroy-SemiBold']">
          Compare <span className="text-[#AF8C32]">Features</span>
        </h2>

        {/* Feature Category Select */}
        <div className="w-40 mb-6">
          <CustomSelect defaultValue="safety">
            <CustomSelectTrigger
              className="w-full h-[48px]"
              placeholderColor="#000000"
              borderColor="#000000"
            >
              <span>Safety</span>
            </CustomSelectTrigger>
            <CustomSelectContent>
              <CustomSelectItem value="safety">Safety</CustomSelectItem>
              <CustomSelectItem value="comfort">
                Comfort & Convenience
              </CustomSelectItem>
              <CustomSelectItem value="infotainment">
                Infotainment
              </CustomSelectItem>
              <CustomSelectItem value="exterior">
                Exterior Features
              </CustomSelectItem>
            </CustomSelectContent>
          </CustomSelect>
        </div>

        <CustomTable
          columns={featureColumns}
          data={featureData}
        />
      </div>

      {/* Specifications Comparison */}
      <div className="mb-12 p-6">
        <h2 className="text-2xl lg:text-[40px] font-[400] leading-[100%] tracking-[-0.01em] text-black font-['Gilroy-SemiBold']">
          Compare <span className="text-[#AF8C32]">Specifications</span>
        </h2>

        {/* Specifications Category Select */}
        <div className="w-40 mb-6">
          <CustomSelect defaultValue="engine">
            <CustomSelectTrigger
              className="w-full h-[48px]"
              placeholderColor="#000000"
              borderColor="#000000"
            >
              <span>Engine/Motor</span>
            </CustomSelectTrigger>
            <CustomSelectContent>
              <CustomSelectItem value="engine">Engine/Motor</CustomSelectItem>
              <CustomSelectItem value="transmission">
                Transmission
              </CustomSelectItem>
              <CustomSelectItem value="steering">Steering</CustomSelectItem>
              <CustomSelectItem value="wheels">
                Wheels and Tires
              </CustomSelectItem>
              <CustomSelectItem value="fuel">Fuel Economy</CustomSelectItem>
            </CustomSelectContent>
          </CustomSelect>
        </div>

        <CustomTable
          columns={specificationColumns}
          data={specificationData}
        />
      </div>
    </div>
  );
}
