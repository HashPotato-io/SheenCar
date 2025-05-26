import React from "react";
import { Link } from "wouter";
import Arrow from "../../assets/Icon/arrow.svg";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
};

interface CarCardsProps {
  car: Car;
  linkUrl: string;
  small?: boolean;
}

const Card: React.FC<CarCardsProps> = ({ car, linkUrl, small }) => {
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
          <div className="h-[163px] bg-gray-200 overflow-hidden rounded-t-[9px]">
            <img
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
            />
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
      style={{ height: 290 }} // Increased height to accommodate the button
    >
      <div className="relative h-full">
        <div className="h-44 bg-gray-200 overflow-hidden">
          <img
            src={car?.image}
            alt={`${car?.make} ${car?.model}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div
          className="bg-[#EEEEEE] p-[8px] w-[303px] h-[200px] flex flex-col absolute left-0 right-0"
          style={{
            top: "155px",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col gap-[6px] ml-[10px]">
            <div className="align-middle font-normal text-[#171616] leading-[1]">
              {car.make} {car.model}
            </div>
            <div className="align-middle font-normal  text-[#585353] leading-[1]">
              {car.year}
            </div>
            <div className="align-middle font-normal text-[#171616] leading-[1]">
              Price: ${car.price.toLocaleString()}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => (window.location.href = "boost ad")}
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
    </div>
  );
};

export default Card;
