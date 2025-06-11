import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import { useState } from "react";
import PressBanner from "../assets/press-banner.png";
import StatCard from "@/components/StatCard";

export default function PressPage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        headingContent={
          <div
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "clamp(32px, 5vw, 50px)",
              lineHeight: "120%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
              margin: "60px auto",
              padding: "0 20px",
            }}
          >
            Driving the <span style={{ color: "#AF8C32" }}>Future</span> of Car
            Buying & Selling
            <br className="hidden sm:block" />
            <span className="text-xl sm:text-2xl mt-4 block">
              Discover how SheenCar is reshaping the auto marketplace through
              smart tech, trusted listings, and a people-first platform.
            </span>
          </div>
        }
        bgImage={PressBanner}
        hideSearch={true}
      />

      <div style={{ background: "#FFFFFF" }}>
        {/* Introduction Section */}

        <div
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            fontSize: "34px",
            lineHeight: "100%",
            letterSpacing: "-1%",
            textAlign: "center",
            color: "#000000",
            padding: "60px",
            background: "#FFFFFF",
          }}
        >
          From individual car owners to professional dealers, SheenCar empowers
          users with a seamless digital platform for posting, trading, and
          discovering cars across America.
        </div>

        {/* Statistics Grid */}
        <div className="flex flex-col gap-4 md:gap-[20px] max-w-6xl mx-auto mb-[40px] px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[20px]">
            {/* Row 1 */}
            <StatCard value="9,500+" label="Total Cars Listed" />
            <StatCard value="5,200+" label="Active Listings" />
            <StatCard value="850+" label="Dealers Onboarded" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[20px]">
            {/* Row 2 */}
            <StatCard value="17,000+" label="Offers Made" />
            <StatCard value="20+" label="Team Members" />
            <StatCard value="2025" label="Year Founded" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
