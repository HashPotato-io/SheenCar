import React from "react";
import EmptyIcon from "../assets/empty.svg";

interface NoItemsFoundProps {
  title: string;
  icon?: string;
}

const NoItemsFound: React.FC<NoItemsFoundProps> = ({ title, icon = EmptyIcon }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "32px",
      }}
    >
      <img src={icon} alt="empty-icon" />
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#585353",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default NoItemsFound;
