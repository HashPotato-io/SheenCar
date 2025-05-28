import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import CarfaxButton from "@/components/CarfaxButton";
import SellerDetails from "@/components/seller/SellerDetails";

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
    <div className="mb-6">
      {/* ZIP code badge */}
      <div className="p-2 pl-3">
        <Badge title="ZIP Code: 10210" icon={<MapPin size={12} />} />
      </div>

      {/* Car title and price */}
      <div className="p-2 pl-3 flex flex-col gap-[4px]">
        <h1 className="text-[40px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] align-middle text-[#171616]">
          {car.make} {car.model} {car.year}
        </h1>
        <div className="text-[26px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-black mt-1">
          Price: ${car.price.toLocaleString()}
        </div>

        {/* CARFAX button */}
        <div className="mt-4">
          <CarfaxButton />
        </div>
      </div>

      {/* Chat button */}
      <div className="pl-3 mt-2">
        <Button
          className="w-[575px] bg-[#003A2F] hover:bg-[#00251C] flex items-center justify-center gap-2"
          onClick={onContactClick}
        >
          Propose a trade
        </Button>
      </div>

      {/* Seller info card */}
      <div style={{marginLeft: "12px"}} className="mt-6">
        <SellerDetails
          seller={car.seller}
          onContactClick={onContactClick}
        />
      </div>
    </div>
  );
} 