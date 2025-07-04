import React, { useState } from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import AcceptTradeIcon from "../../assets/accept.svg";
import { ChatIcon } from "../icons";

interface AcceptOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onChatWithBuyer: () => void;
}

const AcceptOfferModal: React.FC<AcceptOfferModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onChatWithBuyer,
}) => {
  const [step, setStep] = useState(1);

  const handleConfirm = () => {
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={handleClose}
      title={step === 1 ? "Accept This Offer?" : "Offer Accepted Successfully!"}
      icon={AcceptTradeIcon}
    >
      <div className="flex flex-col items-center gap-6 md:w-[339px]">
        {step === 1 ? (
          <>
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
              Once accepted, your listing will be marked as completed and all
              other offers for this listing will be closed. Are you sure you
              want to proceed?
            </p>

            <CustomButton
              customStyles={{
                width: "100%",
                height: "44px",
                borderRadius: "7.27px",
              }}
              onClick={handleConfirm}
            >
              Accept Offer
            </CustomButton>
          </>
        ) : (
          <>
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
              You've accepted the offer. Your listing is now marked as completed. 
              You can now chat with the buyer to further coordinate the sale of your car.
            </p>

            <CustomButton
              customStyles={{
                width: "100%",
                height: "44px",
                borderRadius: "7.27px",
              }}
              onClick={onChatWithBuyer}
            >
              <ChatIcon />
              Chat with Buyer
            </CustomButton>
          </>
        )}
      </div>
    </CustomModal>
  );
};

export default AcceptOfferModal; 