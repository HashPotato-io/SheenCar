import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useParams, Link, useLocation } from "wouter";
import CarDealer from "../assets/car-dealer.png";
import CarCards from "@/components/cards/car-cards";
import EmblaCarousel from "@/components/ui/embla-carousel";
import "swiper/css";
import "swiper/css/navigation";
import { Badge } from "@/components/ui/badge";
import CarDescription from "@/components/car/CarDescription";
import ReviewSection from "@/components/reviews/ReviewSection";
import { CustomButton } from "@/components/ui/custom-button";
import { ChatIcon } from "@/components/icons";

// Mock data for a dealer
const dealerData = {
  id: 1,
  name: "Prestige Auto Gallery",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo blandit diam, eget vestibulum urna lobortis et. Aenean varius odio id massa venenatis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Vivamus blandit neque vel arcu dapibus, in commodo justo venenatis. Cras ultrices metus in neque venenatis, vel sodales lorem eleifend. Sed varius magna ac nibh tincidunt, et congue nisi rutrum. Ut quam leo, elementum eget posuere a, tincidunt a enim. Sed consectetur sapien a elementum semper. Vivamus vel varius neque. Vestibulum efficitur gravida fermentum. Suspendisse potenti. Duis posuere purus leo, in tempor velit egestas nec. Aenean eget lorem quis sapien vestibulum dapibus. Sed ac lectus vitae ante lacinia dapibus.",
  logo: "/assets/car-dealer-logo.png",
  location: "Chicago, IL",
  zipCode: "60210",
  phoneNumber: "(312) 555-7890",
  websiteUrl: "prestigeautogallery.com",
  rating: 4.0,
  reviewCount: 28,
  reviewsBreakdown: [
    { stars: 5, count: 20 },
    { stars: 4, count: 5 },
    { stars: 3, count: 2 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ],
  reviews: [
    {
      id: 1,
      author: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "2 months ago",
      content:
        "Great dealership with amazing service. The staff was friendly and helped me find exactly what I was looking for.",
    },
    {
      id: 2,
      author: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      date: "3 months ago",
      content:
        "Good selection of cars, but the process took longer than expected. Otherwise, a positive experience and I would recommend them to anyone in the market for a luxury vehicle.",
    },
  ],
  carListings: [
    {
      id: 101,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22500,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 102,
      make: "Honda",
      model: "Accord",
      year: 2019,
      price: 20200,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 103,
      make: "Ford",
      model: "F-150",
      year: 2021,
      price: 36100,
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 104,
      make: "Nissan",
      model: "Altima",
      year: 2022,
      price: 24500,
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ],
};

export default function DealerProfilePage() {
  // Embla carousel setup for car listings
  const [emblaRef, emblaApi] = React.useState<any>(null);
  const emblaDivRef = React.useRef<HTMLDivElement>(null);
  const [,setLocation]= useLocation();

  const [emblaInstance, setEmblaInstance] = useState<any>(null);

  useEffect(() => {
    if (emblaDivRef.current) {
      import("embla-carousel").then(({ default: EmblaCarouselCore }) => {
        const instance = EmblaCarouselCore(emblaDivRef.current as HTMLElement, {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Dealer Profile Header */}
        <div className="bg-gray-50 p-10">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-6">
              {/* Dealer Logo */}
              <div className="w-[185px] h-[148px] bg-neutral-800 rounded overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <img src={CarDealer} alt="car-dealer" />
                </div>
              </div>

              {/* Dealer Header Info */}
              <div className="flex-1">
                {/* ZIP code badge */}
                <div className="p-2 pl-3">
                  <Badge title="ZIP Code: 10210" icon={<MapPin size={12} />} />
                </div>
                <h1 className="text-[46px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] align-middle text-[#171616]">
                  {dealerData.name}
                </h1>
                <div className="flex items-center justify-center sm:justify-start mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(dealerData.rating)
                          ? "fill-amber-500 text-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-['Gilroy-Medium'] font-normal text-[13.77px] leading-[100%] tracking-[0] text-[#171616]">
                    {dealerData.reviewCount} Ratings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 sm:gap-6 mb-5 sm:mb-[20px] sm:ml-0 lg:ml-[40px]">
          <div
            style={{
              boxShadow: "0px 4px 12px 0px #00000014",
              background: "#FFFFFF",
              borderRadius: "11.32px",
              width: "100%",
              maxWidth: "856px",
            }}
            className="p-4 sm:p-6 shadow-sm mb-4 lg:mb-0"
          >
            <h3 className="font-['Gilroy-SemiBold'] font-normal text-[20px] sm:text-[24px] md:text-[28px] leading-[100%] tracking-[1%] text-black mb-2 sm:mb-4">
              Description
            </h3>
            <p className="font-['Gilroy-Regular'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[130%] tracking-[-1%] align-middle text-[#464646]">
              Lorem ipsum dolor sit amet consectetur. Sit suscipit pulvinar non
              eu sed consequat diam lorem. Vulputate scelerisque donec a nisl.
              Viverra purus neque sed bibendum donec quisque ultricies. Nunc
              ullamcorper ut habitant quisque ultrices vitae feugiat ut quis.
              Eget sagittis fusce nullam molestie. In consectetur leo diam
              faucibus viverra vel ornare sed massa. Sed nam phasellus ut tellus
              lectus volutpat eu quis et. Feugiat at posuere et commodo vivamus.
              Nunc sit porttitor tristique fames ut. Eget nulla dignissim
              pretium massa nisl. Egestas donec gravida ultricies quis commodo.
              Convallis et proin at risus maecenas eget tortor tristique.
              Tincidunt mauris risus in facilisi neque. Gravida ne.
            </p>
          </div>

          {/* Contact Information Column */}
          <div className="w-full max-w-[373px]">
            <div
              className="bg-white rounded-lg p-4 sm:p-6"
              style={{
                boxShadow: "0px 4px 12px 0px #00000014",
                background: "#FFFFFF",
              }}
            >
              <h2 className="font-['Gilroy-SemiBold'] font-normal text-[20px] sm:text-[24px] leading-[100%] tracking-[-1%] text-black mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Email Address</h3>
                  <p className="text-blue-500 hover:underline">
                    johndoe@email.com
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Address</h3>
                  <p className="text-gray-700">123 street, New York City, NY</p>
                </div>

                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
                  <p className="text-gray-700">+1234567890</p>
                </div>

                {/* Chat button */}
                <div className="mt-4">
                  <CustomButton
                    customStyles={{
                      width: "100%",
                      backgroundColor: "#003A2F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onClick={() => {
                      setLocation("/chat");
                    }}
                  >
                    <ChatIcon />
                    Chat
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Listings Section */}
        <div className="px-2 sm:px-4 py-6 sm:py-8 bg-[#E9E9E9]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-center sm:text-left text-black">
              Recent <span className="text-[#AF8C32]">Car</span> Listings
            </h2>
            <Link
              href={`/services/dealer/${dealerData.id}/cars`}
              className="text-[16px] sm:text-[18px] font-['Poppins'] font-normal leading-[100%] tracking-[0] underline decoration-solid decoration-0 text-black mt-2 sm:mt-0"
            >
              View All
            </Link>
          </div>

          {/* Embla Carousel for car listings */}
          <EmblaCarousel
            selectedCars={dealerData?.carListings.map((car) => ({
              ...car,
              dealerId: dealerData.id,
              imageUrl: car.image,
            }))}
            emblaRef={emblaDivRef}
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
            listType="dealer"
          />
        </div>

        {/* Reviews Section */}
        <ReviewSection
          rating={dealerData.rating}
          reviewCount={dealerData.reviewCount}
          reviewsBreakdown={dealerData.reviewsBreakdown}
          reviews={dealerData.reviews}
          onPostReview={(rating, text) => {
            // Handle posting review here
            console.log("Posting review:", { rating, text });
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
