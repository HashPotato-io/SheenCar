import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { dummyCars } from "../data/dummy-cars";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

// Sample car data for demonstration
const sampleCars = [
  dummyCars[0], // Toyota Corolla
  dummyCars[1]  // Honda Civic
];

export default function ComparePage() {
  const [, setLocation] = useLocation();
  const [selectedCars, setSelectedCars] = useState(sampleCars);
  const [activeTab, setActiveTab] = useState<string>("features");
  const [similarCars, setSimilarCars] = useState(dummyCars.slice(2, 6));

  useEffect(() => {
    // For simplicity in this demo, we're using sample data
    // In a real implementation, we would parse the URL parameters
    // to get the car IDs and fetch them from the server
    
    // Update similar cars when selected cars change
    if (selectedCars.length > 0) {
      const firstCar = selectedCars[0];
      const similar = dummyCars.filter(car => 
        !selectedCars.some(selected => selected.id === car.id) &&
        (car.make === firstCar.make || car.bodyType === firstCar.bodyType)
      ).slice(0, 4);
      
      setSimilarCars(similar);
    }
  }, [selectedCars]);

  const handleAddCar = (car) => {
    if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, car]);
      
      // In a real implementation, we would update the URL parameters 
      // to reflect the current selection
    }
  };

  const featuresList = [
    "Bluetooth",
    "Backup Camera",
    "Navigation System",
    "Leather Seats",
    "Sunroof",
    "Heated Seats",
    "Apple CarPlay",
    "Android Auto"
  ];

  const specificationsList = [
    { name: "Engine Type", key: "engineType" },
    { name: "Horsepower", key: "horsepower" },
    { name: "Torque", key: "torque" },
    { name: "MPG", key: "mpg" },
    { name: "Acceleration", key: "acceleration" },
    { name: "Weight", key: "weight" },
    { name: "Dimensions", key: "dimensions" }
  ];

  if (selectedCars.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Car Comparison</h1>
        <p className="mb-8">No cars selected for comparison. Please select at least two cars to compare.</p>
        <Button onClick={() => setLocation("/")}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Which one to choose? <span className="text-amber-500">Compare</span> them!
          </h1>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Get a detailed comparison between the cars of your liking to make a calculated buying decision.
          </p>
        </div>

        {/* Car selection header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCars.map((car, index) => (
              <div key={car.id} className="flex flex-col">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden h-48 mb-4">
                  <img 
                    src={car.images[0]} 
                    alt={car.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/car-silhouette.svg";
                    }}
                  />
                  {index < selectedCars.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="rounded-full bg-green-900 text-white font-semibold flex items-center justify-center w-6 h-6 text-xs shadow-md">
                        VS
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">{car.title}</h3>
                <p className="text-neutral-500">Price: ${car.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6 mx-auto">
            <TabsTrigger value="features">Compare Features</TabsTrigger>
            <TabsTrigger value="specifications">Compare Specifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Compare Features</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-b font-semibold">Feature</th>
                  {selectedCars.map(car => (
                    <th key={car.id} className="text-center py-3 px-4 border-b font-semibold">{car.make} {car.model}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featuresList.map(feature => (
                  <tr key={feature} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{feature}</td>
                    {selectedCars.map(car => (
                      <td key={car.id} className="text-center py-3 px-4">
                        {car.features.some(f => f.toLowerCase().includes(feature.toLowerCase())) ? (
                          <div className="mx-auto flex justify-center">
                            <div className="rounded-full bg-green-100 p-1 text-green-800">
                              <Check className="h-4 w-4" />
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          
          <TabsContent value="specifications" className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Compare Specifications</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-b font-semibold">Specification</th>
                  {selectedCars.map(car => (
                    <th key={car.id} className="text-center py-3 px-4 border-b font-semibold">{car.make} {car.model}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specificationsList.map(spec => (
                  <tr key={spec.name} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{spec.name}</td>
                    {selectedCars.map(car => (
                      <td key={car.id} className="text-center py-3 px-4">
                        {car.specifications && car.specifications[spec.key as keyof typeof car.specifications] || 
                          <span className="text-gray-400">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
        </Tabs>

        {/* Similar cars section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Similar Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similarCars.map(car => (
              <div 
                key={car.id} 
                className="border rounded-lg p-4 hover:shadow-md cursor-pointer transition-shadow"
                onClick={() => handleAddCar(car)}
              >
                <div className="bg-gray-100 rounded-lg h-32 mb-3 flex items-center justify-center">
                  <img 
                    src={car.images[0]} 
                    alt={car.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/car-silhouette.svg";
                    }}
                  />
                </div>
                <h3 className="font-medium text-base truncate">{car.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-neutral-600">${car.price.toLocaleString()}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddCar(car);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            className="flex items-center gap-1"
            onClick={() => setLocation("/")}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-1"
            onClick={() => window.history.back()}
          >
            Continue Shopping
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}