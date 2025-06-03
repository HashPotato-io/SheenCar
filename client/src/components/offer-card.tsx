import React from "react";
import { useLocation } from "wouter";
import { CustomButton } from "./ui/custom-button";

interface OfferCardProps {
  user: {
    name: string;
    avatar?: string;
  };
  priceAdjustment: number;
  timeAgo: string;
  onAccept: () => void;
  onReject: () => void;
  sellerId: string;
  carId: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  user,
  priceAdjustment,
  timeAgo,
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
        width: "1273px",
        height: "102px",
        gap: "24px",
        padding: "22px 18px",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 0px #00000014",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span style={{ color: "#666" }}>{user.name[0]}</span>
          )}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "Gilroy-Medium",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {user?.name}
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#969696",
              }}
            >
              {timeAgo}
            </span>
          </div>
          <div
            style={{
              fontFamily: "Gilroy-Regular",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "23px",
              letterSpacing: "0%",
              color: "#000000",
              marginTop: "4px",
            }}
          >
            {user?.name} has made an offer of{" "}
            <span style={{ fontFamily: "Gilroy-Semibold" }}>
              ${priceAdjustment.toLocaleString()}
            </span>
            .
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
   
        <CustomButton
          customStyles={{
            width: "130px",
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

export default OfferCard;
