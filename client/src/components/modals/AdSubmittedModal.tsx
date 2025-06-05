import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import { useLocation } from "wouter";
import Return from "../../assets/return.svg";

interface AdSubmittedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdSubmittedModal: React.FC<AdSubmittedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [, setLocation] = useLocation();

  const handleReturnHome = () => {
    setLocation("/");
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Submitted for Review!"
      icon={Return}
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
          Your Ad has been submitted for review by our team, you will be
          notified once your Ad is approved and live!
        </p>

        <CustomButton
          customStyles={{
            width: "357px",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={handleReturnHome}
        >
          Return to Home
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default AdSubmittedModal;
