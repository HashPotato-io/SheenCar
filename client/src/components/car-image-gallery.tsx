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
        className="relative overflow-hidden w-full h-[290px] sm:h-[350px] md:h-[400px] lg:w-[550px] xl:h-[475px] xl:w-[618px]"
      >
        <img
          style={{ boxShadow: "0px 4px 12px 0px #00000040" }}
          src={mainImage}
          alt="car-main"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
        
          className="absolute left-2 bottom-1/2 md:bottom-2  md:bg-white border bg-transparent md:border-black text-white md:text-gray-800 rounded-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow hover:bg-gray-100"
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
        
          className="absolute right-2 bottom-1/2 md:bottom-2 md:bg-white border bg-transparent md:border-black text-white md:text-gray-800 rounded-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => {
            const newIndex = (galleryIndex + 1) % galleryImages.length;
            setGalleryIndex(newIndex);
            setMainImage(galleryImages[newIndex]);
          }}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5"   />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="md:flex gap-2 w-full justify-center hidden md:gap-6 xl:gap-7 mt-2 overflow-x-auto pb-1">
        {galleryImages?.map((image, index) => (
          <div
            style={{
              boxShadow: "0px 4px 12px 0px #00000040",
              borderRadius: "8px",
              border: mainImage === image ? "2px solid #000000" : "none",
            }}
            key={index}
            className="flex-shrink-0 cursor-pointer overflow-hidden w-[60px] h-[55px]  md:w-1/6 md:h-[85px] lg:w-[90px] xl:w-[102px] lg:h-[97px]"
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
