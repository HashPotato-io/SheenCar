import React from "react";
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
}

const DealCard: React.FC<DealCardProps> = ({
  user,
  tradeWith,
  priceAdjustment,
  onViewDetails,
  onAccept,
  onReject,
}) => {
  return (
    <div
      style={{
        width: "1272.5px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        borderRadius: "8px",
        padding: "20px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 0px #00000014",
      }}
    >
      {/* User Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minWidth: "200px",
        }}
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
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            marginBottom: "4px",
          }}
        >
          Trade with:
        </div>
        <div
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#585353",
          }}
        >
          {tradeWith}
        </div>
      </div>

      {/* Price Adjustment Section */}
      <div
        style={{
          minWidth: "150px",
          fontFamily: "Gilroy-Medium",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            marginBottom: "4px",
          }}
        >
          Price Adjustment:
        </div>
        <div
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#585353",
          }}
        >
          {priceAdjustment > 0 ? "+" : ""}
          {priceAdjustment.toLocaleString()} AED
        </div>
      </div>

      {/* Buttons Section */}
      <div style={{ display: "flex", gap: "12px" }}>
        <CustomButton
          customStyles={{
            width: "300px",
            height: "40px",
          }}
          onClick={onViewDetails}
        >
          View Product Details
        </CustomButton>
        <CustomButton
          customStyles={{
            width: "120px",
            height: "40px",
          }}
          onClick={onAccept}
        >
          Accept
        </CustomButton>
        <CustomButton
          variant="outline"
          customStyles={{
            width: "130px",
            height: "40px",
          }}
          onClick={onReject}
        >
          Reject
        </CustomButton>
      </div>
    </div>
  );
};

export default DealCard;
