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
    <div>
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden w-[618px] h-[350px] bg-gray-100">
        <img
          src={mainImage}
          alt="car-main"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
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
      <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
              mainImage === image ? "ring-2 ring-green-800" : ""
            }`}
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
