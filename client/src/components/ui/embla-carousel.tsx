import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCards from "../cards/car-cards";

interface Car {
  id: number | string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
}

interface EmblaCarouselProps {
  selectedCars: any[];
  emblaRef?:
    | React.RefObject<HTMLDivElement>
    | ((node?: Element | null) => void);
  scrollPrev?: () => void;
  scrollNext?: () => void;
  listType?: "dealer" | "normal";
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  selectedCars,
  emblaRef,
  scrollPrev,
  scrollNext,
  listType = "normal",
}) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          className="hidden sm:block p-2 rounded-full bg-[#003A2F] hover:bg-[#005C47] mr-2"
          onClick={scrollPrev}
          aria-label="Previous"
        >
          <ChevronLeft color="white" />
        </button>
        <div className="overflow-hidden w-full p-4" ref={emblaRef as any}>
          <div className="flex gap-4">
            {selectedCars.map((car, idx) => (
              <div key={car.id || idx} className="min-w-[320px]">
                {/* You may need to adapt the props for CarCards */}
                <CarCards
                  car={{
                    id: car.id,
                    make: car.make,
                    model: car.model,
                    year: car.year,
                    price: car.price,
                    image: car.imageUrl || car.image,
                  }}
                  linkUrl={
                    listType === "dealer"
                      ? `/services/dealer/${car?.dealerId}/cars/${car.id}`
                      : `/cars/${car.id}`
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="hidden sm:block p-2 rounded-full bg-[#003A2F] hover:bg-[#005C47] ml-2"
          onClick={scrollNext}
          aria-label="Next"
        >
          <ChevronRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
