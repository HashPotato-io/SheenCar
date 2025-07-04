import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import AcceptTradeIcon from "../../assets/accept.svg";
import { useNavigate } from "react-router-dom";

interface CompletedTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tradeDetails: {
    tradedWithName?: string;
    tradedWith?: string;
    traded?: string;
    adjustment?: string;
    adjustedAmount?: number
  };
}

const CompletedTradeModal: React.FC<CompletedTradeModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  tradeDetails,
}) => {
  const navigate = useNavigate();
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Trade Successfully Completed!"
      icon={AcceptTradeIcon}
    >
      <div className="flex flex-col items-center gap-3 md:w-[339px]">
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
          View the full trade summary, price adjustment details, and cars exchanged in this deal.
        </p>

        <div className="w-full flex gap-3 items-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" className="rounded-full w-[38px] h-[38px]"alt="img" />
          <p className="text-lg">{tradeDetails?.tradedWithName}</p>
        </div>

        <div className="w-full ">
          <p className="font-semibold">Trade with:</p>
          <p className="text-[#585353]">{tradeDetails?.tradedWith}</p>
        </div>

       <div className="w-full ">
          <p className="font-semibold">Price Adjustment:</p>
          <p className="text-[#585353]">{tradeDetails?.adjustment == "even" ? "Even trade – No cash difference." : tradeDetails?.adjustment == "seller" ? `You paid $${tradeDetails.adjustedAmount} to match the trade.` : `Buyer added $${tradeDetails.adjustedAmount} to match the trade.`}</p>
        </div>


       <div className="w-full mb-7 ">
          <p className="font-semibold">Trade Summary:</p>
          <p className="text-[#585353] leading-tight">You Traded Your {tradeDetails?.traded} with {tradeDetails?.tradedWithName}'s {tradeDetails?.tradedWith}</p>
        </div>
        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
            onClick={() => {
                        onConfirm()
                        navigate(`/cars/4`); }}
        >
          View Product Details
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default CompletedTradeModal;
