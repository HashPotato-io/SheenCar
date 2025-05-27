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

const CarCards: React.FC<CarCardsProps> = ({ car, linkUrl, small }) => {
  if (small) {
    // Small version
    return (
      <div
        className="bg-white rounded-[9px] overflow-hidden"
        style={{
          width: "212px",
          height: "212px",
          boxShadow: "1.52px 1.52px 9.14px 0px #0000001F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="overflow-hidden group w-[208px] h-[208px]">
          <div className="relative h-full">
            <div
              style={{ borderRadius: "9px" }}
              className="h-[163px] bg-gray-200 overflow-hidden rounded-t-[9px]"
            >
              <img
                style={{ borderRadius: "9px" }}
                src={car?.image}
                alt={`${car?.make} ${car?.model}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="bg-[#EEEEEE] p-[10px] w-[208px] h-[76px] flex justify-between absolute left-0 right-0"
              style={{
                top: "132px",
                borderRadius: "9px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex flex-col gap-[4px] ml-[6px]">
                <div className="font-normal text-[#000000] leading-[100%] tracking-[-0.01em] text-[15.11px] font-['Gilroy-SemiBold'] align-middle">
                  {car.make} {car.model}
                </div>
                <div className="font-normal text-[#474747] leading-[100%] tracking-[-0.01em] text-[10.57px] font-['Poppins'] align-middle">
                  {car.year}
                </div>
                <div className="font-normal text-[#000000] leading-[100%] tracking-[-0.01em] text-[15.11px] font-['Gilroy-SemiBold'] align-middle">
                  Price: ${car.price.toLocaleString()}
                </div>
              </div>
              <Link href={linkUrl}>
                <div className="mt-[20px] mr-[6px]">
                  <img src={Arrow} alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default (large) version
  return (
    <div
      style={{
        boxShadow: "1.52px 1.52px 9.14px 0px #0000001F",
        width: "309px",
        height: "309px",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="overflow-hidden group w-[303px] h-[303px]">
        <div className="relative h-full">
          <div
            style={{ borderRadius: "13px" }}
            className="h-[238px] overflow-hidden"
          >
            <img
              style={{ borderRadius: "13px" }}
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div
            className="bg-[#EEEEEE] p-[12px] w-[303px] h-[110px] flex justify-between absolute left-0 right-0"
            style={{
              top: "192px",
              borderRadius: "13px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col gap-[6px] ml-[10px] ">
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold']">
                {car.make} {car.model}
              </div>
              <div className="align-middle font-normal text-[#585353] leading-[100%] tracking-[-0.01em] text-[16px] font-['Poppins']">
                {car.year}
              </div>
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold']">
                Price: ${car.price.toLocaleString()}
              </div>
            </div>
            <Link href={linkUrl}>
              <div className="mt-[44px] mr-[10px]">
                <img src={Arrow} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
