import React, { useState } from "react";
import { Link } from "wouter";
import Arrow from "../../assets/Icon/arrow.svg";
import BoostAdModal from "../modals/BoostAdModal";
import ProceedToPayModal from "../modals/ProceedToPayModal";
import { CustomButton } from "../ui/custom-button";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
};

type ModalStep = "none" | "boostAd" | "proceedToPay";

type ButtonState = 
  | 'boostAd' 
  | 'boosted' 
  | 'renewAd' 
  | 'reopenAd' 
  | 'withdrawAd' 
  | 'closeRequest' 
  | 'reopenRequest' 
  | 'disabled';

interface CarCardsProps {
  car: Car;
  linkUrl: string;
  small?: boolean;
  buttonState?: ButtonState;
}

const Card: React.FC<CarCardsProps> = ({ car, linkUrl, small, buttonState = 'boostAd' }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentStep, setCurrentStep] = useState<ModalStep>("none");

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleCloseAd = () => {
    setShowMenu(false);
  };

  const handleDeleteAd = () => {
    setShowMenu(false);
  };

  const handleBoostClick = () => {
    setCurrentStep("boostAd");
  };

  const handleBoostAdClose = () => {
    setCurrentStep("none");
  };

  const handleProceedToPay = () => {
    setCurrentStep("proceedToPay");
  };

  const handleProceedToPayClose = () => {
    setCurrentStep("none");
  };

  const getButtonText = (state: ButtonState): string => {
    switch (state) {
      case 'boostAd': return 'Boost Ad';
      case 'boosted': return 'Boosted';
      case 'renewAd': return 'Renew Ad';
      case 'reopenAd': return 'Reopen Ad';
      case 'withdrawAd': return 'Withdraw Ad';
      case 'closeRequest': return 'Close Request';
      case 'reopenRequest': return 'Reopen Request';
      default: return 'Boost Ad';
    }
  };

  const getButtonStyles = (state: ButtonState) => {
    const baseStyles = {
      width: "357px",
      height: "44px",
      gap: "9.7px",
      borderRadius: "7.27px",
    };

    switch (state) {
      case 'boosted':
      case 'closeRequest':
      case 'reopenRequest':
        return {
          ...baseStyles,
          opacity: 0.4,
          backgroundColor: "#003A2F",
        };
      default:
        return baseStyles;
    }
  };

  const MenuButton = () => (
    <div
      className="absolute top-2 right-2 cursor-pointer"
      style={{
        background: "#FFFFFF",
        width: "39px",
        height: "39px",
        borderRadius: "19.5px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleMenuClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6" r="2" fill="#171616" />
        <circle cx="12" cy="12" r="2" fill="#171616" />
        <circle cx="12" cy="18" r="2" fill="#171616" />
      </svg>
    </div>
  );

  const DropdownMenu = () => (
    <div
      className="absolute top-12 right-2 bg-white rounded-lg shadow-lg py-2 z-10"
      style={{ minWidth: "120px" }}
    >
      <button
        onClick={handleCloseAd}
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
      >
        Close Ad
      </button>
      <button
        onClick={handleDeleteAd}
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
      >
        Delete Ad
      </button>
    </div>
  );

  if (small) {
    // Small version
    return (
      <div
        className="bg-white rounded-[9px] overflow-hidden shadow-sm border border-white-100 group"
        style={{
          width: 208.8,
          height: 215, // 163 + 75 - 23
          top: 1.51,
          left: 1.51,
        }}
      >
        <div className="relative h-full">
          <div className="h-[163px] bg-gray-200 overflow-hidden rounded-t-[9px] relative">
            <img
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
            />
            <MenuButton />
            {showMenu && <DropdownMenu />}
          </div>
          <div
            className="bg-[#EEEEEE] p-[8px] w-full h-[75px] flex justify-between absolute left-0 right-0"
            style={{
              top: "140px",
              borderRadius: "9px 9px 0 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col gap-[4px] ml-[6px]">
              <div className="font-normal text-[#171616] leading-[1] text-[14px]">
                {car.make} {car.model}
              </div>
              <div className="font-normal text-[#585353] leading-[1] text-[10px]">
                {car.year}
              </div>
              <div className="font-normal text-[#171616] leading-[1] text-[14px]">
                Price: ${car.price.toLocaleString()}
              </div>
            </div>
            <Link href={linkUrl}>
              <div className="mt-[10px] mr-[6px]">
                <img src={Arrow} alt="arrow" />
              </div>
            </Link>
          </div>
          {/* Removed spacer div */}
        </div>
      </div>
    );
  }

  // Default (large) version
  return (
    <div
      style={{
        boxShadow: "1.52px 1.52px 9.14px 0px #0000001F",
        width: "398px",
        height: "454px",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="overflow-hidden group w-[391px] h-[448px]">
        <div className="relative h-full">
          <div
            style={{ borderRadius: "13px" }}
            className="h-[309px] overflow-hidden"
          >
            <img
              style={{ borderRadius: "13px" }}
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <MenuButton />
            {showMenu && <DropdownMenu />}
          </div>
          <div
            className="bg-[#EEEEEE] p-[12px] w-[391px] h-[197px] flex flex-col absolute left-0 right-0"
            style={{
              top: "250px",
              borderRadius: "13px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col gap-[10px] ml-[10px] ">
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[27px] font-['Gilroy-SemiBold']">
                {car.make} {car.model}
              </div>
              <div className="align-middle font-normal text-[#585353] leading-[100%] tracking-[-0.01em] text-[18px] font-['Poppins']">
                {car.year}
              </div>
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[26px] font-['Gilroy-SemiBold']">
                Price: ${car.price.toLocaleString()}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <CustomButton
                customStyles={getButtonStyles(buttonState)}
                onClick={buttonState === 'disabled' ? undefined : handleBoostClick}
                disabled={buttonState === 'disabled'}
              >
                {getButtonText(buttonState)}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      {/* Boost Ad Modal */}
      <BoostAdModal
        isOpen={currentStep === "boostAd"}
        onClose={handleBoostAdClose}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year,
        }}
        onProceed={handleProceedToPay}
      />

      {/* Proceed to Pay Modal */}
      <ProceedToPayModal
        isOpen={currentStep === "proceedToPay"}
        onClose={handleProceedToPayClose}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year,
        }}
      />
    </div>
  );
};

export default Card;
