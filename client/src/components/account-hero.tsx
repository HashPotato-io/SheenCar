import React, { useState } from "react";
import ProfileActionButton from "@/components/profile-action-button";
import EditIcon from "../assets/Icon/edit.svg";
import AccountBanner from "../assets/account-banner.png";
import AccountTabs from "./account-tabs";
import { useMobileDevice } from "@/hooks/useMobileDevice";

interface AccountHeroProps {
  onEditProfile: () => void;
  onTabChange?: (tab: string) => void;
}

const AccountHero: React.FC<AccountHeroProps> = ({ onEditProfile, onTabChange }) => {
  const [activeTab, setActiveTab] = useState("My Ads");
  const isMobile = useMobileDevice();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <section className="w-full h-[387px] bg-[#f5f6fa] mx-auto flex flex-col justify-between items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${AccountBanner})` }}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center px-8 pt-10 relative">
        {/* Edit Icon - Only visible on mobile */}
        {isMobile && (
          <div className="absolute top-0 right-4">
            <button 
              onClick={onEditProfile}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <img
                src={EditIcon}
                alt="Edit"
                className="w-8 h-8 block"
              />
            </button>
          </div>
        )}

        {/* User Profile */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="w-[121px] h-[121px] rounded-full bg-[#d1d5db] flex items-center justify-center text-4xl text-[#555] mb-4 md:mb-0 md:mr-6">
            <span>U</span>
          </div>
          <div>
            <div className="text-white text-2xl md:text-[29px] font-normal">
              User Name
            </div>
            <div className="text-white text-base md:text-[19px] font-normal">
              user@email.com
            </div>
          </div>
        </div>

        {/* Edit Profile Button - Only visible on desktop */}
        {!isMobile && (
          <ProfileActionButton
            icon={
              <img
                src={EditIcon}
                alt="Edit"
                className="w-5 h-5 block"
              />
            }
            title="Edit Profile"
            onClick={onEditProfile}
          />
        )}
      </div>
      
      <AccountTabs activeTab={activeTab} onTabChange={handleTabChange} />
    </section>
  );
};

export default AccountHero; 