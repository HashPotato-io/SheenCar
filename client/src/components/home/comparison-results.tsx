import React from "react";
import { Check, X } from "lucide-react";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "../ui/custom-select";
import { CustomTable } from "../ui/custom-table";

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

export default function ComparisonResults() {
  const selectedCars = mockCars;

  const featureColumns = [
    {
      header: "Feature",
      accessor: "feature",
    },
    ...selectedCars.map((car) => ({
      header: `${car.make} ${car.model}`,
      accessor: car.id.toString(),
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
      accessor: car.id.toString(),
    })),
  ];

  const specificationData = [
    {
      specification: "Engine Type",
      ...selectedCars.reduce((acc, car) => ({ ...acc, [car.id]: car.engine }), {}),
    },
    {
      specification: "Drive Type",
      ...selectedCars.reduce((acc, car) => ({ ...acc, [car.id]: car.driveType }), {}),
    },
    {
      specification: "Cylinder",
      ...selectedCars.reduce((acc, car) => ({
        ...acc,
        [car.id]: (
          <div className="flex items-center">
            <span className="mr-3">{car.cylinders}</span>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                3
              </div>
              <div className="w-6 h-6 bg-pink-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                A
              </div>
            </div>
          </div>
        ),
      }), {}),
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
        <h2 className="text-[40px] font-[400] leading-[100%] tracking-[-0.01em] text-black font-['Gilroy-SemiBold']">
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
        <h2 className="text-[40px] font-[400] leading-[100%] tracking-[-0.01em] text-black font-['Gilroy-SemiBold']">
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
