import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, MapPin, Phone, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useParams, Link } from "wouter";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Mock data for a dealer
const dealerData = {
  id: 1,
  name: "Prestige Auto Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo blandit diam, eget vestibulum urna lobortis et. Aenean varius odio id massa venenatis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Vivamus blandit neque vel arcu dapibus, in commodo justo venenatis. Cras ultrices metus in neque venenatis, vel sodales lorem eleifend. Sed varius magna ac nibh tincidunt, et congue nisi rutrum. Ut quam leo, elementum eget posuere a, tincidunt a enim. Sed consectetur sapien a elementum semper. Vivamus vel varius neque. Vestibulum efficitur gravida fermentum. Suspendisse potenti. Duis posuere purus leo, in tempor velit egestas nec. Aenean eget lorem quis sapien vestibulum dapibus. Sed ac lectus vitae ante lacinia dapibus.",
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
    { stars: 1, count: 0 }
  ],
  reviews: [
    {
      id: 1,
      author: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "2 months ago",
      content: "Great dealership with amazing service. The staff was friendly and helped me find exactly what I was looking for."
    },
    {
      id: 2,
      author: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      date: "3 months ago",
      content: "Good selection of cars, but the process took longer than expected. Otherwise, a positive experience and I would recommend them to anyone in the market for a luxury vehicle."
    }
  ],
  carListings: [
    {
      id: 101,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22500,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 102,
      make: "Honda",
      model: "Accord",
      year: 2019,
      price: 20200,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 103,
      make: "Ford",
      model: "F-150",
      year: 2021,
      price: 36100,
      image: "https://images.unsplash.com/photo-1558986377-c44f6a2b50d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 104,
      make: "Nissan",
      model: "Altima",
      year: 2022,
      price: 24500,
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ]
};

