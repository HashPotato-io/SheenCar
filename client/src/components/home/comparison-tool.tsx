import { Link } from "wouter";
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Check,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
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
import Car1 from "../../assets/car1.png";

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
  toyota_corolla: {
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
    features: [
      "Bluetooth",
      "Backup Camera",
      "Lane Departure Warning",
      "Keyless Entry",
    ],
    imageUrl:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
  },
  toyota_camry: {
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
    features: [
      "Bluetooth",
      "Backup Camera",
      "Lane Departure Warning",
      "Keyless Entry",
    ],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/1200px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg",
    rating: 4.5,
  },
  honda_civic: {
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
    features: [
      "Apple CarPlay",
      "Android Auto",
      "Adaptive Cruise Control",
      "Sunroof",
    ],
    imageUrl:
      "https://www.cnet.com/a/img/resize/75aefa7c3cd90d9d5fae785aad14e078f865ea59/hub/2021/11/16/1f7d8300-c033-4fa0-bcff-47170536cf69/2022-honda-civic-sedan-sport-touring-7.jpg?auto=webp&fit=crop&height=675&width=1200",
    rating: 4.7,
  },
  ford_mustang: {
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
    features: [
      "Leather Seats",
      "Navigation System",
      "Premium Sound",
      "Performance Package",
    ],
    imageUrl:
      "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
  },
  porsche_f150: {
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
    features: [
      "Leather Seats",
      "Navigation System",
      "Climate Control",
      "Towing Package",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
  },
  audi_a4: {
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
    features: [
      "Leather Seats",
      "Navigation System",
      "Sunroof",
      "Quattro AWD",
      "Premium Sound",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.1,
  },
};

export default function ComparisonTool() {
  // Initialize with two empty car selections
  const [carSelections, setCarSelections] = useState<CarSelection[]>([
    { id: 1, make: "", model: "" },
    { id: 2, make: "", model: "" },
  ]);

  // State for showing comparison section
  const [showComparison, setShowComparison] = useState(false);

  // Selected cars for comparison
  const [selectedCars, setSelectedCars] = useState<CarDetails[]>([]);

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle remove car selection
  const handleRemoveCarSelection = (id: number) => {
    // Only allow removal if we have more than 2 car selections
    if (carSelections.length > 2) {
      // Get the car that's being removed
      const carToRemove = carSelections.find(car => car.id === id);
      
      // Check if this car has a make and model (i.e., it's a valid selection)
      const isPopulatedCar = carToRemove && carToRemove.make && carToRemove.model;
      
      // Count how many populated cars we currently have
      const populatedCarsCount = carSelections.filter(car => car.make && car.model).length;
      
      // Only allow removal if:
      // 1. It's an empty car (no make/model), OR
      // 2. Removing this car still leaves at least 2 populated cars
      if (!isPopulatedCar || populatedCarsCount > 2) {
        // First filter out the car to be removed
        const filteredSelections = carSelections.filter((car) => car.id !== id);
        
        // Then reassign sequential IDs to maintain proper order
        const reindexedSelections = filteredSelections.map((car, index) => ({
          ...car,
          id: index + 1
        }));
        
        setCarSelections(reindexedSelections);
        
        // Reset comparison if it was showing
        if (showComparison) {
          setShowComparison(false);
          setSelectedCars([]);
        }
      }
    }
  };

  // Handle compare button click
  const handleCompareClick = () => {
    // Get selected car details
    const validSelections = carSelections.filter(
      (car) => car.make && car.model,
    );
    console.log("Valid selections:", validSelections);

    if (validSelections.length >= 2) {
      const carDetailsArray: CarDetails[] = [];

      validSelections.forEach((car) => {
        const details = getSelectedCarDetails(car);
        console.log(`Details for ${car.make}_${car.model}:`, details);
        if (details) {
          carDetailsArray.push(details);
        }
      });

      console.log("Car details array length:", carDetailsArray.length);
      console.log("Car details array:", carDetailsArray);

      if (carDetailsArray.length >= 2) {
        console.log("Setting selected cars and showing comparison");
        setSelectedCars(carDetailsArray);
        setShowComparison(true);

        // Scroll to comparison section
        setTimeout(() => {
          const comparisonSection =
            document.getElementById("comparison-results");
          if (comparisonSection) {
            comparisonSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  // Handle make selection and reset model when make changes
  const handleMakeChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map((selection) =>
        selection.id === selectionId
          ? { ...selection, make: value, model: "" }
          : selection,
      ),
    );
    setShowComparison(false);
  };

  // Check if a make is already selected by another car
  const isMakeSelected = (make: string, currentId: number) => {
    return carSelections.some(
      (car) => car.id !== currentId && car.make === make,
    );
  };

  // Handle model selection
  const handleModelChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map((selection) =>
        selection.id === selectionId
          ? { ...selection, model: value }
          : selection,
      ),
    );
    setShowComparison(false);
  };

  // Add a new car selection slot
  const addNewCarSelection = () => {
    const newId = Math.max(...carSelections.map((car) => car.id)) + 1;
    setCarSelections([...carSelections, { id: newId, make: "", model: "" }]);
    setShowComparison(false);
  };

  // Control UI state based on selections
  const canAddMoreCars = carSelections.length < 3;
  const canCompare =
    carSelections.length >= 2 &&
    carSelections.filter((car) => car.make && car.model).length >= 2;

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

      // For Toyota Corolla
      if (makeKey === "toyota" && modelKey === "corolla") {
        return {
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
          features: [
            "Bluetooth",
            "Backup Camera",
            "Lane Departure Warning",
            "Keyless Entry",
          ],
          imageUrl:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
          rating: 4.5,
        };
      }

      // For Toyota Camry
      if (makeKey === "toyota" && modelKey === "camry") {
        return {
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
          features: [
            "Bluetooth",
            "Backup Camera",
            "Lane Departure Warning",
            "Keyless Entry",
          ],
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/1200px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg",
          rating: 4.5,
        };
      }

      // For Honda Civic
      if (makeKey === "honda" && modelKey === "civic") {
        return {
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
          features: [
            "Apple CarPlay",
            "Android Auto",
            "Adaptive Cruise Control",
            "Sunroof",
          ],
          imageUrl:
            "https://www.cnet.com/a/img/resize/75aefa7c3cd90d9d5fae785aad14e078f865ea59/hub/2021/11/16/1f7d8300-c033-4fa0-bcff-47170536cf69/2022-honda-civic-sedan-sport-touring-7.jpg?auto=webp&fit=crop&height=675&width=1200",
          rating: 4.7,
        };
      }

      // For Ford Mustang
      if (makeKey === "ford" && modelKey === "mustang") {
        return {
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
          features: [
            "Leather Seats",
            "Navigation System",
            "Premium Sound",
            "Performance Package",
          ],
          imageUrl:
            "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          rating: 4.6,
        };
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
          features: [
            "Leather Seats",
            "Navigation System",
            "Climate Control",
            "Towing Package",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          rating: 4.3,
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
          features: [
            "Leather Seats",
            "Navigation System",
            "Sunroof",
            "Quattro AWD",
            "Premium Sound",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          rating: 4.1,
        };
      }

      // For any other car that doesn't have a specific case
      return {
        id: `${makeKey}_${modelKey}`,
        make:
          carMakes.find((m) => m.id === makeKey)?.name ||
          makeKey.charAt(0).toUpperCase() + makeKey.slice(1),
        model:
          carModels.find((m) => m.id === modelKey)?.name ||
          modelKey.charAt(0).toUpperCase() + modelKey.slice(1),
        year: 2020,
        price: 25000,
        mileage: 20000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L 4-Cylinder",
        exteriorColor: "Silver",
        interiorColor: "Black",
        doors: 4,
        features: [
          "Bluetooth",
          "Backup Camera",
          "Power Windows",
          "AC (Climate)",
        ],
        imageUrl: getCarImage(carSelection),
        rating: 4.0,
      };
    }
    return null;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Which one to choose? <span className="text-amber-500">Compare</span>{" "}
          them!
        </h2>
        <p className="text-neutral-600 mb-10 max-w-3xl mx-auto">
          Get a detailed comparison between the two cars of your liking to make
          a calculated buying decision.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-16">
            {carSelections.map((carSelection, index) => (
              <div
                key={carSelection.id}
                className="flex flex-col items-center w-full md:w-auto md:flex-1 relative"
              >
                {/* Car card */}
                <div
                  className={`rounded-xl border shadow-sm overflow-hidden bg-white w-full mb-4 ${carSelection.make && carSelection.model ? "border border-gray-200" : "border-2 border-dashed border-gray-300"} relative group`}
                >
                  {/* Remove button (show only if there are more than 2 cars) */}
                  {carSelections.length > 2 && (
                    <button
                      onClick={() => handleRemoveCarSelection(carSelection.id)}
                      className="absolute right-2 top-2 z-10 bg-white/90 text-gray-700 hover:text-red-500 rounded-full p-1 shadow-sm transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove car"
                    >
                      <X size={16} />
                    </button>
                  )}

                  {/* Car image container */}
                  <div className="h-64 flex items-center justify-center overflow-hidden bg-gray-50">
                    {carSelection.make && carSelection.model ? (
                      <img
                        src={getCarImage(carSelection)}
                        alt={`${carSelection.make} ${carSelection.model}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={Car1}
                        alt="Car silhouette"
                        className="w-40 h-auto max-h-36 opacity-60"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150' fill='none' stroke='%23cccccc' stroke-width='1'><path d='M50,90 L70,60 L230,60 L260,90 L260,110 L50,110 Z M90,60 L110,40 L190,40 L210,60 M90,60 L90,40 L110,40 M190,40 L210,60 L210,40 L190,40 M50,90 L50,110 M260,90 L260,110 M150,60 L150,40' /><circle cx='90' cy='110' r='20' /><circle cx='220' cy='110' r='20' /></svg>";
                        }}
                      />
                    )}
                  </div>

                  {/* Car details - only show if a car is selected */}
                  {carSelection.make && carSelection.model && (
                    <div className="bg-white p-4 text-left">
                      <h3 className="font-medium text-lg">
                        {carSelection.make === "toyota" &&
                        carSelection.model === "corolla"
                          ? "Toyota Corolla Altis"
                          : `${carMakes.find((m) => m.id === carSelection.make)?.name} ${carModels.find((m) => m.id === carSelection.model)?.name}`}
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        {getSelectedCarDetails(carSelection)?.year || "N/A"}
                      </p>
                      <p className="text-sm font-medium">
                        Price:{" "}
                        <span className="text-green-800">
                          $
                          {getSelectedCarDetails(
                            carSelection,
                          )?.price.toLocaleString() || "N/A"}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Make & Model selectors - moved below car container */}
                <div className="w-full flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <Select
                      value={carSelection.make}
                      onValueChange={(value) =>
                        handleMakeChange(value, carSelection.id)
                      }
                    >
                      <SelectTrigger className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent">
                        <SelectValue placeholder="Make" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                        {carMakes.map((make) => {
                          const isDisabled = isMakeSelected(
                            make.id,
                            carSelection.id,
                          );
                          return (
                            <SelectItem
                              key={make.id}
                              value={make.id}
                              disabled={isDisabled}
                              className={`py-2 border-b border-gray-200 last:border-0 ${isDisabled ? "opacity-50" : ""}`}
                            >
                              {make.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <Select
                      value={carSelection.model}
                      onValueChange={(value) =>
                        handleModelChange(value, carSelection.id)
                      }
                      disabled={!carSelection.make}
                    >
                      <SelectTrigger className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent">
                        <SelectValue placeholder="Model" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                        {carModels
                          .filter((model) => model.makeId === carSelection.make)
                          .map((model) => (
                            <SelectItem
                              key={model.id}
                              value={model.id}
                              className="py-2 border-b border-gray-200 last:border-0"
                            >
                              {model.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* VS circle between cars */}
                {index < carSelections.length - 1 && (
                  <div
                    className="hidden md:block absolute top-0 z-10 h-full"
                    style={{ left: "100%", transform: "translateX(-50%)" }}
                  >
                    <div className="flex flex-col items-center justify-center h-full ml-[64px]">
                      <div className="border-l-2 border-dashed border-gray-300 h-[40%]"></div>
                      <div className="rounded-full bg-green-900 text-white font-semibold flex items-center justify-center w-12 h-12 text-sm shadow-md my-4">
                        VS
                      </div>
                      <div className="border-l-2 border-dashed border-gray-300 h-[40%]"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className={`bg-green-900 hover:bg-green-800 text-white px-8 py-2 h-11 ${!canCompare && "opacity-70 cursor-not-allowed"}`}
              disabled={!canCompare}
              onClick={handleCompareClick}
            >
              Compare Now
            </Button>

            {canAddMoreCars && (
              <Button
                variant="outline"
                onClick={addNewCarSelection}
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-100 text-black rounded-none"
              >
                <Plus className="w-4 h-4" />
                Add Another Car
              </Button>
            )}
          </div>
        </div>

        {/* Comparison Results Section */}
        {showComparison && selectedCars.length >= 2 && (
          <div id="comparison-results" className="mt-16 text-left">
            {/* Features Comparison */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-900 mr-2">Compare</span> Features
              </h2>

              {/* Feature Category Select */}
              <div className="w-40 mb-4">
                <Select defaultValue="safety">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Features" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="safety">Safety</SelectItem>
                    <SelectItem value="comfort">
                      Comfort & Convenience
                    </SelectItem>
                    <SelectItem value="infotainment">Infotainment</SelectItem>
                    <SelectItem value="exterior">Exterior Features</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="overflow-hidden rounded-none border border-gray-200">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-green-900 text-white">
                      <TableHead className="w-1/3 border-r border-gray-600 px-4 py-3 text-left font-medium">
                        Feature
                      </TableHead>
                      {selectedCars.map((car) => (
                        <TableHead
                          key={car.id}
                          className="border-r last:border-r-0 border-gray-600 px-4 py-3 text-left font-medium"
                        >
                          {car.make === "Toyota" &&
                          car.model === "Corolla Altis"
                            ? "Toyota Corolla Altis"
                            : `${car.make} ${car.model}`}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        AC (Climate)
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3 text-center"
                        >
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Power Windows
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3 text-center"
                        >
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Sunroof
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3 text-center"
                        >
                          {car.model === "Civic" || car.model === "A4" ? (
                            <Check className="h-5 w-5 mx-auto text-green-600" />
                          ) : (
                            <X className="h-5 w-5 mx-auto text-red-500" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Backup Camera
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3 text-center"
                        >
                          <Check className="h-5 w-5 mx-auto text-green-600" />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-gray-200 px-4 py-3">
                        Lane Assist
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-gray-200 px-4 py-3 text-center"
                        >
                          {car.model === "Mustang" || car.model === "F-150" ? (
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
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-900 mr-2">Compare</span>{" "}
                Specifications
              </h2>

              {/* Specifications Category Select */}
              <div className="w-40 mb-4">
                <Select defaultValue="engine">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Specifications" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engine">Engine/Motor</SelectItem>
                    <SelectItem value="transmission">Transmission</SelectItem>
                    <SelectItem value="steering">Steering</SelectItem>
                    <SelectItem value="wheels">Wheels and Tires</SelectItem>
                    <SelectItem value="fuel">Fuel Economy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="overflow-hidden rounded-none border border-gray-200">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-green-900 text-white">
                      <TableHead className="w-1/3 border-r border-gray-600 px-4 py-3 text-left font-medium">
                        Engine/Mech
                      </TableHead>
                      {selectedCars.map((car) => (
                        <TableHead
                          key={car.id}
                          className="border-r last:border-r-0 border-gray-600 px-4 py-3 text-left font-medium"
                        >
                          {car.make === "Toyota" &&
                          car.model === "Corolla Altis"
                            ? "Toyota Corolla Altis"
                            : `${car.make} ${car.model}`}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Engine Type
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3"
                        >
                          {car.engine}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Fuel Type
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3"
                        >
                          {car.fuelType}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Year
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3"
                        >
                          {car.year}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
                        Mileage
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-b border-gray-200 px-4 py-3"
                        >
                          {car.mileage.toLocaleString()} miles
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="bg-white">
                      <TableCell className="font-medium border-r border-gray-200 px-4 py-3">
                        Transmission
                      </TableCell>
                      {selectedCars.map((car) => (
                        <TableCell
                          key={car.id}
                          className="border-r last:border-r-0 border-gray-200 px-4 py-3"
                        >
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
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="text-green-900 mr-2">Similar</span> Listings
              </h2>
              <div className="relative">
                {/* Left Arrow */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full p-1 shadow-md hover:bg-green-800 transition-colors"
                  onClick={scrollPrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Embla Carousel */}
                <div className="overflow-hidden px-10" ref={emblaRef}>
                  <div className="flex">
                    {/* Duplicate cars to have more slides */}
                    {Array.from({ length: 3 }).flatMap(() =>
                      selectedCars.map((car, idx) => (
                        <div
                          key={`${car.id}-${idx}-${Math.random()}`}
                          className="flex-[0_0_250px] mx-2 bg-white rounded-lg overflow-hidden shadow-sm relative"
                        >
                          <div className="absolute left-2 top-2">
                            <span className="bg-green-900 text-white text-xs py-0.5 px-2 rounded-sm">
                              {idx % 2 === 0 ? "New" : "Used"}
                            </span>
                          </div>
                          <div className="h-32 overflow-hidden">
                            <img
                              src={car.imageUrl}
                              alt={car.model}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <p className="font-medium text-sm mb-1">
                              {car.make === "Toyota" &&
                              car.model === "Corolla Altis"
                                ? "Toyota Corolla Altis"
                                : `${car.make} ${car.model}`}
                            </p>
                            <p className="text-xs text-gray-500 mb-1">
                              {idx % 2 === 0 ? car.year : car.year - 1}
                            </p>
                            <div className="flex justify-between items-center">
                              <p className="text-green-800 text-sm font-medium">
                                Price: $
                                {(idx % 2 === 0
                                  ? car.price
                                  : car.price - 2000
                                ).toLocaleString()}
                              </p>

                              {/* View details button */}
                              <Link href={`/cars/${car.id}`}>
                                <button className="rounded-full p-2 bg-green-500 text-white">
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )),
                    )}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full p-1 shadow-md hover:bg-green-800 transition-colors"
                  onClick={scrollNext}
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
