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
} from "lucide-react";
import CarSvg from "../assets/car.svg";
import EmblaCarousel, {
  CarDetails as EmblaCarDetails,
} from "@/components/ui/embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

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

  // Adapt similarCars to EmblaCarousel's CarDetails type (minimal fields used by carousel)
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Car Images Section */}
            <div className="lg:col-span-2">
              <div>
                {/* Main Image */}
                <div className="relative rounded-lg overflow-hidden h-[350px] bg-gray-100">
                  <img
                    src={mainImage}
                    alt={`${carData.make} ${carData.model}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
                    onClick={() => {
                      const newIndex =
                        (galleryIndex - 1 + carData.galleryImages.length) %
                        carData.galleryImages.length;
                      setGalleryIndex(newIndex);
                      setMainImage(carData.galleryImages[newIndex]);
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-md w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
                    onClick={() => {
                      const newIndex =
                        (galleryIndex + 1) % carData.galleryImages.length;
                      setGalleryIndex(newIndex);
                      setMainImage(carData.galleryImages[newIndex]);
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                  {carData.galleryImages.map((image, index) => (
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

              <div className="bg-white rounded-lg p-6 shadow-sm mb-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque egestas
                  et leo congue. Enim tellus nullam bibendum ac in scelerisque
                  neque cras aliquet. Felis at netus a amet velit ullamcorper
                  pharetra iaculis et. Justo et augue orci purus ut magna
                  blandit in tortor. Viverra morbi dignissim ac iaculis.
                  <br />
                  <br />
                  Id varius neque ac posuere pellentesque. Ultrices in ut
                  faucibus non. Ut dignissim scelerisque tempor elit nibh diam.
                  Facilisis viverra felis duis orci interdum in. Etiam aliauam
                  maecenas pulvinar proin interdum scelerisque viverra aliquet
                  lorem. Urna et enim aliquam sed tempus metus et duis. Nec
                  molestie ac egestas maurus viverra.
                  <br />
                  <br />
                  Vitae tempus sed metus integer sem ornare eu gravida. Morbi et
                  mauris adipiscing a gravida turpis accumsan elit. Ipsum lacus
                  id faucibus senectus tincidunt cursus etiam.
                </p>
              </div>

              {/* Description Section */}
              <div className="mt-6 w-[90vw]">
                {/* Tabs Section */}
                <div className="mb-6">
                  <Tabs defaultValue="basic-information">
                    <TabsList className="w-full flex justify-between bg-[#003A2F] rounded-lg overflow-hidden shadow-sm mb-6">
                      <TabsTrigger
                        value="basic-information"
                        className="flex-1 py-4 rounded-none 
                          data-[state=active]:bg-white 
                          data-[state=active]:text-[#003A2F] 
                          data-[state=inactive]:bg-[#003A2F] 
                          data-[state=inactive]:text-white
                          transition-colors"
                      >
                        Basic Information
                      </TabsTrigger>
                      <TabsTrigger
                        value="specifications"
                        className="flex-1 py-4 rounded-none 
                          data-[state=active]:bg-white 
                          data-[state=active]:text-[#003A2F] 
                          data-[state=inactive]:bg-[#003A2F] 
                          data-[state=inactive]:text-white
                          transition-colors"
                      >
                        Specifications
                      </TabsTrigger>
                      <TabsTrigger
                        value="features"
                        className="flex-1 py-4 rounded-none 
                          data-[state=active]:bg-white 
                          data-[state=active]:text-[#003A2F] 
                          data-[state=inactive]:bg-[#003A2F] 
                          data-[state=inactive]:text-white
                          transition-colors"
                      >
                        Features
                      </TabsTrigger>
                    </TabsList>

                    {/* Vehicle Details Content */}
                    <TabsContent
                      value="basic-information"
                      className="rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-6">
                        Vehicle Details
                      </h3>

                      <div className="flex gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 w-[70%]">
                          <KeyValueRow label="Make:" value="Honda" />
                          <KeyValueRow label="Model:" value="Accord" />
                          <KeyValueRow label="Year:" value="2024" />
                          <KeyValueRow label="Condition:" value="New" />
                          <KeyValueRow label="Exterior:" value="White" />
                          <KeyValueRow label="Interior:" value="Black" />
                          <KeyValueRow label="No. of Doors:" value="4" />
                          <KeyValueRow label="Body Type:" value="Sedan" />
                          <KeyValueRow label="Seating Capacity:" value="4" />
                        </div>

                        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
                          <img
                            src={CarSvg}
                            alt="car-illustration"
                            width="195"
                            height="111"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Specifications Content */}
                    <TabsContent
                      value="specifications"
                      className="rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-6">Specifications</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                        <div className="flex flex-col">
                          <span className="font-semibold">Engine:</span>
                          <span>2.0L Turbo</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">Transmission:</span>
                          <span>Automatic</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">Drivetrain:</span>
                          <span>AWD</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">Fuel Type:</span>
                          <span>Gasoline</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">MPG:</span>
                          <span>24/34</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">Horsepower:</span>
                          <span>252 hp</span>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Features Content */}
                    <TabsContent
                      value="features"
                      className="rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-6">Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Bluetooth Connectivity
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Power Windows
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Keyless Entry
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Backup Camera
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Navigation System
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Heated Seats
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Lane Departure Warning
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Adaptive Cruise Control
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Sunroof
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
                          Leather Seats
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>

            {/* Car Details & Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm mb-6">
                {/* ZIP code badge */}
                <div className="p-2 pl-3">
                  <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                    <span>ZIP Code: 10210</span>
                  </div>
                </div>

                {/* Car title and price */}
                <div className="px-6 pb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Honda Accord 2024
                  </h1>
                  <div className="text-xl font-bold text-gray-900 mt-1">
                    Price: $22,500
                  </div>

                  {/* CARFAX button */}
                  <div className="mt-4">
                    <button className="inline-flex items-center px-3 py-1.5 bg-black text-white text-xs rounded">
                      <span className="font-bold tracking-wider mr-2">
                        CARFAX
                      </span>
                      <span>Vehicle History Report</span>
                    </button>
                  </div>
                </div>

                {/* Seller info card */}
                <div className="border-t border-gray-100 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={carData.seller.logo}
                      alt={carData.seller.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium">Dealer Name</div>
                      <div className="flex mt-1">
                        <div className="flex text-amber-500">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span className="text-gray-300">★</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          (125 Ratings)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <div className="text-gray-600">Email Address</div>
                        <div>JohnDoe@email.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <div className="text-gray-600">Phone</div>
                        <div>+1234567890</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <div className="text-gray-600">Address</div>
                        <div>123 Street, New York City, NY</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat button */}
                  <div className="mt-4">
                    <Button
                      className="w-full bg-green-800 hover:bg-green-900 flex items-center justify-center gap-2"
                      onClick={() => setContactDialogOpen(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Listings */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Similar <span className="text-amber-500">Listings</span>
            </h2>

            {/* Use EmblaCarousel for similar listings */}
            <EmblaCarousel
              selectedCars={similarCarsForCarousel?.map((car) => ({
                ...car,
                dealerId: dealerId,
              }))}
              emblaRef={emblaRef}
              scrollPrev={scrollPrev}
              scrollNext={scrollNext}
              listType="dealer"
            />
          </div>

          {/* Contact Dialog */}
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogTitle>Contact Seller</DialogTitle>
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b pb-4">
                  <img
                    src={carData.seller.logo}
                    alt={carData.seller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{carData.seller.name}</div>
                    <div className="text-sm text-gray-500">
                      {carData.seller.location}
                    </div>
                    <div className="flex items-center text-sm text-amber-500">
                      <span>★★★★☆</span>
                      <span className="ml-1 text-gray-500">
                        {carData.seller.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-base font-medium">
                    {carData.seller.phoneNumber}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    About this vehicle
                  </h3>
                  <p className="text-sm text-gray-700">
                    {carData.make} {carData.model} {carData.year} - $
                    {carData.price.toLocaleString()}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <Button className="w-full bg-green-800 hover:bg-green-900">
                    Call Dealer
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>

      <Footer />
    </div>
  );
}
