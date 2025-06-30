import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import ReopenIcon from "../../assets/reopen.svg";

interface DeleteAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteAdModal: React.FC<DeleteAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete This Ad Permanently?"
      icon={ReopenIcon}
    >
      <div className="flex flex-col items-center gap-6 lg:w-[339px]">
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
          Deleting this ad will remove it from your account permanently. This
          action cannot be undone, and all related data (offers, trades, or
          boosts) will be lost.
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Delete Ad
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default DeleteAdModal;
