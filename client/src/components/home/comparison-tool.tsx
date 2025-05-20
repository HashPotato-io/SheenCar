import { Link } from "wouter";
import { useState } from "react";
import { Car } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Car as CarIcon, Plus, Check, Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carMakes, carModels } from "@/lib/car-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComparisonCarProps {
  car: Car | null;
  index: number;
  onSelect: () => void;
  onRemove?: () => void;
  showRemoveButton?: boolean;
}

function ComparisonCar({ car, index, onSelect, onRemove, showRemoveButton = false }: ComparisonCarProps) {
  return (
    <div className="relative">
      {showRemoveButton && onRemove && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 z-10 hover:bg-red-600"
        >
          <Trash className="w-3 h-3" />
        </button>
      )}
      <div 
        className={`border-2 ${car ? 'border-solid border-[#004331]' : 'border-dashed border-neutral-300'} rounded-lg p-4 flex flex-col items-center justify-center h-52 cursor-pointer relative overflow-hidden`}
        onClick={onSelect}
      >
        {car ? (
          <>
            <div className="absolute top-2 left-2 bg-[#004331] text-white rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-xs">{index + 1}</span>
            </div>
            <img 
              src={car.images?.[0] || `https://via.placeholder.com/150?text=${car.make}+${car.model}`}
              alt={`${car.make} ${car.model}`}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <div className="text-center">
              <p className="font-semibold">{car.make} {car.model}</p>
              <p className="text-sm text-neutral-500">Price: ${car.price?.toLocaleString()}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-28 h-28 flex items-center justify-center">
              <CarIcon className="w-20 h-20 opacity-30 text-neutral-400" />
            </div>
            <p className="text-neutral-500">Select Car</p>
          </>
        )}
      </div>
      <div className="mt-2 flex gap-2">
        <Select>
          <SelectTrigger className="h-8 text-xs">
            <SelectValue placeholder="Make" />
          </SelectTrigger>
          <SelectContent>
            {carMakes.map((make) => (
              <SelectItem key={make} value={make}>{make}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-8 text-xs">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            {carModels.map((model) => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

interface ComparisonFeatureTableProps {
  selectedCars: (Car | null)[];
}

function ComparisonFeatureTable({ selectedCars }: ComparisonFeatureTableProps) {
  const validCars = selectedCars.filter((car): car is Car => car !== null);
  
  if (validCars.length < 2) {
    return null;
  }

  const features = [
    { name: "Fuel Type", key: "fuelType" },
    { name: "Transmission", key: "transmission" },
    { name: "Drivetrain", key: "drivetrain" },
    { name: "Cylinders", key: "cylinders" },
    { name: "Fuel Economy", key: "mpg" },
  ];

  return (
    <div className="mt-8 border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#004331] text-white">
            <TableHead className="w-1/3 font-medium">Features</TableHead>
            {validCars.map((car, index) => (
              <TableHead key={car.id} className="font-medium">
                {car.make} {car.model}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.key}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              {validCars.map((car) => (
                <TableCell key={`${car.id}-${feature.key}`}>
                  {(car as any)[feature.key] || 
                    <div className="flex justify-center">
                      <Check className="text-[#004331] h-5 w-5" />
                    </div>
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

interface ComparisonSpecificationsTableProps {
  selectedCars: (Car | null)[];
  category: string;
}

function ComparisonSpecificationsTable({ selectedCars, category }: ComparisonSpecificationsTableProps) {
  const validCars = selectedCars.filter((car): car is Car => car !== null);
  
  if (validCars.length < 2) {
    return null;
  }

  // Define specifications based on the selected category
  const specsByCategory: Record<string, { name: string, key: string }[]> = {
    "Engine/Motor": [
      { name: "Engine Type", key: "engineType" },
      { name: "Drive Type", key: "driveType" },
      { name: "Cylinders", key: "cylinders" },
      { name: "Fuel Type", key: "fuelType" },
    ],
    "Transmission": [
      { name: "Transmission Type", key: "transmission" },
      { name: "Gears", key: "gears" },
    ],
    "Steering": [
      { name: "Steering Type", key: "steeringType" },
      { name: "Turning Radius", key: "turningRadius" },
    ],
    "Wheels and Tires": [
      { name: "Wheel Size", key: "wheelSize" },
      { name: "Tire Type", key: "tireType" },
    ],
    "Fuel Economy": [
      { name: "City MPG", key: "cityMpg" },
      { name: "Highway MPG", key: "highwayMpg" },
      { name: "Combined MPG", key: "combinedMpg" },
    ],
  };

  const specifications = specsByCategory[category] || [];

  return (
    <div className="mt-4 border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#004331] text-white">
            <TableHead className="w-1/3 font-medium">Specification</TableHead>
            {validCars.map((car) => (
              <TableHead key={car.id} className="font-medium">
                {car.make} {car.model}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {specifications.map((spec) => (
            <TableRow key={spec.key}>
              <TableCell className="font-medium">{spec.name}</TableCell>
              {validCars.map((car) => {
                // Sample data for demo - in real app, this would come from the car object
                const sampleValues: Record<string, Record<string, string>> = {
                  "engineType": { 
                    [car.id]: car.id % 2 === 0 ? "V6 3.5L Inline-6" : "L4 2.0L Turbo" 
                  },
                  "driveType": { 
                    [car.id]: car.id % 2 === 0 ? "FWD" : "AWD" 
                  },
                  "fuelType": { 
                    [car.id]: car.id % 3 === 0 ? "Diesel" : "Gasoline" 
                  },
                  "transmission": { 
                    [car.id]: car.id % 2 === 0 ? "Automatic" : "Manual" 
                  },
                  "gears": { 
                    [car.id]: car.id % 2 === 0 ? "6-speed" : "8-speed" 
                  },
                };
                
                return (
                  <TableCell key={`${car.id}-${spec.key}`}>
                    {(car as any)[spec.key] || sampleValues[spec.key]?.[car.id] || "N/A"}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default function ComparisonTool() {
  const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([null, null]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDialog, setActiveDialog] = useState<number | null>(null);
  const [showCompareResults, setShowCompareResults] = useState(false);
  const [selectedSpecTab, setSelectedSpecTab] = useState("Engine/Motor");

  const { data: searchResults } = useQuery<Car[]>({
    queryKey: ["/api/cars/search", searchQuery],
    enabled: !!searchQuery && searchQuery.length > 2,
  });

  const { data: similarCars } = useQuery<Car[]>({
    queryKey: ["/api/cars"],
    enabled: showCompareResults,
  });

  const handleSelectCar = (car: Car) => {
    if (activeDialog !== null) {
      const newSelectedCars = [...selectedCars];
      newSelectedCars[activeDialog] = car;
      setSelectedCars(newSelectedCars);
      setActiveDialog(null);
      setSearchQuery("");
    }
  };

  const handleAddAnotherCar = () => {
    setSelectedCars([...selectedCars, null]);
  };

  const handleRemoveCar = (index: number) => {
    const newSelectedCars = [...selectedCars];
    newSelectedCars.splice(index, 1);
    setSelectedCars(newSelectedCars);
  };

  const validCarsCount = selectedCars.filter(car => car !== null).length;
  const compareBtnEnabled = validCarsCount >= 2;

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2 font-montserrat">
          Which one to choose? <span className="text-[#AF8C32]">Compare</span> them!
        </h2>
        <p className="text-neutral-600 mb-10 max-w-2xl mx-auto">
          Get a detailed comparison between the two cars of your liking to make a calculated buying decision.
        </p>
        
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedCars.map((car, index) => (
              <Dialog 
                key={index} 
                open={activeDialog === index} 
                onOpenChange={(open) => !open && setActiveDialog(null)}
              >
                <DialogTrigger asChild>
                  <div onClick={() => setActiveDialog(index)}>
                    <ComparisonCar 
                      car={car} 
                      index={index} 
                      onSelect={() => setActiveDialog(index)}
                      onRemove={index > 1 ? () => handleRemoveCar(index) : undefined}
                      showRemoveButton={index > 1}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle>Select Car to Compare</DialogTitle>
                  <div className="space-y-4 mt-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Search by make, model, or year..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Button type="button" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="max-h-72 overflow-y-auto space-y-2">
                      {searchResults?.map((car) => (
                        <div 
                          key={car.id} 
                          className="p-2 border rounded hover:bg-neutral-50 cursor-pointer flex items-center gap-3"
                          onClick={() => handleSelectCar(car)}
                        >
                          <img 
                            src={car.images?.[0] || `https://via.placeholder.com/50?text=${car.make}`}
                            alt={`${car.make} ${car.model}`}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{car.year} {car.make} {car.model}</p>
                            <p className="text-sm text-neutral-500">${car.price?.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                      {searchQuery.length > 2 && (!searchResults || searchResults.length === 0) && (
                        <p className="text-center py-4 text-neutral-500">No cars found matching your search.</p>
                      )}
                      {searchQuery.length <= 2 && (
                        <p className="text-center py-4 text-neutral-500">Type at least 3 characters to search</p>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
            
            {/* Add Another Car button, only show if there are already 2 cars and less than 3 total */}
            {selectedCars.length < 3 && (
              <div 
                className="border-2 border-dashed border-neutral-300 rounded-lg p-4 flex flex-col items-center justify-center h-52 cursor-pointer"
                onClick={handleAddAnotherCar}
              >
                <div className="w-16 h-16 rounded-full border-2 border-neutral-300 flex items-center justify-center mb-2">
                  <Plus className="w-8 h-8 text-neutral-400" />
                </div>
                <p className="text-neutral-500">Add Another Car</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 flex justify-center">
            {compareBtnEnabled ? (
              <Button 
                size="lg" 
                className="bg-[#004331] hover:bg-[#003224]"
                onClick={() => setShowCompareResults(true)}
              >
                Compare Now
              </Button>
            ) : (
              <Button 
                size="lg" 
                disabled 
                className="opacity-50 cursor-not-allowed"
              >
                Compare Now
              </Button>
            )}
            
            {selectedCars.length > 2 && (
              <Button 
                variant="outline" 
                size="lg"
                className="ml-4 border-[#AF8C32] text-[#AF8C32] hover:bg-[#AF8C32] hover:text-white"
                onClick={handleAddAnotherCar}
              >
                Add Another Car
              </Button>
            )}
          </div>
          
          {/* Comparison Results Section */}
          {showCompareResults && compareBtnEnabled && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-left mb-4">
                Compare <span className="text-[#AF8C32]">Features</span>
              </h3>
              <ComparisonFeatureTable selectedCars={selectedCars} />
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-left mb-4">
                  Compare <span className="text-[#AF8C32]">Specifications</span>
                </h3>
                
                <div className="flex flex-col space-y-4">
                  <Select
                    value={selectedSpecTab}
                    onValueChange={setSelectedSpecTab}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engine/Motor">Engine/Motor</SelectItem>
                      <SelectItem value="Transmission">Transmission</SelectItem>
                      <SelectItem value="Steering">Steering</SelectItem>
                      <SelectItem value="Wheels and Tires">Wheels and Tires</SelectItem>
                      <SelectItem value="Fuel Economy">Fuel Economy</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <ComparisonSpecificationsTable 
                    selectedCars={selectedCars} 
                    category={selectedSpecTab}
                  />
                </div>
              </div>
              
              {/* Similar Listings Section */}
              {similarCars && similarCars.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-left mb-4">
                    Similar <span className="text-[#AF8C32]">Listings</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {similarCars.slice(0, 4).map((car) => (
                      <Link key={car.id} href={`/cars/${car.id}`}>
                        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative">
                            <img 
                              src={car.images?.[0] || `https://via.placeholder.com/200?text=${car.make}`}
                              alt={`${car.make} ${car.model}`}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-[#004331] text-white px-2 py-1 text-xs">
                              {car.condition}
                            </div>
                          </div>
                          <div className="p-3">
                            <h4 className="font-medium text-sm">{car.make} {car.model}</h4>
                            <p className="text-sm text-neutral-500">Price: ${car.price?.toLocaleString()}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
