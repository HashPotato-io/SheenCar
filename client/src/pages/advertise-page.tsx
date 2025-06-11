import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import { useState } from "react";
import AdvertiseBanner from "../assets/advertise-banner.png";
import { BoostingIcon, BrandIcon, SellBuy2 } from "@/components/icons";
import AdvertiseJourney from "../assets/advertise-join.png";

export default function AdvertisePage() {
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
            Advertise with <span style={{ color: "#AF8C32" }}>SheenCar</span> &
            Accelerate Your Reach
            <br className="hidden sm:block" />
            <span className="text-xl sm:text-2xl mt-4 block">
              Promote your business to active car buyers and sellers through
              targeted exposure.
            </span>
          </div>
        }
        bgImage={AdvertiseBanner}
        hideSearch={true}
      />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Introduction Section */}
          <div className="mx-auto text-center mb-16">
            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#000000",
              }}
            >
              SheenCar provides businesses, dealerships, and automotive brands
              with the opportunity to reach a highly engaged audience of car
              buyers and sellers. Our platform offers targeted advertising
              solutions that maximize visibility and drive results.
            </p>
          </div>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {/* First Row */}
            <div className="flex flex-col md:flex-row  gap-[10px] mb-16">
              <div className="w-full md:w-1/2 flex justify-center">
                <SellBuy2 width={400} height={400} />
              </div>
              <div className="w-full">
                <h2
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    fontSize: "34px",
                    lineHeight: "100%",
                    letterSpacing: "-1%",
                    color: "#000000",
                    marginBottom: "20px",
                  }}
                >
                  Helping Dealers Expand Their Reach
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "27px",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  Dealerships can showcase their inventory with Featured
                  Listings, ensuring their vehicles appear at the top of search
                  results. With our Dealer Packages, businesses can access
                  premium placement and advertising tools to connect with
                  serious buyers.
                </p>
              </div>
            </div>
            {/* second row */}
            <div className="flex flex-col md:flex-row  gap-[10px] mb-16">
              <div className="w-full">
                <h2
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    fontSize: "34px",
                    lineHeight: "100%",
                    letterSpacing: "-1%",
                    color: "#000000",
                    marginBottom: "20px",
                  }}
                >
                  Empowering Brands with High-Impact Advertising
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "27px",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  Automotive service providers, insurance companies, and car
                  accessory brands can leverage banner ads, sponsored content,
                  and custom promotions to engage a focused audience of car
                  enthusiasts and buyers.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <BrandIcon />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col md:flex-row  gap-[10px] mb-16">
              <div className="w-full md:w-1/2 flex justify-center">
                <BoostingIcon />
              </div>
              <div className="w-full">
                <h2
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    fontSize: "34px",
                    lineHeight: "100%",
                    letterSpacing: "-1%",
                    color: "#000000",
                    marginBottom: "20px",
                  }}
                >
                  Boosting Individual Sellers’ Visibility
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "27px",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  Private sellers can enhance their listings with Boosted Ads,
                  giving them priority placement and increased exposure to
                  potential buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Journey Section */}
      <div className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${AdvertiseJourney})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Add gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-70"></div>

          <div className="text-center px-4 relative z-10">
            <h2
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 50px)",
                lineHeight: "120%",
                letterSpacing: "-1%",
                textAlign: "center",
                color: "#FFFFFF",
                marginBottom: "24px",
              }}
            >
              Start Advertising with{" "}
              <span style={{ color: "#AF8C32" }}>SheenCar</span>
            </h2>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              Take advantage of our advertising solutions to grow your reach and
              increase sales. Join SheenCar and drive your brand’s success
              today!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
