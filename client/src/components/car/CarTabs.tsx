import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarSvg from "../../assets/car.svg";
import Car3 from "../../assets/car3.svg";
import Car4 from "../../assets/car4.svg";
import { TickIcon } from "../icons";

// KeyValueRow component
const KeyValueRow: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => (
  <div className="flex items-center gap-[4px]">
    <p className="font-['Gilroy-Bold'] font-normal text-sm md:text-lg lg:text-xl leading-[100%]  text-black">
      {label}
    </p>
    <p className="font-['Gilroy-Regular'] font-normal text-xs md:text-lg leading-[100%]  text-black">
      {value}
    </p>
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

// Add these type definitions and data structures
type SpecificationSection = {
  title: string;
  items: Array<{
    label: string;
    value?: string;
    icon?: any;
    isSingleField?: boolean;
  }>;
};

const specificationSections: SpecificationSection[] = [
  {
    title: "Engine/Motor",
    items: [
      { label: "Engine Type:", value: "Boxer (Flat)" },
      { label: "Cylinder:", value: "2 Cylinders" },
      { label: "Drive Type:", value: "Front-Wheel Drive (FWD)" },
      { label: "Fuel Type:", value: "Gasoline" },
    ],
  },
  {
    title: "Transmission",
    items: [
      { label: "Gearbox:", value: "4-Speed" },
      { label: "Transmission:", value: "Manual" },
    ],
  },
  {
    title: "Steering",
    items: [
      { icon: <TickIcon />, label: "Power Assisted", isSingleField: true },
    ],
  },
  {
    title: "Wheels and Tires",
    items: [
      { label: "Wheel Type:", value: "Steel Wheels" },
      { label: "Tire Size:", value: '16"' },
    ],
  },
  {
    title: "Fuel Economy",
    items: [{ label: "Fuel Tank Capacity:", value: "16 Gallons" }],
  },
];

// Add this type definition and data structure
type FeatureSection = {
  title: string;
  items: Array<{
    label: string;
    isSingleField: boolean;
    icon?: any;
  }>;
};

const featureSections: FeatureSection[] = [
  {
    title: "Safety Features",
    items: [
      { label: "Lane Departure Warning", isSingleField: true, icon: <TickIcon /> },
      { label: "Adaptive Cruise Control", isSingleField: true, icon: <TickIcon /> },
      { label: "Blind Spot Detection", isSingleField: true, icon: <TickIcon /> },
      { label: "Forward Collision Warning", isSingleField: true, icon: <TickIcon /> },
    ],
  },
  {
    title: "Exterior Features",
    items: [
      { label: "Sunroof", isSingleField: true, icon: <TickIcon /> },
      { label: "LED Headlights", isSingleField: true, icon: <TickIcon /> },
      { label: "Power Tailgate", isSingleField: true, icon: <TickIcon /> },
      { label: "Rain-Sensing Wipers", isSingleField: true, icon: <TickIcon /> },
    ],
  },
  {
    title: "Infotainment Features",
    items: [
      { label: "Bluetooth Connectivity", isSingleField: true, icon: <TickIcon /> },
      { label: "Navigation System", isSingleField: true, icon: <TickIcon /> },
      { label: "Apple CarPlay/Android Auto", isSingleField: true, icon: <TickIcon /> },
      { label: "Premium Sound System", isSingleField: true, icon: <TickIcon /> },
    ],
  },
  {
    title: "Comfort and Convenience",
    items: [
      { label: "Power Windows", isSingleField: true, icon: <TickIcon /> },
      { label: "Keyless Entry", isSingleField: true, icon: <TickIcon /> },
      { label: "Heated Seats", isSingleField: true, icon: <TickIcon /> },
      { label: "Leather Seats", isSingleField: true, icon: <TickIcon /> },
    ],
  },
];

export default function CarTabs({ carData }: CarTabsProps) {
  return (
    <div className="m-3 sm:m-4 md:m-6">
      <Tabs defaultValue="basic-information">
        <TabsList
          style={{
            background: "#003A2F",
          }}
          className="w-full flex lg:rounded-[18px] flex-row md:h-[60px] justify-between overflow-x-auto mb-6 scrollbar-hide"
        >
          <TabsTrigger
            value="basic-information"
            className="w-[331px] sm:flex-1 sm:min-w-[200px] py-2 sm:py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                                      text-[12px] md:text-[20px]

                    leading-[100%]
                    tracking-[0%]
                    data-[state=active]:rounded-[4px] lg:data-[state=active]:rounded-[16px]
                    data-[state=active]:gap-[10px]
                    whitespace-nowrap"
          >
            Basic Information
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="w-[331px] sm:flex-1 sm:min-w-[200px] py-2 sm:py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                                      text-[12px] md:text-[20px]

                    leading-[100%]
                    tracking-[0%]
                                       data-[state=active]:rounded-[4px] lg:data-[state=active]:rounded-[16px]

                    data-[state=active]:gap-[10px]
                    whitespace-nowrap"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="w-[331px] sm:flex-1 sm:min-w-[200px] py-2 sm:py-4 rounded-none 
                    data-[state=active]:bg-white 
                    data-[state=active]:text-[#026442] 
                    data-[state=inactive]:bg-[#003A2F] 
                    data-[state=inactive]:text-white
                    transition-colors
                    font-['Gilroy-SemiBold']
                    font-normal
                    text-[12px] md:text-[20px]
                    leading-[100%]
                    tracking-[0%]
                    data-[state=active]:rounded-[4px] lg:data-[state=active]:rounded-[16px]

                    data-[state=active]:gap-[10px]
                    whitespace-nowrap"
          >
            Features
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic-information" className="p-2 sm:p-4 md:p-6">
          <h3 className="font-['Gilroy-SemiBold'] font-semibold text-xl md:text-[28px] leading-[100%] tracking-[1%] text-black mb-6">
            Vehicle Details
          </h3>

          <div className="flex flex-row gap-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full lg:w-[70%]">
              <div className="w-full">
                <KeyValueRow label="Make:" value={carData.make} />
              </div>
              <div className="w-full">
                <KeyValueRow label="Model:" value={carData.model} />
              </div>
              <div className="w-full">
                <KeyValueRow label="Year:" value={carData.year} />
              </div>
              <div className="w-full">
                <KeyValueRow label="Condition:" value="New" />
              </div>
              <div className="w-full">
                <KeyValueRow label="Exterior:" value="White" />
              </div>
              <div className="w-full">
                <KeyValueRow label="Interior:" value="Black" />
              </div>
              <div className="w-full">
                <KeyValueRow label="No. of Doors:" value="4" />
              </div>
              <div className="w-full">
                <KeyValueRow label="Body Type:" value="Sedan" />
              </div>
              <div className="w-full">
                <KeyValueRow label="Seating Capacity:" value="4" />
              </div>
            </div>


            <div className="hidden lg:flex items-center justify-center bg-[#D7FFF1] w-[200px] h-[200px] sm:w-[249px] sm:h-[249px] rounded-[206px] mx-auto md:mx-0">
              <img
                src={CarSvg}
                alt="car-illustration"
                className="w-[150px] h-[85px] sm:w-[195px] sm:h-[111px]"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="specifications" className="p-2 sm:p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-6 md:gap-10 w-full lg:w-[78%]">
              {specificationSections?.map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="font-['Gilroy-SemiBold'] font-normal text-[24px] sm:text-[28px] leading-[100%] tracking-[1%] text-black">
                    {section.title}
                  </div>
                  <div className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-16 gap-y-4">
                    {section?.items?.map((item) =>
                      item?.isSingleField ? (
                        // When isSingleField is true, put the item on its own row (full width)
                        <div
                          key={item.label}
                          className="w-full flex gap-2 sm:gap-4 items-center"
                        >
                          {item?.icon}
                          <div className="font-['Gilroy-Bold'] font-normal text-sm md:text-lg lg:text-xl leading-[100%] tracking-[0%] text-black">
                            {item?.label}
                          </div>
                        </div>
                      ) : (
                        // For other items, display two items per row (based on screen size)
                        <div key={item.label} className="w-full sm:w-[calc(50%-16px)] md:w-[calc(50%-32px)]">
                          <KeyValueRow label={item.label} value={item?.value || "N/A"} />
                        </div>
                      )
                    )}
                  </div>

                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center justify-center bg-[#D7FFF1] w-[200px] h-[200px] sm:w-[249px] sm:h-[249px] rounded-[206px] mx-auto md:mx-0">
              <img src={Car3} alt="car-illustration" className="w-[150px] h-[85px] sm:w-[195px] sm:h-[111px]" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="p-2 sm:p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-6 md:gap-10 w-full lg:w-[78%]">
              {featureSections?.map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="font-['Gilroy-SemiBold'] font-normal text-[24px] lg:text-[28px] leading-[100%] tracking-[1%] text-black">
                    {section.title}
                  </div>
                  <div className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-16 gap-y-4">
                    {section?.items?.map((item) => (
                      <div
                        key={item.label}
                        className="w-full sm:w-[calc(50%-16px)] md:w-[calc(50%-32px)] flex gap-2 sm:gap-4 items-center"
                      >
                        {item.icon}
                        <div className="font-['Gilroy-Bold'] font-normal text-[16px] lg:text-[20px] leading-[100%] tracking-[0%] text-black">
                          {item?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center justify-center bg-[#D7FFF1] w-[200px] h-[200px] sm:w-[249px] sm:h-[249px] rounded-[206px] mx-auto md:mx-0">
              <img src={Car4} alt="car-illustration" className="w-[150px] h-[85px] sm:w-[195px] sm:h-[111px]" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
