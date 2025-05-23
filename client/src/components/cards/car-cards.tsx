import React from "react";
import { Link } from "wouter";
import Arrow from "../../assets/Icon/arrow.svg";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
};

interface CarCardsProps {
  car: Car;
  linkUrl: string; // Add linkUrl prop
}

const CarCards: React.FC<CarCardsProps> = ({ car, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-white-100 group w-[303px] h-auto shadow-[1.52px_1.52px_9.14px_0px_#0000001F]">
      <div className="h-44 bg-gray-200 relative overflow-hidden">
        <img
          src={car?.image}
          alt={`${car?.make} ${car?.model}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded">
          {car.year}
        </div> */}
      </div>
      {/* <div className="p-4 bg-white">
        <h3 className="text-base font-medium text-gray-900">{car.make} {car.model}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-base font-bold text-gray-900">Price: ${car.price.toLocaleString()}</p>
          <Link href={`/cars/${car.id}`}>
            <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all hover:bg-green-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="bg-[#EEEEEE] p-[8px] w-[303px] h-[80px] flex justify-between">
        <div className="flex flex-col gap-[6px] ml-[10px] ">
          <div className="align-middle font-normal text-[#171616] leading-[1]">
            {car.make} {car.model}
          </div>
          <div className="align-middle font-normal  text-[#585353] leading-[1]">
            {car.year}
          </div>
          <div className="align-middle font-normal text-[#171616] leading-[1]">
            Price: ${car.price.toLocaleString()}
          </div>
        </div>
        <Link href={linkUrl}>
          <div className="mt-[10px] mr-[10px]">
            <img src={Arrow} alt="arrow"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarCards;
