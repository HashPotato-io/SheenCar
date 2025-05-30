import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import CloseAdIcon from "../../assets/ClosedAd.svg";

interface CloseAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  daysActive: number;
}

const CloseAdModal: React.FC<CloseAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  daysActive,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Are You Sure You Want to Close This Ad?"
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
          This ad has been active for{" "}
          <span style={{ fontWeight: 600 }}>{daysActive}</span> days. You may
          close it now and reopen it once later. After reopening, it must stay
          open for 5 days before a final, irreversible closure.
        </p>

        <CustomButton
          customStyles={{
            width: "357px",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Close Ad
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default CloseAdModal;
