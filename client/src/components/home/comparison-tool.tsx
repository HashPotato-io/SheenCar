import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Search, 
  Check, 
  X, 
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { carMakes, carModels } from "@/lib/car-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define car selection interface
interface CarSelection {
  id: number;
  make: string;
  model: string;
}

// Define car details interface
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

// Dummy car data
const carDetailsData: Record<string, CarDetails> = {
  "toyota_camry": {
    id: "toyota_camry",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 26500,
    mileage: 12500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.5L 4-Cylinder",
    exteriorColor: "Silver",
    interiorColor: "Black",
    doors: 4,
    features: ["Bluetooth", "Backup Camera", "Lane Departure Warning", "Keyless Entry"],
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
    rating: 4.5
  },
  "honda_civic": {
    id: "honda_civic",
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 24500,
    mileage: 10200,
    fuelType: "Gasoline",
    transmission: "CVT",
    engine: "2.0L 4-Cylinder",
    exteriorColor: "Blue",
    interiorColor: "Gray",
    doors: 4,
    features: ["Apple CarPlay", "Android Auto", "Adaptive Cruise Control", "Sunroof"],
    imageUrl: "https://images.unsplash.com/photo-1590510732688-62a4a6e2f232",
    rating: 4.7
  },
  "ford_mustang": {
    id: "ford_mustang",
    make: "Ford",
    model: "Mustang",
    year: 2021,
    price: 36800,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    exteriorColor: "Red",
    interiorColor: "Black",
    doors: 2,
    features: ["Leather Seats", "Navigation System", "Premium Sound", "Performance Package"],
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c",
    rating: 4.6
  }
};

