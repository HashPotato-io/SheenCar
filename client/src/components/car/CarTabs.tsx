import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarSvg from "../../assets/car.svg";

// KeyValueRow component
const KeyValueRow: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => (
  <div className="flex gap-[4px]">
    <span className="font-['Gilroy-Bold'] font-normal text-[20px] leading-[100%] tracking-[0%] text-black">{label}</span>
    <span className="font-['Gilroy-Regular'] font-normal text-[20px] leading-[100%] tracking-[0%] text-black">{value}</span>
  </div>
);

interface CarTabsProps {
  carData: {
    make: string;
    model: string;
    year: number;
    specifications: {
      engine: string;
      transmission: string;
      drivetrain: string;
      fuelType: string;
      mpg: string;
    };
  };
}

export default function CarTabs({ carData }: CarTabsProps) {
  return (
      <div className="m-6">
        <Tabs defaultValue="basic-information">
          <TabsList 
            style={{
              height: '60px',
              gap: '80px',
              borderRadius: '18px',
              background: '#003A2F'
            }} 
            className="w-full flex justify-between overflow-hidden mb-6"
          >
            <TabsTrigger
              value="basic-information"
              className="flex-1 py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                    text-[20px]
                    leading-[100%]
                    tracking-[0%]
                    data-[state=active]:w-[335px]
                    data-[state=active]:h-[54px]
                    data-[state=active]:gap-[10px]
                    data-[state=active]:rounded-[16px]"
            >
              Basic Information
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="flex-1 py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                    text-[20px]
                    leading-[100%]
                    tracking-[0%]
                    data-[state=active]:w-[335px]
                    data-[state=active]:h-[54px]
                    data-[state=active]:gap-[10px]
                    data-[state=active]:rounded-[16px]"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="flex-1 py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                    text-[20px]
                    leading-[100%]
                    tracking-[0%]
                    data-[state=active]:w-[335px]
                    data-[state=active]:h-[54px]
                    data-[state=active]:gap-[10px]
                    data-[state=active]:rounded-[16px]"
            >
              Features
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="basic-information"
            className="rounded-lg p-6 shadow-sm"
          >
            <h3 className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] tracking-[1%] text-black mb-6">Vehicle Details</h3>

            <div className="flex gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 w-[70%]">
                <KeyValueRow label="Make:" value={carData.make} />
                <KeyValueRow label="Model:" value={carData.model} />
                <KeyValueRow label="Year:" value={carData.year} />
                <KeyValueRow label="Condition:" value="New" />
                <KeyValueRow label="Exterior:" value="White" />
                <KeyValueRow label="Interior:" value="Black" />
                <KeyValueRow label="No. of Doors:" value="4" />
                <KeyValueRow label="Body Type:" value="Sedan" />
                <KeyValueRow label="Seating Capacity:" value="4" />
              </div>

              <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
                <img
                  src={CarSvg}
                  alt="car-illustration"
                  width="195"
                  height="111"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="specifications"
            className="rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6">Specifications</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              <div className="flex flex-col">
                <span className="font-semibold">Engine:</span>
                <span>{carData.specifications.engine}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Transmission:</span>
                <span>{carData.specifications.transmission}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Drivetrain:</span>
                <span>{carData.specifications.drivetrain}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Fuel Type:</span>
                <span>{carData.specifications.fuelType}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">MPG:</span>
                <span>{carData.specifications.mpg}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Horsepower:</span>
                <span>252 hp</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="features"
            className="rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6">Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Bluetooth Connectivity
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Power Windows
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Keyless Entry
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Backup Camera
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Navigation System
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Heated Seats
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Lane Departure Warning
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Adaptive Cruise Control
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Sunroof
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#003A2F] rounded-full mr-2"></div>
                Leather Seats
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
  );
} 