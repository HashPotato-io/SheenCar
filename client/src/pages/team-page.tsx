import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import HeroSection from "@/components/hero-section";
import TeamBanner from "../assets/team-banner.png";
import JoinUs from "../assets/join-us.png";
import Car6 from "../assets/car6.svg";
import { CustomButton } from "@/components/ui/custom-button";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jacob Adams",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Marina Roberts",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "James Reed",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Stella Martinez",
    role: "Head of Customer Support",
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Richard Kim",
    role: "UI/UX Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Michael Wong",
    role: "Finance Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 8,
    name: "Sophia Patel",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamPage() {
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
            Meet the Visionaries Driving{" "}
            <span style={{ color: "#AF8C32" }}>SheenCar</span>'s Innovation
            Forward
          </div>
        }
        bgImage={TeamBanner}
        hideSearch={true}
      />

      {/* Team Introduction */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#171616] mx-auto mb-8 md:mb-12 max-w-3xl px-4"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            At SheenCar, we are a team of passionate innovators, automotive
            enthusiasts, and tech experts dedicated to transforming the way
            people buy and sell cars. Our mission is to make car trading
            seamless, secure, and hassle-free.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {teamMembers?.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[23.35px] border border-[#00000017] shadow-[1.82px_1.82px_10.93px_0px_#00000017] w-full max-w-[301.6px] h-auto md:h-[364.84px] overflow-hidden"
              >
                <div className="h-48 md:h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-base md:text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center mt-2 md:mt-3 space-x-2">
                    {member.socialLinks.facebook && (
                      <a
                        href={member.socialLinks.facebook}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Facebook size={16} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <CustomButton variant="outline" outlineColor="#AF8C32">
              View More
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="relative w-full min-h-[345px] mx-auto mt-12 md:mt-[74px] bg-gradient-to-r from-neutral-800 to-neutral-700">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${JoinUs})`,
          }}
        ></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10  mt-7  py-8 md:py-[70px] relative z-10">
          {/* Left Image */}
          <div className="w-full px-8 order-2 lg:order-1 md:w-[379px] h-[205px] "> 
            <img
              src={Car6}
              alt="Join our team"
              className="w-full h-full object-contain lg:ml-28 "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 order-1 lg:order-2 px-8 lg:ml-10  text-center md:text-left">
            <h2
              className="text-white"
              style={{ 
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "120%",
                letterSpacing: "-1%",
                marginBottom: "16px"
              }}
            >
              Join Us on the <span style={{ color: "#AF8C32" }}>Road</span> to Innovation
            </h2>
            <p 
              className="text-white"
              style={{ 
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%"
              }}
            >
              SheenCar is constantly evolving, and we're always looking to
              connect with passionate individuals who share our vision for the
              future of car trading. While we don't have open positions right
              now, feel free to reach out at{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-[#AF8C32] hover:underline"
              >
                your-email@example.com
              </a>{" "}
              — we'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
