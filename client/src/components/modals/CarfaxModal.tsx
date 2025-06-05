import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import { useLocation } from "wouter";
import CarfaxSvg from "../../assets/carfax-svg.svg"; 

interface CarfaxModalProps {
  isOpen: boolean;
  onClose: () => void;
  carId: string;
}

const CarfaxModal: React.FC<CarfaxModalProps> = ({
  isOpen,
  onClose,
  carId,
}) => {
  const [, setLocation] = useLocation();

  const handleProceed = () => {
    // Navigate to checkout with car details
    setLocation(`/checkout?carDetails=${JSON.stringify({ carId, type: 'carfax' })}&budget=5&duration=1`);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="View CARFAX Report?"
      icon={CarfaxSvg}
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
          Get instant access to this vehicle's full CARFAX report, including accident history, title status, and more. This is a paid feature, and after a one-time payment of $5.00, you'll unlock the report for immediate viewing. Secure your investment with verified vehicle history!
        </p>

        <CustomButton
          customStyles={{
            width: "357px",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={handleProceed}
        >
          Proceed to Payment
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default CarfaxModal; 