import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import ReopenIcon from "../../assets/reopen.svg";

interface ReopenAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ReopenAdModal: React.FC<ReopenAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Reopen This Ad?"
      icon={ReopenIcon}
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
          This is your first time reopening this ad. Once reopened, it must stay
          active for at least <span style={{ color: "#585353", fontWeight: 700 }}>5 days</span> before you can close it again. That next
          closure will be final and irreversible.
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Reopen Ad
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default ReopenAdModal;