export default function ComparisonTool() {
  // Initialize with two empty car selections
  const [carSelections, setCarSelections] = useState<CarSelection[]>([
    { id: 1, make: "", model: "" },
    { id: 2, make: "", model: "" }
  ]);

  // State for showing comparison section
  const [showComparison, setShowComparison] = useState(false);
  
  // Selected cars for comparison
  const [selectedCars, setSelectedCars] = useState<CarDetails[]>([]);

  // Handle compare button click
  const handleCompareClick = () => {
    // Get selected car details
    const validSelections = carSelections.filter(car => car.make && car.model);
    
    if (validSelections.length >= 2) {
      const carDetailsArray = validSelections.map(car => {
        const carKey = `${car.make}_${car.model}`;
        return carDetailsData[carKey] || null;
      }).filter(car => car !== null);
      
      setSelectedCars(carDetailsArray);
      setShowComparison(true);
    }
  };

  // Handle make selection and reset model when make changes
  const handleMakeChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map(selection => 
        selection.id === selectionId 
          ? { ...selection, make: value, model: "" } 
          : selection
      )
    );
    setShowComparison(false);
  };

  // Handle model selection
  const handleModelChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map(selection => 
        selection.id === selectionId 
          ? { ...selection, model: value } 
          : selection
      )
    );
    setShowComparison(false);
  };

  // Add a new car selection slot
  const addNewCarSelection = () => {
    const newId = Math.max(...carSelections.map(car => car.id)) + 1;
    setCarSelections([...carSelections, { id: newId, make: "", model: "" }]);
    setShowComparison(false);
  };

  // Control UI state based on selections
  const canAddMoreCars = carSelections.length < 3;
  const canCompare = carSelections.length >= 2 && 
    carSelections.filter(car => car.make && car.model).length >= 2;

  // Get car image based on make and model
  const getCarImage = (carSelection: CarSelection) => {
    if (carSelection.make && carSelection.model) {
      const carKey = `${carSelection.make}_${carSelection.model}`;
      return carDetailsData[carKey]?.imageUrl || "/car-placeholder.svg";
    }
    return "/car-placeholder.svg";
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Which one to choose? <span className="text-amber-500">Compare</span> them!
        </h2>
        <p className="text-neutral-600 mb-10 max-w-3xl mx-auto">
          Get a detailed comparison between the two cars of your liking to make a calculated buying decision.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {carSelections.map((carSelection, index) => (
              <div key={carSelection.id} className="flex flex-col items-center w-full md:w-auto md:flex-1 relative">
                {/* Car illustration */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 w-full mb-6">
                  {carSelection.make && carSelection.model ? (
                    <img 
                      src={getCarImage(carSelection)} 
                      alt={`${carSelection.make} ${carSelection.model}`} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img 
                      src="/car-placeholder.svg" 
                      alt="Car silhouette" 
                      className="w-40 h-auto max-h-36 opacity-60"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150' fill='none' stroke='%23cccccc' stroke-width='1'><path d='M50,90 L70,60 L230,60 L260,90 L260,110 L50,110 Z M90,60 L110,40 L190,40 L210,60 M90,60 L90,40 L110,40 M190,40 L210,60 L210,40 L190,40 M50,90 L50,110 M260,90 L260,110 M150,60 L150,40' /><circle cx='90' cy='110' r='20' /><circle cx='220' cy='110' r='20' /></svg>";
                      }}
                    />
                  )}
                </div>
                
                {/* VS circle between cars */}
                {index < carSelections.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 z-10">
                    <div className="rounded-full bg-green-900 text-white font-semibold flex items-center justify-center w-10 h-10 text-xs shadow-md">
                      VS
                    </div>
                  </div>
                )}
                
                {/* Make & Model selectors */}
                <div className="w-full flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <Select
                      value={carSelection.make}
                      onValueChange={(value) => handleMakeChange(value, carSelection.id)}
                    >
                      <SelectTrigger className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent">
                        <SelectValue placeholder="Make" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                        {carMakes.map((make) => (
                          <SelectItem key={make.id} value={make.id} className="py-2 border-b border-gray-200 last:border-0">
                            {make.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <Select
                      value={carSelection.model}
                      onValueChange={(value) => handleModelChange(value, carSelection.id)}
                      disabled={!carSelection.make}
                    >
                      <SelectTrigger className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent">
                        <SelectValue placeholder="Model" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                        {carModels
                          .filter(model => model.makeId === carSelection.make)
                          .map((model) => (
                            <SelectItem key={model.id} value={model.id} className="py-2 border-b border-gray-200 last:border-0">
                              {model.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              className={`bg-green-900 hover:bg-green-800 text-white px-8 py-2 h-12 rounded-sm ${!canCompare && 'opacity-70 cursor-not-allowed'}`}
              disabled={!canCompare}
              onClick={handleCompareClick}
            >
              Compare Now
            </Button>
            
            {canAddMoreCars && (
              <Button 
                variant="outline" 
                onClick={addNewCarSelection}
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-100 text-black"
              >
                <Plus className="w-4 h-4" />
                Add Another Car
              </Button>
            )}
          </div>
        </div>
        
        {/* Comparison Results Section */}
        {showComparison && selectedCars.length >= 2 && (
          <div className="mt-16 text-left">
            {/* Car Overview */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Compare Features</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedCars.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={car.imageUrl} 
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{car.year} {car.make} {car.model}</h3>
                      <div className="flex justify-between mt-2">
                        <span className="text-green-800 font-semibold">${car.price.toLocaleString()}</span>
                        <span className="text-gray-600">{car.mileage.toLocaleString()} miles</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features Comparison */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-green-900 text-white p-4">
                <h3 className="font-semibold text-lg">Compare Features</h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Features</TableHead>
                    {selectedCars.map((car) => (
                      <TableHead key={car.id}>{car.year} {car.make} {car.model}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Fuel Type</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.fuelType}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Transmission</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.transmission}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Engine</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.engine}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Doors</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.doors}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Exterior Color</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.exteriorColor}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Key Features</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id} className="align-top">
                        <ul className="list-disc pl-5">
                          {car.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Specifications Comparison */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-green-900 text-white p-4">
                <h3 className="font-semibold text-lg">Compare Specifications</h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Specifications</TableHead>
                    {selectedCars.map((car) => (
                      <TableHead key={car.id}>{car.year} {car.make} {car.model}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Year</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.year}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Price</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>${car.price.toLocaleString()}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mileage</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.mileage.toLocaleString()} miles</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Interior Color</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.interiorColor}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rating</TableCell>
                    {selectedCars.map((car) => (
                      <TableCell key={car.id}>{car.rating}/5</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Similar Listings */}
            <div className="mb-8">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md overflow-hidden">
                <AccordionItem value="similar-listings">
                  <AccordionTrigger className="bg-green-900 text-white px-4 py-3">
                    <h3 className="font-semibold text-lg">Similar Listings</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                      {selectedCars.map((car) => (
                        <>
                          <div key={`${car.id}-1`} className="bg-white border rounded-lg overflow-hidden">
                            <div className="h-32 overflow-hidden">
                              <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2">
                              <p className="font-semibold text-sm">{car.year} {car.make} {car.model}</p>
                              <p className="text-green-800 text-sm font-semibold">${(car.price - 1500).toLocaleString()}</p>
                            </div>
                          </div>
                          <div key={`${car.id}-2`} className="bg-white border rounded-lg overflow-hidden">
                            <div className="h-32 overflow-hidden">
                              <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2">
                              <p className="font-semibold text-sm">{car.year - 1} {car.make} {car.model}</p>
                              <p className="text-green-800 text-sm font-semibold">${(car.price - 4500).toLocaleString()}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
