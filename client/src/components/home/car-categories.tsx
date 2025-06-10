import React from "react";
import CarCategoriesBg from "../../assets/CarCategoriesBg.png";
import Cars from "../../assets/cars.png";
import CarTypeSlider from "./CarTypeSlider";

const CarCategories = () => {
  return (
    <>
      <div
        className="relative flex justify-center h-[407px] rounded-t-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${CarCategoriesBg})` }}
      >
        <div className="relative z-20 mt-[100px] text-center text-white font-['Gilroy-SemiBold'] text-[24px] sm:text-[46px] leading-[100%] tracking-[-1%]">
          The <span className="text-[#AF8C32]">Smarter</span> Way to Find Your
          Next Car
        </div>
        <img
          src={Cars}
          alt="Cars"
          className="absolute bottom-[-50%] left-0 w-full h-full object-cover z-10"
        />
      </div>
      <CarTypeSlider />
    </>
  );
};

export default CarCategories;
