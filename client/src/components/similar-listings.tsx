import React from "react";
import EmblaCarousel from "@/components/ui/embla-carousel";

interface CarDetails {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  doors: number;
  features: string[];
  imageUrl: string;
  rating: number;
}

interface SimilarListingsProps {
  similarCarsForCarousel: CarDetails[];
  dealerId: string;
  emblaRef: React.RefObject<HTMLDivElement> | ((node?: Element | null) => void);
  scrollPrev: () => void;
  scrollNext: () => void;
   emblaInstance: any; 
}

const SimilarListings: React.FC<SimilarListingsProps> = ({
  similarCarsForCarousel,
  dealerId,
  emblaRef,
  scrollPrev,
  scrollNext,
  emblaInstance
}) => {
  return (
    <div className="mt-6 sm:mt-8 bg-[#E9E9E9] p-6">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#000000] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-left mb-3 sm:mb-4">
        Similar <span className="text-[#AF8C32]">Listings</span>
      </h2>

      <div className="relative">
       <EmblaCarousel
  selectedCars={similarCarsForCarousel?.map((car) => ({
    ...car,
    dealerId: dealerId,
  }))}
  emblaRef={emblaRef}
  scrollPrev={scrollPrev}
  scrollNext={scrollNext}
  emblaInstance={emblaInstance} // <--- Add this
  listType="dealer"
/>
 
      </div>
    </div>
  );
};

export default SimilarListings; 