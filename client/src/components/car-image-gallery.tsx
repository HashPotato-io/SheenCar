import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarImageGalleryProps {
  mainImage: string;
  setMainImage: (img: string) => void;
  galleryImages: string[];
  galleryIndex: number;
  setGalleryIndex: (idx: number) => void;
}

const CarImageGallery: React.FC<CarImageGalleryProps> = ({
  mainImage,
  setMainImage,
  galleryImages,
  galleryIndex,
  setGalleryIndex,
}) => {
  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setGalleryIndex(index);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Main Image */}
      <div
        style={{
          boxShadow: "0px 4px 12px 0px #00000040",
          borderRadius: "12px",
        }}
        className="relative overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[475px] lg:w-[618px]"
      >
        <img
          style={{ boxShadow: "0px 4px 12px 0px #00000040" }}
          src={mainImage}
          alt="car-main"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          style={{
            border: "0.97px solid #000000",
          }}
          className="absolute left-2 bottom-2 bg-white text-gray-800 rounded-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => {
            const newIndex =
              (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
            setGalleryIndex(newIndex);
            setMainImage(galleryImages[newIndex]);
          }}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          style={{
            border: "0.97px solid #000000",
          }}
          className="absolute right-2 bottom-2 bg-white text-gray-800 rounded-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => {
            const newIndex = (galleryIndex + 1) % galleryImages.length;
            setGalleryIndex(newIndex);
            setMainImage(galleryImages[newIndex]);
          }}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-7 mt-2 overflow-x-auto pb-1">
        {galleryImages?.map((image, index) => (
          <div
            style={{
              boxShadow: "0px 4px 12px 0px #00000040",
              borderRadius: "8px",
              border: mainImage === image ? "2px solid #000000" : "none",
            }}
            key={index}
            className="flex-shrink-0 cursor-pointer overflow-hidden w-[60px] h-[55px] sm:w-[80px] sm:h-[75px] md:w-[90px] md:h-[85px] lg:w-[102px] lg:h-[97px]"
            onClick={() => handleThumbnailClick(image, index)}
          >
            <img
              src={image}
              alt={`thumbnail-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImageGallery;
