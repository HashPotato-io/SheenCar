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
      title="Close This Boosted Ad?"
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
          Closing this ad will immediately end its boosting. You will not
          receive a refund, and reopening the ad later will not restore the
          boost. Once reopened, the ad must remain active for{" "}
          <span style={{ fontWeight: 600 }}>5 days</span> before final closure.
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
