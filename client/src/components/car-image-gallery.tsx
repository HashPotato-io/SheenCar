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
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Main Image */}
      <div
        style={{
          boxShadow: "0px 4px 12px 0px #00000040",
          borderRadius: "12px",
        }}
        className="relative overflow-hidden w-[618px] h-[475px]"
      >
        <img
          style={{ boxShadow: "0px 4px 12px 0px #00000040" }}
          src={mainImage}
          alt="car-main"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows - Moved to bottom */}
        <button
          style={{
            border: "0.97px solid #000000",
            width: "50px",
            height: "50px",
          }}
          className="absolute left-2 bottom-2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => {
            const newIndex =
              (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
            setGalleryIndex(newIndex);
            setMainImage(galleryImages[newIndex]);
          }}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          style={{
            border: "0.97px solid #000000",
            width: "50px",
            height: "50px",
          }}
          className="absolute right-2 bottom-2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => {
            const newIndex = (galleryIndex + 1) % galleryImages.length;
            setGalleryIndex(newIndex);
            setMainImage(galleryImages[newIndex]);
          }}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div style={{gap: "27px"}} className="flex mt-2 overflow-x-auto pb-1">
        {galleryImages?.map((image, index) => (
          <div
            style={{
              boxShadow: "0px 4px 12px 0px #00000040",
              borderRadius: "8px",
              border: mainImage === image ? "2px solid #000000" : "none",
              width: "102px",
              height: "97px"
            }}
            key={index}
            className={`flex-shrink-0 cursor-pointer overflow-hidden`}
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
