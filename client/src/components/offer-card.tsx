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
  sellerId: string | number;
  carId: string | number;
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
        gap: "24px",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 0px #00000014",
      }}
      className="w-full lg:h-[80px] flex lg:flex-row flex-col p-5 lg:items-center "
    >
      <div   className="flex flex-row items-center gap-4 ">
        <div
          style={{
            width: "40px",
            height: "40px",
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
          <div  className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "Gilroy-Medium",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
              }}
              className="text-[20px] md:text-2xl"
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
              lineHeight: "23px",
              letterSpacing: "0%",
              color: "#000000",
              marginTop: "4px",
            }}
            className="text-base md:text-[20px]"
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
