import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import CarfaxButton from "@/components/CarfaxButton";
import SellerDetails from "@/components/seller/SellerDetails";
import { CustomButton } from "../ui/custom-button";

interface CarDetailsProps {
  car: {
    make: string;
    model: string;
    year: number;
    price: number;
    seller: {
      name: string;
      logo: string;
      rating: number;
      reviewCount: number;
      location: string;
      phoneNumber: string;
    };
  };
  onContactClick: () => void;
}

export default function CarDetails({ car, onContactClick }: CarDetailsProps) {
  return (
    <div className="mb-6 w-full">
      {/* ZIP code badge */}
      <div className="p-2 pl-3">
        <Badge title="ZIP Code: 10210" icon={<MapPin size={12} />} />
      </div>

      {/* Car title and price */}
      <div className="p-2 pl-3 flex flex-col gap-[4px]">
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] align-middle text-[#171616]">
          {car.make} {car.model} {car.year}
        </h1>
        <div className="text-xl md:text-2xl lg:text-[26px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-black mt-1">
          Price: ${car.price.toLocaleString()}
        </div>

        {/* CARFAX button */}
        <div className="mt-4">
          <CarfaxButton />
        </div>
      </div>

      {/* Chat button */}
      <div className="pl-3 mt-2">
        <CustomButton
          customStyles={{
            width: "100%",
            maxWidth: "575px",
            backgroundColor: "#003A2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
          onClick={onContactClick}
        >
          Propose a trade
        </CustomButton>
      </div>

      {/* Seller info card */}
      <div className="mt-6 px-3 lg:px-0 lg:ml-3">
        <SellerDetails
          seller={car.seller}
          onContactClick={onContactClick}
        />
      </div>
    </div>
  );
} 