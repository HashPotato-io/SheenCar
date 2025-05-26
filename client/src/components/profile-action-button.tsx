import React from "react";

interface ProfileActionButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ProfileActionButton: React.FC<ProfileActionButtonProps> = ({
  icon,
  title,
  onClick,
}) => (
  <button
    style={{
      width: 177,
      height: 40,
      display: "flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 6,
      borderWidth: 1,
      border: "1px solid #FFFFFF",
      background: "transparent",
      color: "#fff",
      fontWeight: 400,
      fontSize: 16,
      cursor: "pointer",
      padding: "0 20px",
    }}
    onClick={onClick}
  >
    <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
    <span>{title}</span>
  </button>
);

export default ProfileActionButton;
