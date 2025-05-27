import React, { useState } from "react";
import { Link } from "wouter";
import Arrow from "../../assets/Icon/arrow.svg";
import BoostAdModal from "../modals/BoostAdModal";
import ProceedToPayModal from "../modals/ProceedToPayModal";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
};

type ModalStep = 'none' | 'boostAd' | 'proceedToPay';

interface CarCardsProps {
  car: Car;
  linkUrl: string;
  small?: boolean;
}

const Card: React.FC<CarCardsProps> = ({ car, linkUrl, small }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentStep, setCurrentStep] = useState<ModalStep>('none');

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
    setCurrentStep('boostAd');
  };

  const handleBoostAdClose = () => {
    setCurrentStep('none');
  };

  const handleProceedToPay = () => {
    setCurrentStep('proceedToPay');
  };

  const handleProceedToPayClose = () => {
    setCurrentStep('none');
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
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-white-100 group w-[303px] shadow-[1.52px_1.52px_9.14px_0px_#0000001F]"
      style={{ height: 290 }}
    >
      <div className="relative h-full">
        <div className="h-44 bg-gray-200 overflow-hidden relative">
          <img
            src={car?.image}
            alt={`${car?.make} ${car?.model}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <MenuButton />
          {showMenu && <DropdownMenu />}
        </div>
        <div
          className="bg-[#EEEEEE] p-[8px] w-[303px] h-[200px] flex flex-col absolute left-0 right-0"
          style={{
            top: "150px",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col gap-[6px] ml-[10px]">
            <div
              style={{ fontSize: "18px", fontWeight: 600 }}
              className="align-middle font-normal text-[#171616] leading-[1]"
            >
              {car.make} {car.model}
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: 400 }}
              className="align-middle font-normal  text-[#585353] leading-[1]"
            >
              {car.year}
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: 600 }}
              className="align-middle font-normal text-[#171616] leading-[1]"
            >
              Price: ${car.price.toLocaleString()}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleBoostClick}
              className="w-[280px] h-[44px] rounded-[7.27px] bg-[#003A2F] text-white font-['Gilroy-Regular'] text-[19.4px] leading-[100%] text-center"
              style={{
                fontFamily: "Gilroy-Regular",
                fontWeight: 400,
                letterSpacing: "0%",
                animationDuration: "0ms",
              }}
            >
              Boost Ad
            </button>
          </div>
        </div>
      </div>

      {/* Boost Ad Modal */}
      <BoostAdModal
        isOpen={currentStep === 'boostAd'}
        onClose={handleBoostAdClose}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year
        }}
        onProceed={handleProceedToPay}
      />

      {/* Proceed to Pay Modal */}
      <ProceedToPayModal
        isOpen={currentStep === 'proceedToPay'}
        onClose={handleProceedToPayClose}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year
        }}
      />
    </div>
  );
};

export default Card;
