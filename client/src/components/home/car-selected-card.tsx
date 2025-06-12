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

interface CarSelectedCardProps {
  car: Car;
  linkUrl: string;
  small?: boolean;
  tiny?: boolean;
  hideYear?: boolean;
  hideViewDetails?: boolean;
}

const CarSelectedCard: React.FC<CarSelectedCardProps> = ({
  car,
  linkUrl,
  small,
  tiny,
  hideYear = false,
  hideViewDetails = false,
}) => {
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
        marginBottom: "14px",
      }}
    >
      <div className="overflow-hidden group w-[303px] h-[303px]">
        <div className="relative h-full">
          <div
            style={{ borderRadius: "13px" }}
            className="h-[258px] overflow-hidden"
          >
            <img
              style={{ borderRadius: "13px" }}
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div
            className="bg-[#EEEEEE] p-[12px] w-[303px] h-[80px] flex justify-between absolute left-0 right-0"
            style={{
              top: "222px",
              borderRadius: "13px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col gap-[6px] ml-[10px] text-left">
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold'] text-left">
                {car.make} {car.model}
              </div>
              <div
                style={
                  hideYear
                    ? { fontWeight: 400, fontFamily: "Gilroy-Regular" }
                    : {}
                }
                className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold'] text-left"
              >
                Price: ${car.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSelectedCard;
