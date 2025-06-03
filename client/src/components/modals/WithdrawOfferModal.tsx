import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import SellAndBuy from "../../assets/sell.svg";

interface WithdrawOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WithdrawOfferModal: React.FC<WithdrawOfferModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Withdraw Offer?"
      icon={SellAndBuy}
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
          You are about to withdraw your price offer? Once withdrawn, this action cannot be undone, and the seller will no longer see your offer.
        </p>

        <CustomButton
          customStyles={{
            width: "357px",
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

export default WithdrawOfferModal; 