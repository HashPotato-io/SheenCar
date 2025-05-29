import React from "react";
import EmblaCarousel from "@/components/ui/embla-carousel";
import { EmblaViewportRefType } from "embla-carousel-react";

interface SimilarListingsProps {
  similarCarsForCarousel: any[];
  dealerId: string;
  emblaRef: EmblaViewportRefType;
  scrollPrev: () => void;
  scrollNext: () => void;
}

const SimilarListings: React.FC<SimilarListingsProps> = ({
  similarCarsForCarousel,
  dealerId,
  emblaRef,
  scrollPrev,
  scrollNext,
}) => {
  return (
    <div className="mt-8 bg-[#E9E9E9] p-4">
      <h2 className="text-[40px] text-[#000000] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-left mb-4">
        Similar <span className="text-[#AF8C32]">Listings</span>
      </h2>

      <EmblaCarousel
        selectedCars={similarCarsForCarousel?.map((car) => ({
          ...car,
          dealerId: dealerId,
        }))}
        emblaRef={emblaRef}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
        listType="dealer"
      />
    </div>
  );
};

export default SimilarListings; 