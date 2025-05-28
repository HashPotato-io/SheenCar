import { Link } from "wouter";
import { carTypes } from "@/lib/car-types";
import { ToggleTabs } from "../ui/toggle-tabs";
import EmblaCarousel from "../ui/embla-carousel";
import React, { useEffect, useState } from "react";

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
      if (emblaInstance) emblaInstance.destroy();
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "60px",
        background: "#F8F8F8",
      }}
    >
      <div
        style={{
          width: "758px",
          height: "112px",
          fontFamily: "Gilroy-SemiBold",
          fontWeight: 400,
          fontSize: "46px",
          lineHeight: "100%",
          letterSpacing: "-1%",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Explore the <span style={{ color: "#AF8C32" }}>Cars</span> Everyone's
        Obsessed With!
      </div>
      <div
        style={{
          width: "600px",
          height: "60px",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#585353",
        }}
      >
        Top-featured listings, trending vehicles, and the latest arrivals—all in
        one place.
      </div>
      <ToggleTabs
        options={["Featured", "Popular", "Latest"]}
        value={selectedTab}
        onValueChange={(value) => setSelectedTab(value)}
      />

      <div style={{ width: "100%", maxWidth: "1200px", marginTop: "40px" }}>
        <EmblaCarousel
          selectedCars={getFilteredCars()}
          emblaRef={emblaDivRef}
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
        />
      </div>
    </div>
    /*  <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2 text-center font-montserrat">
          Browse by Type
        </h2>
        <p className="text-neutral-600 text-center mb-10">
          Find the perfect vehicle for your needs
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {carTypes.map((type) => (
            <Link key={type.id} href={`/search?type=${type.id}`}>
              <div className="car-type-icon text-center cursor-pointer">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <type.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="text-neutral-800 font-medium">{type.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section> */
  );
}
