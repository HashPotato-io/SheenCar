import React from "react";

interface AccountTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AccountTabs: React.FC<AccountTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ["My Ads", "Trade Deals", "Offers"];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        borderBottom: "1px solid #e5e7eb",
        marginTop: 32,
        color: "#FFFFFF",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            borderBottom: `3px solid ${activeTab === tab ? "#FFFFFF" : "transparent"}`,
            fontWeight: 400,
            fontSize: 20,
            padding: "20px 0",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default AccountTabs; 