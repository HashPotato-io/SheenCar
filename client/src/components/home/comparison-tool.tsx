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
  "toyota_corolla": {
    id: "toyota_corolla",
    make: "Toyota",
    model: "Corolla Altis",
    year: 2022,
    price: 24500,
    mileage: 12500,
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    engine: "1.8L 4-Cylinder",
    exteriorColor: "Black",
    interiorColor: "Black",
    doors: 4,
    features: ["Bluetooth", "Backup Camera", "Lane Departure Warning", "Keyless Entry"],
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5
  },
  "toyota_camry": {
    id: "toyota_camry",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 26500,
    mileage: 14200,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.5L 4-Cylinder",
    exteriorColor: "Silver",
    interiorColor: "Black",
    doors: 4,
    features: ["Bluetooth", "Backup Camera", "Lane Departure Warning", "Keyless Entry"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/1200px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg",
    rating: 4.5
  },
  "honda_civic": {
    id: "honda_civic",
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 23000,
    mileage: 10200,
    fuelType: "Gasoline",
    transmission: "CVT",
    engine: "1.5L Turbo 4-Cylinder",
    exteriorColor: "Blue",
    interiorColor: "Gray",
    doors: 4,
    features: ["Apple CarPlay", "Android Auto", "Adaptive Cruise Control", "Sunroof"],
    imageUrl: "https://www.cnet.com/a/img/resize/75aefa7c3cd90d9d5fae785aad14e078f865ea59/hub/2021/11/16/1f7d8300-c033-4fa0-bcff-47170536cf69/2022-honda-civic-sedan-sport-touring-7.jpg?auto=webp&fit=crop&height=675&width=1200",
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
    exteriorColor: "Black",
    interiorColor: "Black",
    doors: 2,
    features: ["Leather Seats", "Navigation System", "Premium Sound", "Performance Package"],
    imageUrl: "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6
  },
  "porsche_f150": {
    id: "porsche_f150",
    make: "Porsche",
    model: "F-150",
    year: 2015,
    price: 34500,
    mileage: 45800,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.5L EcoBoost V6",
    exteriorColor: "Silver",
    interiorColor: "Black",
    doors: 4,
    features: ["Leather Seats", "Navigation System", "Climate Control", "Towing Package"],
    imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.3
  },
  "audi_a4": {
    id: "audi_a4",
    make: "Audi",
    model: "A4",
    year: 2013,
    price: 18900,
    mileage: 75200,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.0L Turbo 4-Cylinder",
    exteriorColor: "Gray",
    interiorColor: "Black",
    doors: 4,
    features: ["Leather Seats", "Navigation System", "Sunroof", "Quattro AWD", "Premium Sound"],
    imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.1
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
      // Find the exact match or a fallback
      const makeKey = carSelection.make;
      const modelKey = carSelection.model;
      const exactMatchKey = `${makeKey}_${modelKey}`;
      
      // Try exact match first
      if (carDetailsData[exactMatchKey]) {
        return carDetailsData[exactMatchKey].imageUrl;
      }
      
      // Special cases
      if (makeKey === "porsche" && modelKey === "f150") {
        return "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
      }
      
      if (makeKey === "audi" && modelKey === "a4") {
        return "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
      }
      
      // For Toyota Corolla, use a black Corolla image 
      if (makeKey === "toyota" && modelKey === "corolla") {
        return "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600";
      }
      
      // Generic image for other models by make
      if (makeKey === "toyota") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/1200px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg";
      }
      
      if (makeKey === "honda") {
        return "https://www.cnet.com/a/img/resize/75aefa7c3cd90d9d5fae785aad14e078f865ea59/hub/2021/11/16/1f7d8300-c033-4fa0-bcff-47170536cf69/2022-honda-civic-sedan-sport-touring-7.jpg?auto=webp&fit=crop&height=675&width=1200";
      }
      
      if (makeKey === "ford") {
        return "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      }
    }
    
    return "/car-placeholder.svg";
  };

  // Get selected car details
  const getSelectedCarDetails = (carSelection: CarSelection) => {
    if (carSelection.make && carSelection.model) {
      const makeKey = carSelection.make;
      const modelKey = carSelection.model;
      const exactMatchKey = `${makeKey}_${modelKey}`;
      
      // Try exact match first
      if (carDetailsData[exactMatchKey]) {
        return carDetailsData[exactMatchKey];
      }
      
      // Special cases for Porsche F-150
      if (makeKey === "porsche" && modelKey === "f150") {
        return {
          id: "porsche_f150",
          make: "Porsche",
          model: "F-150",
          year: 2015,
          price: 34500,
          mileage: 45800,
          fuelType: "Gasoline",
          transmission: "Automatic",
          engine: "3.5L EcoBoost V6",
          exteriorColor: "Silver",
          interiorColor: "Black",
          doors: 4,
          features: ["Leather Seats", "Navigation System", "Climate Control", "Towing Package"],
          imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          rating: 4.3
        };
      }
      
      // Special cases for Audi A4
      if (makeKey === "audi" && modelKey === "a4") {
        return {
          id: "audi_a4",
          make: "Audi",
          model: "A4",
          year: 2013,
          price: 18900,
          mileage: 75200,
          fuelType: "Gasoline",
          transmission: "Automatic",
          engine: "2.0L Turbo 4-Cylinder",
          exteriorColor: "Gray",
          interiorColor: "Black",
          doors: 4,
          features: ["Leather Seats", "Navigation System", "Sunroof", "Quattro AWD", "Premium Sound"],
          imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          rating: 4.1
        };
      }
      
      // For Toyota Corolla
      if (makeKey === "toyota" && modelKey === "corolla") {
        return carDetailsData["toyota_corolla"];
      }
    }
    return null;
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
                <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 w-full mb-6 overflow-hidden">
                  {carSelection.make && carSelection.model ? (
                    <>
                      <img 
                        src={getCarImage(carSelection)} 
                        alt={`${carSelection.make} ${carSelection.model}`} 
                        className="w-full h-full object-cover"
                      />
                      {/* Car details overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 text-left">
                        <h3 className="font-semibold">{carSelection.make === 'toyota' && carSelection.model === 'corolla' ? 'Toyota Corolla Altis' : `${carMakes.find(m => m.id === carSelection.make)?.name} ${carModels.find(m => m.id === carSelection.model)?.name}`}</h3>
                        <p className="text-sm text-green-800 font-medium">
                          Price: ${getSelectedCarDetails(carSelection)?.price.toLocaleString() || "N/A"}
                        </p>
                      </div>
                    </>
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
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              className={`bg-green-900 hover:bg-green-800 text-white px-8 py-2 h-11 rounded-sm ${!canCompare && 'opacity-70 cursor-not-allowed'}`}
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
            {/* Features Comparison */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Compare Features</h2>
              <div className="overflow-hidden rounded-sm">
                <Table className="border-collapse">
                  <TableHeader>
                    <TableRow className="bg-green-900 text-white">
                      <TableHead className="w-1/3 border px-4 py-3">Feature</TableHead>
                      {selectedCars.map((car) => (
                        <TableHead key={car.id} className="border px-4 py-3">{car.make} {car.model}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">AC (Climate)</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3 text-center">
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Power Windows</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3 text-center">
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Sunroof</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3 text-center">
                          {car.model === 'civic' ? (
                            <Check className="h-5 w-5 mx-auto text-green-600" />
                          ) : (
                            <X className="h-5 w-5 mx-auto text-red-500" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Backup Camera</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3 text-center">
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Lane Assist</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3 text-center">
                          {car.model === 'mustang' ? (
                            <X className="h-5 w-5 mx-auto text-red-500" />
                          ) : (
                            <Check className="h-5 w-5 mx-auto text-green-600" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            {/* Specifications Comparison */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Compare Specifications</h2>
              <div className="overflow-hidden rounded-sm">
                <Table className="border-collapse">
                  <TableHeader>
                    <TableRow className="bg-green-900 text-white">
                      <TableHead className="w-1/3 border px-4 py-3">Engine/Mech</TableHead>
                      {selectedCars.map((car) => (
                        <TableHead key={car.id} className="border px-4 py-3">{car.make} {car.model}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Engine Type</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3">
                          {car.engine}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Fuel Type</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3">
                          {car.fuelType}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Year</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3">
                          {car.year}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Mileage</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3">
                          {car.mileage.toLocaleString()} miles
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border border-gray-200 px-4 py-3">Transmission</TableCell>
                      {selectedCars.map((car) => (
                        <TableCell key={car.id} className="border border-gray-200 px-4 py-3">
                          {car.transmission}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            {/* Similar Listings */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Similar Listings</h2>
              <div className="flex overflow-x-auto gap-4 pb-4">
                {selectedCars.flatMap((car) => [
                  <div key={`${car.id}-1`} className="flex-shrink-0 w-64 bg-white border rounded-lg overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm">{car.year} {car.make} {car.model}</p>
                      <p className="text-green-800 text-sm font-semibold">${(car.price - 1500).toLocaleString()}</p>
                    </div>
                  </div>,
                  <div key={`${car.id}-2`} className="flex-shrink-0 w-64 bg-white border rounded-lg overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm">{car.year - 1} {car.make} {car.model}</p>
                      <p className="text-green-800 text-sm font-semibold">${(car.price - 4500).toLocaleString()}</p>
                    </div>
                  </div>
                ])}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
