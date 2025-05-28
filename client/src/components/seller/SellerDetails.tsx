import React from "react";
import { Button } from "@/components/ui/button";
import { MessageIcon, PersonIcon, PhoneIcon } from "../icons";

interface SellerDetailsProps {
  seller: {
    name: string;
    logo: string;
    rating: number;
    reviewCount: number;
    location: string;
    phoneNumber: string;
  };
  onContactClick: () => void;
}

const SellerDetails: React.FC<SellerDetailsProps> = ({
  seller,
  onContactClick,
}) => {
  return (
    <div className="flex flex-col w-[577px] h-[187px] gap-[4px] rounded-[11.32px] p-[18px] bg-white shadow-[0px_4px_12px_0px_#00000014]">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={seller.logo}
          alt={seller.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-['Gilroy-SemiBold'] text-[20px] leading-[100%] tracking-[0%] text-[#003A2F]">
            Seller Details
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        {/* Contact information */}
        <div className="flex items-center gap-4">
          <PersonIcon />
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Name
            </div>
            <div className="font-['Gilroy-Regular'] text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              {seller.name}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 text-gray-400">
            <MessageIcon />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Email Address
            </div>
            <div className="font-['Gilroy-Regular'] text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              JohnDoe@email.com
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 text-gray-400">
            <PhoneIcon />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Phone
            </div>
            <div className="font-['Gilroy-Regular'] text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              {seller.phoneNumber}
            </div>
          </div>
        </div>
      </div>
      {/* Chat button */}
      <div className="mt-4">
        <Button
          className="w-full bg-[#003A2F] hover:bg-[#00251C] flex items-center justify-center gap-2"
          onClick={onContactClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Chat
        </Button>
      </div>
    </div>
  );
};

export default SellerDetails;
