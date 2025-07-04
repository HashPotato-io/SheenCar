import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import CloseAdIcon from "../../assets/ClosedAd.svg";
import { useNavigate } from "react-router-dom";
interface MaxListLimitReachedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  daysActive: number;
}

const MaxListLimitReachedModal: React.FC<MaxListLimitReachedModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  daysActive,
}) => {
  const navigate = useNavigate();
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Maximum Active Listings Reached!"
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
          You can only have 5 active listings at a time. To post an additional
          car, you'll need to pay a one-time fee of $10 for exceeding your
          active ad limit.
        </p>

          <p className="mt-8"
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "center",
            color: "#585353",
          }}
        >
         If you are a dealer and need to upload more cars then reach out to us through dealer support and get yourself registered!
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Pay For Extra Ad
        </CustomButton>
        <CustomButton
        variant="outline"
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={() =>{navigate("/dealer-support")}}
        >
          Become a dealer
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default MaxListLimitReachedModal;
