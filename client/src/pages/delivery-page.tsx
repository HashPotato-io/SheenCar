import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import DeliveryBanner from "../assets/delivery-banner.png";
import StartJourney from "../assets/start-journey.jpg"
import FeatureCard from "@/components/FeatureCard";
import {
  CommunictaionIcon,
  CreditCard,
  EyeTest,
  InvestigationIcon,
  MutualAggrement,
  QuickSelling,
  SmartChecking,
  SpeechBubble,
  VerifiedDealers,
} from "@/components/icons";

import {
  CustomAccordion,
  CustomAccordion as CustomAccordionComponent,
} from "@/components/custom-accordion";

export default function DeliveryPage() {
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
            From Your Screen to Your Street —
            <span style={{ color: "#AF8C32" }}> Car Delivery Made Simple</span>
          </div>
        }
        bgImage={DeliveryBanner}
        hideSearch={true}
      />

      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "27px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#171616",
          padding: "32px",
        }}
      >
        SheenCar does not provide direct delivery services, but we make it easy
        for buyers and sellers to coordinate vehicle pickup and handover.
        Whether you're purchasing from a private seller or a dealer, you can
        discuss and arrange a delivery method that works best for both parties.
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-[#003A2F]">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "46px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            How It <span style={{ color: "#AF8C32" }}>Works</span>
          </h2>
          <p
            className="text-center mb-12"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Vehicle Delivery Coordination on SheenCar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <FeatureCard
              icon={<SpeechBubble />}
              title={
                <>
                  Discuss
                  <span style={{ color: "#AF8C32" }}> Delivery </span>
                  Details
                </>
              }
              description="Communicate directly with the seller to arrange pickup or delivery"
            />

            <FeatureCard
              icon={<CreditCard />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Payment</span> & Handover
                </>
              }
              description="Agree on the transaction details before finalizing the exchange"
            />

            <FeatureCard
              icon={<EyeTest />}
              title={
                <>
                  Inspect & <span style={{ color: "#AF8C32" }}>Receive</span>
                </>
              }
              description="Ensure everything matches the listing before completing the purchase"
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "46px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#000000",
            }}
          >
            Important <span style={{ color: "#AF8C32" }}>Considerations</span>
          </h2>
          <p
            className="text-center mb-12"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#858585",
            }}
          >
            Vehicle Delivery Coordination on SheenCar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <FeatureCard
              icon={<MutualAggrement />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Mutual</span> Agreement
                </>
              }
              description="Delivery is entirely arranged between buyers and sellers, based on their preferences."
            />

            <FeatureCard
              icon={<CommunictaionIcon />}
              title={
                <>
                  Clear
                  <span style={{ color: "#AF8C32" }}> Communication</span>
                </>
              }
              description="Discuss logistics, payment, and any potential delivery charges upfront."
            />

            <FeatureCard
              icon={<InvestigationIcon />}
              title={
                <>
                  <span style={{ color: "#AF8C32" }}>Inspection </span>Before
                  Purchase
                </>
              }
              description="Verify the car's condition before completing the transaction."
            />
          </div>
        </div>
      </div>

      {/* Delivery FAQs Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "46px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#000000",
              marginBottom: "24px",
            }}
          >
            Delivery <span style={{ color: "#AF8C32" }}>FAQs</span>
          </h2>

          <div className="space-y-4 max-w-[1164px] mx-auto">
            <CustomAccordion
              item={{
                id: 1,
                question: "How is vehicle delivery arranged on SheenCar?",
                answer:
                  "Vehicle delivery is coordinated directly between buyers and sellers. SheenCar provides the platform for communication, but the actual delivery method and logistics are arranged by the parties involved in the transaction.",
              }}
            />
            <CustomAccordion
              item={{
                id: 2,
                question: "Who is responsible for delivery costs?",
                answer:
                  "Delivery costs are typically negotiated between the buyer and seller. It's important to discuss and agree upon who will bear these costs before finalizing the transaction.",
              }}
            />
            <CustomAccordion
              item={{
                id: 3,
                question: "What should I verify during vehicle handover?",
                answer:
                  "During handover, verify the vehicle's condition matches the listing, check all documentation, ensure the vehicle is in working order, and complete any necessary paperwork for the transfer of ownership.",
              }}
            />
            <CustomAccordion
              item={{
                id: 4,
                question: "Can I arrange third-party delivery services?",
                answer:
                  "Yes, you can arrange third-party delivery services. Many buyers and sellers choose to use professional vehicle transport services for long-distance deliveries. Make sure to discuss and agree upon this option with the other party.",
              }}
            />
          </div>
        </div>
      </div>

      {/* Start Journey Section */}
      <div className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${StartJourney})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
              Start Your Journey with <span style={{ color: "#AF8C32" }}>SheenCar</span>
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
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Browse listings, connect with sellers, and arrange a smooth transaction for your next vehicle!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
