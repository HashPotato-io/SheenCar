import React from "react";
import CarCategoriesBg from "../../assets/CarCategoriesBg.png";
import Cars from "../../assets/cars.png";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import CarTypeSlider from "./CarTypeSlider";

const CarCategories = () => {
  return (
    <>
      <div
        className="relative flex justify-center h-[240px] md:h-[270px] lg:h-[407px] rounded-t-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${CarCategoriesBg})` }}
      >
        <div className="relative z-20 mt-12  md:mt-[100px] px-6 lg:px-0 text-center text-white font-['Gilroy-SemiBold'] text-2xl md:text-4xl lg:text-[46px] leading-[100%] tracking-[-1%]">
          The <span className="text-[#AF8C32]">Smarter</span> Way to Find Your
          Next Car
        </div>
      <div className="absolute bottom-[-20%]  md:h-[180px] lg:bottom-[-13%] left-0 w-full  flex justify-center md:gap-32 lg:gap-0 lg:justify-between px-4 z-10">
          <img
           src={home3}
           
            alt="Home1"
            className="w-[245px]  mt-4 lg:w-1/3 object-contain hidden sm:block"
          />

          <img
             src={home1}
            alt="Home2"
            className="w-[245px]   lg:w-1/3 lg:pr-5 object-contain"
          />

          <img
            src={home2}
            alt="Home3"
            className=" w-[245px] mt-9  lg:w-[300px] mr-9 object-cover hidden lg:block"
          />
        </div>
      </div>
      <CarTypeSlider />
    </>
  );
};

export default CarCategories;
