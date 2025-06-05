import React, { useState } from "react";
import { Button } from "./ui/button";
import CarfaxModal from "./modals/CarfaxModal";
import { useParams } from "wouter";
import Carfax from "../assets/carfax.svg";
import CarfaxSvg from "../assets/carfax-svg.svg"; 
import { CustomButton } from "./ui/custom-button";

const CarfaxButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  return (
    <>
      <CustomButton
        customStyles={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#003A2F',
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={Carfax} alt="CARFAX" className="h-4" />
        View CARFAX Report
      </CustomButton>

      <CarfaxModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carId={id || ""}
      />
    </>
  );
};

export default CarfaxButton; 