import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import SellAndBuy from "../../assets/sell.svg";

interface RequestTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSellClick: () => void;
  onBuyClick: () => void;
}

const RequestTypeModal: React.FC<RequestTypeModalProps> = ({
  isOpen,
  onClose,
  onSellClick,
  onBuyClick,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="What type of request would you like to make?"
      width="max-w-[419px]"
      icon={SellAndBuy}
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-center text-gray-600">
          Let us know how we can help you with your car journey.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <CustomButton
            onClick={onSellClick}
            customStyles={{ width: '100%', height: '48px' }}
          >
            Sell it for me
          </CustomButton>

          <CustomButton
            onClick={onBuyClick}
            customStyles={{ width: '100%', height: '48px' }}
          >
            Buy it for me
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default RequestTypeModal;
