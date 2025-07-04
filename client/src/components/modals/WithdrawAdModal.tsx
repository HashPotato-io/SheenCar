import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import CloseAdIcon from "../../assets/ClosedAd.svg";

interface WithdrawAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WithdrawAdModal: React.FC<WithdrawAdModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Are You Sure You Want to Withdraw Your Ad?"
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
          Your ad is currently under review. Withdrawing it will stop the review process, 
          and the ad will not be published. You can always resubmit it later.
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Confirm Withdrawal
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default WithdrawAdModal; 