export default function DealerProfilePage() {
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  
  // For carousel controls
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carsToShow = 4;
  const maxIndex = Math.max(0, dealerData.carListings.length - carsToShow);
  
  const nextSlide = () => {
    setCarouselIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCarouselIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };
  
  const visibleCars = dealerData.carListings.slice(carouselIndex, carouselIndex + carsToShow);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {/* Dealer Profile Header */}
        <div className="bg-gray-50 pt-8 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-6">
              {/* Dealer Logo */}
              <div className="w-[128px] h-[96px] bg-neutral-800 rounded overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <svg width="70" height="45" viewBox="0 0 229 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <path d="M186.897 30.4313C184.578 30.4313 182.465 30.7358 180.536 31.262C177.405 25.1649 170.997 20.9624 163.676 20.9624C161.009 20.9624 158.342 21.4886 155.955 22.4582C152.129 15.1803 144.329 10.1211 135.358 10.1211C132.86 10.1211 130.447 10.5646 128.128 11.3679C125.382 6.37598 120.12 3.24561 114.084 3.24561C107.932 3.24561 102.6 6.5071 99.9322 11.6724C97.6131 10.9518 95.1151 10.5646 92.6172 10.5646C83.5616 10.5646 75.8456 15.6238 72.0192 22.9845C69.632 22.0148 67.0525 21.4886 64.3823 21.4886C57.0613 21.4886 50.6534 25.6911 47.5224 31.788C45.5942 31.2618 43.4808 30.9572 41.1617 30.9572C32.4457 30.9572 25.4285 37.3846 25.4285 45.3358C25.4285 53.2869 32.4457 59.7143 41.1617 59.7143H186.897C200.29 59.7143 211.19 49.6639 211.19 37.2018C211.19 24.8224 200.29 30.4313 186.897 30.4313Z" fill="white" fillOpacity="0.12"/>
                    <path d="M12.7495 87.5711L12.7495 39.9992M12.7495 39.9992L7.3999 48.3989M12.7495 39.9992L18.4741 48.3989" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M140.532 72.3713H100.282C100.282 72.3713 100.282 80.3558 106.95 80.3558H138.115C140.54 80.3558 141.753 79.1429 140.532 76.7172L140.532 72.3713Z" fill="white" fillOpacity="0.12"/>
                    <path d="M147.2 92.4846C158.096 92.4846 166.907 83.6737 166.907 72.7773C166.907 61.8809 158.096 53.07 147.2 53.07C136.303 53.07 127.492 61.8809 127.492 72.7773C127.492 83.6737 136.303 92.4846 147.2 92.4846Z" fill="white" fillOpacity="0.12"/>
                    <path d="M80.5748 92.4846C91.4712 92.4846 100.282 83.6737 100.282 72.7773C100.282 61.8809 91.4712 53.07 80.5748 53.07C69.6783 53.07 60.8674 61.8809 60.8674 72.7773C60.8674 83.6737 69.6783 92.4846 80.5748 92.4846Z" fill="white" fillOpacity="0.12"/>
                    <path d="M149.617 72.7773C149.617 75.1055 148.695 77.3389 147.05 78.9838C145.405 80.6287 143.172 81.5503 140.843 81.5503C138.515 81.5503 136.282 80.6287 134.637 78.9838C132.992 77.3389 132.07 75.1055 132.07 72.7773C132.07 70.4491 132.992 68.2158 134.637 66.5709C136.282 64.926 138.515 64.0043 140.843 64.0043C143.172 64.0043 145.405 64.926 147.05 66.5709C148.695 68.2158 149.617 70.4491 149.617 72.7773Z" fill="white" fillOpacity="0.12"/>
                    <path d="M83.1531 72.7773C83.1531 75.1055 82.2315 77.3389 80.5866 78.9838C78.9417 80.6287 76.7084 81.5503 74.3802 81.5503C72.052 81.5503 69.8186 80.6287 68.1737 78.9838C66.5288 77.3389 65.6072 75.1055 65.6072 72.7773C65.6072 70.4491 66.5288 68.2158 68.1737 66.5709C69.8186 64.926 72.052 64.0043 74.3802 64.0043C76.7084 64.0043 78.9417 64.926 80.5866 66.5709C82.2315 68.2158 83.1531 70.4491 83.1531 72.7773Z" fill="white" fillOpacity="0.12"/>
                    <path d="M216.25 39.9992C216.25 36.0928 218.45 32.5631 221.846 30.927C223.32 30.2017 225.059 29.9993 226.6 30.9992V48.9992C225.059 49.9991 223.32 49.7968 221.846 49.0714C218.45 47.4354 216.25 43.9057 216.25 39.9992Z" fill="white" fillOpacity="0.12"/>
                    <path d="M216.25 39.9992H198.25V48.9992H216.25V39.9992Z" fill="white" fillOpacity="0.12"/>
                    <path d="M0 30.9992H26.9999V48.9992H0V30.9992Z" fill="white" fillOpacity="0.12"/>
                    <path d="M169.324 29.7845H187.324C187.324 29.7845 186.523 21.5 182.324 21.5H169.324V29.7845Z" fill="white" fillOpacity="0.12"/>
                    <path d="M80.5747 55.4845H147.2V39.9991H104.864C90.3648 39.9991 80.5747 41.8537 80.5747 55.4845Z" fill="white" fillOpacity="0.12"/>
                    <path d="M36 52.4845L44.4997 38.7346H67.9997L59.5 52.4845H36Z" fill="white" fillOpacity="0.12"/>
                    <path d="M67.9998 38.7346H156.5V29.7844H76.4995L67.9998 38.7346Z" fill="white" fillOpacity="0.12"/>
                    <path d="M169.324 21.5H76.4993L67.9996 29.7845H169.324V21.5Z" fill="white" fillOpacity="0.12"/>
                    <text className="text-white text-xs text-center absolute bottom-2 w-full font-bold">CAR DEALER</text>
                    <text className="text-white text-xs text-center absolute bottom-10 w-full font-bold">SALES • PARTS</text>
                  </svg>
                </div>
              </div>
              
              {/* Dealer Header Info */}
              <div className="flex-1">
                <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mb-2">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    ZIP Code: {dealerData.zipCode}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{dealerData.name}</h1>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(dealerData.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">{dealerData.reviewCount} Ratings</span>
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
                <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">Email Address</h3>
                    <p className="text-blue-500 hover:underline">johndoe@email.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">Address</h3>
                    <p className="text-gray-700">123 street, New York City, NY</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
                    <p className="text-gray-700">+1234567890</p>
                  </div>
                  
                  <Button className="w-full mt-4 bg-green-800 hover:bg-green-900 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent <span className="text-amber-500">Car</span> Listings</h2>
            <Link href="/dealer-cars" className="text-sm text-gray-600 hover:text-gray-900 font-medium">View All</Link>
          </div>
          
          <div className="relative">
            {/* Custom navigation buttons */}
            <div id="swiper-prev" className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-green-900 cursor-pointer">
              <ChevronLeft className="h-6 w-6" />
            </div>
            
            <div id="swiper-next" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-green-900 cursor-pointer">
              <ChevronRight className="h-6 w-6" />
            </div>

            {/* Swiper */}
            <div className="mx-14">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '#swiper-prev',
                  nextEl: '#swiper-next',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="car-listings-swiper"
              >
                {dealerData.carListings.map((car) => (
                  <SwiperSlide key={car.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group h-full">
                      <div className="h-44 bg-gray-200 relative overflow-hidden">
                        <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded">
                          {car.year}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-medium text-gray-900">{car.make} {car.model}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-base font-bold text-gray-900">Price: ${car.price.toLocaleString()}</p>
                          <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all hover:bg-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="container mx-auto px-4 py-8 pb-16">
          <h2 className="text-xl font-bold mb-6">Reviews</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Reviews Summary */}
            <div className="md:col-span-2">
              <div className="space-y-2">
                {dealerData.reviewsBreakdown.map((breakdown) => (
                  <div key={breakdown.stars} className="flex items-center">
                    <div className="w-8 text-sm text-gray-600">{breakdown.stars} ★</div>
                    <div className="flex-1 mx-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${(breakdown.count / dealerData.reviewCount) * 100}%` }}
                      ></div>
                    </div>
                    <div className="w-8 text-xs text-gray-500 text-right">{breakdown.count}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="mr-4">
                  <div className="text-4xl font-bold text-gray-900">{dealerData.rating.toFixed(1)}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(dealerData.rating) ? "fill-amber-500 text-amber-500" : "text-amber-500"}`} 
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{dealerData.reviewCount} reviews</div>
                </div>
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                {dealerData.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center mb-3">
                      <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">{review.author}</div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? "fill-amber-500 text-amber-500" : "text-amber-500"}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{review.content}</p>
                  </div>
                ))}
              </div>
              
              {/* Write a Review */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-500">?</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-5 h-5 cursor-pointer ${star <= reviewRating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
                        onClick={() => setReviewRating(star)}
                      />
                    ))}
                  </div>
                </div>
                
                <Textarea
                  placeholder="Share your experience with this dealer..."
                  className="w-full mb-4"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-green-800 hover:bg-green-900">Submit Review</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}