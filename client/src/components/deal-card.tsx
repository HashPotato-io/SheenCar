import React from "react";
import { useLocation } from "wouter";
import { CustomButton } from "./ui/custom-button";

interface DealCardProps {
  user: {
    name: string;
    avatar?: string;
  };
  tradeWith: string;
  priceAdjustment: number;
  onViewDetails: () => void;
  onAccept: () => void;
  onReject: () => void;
  sellerId: string;
  carId: string;
}

const DealCard: React.FC<DealCardProps> = ({
  user,
  tradeWith,
  priceAdjustment,
  onViewDetails,
  onAccept,
  onReject,
  sellerId,
  carId,
}) => {
  const [, setLocation] = useLocation();

  const handleViewProductDetails = () => {
    setLocation(`/trade-car/sellers/${sellerId}/cars/${carId}`);
  };

  return (
    <div
      style={{
        gap: "24px",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 0px #00000014",
      }}
      className="w-full lg:h-[80px] flex lg:flex-row flex-col p-5 lg:items-center "
    >


      {/* User Section */}
      <div
      
        className="flex flex-row items-center gap-4 "
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          ) : (
            <span style={{ color: "#666" }}>{user.name[0]}</span>
          )}
        </div>
        <span
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000000",
          }}
        >
          {user.name}
        </span>
      </div>

      {/* Trade With Section */}
      <div style={{ flex: 1, fontFamily: "Gilroy-Regular", fontSize: "16px" }}>
        <div
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            marginBottom: "4px",
          }}
          className="text-sm md:text-lg"
        >
          Trade with:
        </div>
        <div
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#585353",
          }}
          className="text-sm md:text-lg"
        >
          {tradeWith}
        </div>
      </div>

      {/* Price Adjustment Section */}
      <div
        style={{
          minWidth: "150px",
          fontFamily: "Gilroy-Medium",
        }}
      >
        <div
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            marginBottom: "4px",
          }}
           className="text-sm md:text-lg"
        >
          Price Adjustment:
        </div>
        <div
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#585353",
          }}
           className="text-sm md:text-lg"
        >
          {priceAdjustment > 0 ? "+" : ""}
          {priceAdjustment.toLocaleString()} AED
        </div>
      </div>

      {/* Buttons Section */}
      <div  className="flex lg:flex-row flex-col gap-4">
        <CustomButton
          customStyles={{
            height: "40px",
          }}
          onClick={handleViewProductDetails}
        >
          View Product Details
        </CustomButton>
        <div className="flex gap-4">
        <CustomButton
          customStyles={{
            height: "40px",
          }}
          className="w-full"
          onClick={onAccept}
        >
          Accept
        </CustomButton>
        <CustomButton
          variant="outline"
          customStyles={{
            height: "40px",
          }}
          onClick={onReject}
          className="w-full"
        >
          Reject
        </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
