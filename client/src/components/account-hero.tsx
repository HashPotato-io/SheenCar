import React, { useState } from "react";
import ProfileActionButton from "@/components/profile-action-button";
import EditIcon from "../assets/Icon/edit.svg";
import AccountBanner from "../assets/account-banner.png";
import AccountTabs from "./account-tabs";

interface AccountHeroProps {
  onEditProfile: () => void;
  onTabChange?: (tab: string) => void;
}

const AccountHero: React.FC<AccountHeroProps> = ({ onEditProfile, onTabChange }) => {
  const [activeTab, setActiveTab] = useState("My Ads");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <section
      style={{
        width: "100%",
        height: 387,
        background: "#f5f6fa",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: `url(${AccountBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 32px 0 32px",
        }}
      >
        {/* User Profile Left */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 121,
              height: 121,
              borderRadius: "50%",
              background: "#d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "#555",
              marginRight: 24,
            }}
          >
            {/* Placeholder for profile image */}
            <span>U</span>
          </div>
          <div>
            <div style={{ fontWeight: 400, fontSize: 29, color: "#FFFFFF" }}>
              User Name
            </div>
            <div style={{ color: "#FFFFFF", fontWeight: 400, fontSize: 19 }}>
              user@email.com
            </div>
          </div>
        </div>
        {/* Edit Profile Button Right */}
        <ProfileActionButton
          icon={
            <img
              src={EditIcon}
              alt="Edit"
              style={{ width: 20, height: 20, display: "block" }}
            />
          }
          title="Edit Profile"
          onClick={onEditProfile}
        />
      </div>
      
      <AccountTabs activeTab={activeTab} onTabChange={handleTabChange} />
    </section>
  );
};

export default AccountHero; 