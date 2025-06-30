import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCards from "../cards/car-cards";

interface Car {
  id: number | string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  sellerId?: number;
  dealerId?: number;
}

interface EmblaCarouselProps {
  selectedCars: any[];
  emblaRef?: React.RefObject<HTMLDivElement> | ((node?: Element | null) => void);
  scrollPrev?: () => void;
  scrollNext?: () => void;
  emblaInstance?: any; // add this
  listType?: "dealer" | "normal";
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  selectedCars,
  emblaRef,
  scrollPrev,
  scrollNext,
  emblaInstance,
  listType = "normal",
}) => {
  // Bullets state for mobile
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  if (!emblaInstance) return;

  const onSelect = () => {
    setActiveIndex(emblaInstance.selectedScrollSnap());
  };
  emblaInstance.on("select", onSelect);
  onSelect();

  return () => {
    emblaInstance.off("select", onSelect);
  };
}, [emblaInstance, selectedCars ? selectedCars.length : 0]);

  // Handle bullet click
 const handleBulletClick = (idx: number) => {
  if (!emblaInstance) return;
  emblaInstance.scrollTo(idx);
};

  return (
    <div className="relative">
      <div className="flex items-center">
        {/* Left Arrow for md+ */}
        <button
          className="hidden sm:block md:p-2 rounded-full bg-[#003A2F] hover:bg-[#005C47] mr-2"
          onClick={scrollPrev}
          aria-label="Previous"
        >
          <ChevronLeft color="white" />
        </button>
        <div className="overflow-hidden w-full py-4" ref={emblaRef as any}>
          <div className="flex gap-4">
            {selectedCars?.map((car, idx) => (
              <div key={car.id || idx} className="min-w-[320px]">
                <CarCards
                  car={{
                    id: car.id,
                    make: car.make,
                    model: car.model,
                    year: car.year,
                    price: car.price,
                    image: car.imageUrl || car.image,
                    sellerId: car.sellerId || car.dealerId,
                  }}
                  linkUrl={
                    listType === "dealer"
                      ? `/services/dealer/${car?.id}/cars/${car.id}`
                      : `/cars/${car.id}`
                  }
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow for md+ */}
        <button
          className="hidden sm:block p-2 rounded-full bg-[#003A2F] hover:bg-[#005C47] ml-2"
          onClick={scrollNext}
          aria-label="Next"
        >
          <ChevronRight color="white" />
        </button>
      </div>
      {/* Bullets for mobile only */}
      <div className="flex justify-center mt-3 sm:hidden">
        {selectedCars?.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-200 ${
              activeIndex === idx ? "bg-[#003A2F]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => handleBulletClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
