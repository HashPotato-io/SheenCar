import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Car } from "@shared/schema";
import { Loader2, ArrowLeft, MessageCircle, Heart, Share2, Calendar, Gauge, Fuel, Settings, MapPin, User, DollarSign } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

export default function CarDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const { data: car, isLoading, error } = useQuery<Car>({
    queryKey: [`/api/cars/${id}`],
  });

  const handleContactSeller = () => {
    toast({
      title: "Message sent",
      description: "The seller has been notified of your interest",
    });
  };

  const handleSaveToFavorites = () => {
    toast({
      title: "Saved to favorites",
      description: "This car has been added to your favorites",
    });
  };

  const handleShareListing = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Car listing link copied to clipboard",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
            <p className="text-neutral-600 mb-6">
              We couldn't find the car you're looking for. It may have been removed or sold.
            </p>
            <Link href="/search">
              <Button>Browse Other Cars</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/search">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold font-montserrat">
                  {car.year} {car.make} {car.model}
                </h1>
                <p className="text-neutral-600">{car.trim}</p>
              </div>
              <div className="text-3xl font-bold text-primary">
                ${car.price.toLocaleString()}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {car.images?.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img 
                            src={image} 
                            alt={`${car.make} ${car.model} - Image ${index + 1}`} 
                            className="w-full h-[400px] object-cover rounded-md"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                
                <div className="p-6">
                  <div className="flex flex-wrap justify-between mb-6">
                    <Button onClick={handleContactSeller} className="flex-1 mr-2 mb-2 md:mb-0">
                      <MessageCircle className="mr-2 h-4 w-4" /> Contact Seller
                    </Button>
                    <Button variant="outline" onClick={handleSaveToFavorites} className="mr-2 mb-2 md:mb-0">
                      <Heart className="mr-2 h-4 w-4" /> Save
                    </Button>
                    <Button variant="outline" onClick={handleShareListing}>
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-md">
                      <Calendar className="h-5 w-5 text-primary mb-1" />
                      <div className="text-sm text-neutral-600">Year</div>
                      <div className="font-semibold">{car.year}</div>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-md">
                      <Gauge className="h-5 w-5 text-primary mb-1" />
                      <div className="text-sm text-neutral-600">Mileage</div>
                      <div className="font-semibold">{car.mileage.toLocaleString()} mi</div>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-md">
                      <Fuel className="h-5 w-5 text-primary mb-1" />
                      <div className="text-sm text-neutral-600">Fuel Type</div>
                      <div className="font-semibold">{car.fuelType}</div>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-md">
                      <Settings className="h-5 w-5 text-primary mb-1" />
                      <div className="text-sm text-neutral-600">Transmission</div>
                      <div className="font-semibold">{car.transmission}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Tabs defaultValue="description">
                  <TabsList className="w-full justify-start border-b rounded-none p-0">
                    <TabsTrigger value="description" className="rounded-none py-3 px-6">Description</TabsTrigger>
                    <TabsTrigger value="features" className="rounded-none py-3 px-6">Features</TabsTrigger>
                    <TabsTrigger value="specifications" className="rounded-none py-3 px-6">Specifications</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-montserrat">Vehicle Description</h3>
                    <p className="text-neutral-700 whitespace-pre-line">{car.description}</p>
                  </TabsContent>
                  
                  <TabsContent value="features" className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-montserrat">Vehicle Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {car.features?.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-montserrat">Vehicle Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Make</span>
                        <span className="font-medium">{car.make}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Model</span>
                        <span className="font-medium">{car.model}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Year</span>
                        <span className="font-medium">{car.year}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Body Type</span>
                        <span className="font-medium">{car.bodyType}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Color</span>
                        <span className="font-medium">{car.exteriorColor}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Interior Color</span>
                        <span className="font-medium">{car.interiorColor}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">VIN</span>
                        <span className="font-medium">{car.vin}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-500">Condition</span>
                        <span className="font-medium">{car.condition}</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 font-montserrat">Seller Information</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={car.seller?.avatar} alt={car.seller?.name} />
                    <AvatarFallback>{car.seller?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{car.seller?.name}</div>
                    <div className="text-sm text-neutral-500">
                      Member since {new Date(car.seller?.memberSince || Date.now()).getFullYear()}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{car.sellerType}</span>
                  </div>
                </div>
                
                <Button onClick={handleContactSeller} className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Seller
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 font-montserrat">Price Analysis</h3>
                <div className="flex items-center justify-between mb-4">
                  <span>Market Value</span>
                  <span className="font-semibold">${(car.price * 1.05).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span>This Listing</span>
                  <span className="font-semibold text-primary">${car.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span>Difference</span>
                  <span className="font-semibold text-green-600">-${(car.price * 0.05).toLocaleString()}</span>
                </div>
                
                <div className="bg-green-50 p-3 rounded-md flex items-start">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold">Good Deal</span>: This car is priced 5% below the market value.
                  </div>
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
