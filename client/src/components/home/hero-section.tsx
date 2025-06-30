import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Banner from "../../assets/banner.png";
import HomeBanner from "../../assets/Home-Banner2.png";
import CarBanner from "../../assets/car-banner.png";
import { Plus } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { AdvanceSearch } from "../advance-search";
import { useMobileDevice } from "@/hooks/useMobileDevice";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();
  const isMobile = useMobileDevice();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (isMobile) {
    return (
      <div
        className="bg-cover bg-center flex items-center flex-col  lg:p-[60px] p-4 relative"
        style={{ backgroundImage: `url(${HomeBanner})` }}
      >
        <div
          className="font-['Gilroy-SemiBold'] font-normal text-[26px] leading-[30px] tracking-[-1%] text-center text-white w-[352px]
      md:text-3xl lg:text-[50px] md:leading-[100%] md:w-full lg:w-[788px]  mt-8 md:mb-4"
        >
          We are the best place to{" "}
          <span className="text-[#AF8C32] underline cursor-pointer">Buy</span>{" "}
          cars with confidence!
        </div>
        <div
          className="font-['Poppins'] font-normal text-[14px] leading-[19px] text-center text-white w-[352px] mb-6
      md:text-[20px] md:leading-tight md:w-[574px]"
        >
          Verified listings, trusted sellers, and a seamless experience from
          start to finish.
        </div>
        <CustomButton customStyles={{ width: "216px", height: "49px" }}>
          <Plus size={23} className="mr-2" />
          <span>Post Your Ad</span>
        </CustomButton>
        <div
          style={{
            height: "200px",
            marginTop: "40px",
          }} className="w-full flex justify-center items-center md:mb-8"
        >
          <img
            src={CarBanner}
            alt="car"
            className="w-[325px] md:w-[450px] h-[175px] md:h-[220px]"
          />
        </div>

        <AdvanceSearch />
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-center flex items-center flex-col  lg:p-[60px] p-4 relative"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div
        className="font-['Gilroy-SemiBold'] font-normal text-[26px] leading-[30px] tracking-[-1%] text-center text-white w-[352px]
       md:text-3xl  lg:text-[50px] md:leading-[100%] lg:w-full md:h-[122px]"
      >
        We are the best place to{" "}
        <span className="text-[#AF8C32] underline cursor-pointer">Buy</span>{" "}
        cars with confidence!
      </div>
      <div
        className="font-['Poppins'] font-normal text-[14px] leading-[19px] text-center text-white w-[352px] mb-6
        md:text-[20px] md:leading-[100%] lg:w-[574px]"
      >
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
