import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Banner from "../../assets/banner.png";
import CarBanner from "../../assets/car-banner.png";
import { Plus } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { AdvanceSearch } from "../advance-search";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div
      className="bg-cover bg-center flex items-center flex-col p-[60px] md:p-[60px] p-4 relative"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="font-['Gilroy-SemiBold'] font-normal text-[26px] leading-[30px] tracking-[-1%] text-center text-white w-[352px]
        md:text-[50px] md:leading-[100%] md:w-[788px] md:h-[122px]">
        We are the best place to{" "}
        <span className="text-[#AF8C32] underline cursor-pointer">
          Buy
        </span>{" "}
        cars with confidence!
      </div>
      <div className="font-['Poppins'] font-normal text-[14px] leading-[19px] text-center text-white w-[352px] mb-6
        md:text-[20px] md:leading-[100%] md:w-[574px]">
        Verified listings, trusted sellers, and a seamless experience from start
        to finish.
      </div>
      <CustomButton customStyles={{ width: "216px", height: "49px" }}>
        <Plus size={23} className="mr-2" />
        <span>Post Your Ad</span>
      </CustomButton>
      <div className="car-banner-container">
        <img src={CarBanner} alt="car" className="car-banner-image" />
      </div>

      <AdvanceSearch />
    </div>
  );
}
