import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Banner from "../../assets/banner.png";
import CarBanner from "../../assets/car-banner.png";
import Plus from "../../assets/Icon/plus.svg";
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
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "60px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "Gilroy-SemiBold",
          fontWeight: 400,
          fontSize: "50px",
          lineHeight: "100%",
          letterSpacing: "-1%",
          textAlign: "center",
          width: "788px",
          height: "122px",
          color: "#FFFFFF",
        }}
      >
        We are the best place to{" "}
        <span
          style={{
            color: "#AF8C32",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Buy
        </span>{" "}
        cars with confidence!
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#FFFFFF",
          width: "574px",
          marginBottom: "24px",
        }}
      >
        Verified listings, trusted sellers, and a seamless experience from start
        to finish.
      </div>
      <CustomButton customStyles={{ width: "216px", height: "49px" }}>
        <img src={Plus} width="23px" height="23px" />
        <span>Post Your Ad</span>
      </CustomButton>
      <div className="car-banner-container">
        <img src={CarBanner} alt="car" className="car-banner-image" />
      </div>

      <AdvanceSearch />
    </div>
    /*   <section className="hero-section py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-montserrat">
          Find Your <span className="text-secondary">Perfect Ride</span> - Search, Buy, and Drive Away!
        </h1>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          SheenCar helps you find the car of your dreams. Compare prices, specs, and reviews to make the best choice.
        </p>
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-full p-2 max-w-3xl mx-auto flex items-center"
        >
          <Input
            type="text"
            placeholder="What do you need help with?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-none shadow-none focus-visible:ring-0 rounded-full"
          />
          <Button type="submit" size="sm" className="rounded-full">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </form>
      </div>
    </section> */
  );
}
