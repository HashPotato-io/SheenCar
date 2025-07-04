import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ComparisonTool from "@/components/home/comparison-tool";
import HeroSection from "@/components/hero-section";
import CarComparisonBanner from "../assets/car-comparison.png";

export default function ComparePage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearchSubmit={handleSearchSubmit}
          headingContent={
            <div
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-1%",
                textAlign: "center",
                color: "#FFFFFF",
                margin: "60px auto",
                padding: "0 20px",
              }}
              className="text-[26px] lg:text-[50px]"
            >
              Find Your Perfect Match:{" "}
              <span style={{ color: "#AF8C32" }}>Compare</span>{" "}Cars
             <span className="block">Side-by-Side for Smarter Choices</span> 
            </div>
          }
          bgImage={CarComparisonBanner}
          hideSearch={true}
        />

        {/* Comparison Tool */}
        <ComparisonTool />
      </main>
      <Footer />
    </div>
  );
}
