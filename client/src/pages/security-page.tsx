import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Shield,
  Shield as ShieldIcon,
  FileCheck,
  AlertCircle,
  BarChart,
  ListChecks,
  Clock,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import TeamBanner from "../assets/team-banner.png";
import { useState } from "react";

// Add this type definition at the top of the file
type SecuritySection = {
  icon: React.ElementType;
  title: string;
  highlightedWord: string;
  description: string;
  listItems?: string[];
};

// Add this data array before the SecurityPage component
const securitySections: SecuritySection[] = [
  {
    icon: FileCheck,
    title: "Governance & Compliance",
    highlightedWord: "Governance",
    description:
      "By using SheenCar, you acknowledge and agree to comply with this Visitor Agreement, our Privacy Notice, and any other applicable policies. If you do not agree with any part of these terms, please refrain from using our Platform.",
  },
  {
    icon: AlertCircle,
    title: "Risk Management",
    highlightedWord: "Risk",
    description:
      "SheenCar provides a marketplace for buying, selling, and trading vehicles. As a visitor, you may browse listings, explore vehicle information, and use other available resources. However, unauthorized use of the Platform, including scraping data, attempting to access restricted areas, or engaging in fraudulent activities, is strictly prohibited.",
  },
  {
    icon: ShieldIcon,
    title: "Vendor Security & Third-Party Assessments",
    highlightedWord: "Vendor Security",
    description:
      "When using SheenCar, you agree to:",
    listItems: [
      "Provide accurate and truthful information.",
      "Respect the rights and privacy of other users.",
      "Avoid posting or engaging in misleading, defamatory, or harmful activities.",
      "Comply with all applicable laws and regulations.",
    ],
  },
  {
    icon: BarChart,
    title: "Access Control & Identity Management",
    highlightedWord: "Access Control",
    description:
      "Certain features on SheenCar may require account registration. If you choose to register, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
  },
  {
    icon: ListChecks,
    title: "Data Privacy & Protection",
    highlightedWord: "Data Privacy",
    description:
      "Your data is important to us and we take steps to protect it.",
    listItems: [
      "All non-public customer data is classified as sensitive and has strict retention and usage requirements.",
      "Customer data is used only for the agreed-upon business purpose in compliance with the SheenCar policies.",
      "We protect data using encryption for data in transit and at rest, which helps prevent unauthorized access.",
    ],
  },
  {
    icon: Clock,
    title: "Secure Operations & Threat Monitoring",
    highlightedWord: "Secure Operations",
    description:
      "We monitor and run systems securely and continuously monitor for threats. Our security team is on-call 24/7/365 and responds immediately to security alerts. We deploy security tools such as threat monitoring, log management, intrusion detection, and data loss prevention solutions to maintain security.",
  },
  {
    icon: Shield,
    title: "Commitment to Continuous Improvement",
    highlightedWord: "Commitment",
    description:
      "We continually improve our security posture to stay ahead of emerging threats. Our security team works with experts across the company to ensure that our defensive countermeasures evolve and keep pace with changing technological and security landscapes.",
  },
];

export default function SecurityPage() {
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-1%",
                textAlign: "center",
                color: "#FFFFFF",
              }}

            className="text-2xl md:text-[48px] font-bold"
            >
              <span style={{ color: "#AF8C32" }}>SheenCar</span>'s Commitment to
              Security
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
              }}
              className="w-full  text-sm md:text-xl"
            >
              Protecting your data, securing your transactions, and ensuring a
              safe car trading experience for all.
            </div>
          </div>
        }
        bgImage={TeamBanner}
        hideSearch={true}
      />

      {/* Main Content */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              lineHeight: "27px",
              letterSpacing: "0%",
              color: "#171616",
              marginBottom: "24px",
            }}
            className="text-base md:text-xl"
          >
            At SheenCar, security is at the core of everything we do. We employ
            advanced security measures at the organizational, architectural, and
            operational levels to safeguard our platform, infrastructure, and
            customer data. Our team prioritizes security awareness, enforces
            strict data protection protocols, and ensures best practices are
            integrated into our daily operations.
          </p>

          {/* Security Sections */}
          <div className="space-y-8">
            {securitySections.map((section, index) => (
              <div key={index} className="border-b pb-6">
                <h2
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-1%",
                    marginBottom: "12px",
                  }}
                  className="text-2xl md:text-[36px]"
                >
                  {/* <section.icon className="text-[#AF8C32]" size={24} /> */}
                  <span className="text-[#AF8C32]" style={{ display: "inline" }}>
                    {section.highlightedWord}
                  </span>
                  <span style={{ display: "inline" }}>
                    {section.title.replace(section.highlightedWord, "")}
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: "27px",
                    letterSpacing: "0%",
                    color: "#171616",
                    marginBottom: section.listItems ? "16px" : "0",
                  }}
                  className="text-base md:text-xl"
                >
                  {section.description}
                </p>
                {section.listItems && (
                  <ul
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      lineHeight: "27px",
                      letterSpacing: "0%",
                      color: "#171616",
                      paddingLeft: "32px",
                      listStyleType: "disc",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    className="text-base md:text-xl"
                  >
                    {section.listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
