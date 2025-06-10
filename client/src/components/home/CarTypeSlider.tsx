import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Micro from "../../assets/micro.svg";
import SUV from "../../assets/suv.svg";
import Hatchback from "../../assets/hatchback.svg";
import Coupe from "../../assets/coupe.svg";
import Sedan from "../../assets/sadan.svg";
import "./CarTypeSlider.css"; 

// Define the car type interface
interface CarType {
  id: number;
  name: string;
  image: string;
}

// Sample data - replace with your actual data
const carTypes: CarType[] = [
  {
    id: 1,
    name: "Micro",
    image: Micro
  },
  {
    id: 2,
    name: "SUV",
    image: SUV,
  },
  {
    id: 3,
    name: "Hatchback",
    image: Hatchback,
  },
  {
    id: 4,
    name: "Coupe",
    image: Coupe,
  },
  {
    id: 5,
    name: "Sedan",
    image: Sedan
  },
  {
    id: 6,
    name: "SUV",
    image: SUV,
  },
  {
    id: 7,
    name: "Hatchback",
    image: Hatchback,
  },
  {
    id: 8,
    name: "Coupe",
    image: Coupe,
  },
  // Add more car types as needed
];

const CarTypeSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="car-type-slider">
      <h2 className="text-2xl md:text-3xl lg:text-[46px] font-semibold text-center text-black mb-5 font-gilroy">
        Browse by Type
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        className="car-type-swiper"
      >
        {carTypes?.map((type) => (
          <SwiperSlide key={type?.id}>
            <div className="car-type-card">
              <img src={type?.image} alt={type?.name} />
              <p>{type?.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarTypeSlider;
