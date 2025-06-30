import React from "react";
import { Handshake, Search, Users, DollarSign, Car } from "lucide-react";
import { EmpoweringBuyers, SellBuy, SupportingDealers } from "./icons";
import { CustomButton } from "./ui/custom-button";

const WhatWeDo: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-900 text-white px-8 py-16">
      {/* Header Section */}
      <div className="mx-auto text-center mb-16">
        <h1 className="text-2xl lg:text-[38px] font-[400] leading-[100%] tracking-[-0.01em] text-center text-white font-['Gilroy-SemiBold']">
          What <span className="text-[#AF8C32]">We Do</span>
        </h1>
        <p className="mt-[14px] text-base lg:text-[20px] font-[400] leading-[27px] tracking-[0] text-center text-white font-['Poppins'] mx-auto">
          SheenCar brings buyers, sellers, and dealers together in one seamless
          marketplace, making car trading easier and more efficient. With
          verified listings, advanced search filters, and secure transactions,
          we ensure a smooth experience for all. Whether you're buying, selling,
          or expanding your dealership, SheenCar provides the tools to help you
          succeed.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Helping Sellers Connect with Buyers */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <SellBuy />

          <div className="flex-1">
            <h2 className="text-2xl text-center md:text-left lg:text-[34px] font-[400] leading-[100%] tracking-[-0.01em] font-['Gilroy-SemiBold'] mb-4">
              Helping Sellers <span className="text-[#AF8C32]">Connect</span>{" "}
              with Buyers
            </h2>
            <p className="text-lg text-center md:text-left text-gray-200 leading-relaxed">
              Sellers can easily list their cars on SheenCar, showcasing
              detailed information and images to reach a wide audience of
              potential buyers.
            </p>
          </div>
        </div>

        {/* Empowering Buyers with Options */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <EmpoweringBuyers />

          <div className="flex-1 text-left md:text-left">
            <h2 className="text-2xl text-center md:text-left lg:text-[34px] font-[400] leading-[100%] tracking-[-0.01em] font-['Gilroy-SemiBold'] mb-4">
              Empowering <span className="text-[#AF8C32]">Buyers</span> with
              Options
            </h2>
            <p className="text-lg text-center md:text-left text-gray-200 leading-relaxed">
              Buyers can explore a variety of new and used cars using advanced
              search filters and the comparison tool to evaluate and select the
              best vehicle for their needs.
            </p>
          </div>
        </div>

        {/* Supporting Dealers */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <SupportingDealers />
          <div className="flex-1">
            <h2 className="text-2xl text-center md:text-left lg:text-[34px]  font-[400] leading-[100%] tracking-[-0.01em] font-['Gilroy-SemiBold'] mb-4">
              Supporting <span className="text-[#AF8C32]">Dealers</span> in
              Growing Their Business
            </h2>
            <p className="text-lg text-center md:text-left text-gray-200 leading-relaxed">
              Dealers can list multiple vehicles, gaining visibility on the
              platform and connecting with potential buyers quickly and
              efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-20 flex flex-col items-center">
        <p className="text-base lg:text-[20px] font-[400] leading-[27px] tracking-[0] text-center text-white font-['Poppins'] mb-8">
          Join SheenCar and experience a smarter, faster way to buy and sell
          cars.
        </p>
        <CustomButton 
          variant="outline" 
          outlineColor="#AF8C32"
        >
          Join Now
        </CustomButton>
      </div>
    </div>
  );
};

export default WhatWeDo;
