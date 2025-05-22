import React, { useState } from 'react';
import { useParams, Link } from 'wouter';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, ThumbsUp, Heart, Share, Phone } from "lucide-react";

// Mock car data
const carData = {
  id: 1,
  make: 'Honda',
  model: 'Accord',
  year: 2024,
  price: 42000,
  mainImage: 'https://images.unsplash.com/photo-1547245324-d777c6f05e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  galleryImages: [
    'https://images.unsplash.com/photo-1547245324-d777c6f05e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  ],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
  specifications: {
    model: 'Accord',
    condition: 'New',
    exteriorColor: 'Brilliant Green',
    interiorColor: 'Black',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    drivetrain: 'AWD',
    engine: '2.0L Turbo',
    fuelType: 'Gasoline',
    mpg: '24/34'
  },
  seller: {
    name: 'Prestige Auto Gallery',
    logo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.8,
    reviewCount: 124,
    location: 'Chicago, IL',
    phoneNumber: '(312) 555-7890'
  }
};

// Mock similar cars
const similarCars = [
  {
    id: 2,
    make: 'Toyota',
    model: 'Corolla Altis',
    year: 2023,
    price: 30500,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    make: 'Honda',
    model: 'Civic RS',
    year: 2023,
    price: 28900,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 4,
    make: 'Toyota',
    model: 'Corolla Altis',
    year: 2022,
    price: 27800,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 5,
    make: 'Honda',
    model: 'Accord',
    year: 2023,
    price: 39500,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export default function CarDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState(carData.mainImage);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setGalleryIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services/dealer" className="hover:text-gray-700">Dealers</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/dealer/1`} className="hover:text-gray-700">{carData.seller.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{carData.make} {carData.model}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Car Images Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Main Image */}
                <div className="relative h-[350px] bg-gray-100">
                  <img 
                    src={mainImage} 
                    alt={`${carData.make} ${carData.model}`} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                    onClick={() => {
                      const newIndex = (galleryIndex - 1 + carData.galleryImages.length) % carData.galleryImages.length;
                      setGalleryIndex(newIndex);
                      setMainImage(carData.galleryImages[newIndex]);
                    }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                    onClick={() => {
                      const newIndex = (galleryIndex + 1) % carData.galleryImages.length;
                      setGalleryIndex(newIndex);
                      setMainImage(carData.galleryImages[newIndex]);
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Thumbnails */}
                <div className="flex p-2 gap-2 overflow-x-auto">
                  {carData.galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`w-20 h-16 flex-shrink-0 cursor-pointer rounded overflow-hidden ${mainImage === image ? 'ring-2 ring-green-800' : 'ring-1 ring-gray-200'}`}
                      onClick={() => handleThumbnailClick(image, index)}
                    >
                      <img src={image} alt={`thumbnail-${index}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tabs Section */}
              <div className="mt-6">
                <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-4">
                    <TabsTrigger 
                      value="description" 
                      className={`${activeTab === 'description' ? 'border-b-2 border-green-800 text-green-800' : 'text-gray-500'} rounded-none pb-2 px-4 transition-all`}
                    >
                      Description
                    </TabsTrigger>
                    <TabsTrigger 
                      value="vehicle-details" 
                      className={`${activeTab === 'vehicle-details' ? 'border-b-2 border-green-800 text-green-800' : 'text-gray-500'} rounded-none pb-2 px-4 transition-all`}
                    >
                      Vehicle Details
                    </TabsTrigger>
                    <TabsTrigger 
                      value="features" 
                      className={`${activeTab === 'features' ? 'border-b-2 border-green-800 text-green-800' : 'text-gray-500'} rounded-none pb-2 px-4 transition-all`}
                    >
                      Features
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{carData.description}</p>
                  </TabsContent>
                  <TabsContent value="vehicle-details" className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Vehicle Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(carData.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-xs text-gray-500 capitalize">{key}</span>
                          <span className="text-sm text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="w-32 h-32 bg-green-50 rounded-lg p-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M5 9h14l-1 7h-12z"></path>
                          <path d="M5 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                          <path d="M15 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                        </svg>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <ul className="grid grid-cols-2 gap-2">
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
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Car Details & Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h1 className="text-2xl font-bold text-gray-900">{carData.make} {carData.model} {carData.year}</h1>
                <div className="text-xl font-bold text-green-800 mt-2">Price: ${carData.price.toLocaleString()}</div>
                
                {/* Seller Info */}
                <div className="flex items-center mt-4 border-t border-b py-3">
                  <img 
                    src={carData.seller.logo} 
                    alt={carData.seller.name} 
                    className="w-10 h-10 rounded-full mr-3" 
                  />
                  <div>
                    <div className="font-medium text-sm">{carData.seller.name}</div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>★</span>
                      <span className="ml-1">{carData.seller.rating} ({carData.seller.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-4 space-y-3">
                  <Button className="w-full bg-green-800 hover:bg-green-900 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Seller
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-700 flex flex-col items-center justify-center py-2">
                      <ThumbsUp className="w-4 h-4 mb-1" />
                      <span className="text-xs">Interested</span>
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 flex flex-col items-center justify-center py-2">
                      <Heart className="w-4 h-4 mb-1" />
                      <span className="text-xs">Save</span>
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 flex flex-col items-center justify-center py-2">
                      <Share className="w-4 h-4 mb-1" />
                      <span className="text-xs">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Listings */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Similar <span className="text-amber-500">Listings</span></h2>
            
            <div className="relative">
              {/* Left Control */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-green-900">
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              {/* Car Cards */}
              <div className="mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {similarCars.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
                    <div className="h-40 bg-gray-200 relative overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={`${car.make} ${car.model}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      />
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
                ))}
              </div>
              
              {/* Right Control */}
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-green-900">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}