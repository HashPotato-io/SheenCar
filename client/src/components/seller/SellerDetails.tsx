import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChatIcon, MessageIcon, PersonIcon, PhoneIcon } from "../icons";
import { CustomButton } from "../ui/custom-button";
import { useLocation } from "wouter";

interface SellerDetailsProps {
  seller: {
    name: string;
    logo: string;
    rating: number;
    reviewCount: number;
    location: string;
    phoneNumber: string;
    type: string
  };
  onContactClick: () => void;
}

const SellerDetails: React.FC<SellerDetailsProps> = ({
  seller,
  onContactClick,
}) => {

  const [isMobile, setIsMobile] = useState(false);
  
    // Check if it's mobile on initial load and on resize
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 1023px is the breakpoint for mobile
      };
  
      // Initial check
      checkMobile();
  
      // Event listener for resize
      window.addEventListener('resize', checkMobile);
  
      // Cleanup the event listener
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
  
  const [, setLocation] = useLocation();
  return (
    <div className="flex flex-col w-full lg:max-w-[577px] h-auto gap-[4px] rounded-[11.32px] p-4 sm:p-[18px] bg-white shadow-[0px_4px_12px_0px_#00000014]">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={seller.logo}
          alt={seller.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
        />
        <div>
          <div className="font-['Gilroy-SemiBold'] text-[18px] sm:text-[20px] leading-[100%] tracking-[0%] text-[#003A2F]">
           {seller.type == "dealer" ? "Dealer Details" : "Seller Details"} 
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        {/* Contact information */}
        <div className="flex items-center gap-2">
           <div className="flex-shrink-0 text-gray-400">
            <PersonIcon />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13px] sm:text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Name
            </div>
            <div className="font-['Gilroy-Regular'] text-[12px] sm:text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              {seller.name}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 text-gray-400">
            <MessageIcon />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13px] sm:text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Email Address
            </div>
            <div className="font-['Gilroy-Regular'] text-[12px] sm:text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              JohnDoe@email.com
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 text-gray-400">
            <PhoneIcon />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="font-['Gilroy-Medium'] text-[13px] sm:text-[13.42px] leading-[100%] tracking-[0%] text-[#003A2F]">
              Phone
            </div>
            <div className="font-['Gilroy-Regular'] text-[12px] sm:text-[12.08px] leading-[100%] tracking-[0%] text-[#003A2F]">
              {seller.phoneNumber}
            </div>
          </div>
        </div>
      </div>
      {/* Chat button */}
      <div className="mt-4">
        <CustomButton
          customStyles={{
            width: '100%',
            backgroundColor: '#003A2F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onClick={()=>{
            isMobile ? setLocation("/chat/6") : setLocation("/chat");
           
          }}
        >
          <ChatIcon />
          Chat
        </CustomButton>
      </div>
    </div>
  );
};

export default SellerDetails;
