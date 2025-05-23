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
import { useParams, Link } from "wouter";
import CarDealer from "../assets/car-dealer.png";
import CarCards from "@/components/cards/car-cards";
import EmblaCarousel from "@/components/ui/embla-carousel";
import "swiper/css";
import "swiper/css/navigation";

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
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  // Embla carousel setup for car listings
  const [emblaRef, emblaApi] = React.useState<any>(null);
  const emblaDivRef = React.useRef<HTMLDivElement>(null);

  const [emblaInstance, setEmblaInstance] = useState<any>(null);

  useEffect(() => {
    if (emblaDivRef.current) {
      import("embla-carousel").then(({ default: EmblaCarouselCore }) => {
        const instance = EmblaCarouselCore(emblaDivRef.current, {
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Dealer Profile Header */}
        <div className="bg-gray-50 pt-8 pb-4">
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
                <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mb-2">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ZIP Code: {dealerData.zipCode}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {dealerData.name}
                </h1>
                <div className="flex items-center mt-1">
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
                  <span className="ml-2 text-gray-600 text-sm">
                    {dealerData.reviewCount} Ratings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Description Column */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-medium mb-4">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dealerData.description}
                </p>
              </div>
            </div>

            {/* Contact Information Column */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-medium mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">
                      Email Address
                    </h3>
                    <p className="text-blue-500 hover:underline">
                      johndoe@email.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 street, New York City, NY
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
                    <p className="text-gray-700">+1234567890</p>
                  </div>

                  <Button className="w-full mt-4 bg-green-800 hover:bg-green-900 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Listings Section */}
        <div className="container w-[95vw] mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Recent <span className="text-amber-500">Car</span> Listings
            </h2>
            <Link
              href={`/services/dealer/${dealerData.id}/cars`}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
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
        <div className="container mx-auto px-4 py-8 pb-16">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Reviews Summary */}
              <div className="w-full lg:w-1/2 lg:border-r lg:pr-8">
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const breakdown = dealerData.reviewsBreakdown.find(
                      (b) => b.stars === stars
                    ) || { stars, count: 0 };
                    const percentage =
                      (breakdown.count / dealerData.reviewCount) * 100;

                    return (
                      <div key={stars} className="flex items-center">
                        <div className="w-8 text-sm text-gray-600">
                          {stars} ★
                        </div>
                        <div className="flex-1 mx-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-800 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 text-right">
                  <div className="text-4xl font-bold text-gray-900">
                    {dealerData.rating.toFixed(1)}
                  </div>
                  <div className="flex justify-end mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(dealerData.rating)
                            ? "fill-amber-500 text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {dealerData.reviewCount} Reviews
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {dealerData.reviews.map((review) => (
                    <div key={review.id} className="mb-6">
                      <div className="flex items-center mb-2">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div className="font-medium text-sm">
                          {review.author}
                        </div>
                      </div>

                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-amber-500 text-amber-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {review.content}
                      </p>
                      <div className="text-xs text-gray-400 mt-1">
                        {review.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Write a Review */}
            <div className="mt-12 border-t pt-8">
              <h3 className="text-xl font-bold mb-6">Write a Review</h3>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    alt="John Doe"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-gray-700 font-medium">John Doe</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Rating:</div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 cursor-pointer ${
                        star <= reviewRating
                          ? "text-amber-500"
                          : "text-gray-300"
                      }`}
                      fill={star <= reviewRating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => setReviewRating(star)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <Textarea
                placeholder="Tell us more about your experience..."
                className="w-full border border-gray-300 rounded-md mb-4 h-32"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />

              <div className="flex justify-end space-x-2">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-green-800 text-white rounded-md hover:bg-green-900">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
