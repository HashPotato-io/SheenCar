import { Link } from "wouter";
import { carTypes } from "@/lib/car-types";
import { ToggleTabs } from "../ui/toggle-tabs";
import EmblaCarousel from "../ui/embla-carousel";
import React, { useEffect, useState } from "react";
import NoItemsFound from "../no-items-found";

export default function CarCategories() {
  const emblaDivRef = React.useRef<HTMLDivElement>(null);
  const [emblaInstance, setEmblaInstance] = useState<any>(null);
  const [selectedTab, setSelectedTab] = useState("Featured");

  useEffect(() => {
    const element = emblaDivRef?.current;
    if (element) {
      import("embla-carousel").then(({ default: EmblaCarouselCore }) => {
        const instance = EmblaCarouselCore(element, {
          loop: true,
          align: "start",
        });
        setEmblaInstance(instance);
      });
    }
    return () => {
      if (emblaInstance) emblaInstance?.destroy();
    };
    // eslint-disable-next-line
  }, []);

  const scrollPrev = () => {
    if (emblaInstance) emblaInstance.scrollPrev();
  };
  const scrollNext = () => {
    if (emblaInstance) emblaInstance.scrollNext();
  };

  const getFilteredCars = () => {
    const allCars = [
      {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2023,
        price: 35000,
        image:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        category: "Featured",
      },
      {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2023,
        price: 28000,
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        category: "Popular",
      },
      {
        id: 3,
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800",
        category: "Latest",
      },
      {
        id: 4,
        make: "BMW",
        model: "3 Series",
        year: 2023,
        price: 42000,
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        category: "Featured",
      },
      {
        id: 5,
        make: "Mercedes",
        model: "C-Class",
        year: 2023,
        price: 48000,
        image:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        category: "Featured",
      },
      {
        id: 6,
        make: "Audi",
        model: "A4",
        year: 2023,
        price: 44000,
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        category: "Featured",
      },
      {
        id: 7,
        make: "Ford",
        model: "Mustang",
        year: 2023,
        price: 42000,
        image:
          "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800",
        category: "Popular",
      },
      {
        id: 8,
        make: "Porsche",
        model: "911",
        year: 2023,
        price: 120000,
        image:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        category: "Latest",
      },
      {
        id: 9,
        make: "Ferrari",
        model: "F8",
        year: 2023,
        price: 280000,
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        category: "Latest",
      },
    ];

    return allCars.filter((car) => car.category === selectedTab);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-5 py-12 sm:py-[60px] bg-[#F8F8F8]">
      <div className="w-full max-w-[331px] sm:max-w-[758px] min-h-[80px] sm:min-h-[112px] font-['Gilroy-SemiBold'] text-center text-black px-2 sm:px-5 text-[24px] sm:text-[clamp(24px,5vw,46px)] leading-[120%] tracking-[-0.01em]">
        Explore the <span className="text-[#AF8C32]">Cars</span> Everyone's
        Obsessed With!
      </div>
      <div className="w-full max-w-[331px] sm:max-w-[600px] min-h-[40px] sm:min-h-[60px] font-poppins text-center text-[#585353] px-2 sm:px-5 mt-4 sm:mt-5 text-[14px] sm:text-[clamp(14px,3vw,20px)] leading-[140%]">
        Top-featured listings, trending vehicles, and the latest arrivals—all in
        one place.
      </div>
      <ToggleTabs
        options={["Featured", "Popular", "Latest"]}
        value={selectedTab}
        onValueChange={(value) => setSelectedTab(value)}
        className="w-[331px] sm:w-[433.45px] mt-[10px]"
      />

      <div className="w-full mt-8 sm:mt-10">
        {getFilteredCars()?.length > 0 ? (
          <EmblaCarousel
            selectedCars={getFilteredCars()}
            emblaRef={emblaDivRef}
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
          />
        ) : (
          <NoItemsFound title={`No ${selectedTab} listings available right now. Check back again soon!`} />
        )}
      </div>
    </div>
  );
}
