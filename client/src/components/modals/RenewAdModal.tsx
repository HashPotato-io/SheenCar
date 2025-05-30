import React from "react";
import { useLocation } from "wouter";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import CloseAdIcon from "../../assets/ClosedAd.svg";

interface RenewAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  carDetails: {
    make: string;
    model: string;
    year: number;
  };
}

const RenewAdModal: React.FC<RenewAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  carDetails,
}) => {
  const [, setLocation] = useLocation();

  const handleRenewal = () => {
    // Navigate to checkout page with state
    setLocation('/checkout', { 
      state: {
        duration: 30, 
        budget: 50,   
        carDetails
      }
    });
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Your Listing is Expiring Soon! Renew Now!"
      icon={CloseAdIcon}
    >
      <div className="flex flex-col items-center gap-6 w-[339px]">
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "center",
            color: "#585353",
          }}
        >
          Your ad is set to expire in 24 hours. Keep your listing live and visible to potential buyers by renewing now! 
          <br /><br />
          Renewal requires a payment to extend your listing duration. Don't miss out—stay on top of search results.
        </p>

        <CustomButton
          customStyles={{
            width: "357px",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={handleRenewal}
        >
          Renew Ad
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default RenewAdModal; 