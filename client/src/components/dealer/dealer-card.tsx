import React from "react";
import { Link } from "wouter";
import { StarFilled, StarEmpty } from "../icons";
import CarDealer from "../../assets/car-dealer.png";
import { useMobileDevice } from "@/hooks/useMobileDevice";

interface DealerCardProps {
  dealer: {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    description: string;
    zipCode: string;
    phoneNumber: string;
  };
}

export default function DealerCard({ dealer }: DealerCardProps) {
  const isMobile = useMobileDevice();

  if(isMobile){
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
                src={CarDealer}
                alt={dealer.name}
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
              <div className="flex flex-col gap-[6px] ml-[10px]">
                <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold']">
                  {dealer.name}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(dealer.rating) ? (
                      <StarFilled
                        key={i}
                        className="w-4 h-4 text-amber-500"
                        width={10}
                        height={9}
                      />
                    ) : (
                      <StarEmpty
                        key={i}
                        className="w-4 h-4 text-amber-500"
                        width={10}
                        height={9}
                      />
                    )
                  )}
                </div>
                <span className="ml-1 text-[#171616] text-xs">
                  ({dealer.reviewCount} Ratings)
                </span>
              </div>
              <Link href={`/services/dealer/${dealer.id}`}>
                <div className="mt-[44px] mr-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-[903px] h-[193px] rounded-[16.23px] bg-white shadow-[0px_4px_10px_0px_#00000026] transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer">
      <Link href={`/services/dealer/${dealer.id}`}>
        <div className="flex p-4">
          <div style={{borderRadius: "14px"}} className="w-[203px] h-[161px] bg-neutral-800 overflow-hidden relative mr-4">
            <img src={CarDealer} alt="car-dealer" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-[2px]">
              <h3 className="mb-[10px] font-['Gilroy-SemiBold'] font-normal text-[26px] leading-[100%] tracking-[-0.01em] align-middle text-[#171616]">
                {dealer.name}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(dealer.rating) ? (
                      <StarFilled
                        key={i}
                        className="w-4 h-4 text-amber-500"
                        width={10}
                        height={9}
                      />
                    ) : (
                      <StarEmpty
                        key={i}
                        className="w-4 h-4 text-amber-500"
                        width={10}
                        height={9}
                      />
                    )
                  )}
                </div>
                <span className="ml-1 text-[#171616] text-xs">
                  ({dealer.reviewCount} Ratings)
                </span>
              </div>

              <div className="flex items-center text-xs text-[#171616] mb-1">
                <span style={{ fontFamily: "Gilroy-Bold", display: "flex", alignItems: "center", marginRight: "4px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  ZIP Code:
                </span>
                {dealer.zipCode}
              </div>

              <div className="flex items-center text-xs text-[#171616] mb-2">
                <span style={{ fontFamily: "Gilroy-Bold", display: "flex", alignItems: "center", marginRight: "4px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Phone:
                </span>
                {dealer.phoneNumber}
              </div>

              <p className="text-xs text-gray-600 line-clamp-3">
                {dealer.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
