import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import SellAndBuy from "../../assets/sell.svg";


interface WithdrawTradeProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WithdrawTradeProposalModal: React.FC<WithdrawTradeProposalModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Withdraw Trade Proposal?"
      icon={SellAndBuy}
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
          Are you sure you want to withdraw your trade proposal? Once withdrawn, this offer will no longer be visible to the seller, and you'll need to submit a new proposal if you change your mind.
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Withdraw Proposal
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default WithdrawTradeProposalModal; 