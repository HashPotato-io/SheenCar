import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import CloseAdIcon from "../../assets/ClosedAd.svg";

interface CloseAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  daysActive: number;
  title?: string;
  message?: string;
  confirmButtonText?: string;
}

const CloseAdModal: React.FC<CloseAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  daysActive,
  title = "Are You Sure You Want to Close This Ad?",
  message = `This ad has been active for ${daysActive} days. You may close it now and reopen it once later. After reopening, it must stay open for 5 days before a final, irreversible closure.`,
  confirmButtonText = "Close Ad"
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      icon={CloseAdIcon}
    >
      <div className="flex flex-col items-center gap-6 md:w-[339px]">
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
          {message}
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          {confirmButtonText}
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default CloseAdModal;
