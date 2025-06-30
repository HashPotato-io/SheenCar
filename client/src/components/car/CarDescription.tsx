import React from 'react';

interface CarDescriptionProps {
  description: string;
}

const CarDescription: React.FC<CarDescriptionProps> = ({ description }) => {
  return (
    <div style={{boxShadow: "0px 4px 12px 0px #00000014", background: "#FFFFFF", borderRadius: "11.32px"}} className="p-4 sm:p-6 shadow-sm mx-3 mb-6 sm:mb-14 ">
      <h3 className="font-['Gilroy-SemiBold'] font-normal text-[24px] sm:text-[26px] md:text-[28px] leading-[100%] tracking-[1%] text-black mb-2 sm:mb-4">Description</h3>
      <p className="font-['Gilroy-Regular'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[130%] tracking-[-1%] align-middle text-[#464646]">
        {description}
      </p>
    </div>
  );
};

export default CarDescription; 