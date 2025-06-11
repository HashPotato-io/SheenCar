import React from "react";
import EmblaCarousel from "@/components/ui/embla-carousel";

interface SimilarListingsProps {
  similarCarsForCarousel: any[];
  dealerId: string;
  emblaRef: React.RefObject<HTMLDivElement> | ((node?: Element | null) => void);
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
    <div className="mt-6 sm:mt-8 bg-[#E9E9E9] p-3 sm:p-4">
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
          listType="dealer"
        />
      </div>
    </div>
  );
};

export default SimilarListings; 