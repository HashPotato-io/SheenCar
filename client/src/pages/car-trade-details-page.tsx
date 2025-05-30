import React, { useState } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Heart,
  Share,
  Phone,
  MapPin,
} from "lucide-react";
import CarSvg from "../assets/car.svg";
import EmblaCarousel, {
  CarDetails as EmblaCarDetails,
} from "@/components/ui/embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import CarImageGallery from "@/components/car-image-gallery";
import TradeContactDialog from "@/components/trade/TradeContactDialog";
import { Badge } from "@/components/ui/badge";
import Carfax from "../assets/carfax.svg";
import CarfaxButton from "@/components/CarfaxButton";
import SellerDetails from "@/components/seller/SellerDetails";
import CarDetails from "@/components/car/CarDetails";
import CarDescription from "@/components/car/CarDescription";
import CarTabs from "@/components/car/CarTabs";
import SimilarListings from "@/components/similar-listings";

// Mock car data
const carData = {
  id: 1,
  make: "Honda",
  model: "Accord",
  year: 2024,
  price: 22500,
  mainImage:
    "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3",
  galleryImages: [
    "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
  specifications: {
    model: "Accord",
    condition: "New",
    exteriorColor: "Brilliant Green",
    interiorColor: "Black",
    bodyType: "Sedan",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "2.0L Turbo",
    fuelType: "Gasoline",
    mpg: "24/34",
  },
  seller: {
    name: "Prestige Auto Gallery",
    logo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    reviewCount: 124,
    location: "Chicago, IL",
    phoneNumber: "(312) 555-7890",
  },
};

// Mock similar cars
const similarCars = [
  {
    id: 2,
    make: "Toyota",
    model: "Corolla Altis",
    year: 2023,
    price: 30500,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    make: "Honda",
    model: "Civic RS",
    year: 2023,
    price: 28900,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    make: "Toyota",
    model: "Corolla Altis",
    year: 2022,
    price: 27800,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    make: "Honda",
    model: "Accord",
    year: 2023,
    price: 39500,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function TradeCarDetailsPage() {
  const { id, dealerId } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(carData.mainImage);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [similarCarIndex, setSimilarCarIndex] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  // Move Embla carousel setup inside the component
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  // Adapt similarCars to EmblaCarousel's CarDetails type
  const similarCarsForCarousel: EmblaCarDetails[] = similarCars?.map((car) => ({
    id: String(car.id),
    make: car.make,
    model: car.model,
    year: car.year,
    price: car.price,
    mileage: 0,
    fuelType: "",
    transmission: "",
    engine: "",
    exteriorColor: "",
    interiorColor: "",
    doors: 0,
    features: [],
    imageUrl: car.image,
    rating: 0,
  }));

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setGalleryIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div>
          {/* Breadcrumb */}
          {/*    <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/dealer" className="hover:text-gray-700">
              Dealers
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/services/dealer/1`} className="hover:text-gray-700">
              {carData.seller.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              {carData.make} {carData.model}
            </span>
          </div> */}

          {/* Car Images Section */}
          <div className="flex gap-[20px] p-6">
            <CarImageGallery
              mainImage={mainImage}
              setMainImage={setMainImage}
              galleryImages={carData.galleryImages}
              galleryIndex={galleryIndex}
              setGalleryIndex={setGalleryIndex}
            />

            <CarDetails
              car={carData}
              onContactClick={() => setContactDialogOpen(true)}
            />
          </div>

          <CarDescription description={carData.description} />

          <CarTabs carData={carData} />

          {/* Similar Listings */}
          <SimilarListings
            similarCarsForCarousel={similarCarsForCarousel}
            dealerId={dealerId}
            emblaRef={emblaRef}
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
          />

          {/* Contact Dialog */}
          <TradeContactDialog
            open={contactDialogOpen}
            onOpenChange={setContactDialogOpen}
            seller={carData.seller}
            car={carData}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
