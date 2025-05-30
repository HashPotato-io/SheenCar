import React from "react";
import { CustomButton } from "../ui/custom-button";
import RenewIcon from "../../assets/renewIcon.svg";
import CustomModal from "../ui/custom-modal";

interface RenewBoostModalProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: {
    make: string;
    model: string;
    year: number;
  };
  onProceed: () => void;
}

const RenewBoostModal: React.FC<RenewBoostModalProps> = ({
  isOpen,
  onClose,
  carDetails,
  onProceed,
}) => {
  const handleRenewBoost = () => {
    onClose();
    onProceed();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      icon={RenewIcon}
      title="Keep Your Listing in the Spotlight!"
    >
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <p
          className="text-left mb-8"
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "100%",
            color: "#585353",
            width: "339px",
          }}
        >
          Your boosted listing for {carDetails.make} {carDetails.model}{" "}
          {carDetails.year} is nearing expiration. Renew now to maintain top
          visibility on the homepage, search results, and featured listings.
          Stay ahead and attract more buyers!
        </p>

        {/* Sub heading */}
        <div style={{ width: "339px" }}>
          <h3
            className="text-left mb-2"
            style={{
              fontFamily: "Gilroy-Medium",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              color: "#000000",
            }}
          >
            Set Your Renewal
          </h3>
        </div>

        {/* Description */}
        <p
          className="mb-8"
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "100%",
            color: "#535353",
            width: "339px",
          }}
        >
          Choose your preferred duration and budget to keep your car in the
          spotlight.
        </p>

        {/* Buttons */}
        <CustomButton 
          customStyles={{ width: "339px" }}
          onClick={handleRenewBoost}
        >
          Renew Boost
        </CustomButton>
        <div
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#535353",
            width: "339px",
            marginTop: "16px",
          }}
        >
          *Towards the end of your boosting period you will be notified to
          renew your listing.
        </div>
      </div>
    </CustomModal>
  );
};

export default RenewBoostModal;
