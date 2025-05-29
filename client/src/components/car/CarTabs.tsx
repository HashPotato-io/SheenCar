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
  <div className="flex gap-[4px]">
    <span className="font-['Gilroy-Bold'] font-normal text-[20px] leading-[100%] tracking-[0%] text-black">
      {label}
    </span>
    <span className="font-['Gilroy-Regular'] font-normal text-[20px] leading-[100%] tracking-[0%] text-black">
      {value}
    </span>
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
    <div className="m-6">
      <Tabs defaultValue="basic-information">
        <TabsList
          style={{
            height: "60px",
            gap: "80px",
            borderRadius: "18px",
            background: "#003A2F",
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

        <TabsContent value="basic-information" className="p-6">
          <h3 className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] tracking-[1%] text-black mb-6">
            Vehicle Details
          </h3>

          <div className="flex gap-6">
            <div className="flex flex-wrap gap-x-16 gap-y-1 w-[70%]">
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Make:" value={carData.make} />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Model:" value={carData.model} />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Year:" value={carData.year} />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Condition:" value="New" />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Exterior:" value="White" />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Interior:" value="Black" />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="No. of Doors:" value="4" />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Body Type:" value="Sedan" />
              </div>
              <div className="w-[calc(50%-32px)]">
                <KeyValueRow label="Seating Capacity:" value="4" />
              </div>
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

        <TabsContent value="specifications" className="p-6">
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "78%",
              }}
            >
              {specificationSections?.map((section) => (
                <div
                  key={section.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] tracking-[1%] text-black">
                    {section.title}
                  </div>
                  <div className="flex flex-wrap gap-x-16 gap-y-4">
                    {section?.items?.map((item) =>
                      item?.isSingleField ? (
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          {item?.icon}
                          <div
                            style={{
                              fontFamily: "Gilroy-Bold",
                              fontWeight: 400,
                              fontSize: "20px",
                              lineHeight: "100%",
                              letterSpacing: "0%",
                              color: "#000000",
                            }}
                          >
                            {item?.label}
                          </div>
                        </div>
                      ) : (
                        <div key={item.label} className="w-[calc(50%-100px)]">
                          <KeyValueRow
                            label={item.label}
                            value={item?.value || "N/A"}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[60px]  flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
              <img src={Car3} alt="car-illustration" width="195" height="111" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="p-6">
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "78%",
              }}
            >
              {featureSections?.map((section) => (
                <div
                  key={section.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div className="font-['Gilroy-SemiBold'] font-normal text-[28px] leading-[100%] tracking-[1%] text-black">
                    {section.title}
                  </div>
                  <div className="flex flex-wrap gap-x-16 gap-y-4">
                    {section?.items?.map((item, index) => (
                      <div
                        key={item.label}
                        className="w-[calc(50%-32px)]"
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                        <div
                          style={{
                            fontFamily: "Gilroy-Bold",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#000000",
                          }}
                        >
                          {item?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[60px] flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
              <img src={Car4} alt="car-illustration" width="195" height="111" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
