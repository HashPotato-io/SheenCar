import React from 'react';
import Carfax from "../assets/carfax.svg";

interface CarfaxButtonProps {
  onClick?: () => void;
}

const CarfaxButton: React.FC<CarfaxButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[13.73px] px-[18.24px] py-[7.3px] rounded-[6px] bg-black text-white"
      style={{ width: 300, height: 36 }}
    >
      <img src={Carfax} alt="carfax-icon" />
      <span style={{
        fontFamily: 'Gilroy-SemiBold',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '-1%',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>Vehicle History Report</span>
    </button>
  );
};

export default CarfaxButton; 