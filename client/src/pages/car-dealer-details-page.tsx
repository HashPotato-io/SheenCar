import React, { useState } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SellerDetails from "@/components/seller/SellerDetails";
import useEmblaCarousel from "embla-carousel-react";
import CarImageGallery from "@/components/car-image-gallery";
import CarDetails from "@/components/car/CarDetails";
import CarDescription from "@/components/car/CarDescription";
import SimilarListings from "@/components/similar-listings";
import CarTabs from "@/components/car/CarTabs";
import TradeContactDialog from "@/components/trade/TradeContactDialog";

// Define the CarDetails type
interface CarDetails {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  doors: number;
  features: string[];
  imageUrl: string;
  rating: number;
}

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
    type: "dealer",
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

// Add KeyValueRow component above DealerCarDetailsPage
const KeyValueRow: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => (
  <div className="flex gap-[4px]">
    <span className="font-semibold">{label}</span>
    <span>{value}</span>
  </div>
);

export default function DealerCarDetailsPage() {
  const { id, dealerId } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(carData.mainImage);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [similarCarIndex, setSimilarCarIndex] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setGalleryIndex(index);
  };

  // Embla carousel setup for similar cars
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  // Adapt similarCars to CarDetails type
  const similarCarsForCarousel: CarDetails[] = similarCars?.map((car) => ({
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div >
          {/* Breadcrumb */}
          {/*   <div className="flex items-center text-sm text-gray-500 mb-4">
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
          <div className="flex flex-col md:flex-row gap-[20px] md:px-4">
            <div className="order-2 lg:order-1">
              <CarImageGallery
                mainImage={mainImage}
                setMainImage={setMainImage}
                galleryImages={carData.galleryImages}
                galleryIndex={galleryIndex}
                setGalleryIndex={setGalleryIndex}
              />
            </div>
            <div className="order-1 lg:order-2 p-6 md:p-0">
              <CarDetails
                car={carData}
                onContactClick={() => setContactDialogOpen(true)}
              />
            </div>
          </div>
          <div className=" lg:hidden my-6 px-7 lg:px-0 lg:ml-3">
            <SellerDetails
              seller={carData.seller}
              onContactClick={() => setContactDialogOpen(true)}
            />
          </div>
          <div className="  mb-6 px-4 lg:px-0 ">
            <CarDescription description={carData.description} />
          </div>
          <div className="  mb-6 px-4 lg:px-0 ">
            <CarTabs carData={carData} />
          </div>

          {/* Similar Listings */}
          <SimilarListings
            similarCarsForCarousel={similarCarsForCarousel}
            dealerId={dealerId || ""}
            // emblaRef={emblaRef as React.RefObject<HTMLDivElement> | ((node?: Element | null) => void)}
            emblaRef={emblaRef as React.RefObject<HTMLDivElement> | ((node?: Element | null) => void)}

            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
            emblaInstance={emblaApi} // Pass this!
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
