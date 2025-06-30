import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  FileText,
  MessageSquare,
  Car,
  Handshake,
  Users,
  Clock,
  ShieldCheck,
  PieChart,
  Settings,
  Award,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import { useState } from "react";
import AboutBanner from "../assets/about-banner.png";
import FeatureCard from "@/components/FeatureCard";
import {
  QuickSelling,
  SmartChecking,
  VerifiedDealers,
} from "@/components/icons";
import WhatWeDo from "@/components/whatwedo";

export default function AboutPage() {
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
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
              margin: "90px auto",
              padding: "0 20px",
            }}
            className="text-2xl flex flex-col md:flex-row md:text-4xl lg:text-5xl"
          >
            Driving Dreams Forward: The Story Behind{" "}
            <span style={{ color: "#AF8C32" }}>SheenCar</span>
          </div>
        }
        bgImage={AboutBanner}
        hideSearch={true}
      />

      {/* Why Choose SheenCar */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl lg:text-[46px] font-bold text-center mb-2"
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#000000",
            }}
            
          >
            Why <span style={{ color: "#AF8C32" }}>choose</span> SheenCar?
          </h2>
          <p
            className="text-center text-sm md:text-xl px-6 lg:px-0 mb-12"
           
          >
            Your Trusted Partner for a Smarter Car Buying & Selling Experience
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-6 justify-items-center">
            <FeatureCard
              icon={<VerifiedDealers />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Verified</span> Dealers
                </>
              }
              description="Our dealers are verified for authenticity, giving you complete peace of mind"
            />

            <FeatureCard
              icon={<SmartChecking />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Buying</span> Smart
                </>
              }
              description="Browse a wide range of verified listings and drive home your perfect car"
            />

            <FeatureCard
              icon={<QuickSelling />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Selling</span> Quick
                </>
              }
              description="Reach genuine buyers quickly with our simple listings process"
            />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#000000",
            }}

            className="text-2xl  text-center mb-2 md:text-[38px]"
          >
            <span style={{ color: "#AF8C32" }}>Who</span> We Are
          </h2>
          <p
            className="text-center max-w-4xl text-base md:text-xl px-6 lg:px-0 mx-auto mb-8"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              lineHeight: "27px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#404040",
            }}
          >
            At SheenCar, we are passionate about connecting car buyers and
            sellers through a seamless, trustworthy platform. Our mission is to
            make car trading simple, secure, and efficient for everyone. With a
            commitment to innovation and customer satisfaction, SheenCar offers
            a safe, user-friendly environment supported by cutting-edge
            technology and dedicated service.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <WhatWeDo />

      <Footer />
    </div>
  );
}
