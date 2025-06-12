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
import EmblaCarousel from "@/components/ui/embla-carousel";
import CarCard from "./car-card";
import { CarSelection, CarDetails } from "@/lib/types";
import CarCards from "../cards/car-cards";
import {
  CustomSelect,
  CustomSelectTrigger,
  CustomSelectContent,
  CustomSelectItem,
} from "@/components/ui/custom-select";

// Dummy car data
const carDetailsData: Record<string, CarDetails> = {
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
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
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
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
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
      "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg",
    rating: 4.6,
  },
  bmw_3series: {
    id: "bmw_3series",
    make: "BMW",
    model: "3 Series",
    year: 2023,
    price: 42500,
    mileage: 8500,
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    engine: "2.0L Turbo 4-Cylinder",
    exteriorColor: "Alpine White",
    interiorColor: "Black",
    doors: 4,
    features: [
      "iDrive System",
      "Parking Assistant",
      "Heated Seats",
      "Panoramic Sunroof",
    ],
    imageUrl:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    rating: 4.8,
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
      const carToRemove = carSelections.find((car) => car.id === id);

      // Check if this car has a make and model (i.e., it's a valid selection)
      const isPopulatedCar =
        carToRemove && carToRemove.make && carToRemove.model;

      // Count how many populated cars we currently have
      const populatedCarsCount = carSelections.filter(
        (car) => car.make && car.model
      ).length;

      // Only allow removal if:
      // 1. It's an empty car (no make/model), OR
      // 2. Removing this car still leaves at least 2 populated cars
      if (!isPopulatedCar || populatedCarsCount > 2) {
        // First filter out the car to be removed
        const filteredSelections = carSelections.filter((car) => car.id !== id);

        // Then reassign sequential IDs to maintain proper order
        const reindexedSelections = filteredSelections.map((car, index) => ({
          ...car,
          id: index + 1,
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
    const validSelections = carSelections?.filter(
      (car) => car?.make && car?.model
    );

    console.log(validSelections);

    if (validSelections?.length >= 2) {
      const carDetailsArray: CarDetails[] = [];

      validSelections.forEach((car) => {
        const details = getSelectedCarDetails(car);
        if (details) {
          carDetailsArray.push(details);
        }
      });

      console.log("Car details for comparison:", carDetailsArray);

      // Only set selected cars and show comparison if we have valid details
      if (carDetailsArray?.length >= 2) {
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
          : selection
      )
    );
    setShowComparison(false);
  };

  // Check if a make is already selected by another car
  const isMakeSelected = (make: string, currentId: number) => {
    return carSelections.some(
      (car) => car.id !== currentId && car.make === make
    );
  };

  // Handle model selection
  const handleModelChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map((selection) =>
        selection.id === selectionId
          ? { ...selection, model: value }
          : selection
      )
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
      const makeKey = carSelection.make;
      const modelKey = carSelection.model;
      const exactMatchKey = `${makeKey}_${modelKey}`;

      // Try exact match first
      if (carDetailsData[exactMatchKey]) {
        return carDetailsData[exactMatchKey].imageUrl;
      }

      // Return placeholder for unknown combinations
      return "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg";
    }
    return "/car-placeholder.svg";
  };

  // Get selected car details
  const getSelectedCarDetails = (carSelection: CarSelection) => {
    if (carSelection.make && carSelection.model) {
      const makeKey = carSelection.make.toLowerCase();
      const modelKey = carSelection.model.toLowerCase();
      const exactMatchKey = `${makeKey}_${modelKey}`;

      // If we have predefined details, use them
      if (carDetailsData[exactMatchKey]) {
        return carDetailsData[exactMatchKey];
      }

      // Create default details for any car combination
      return {
        id: exactMatchKey,
        make:
          carSelection.make.charAt(0).toUpperCase() +
          carSelection.make.slice(1),
        model:
          carSelection.model.charAt(0).toUpperCase() +
          carSelection.model.slice(1),
        year: 2023,
        price: 35000,
        mileage: 15000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L 4-Cylinder",
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
          "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
        rating: 4.5,
      };
    }
    return null;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[46px] font-[400] leading-[100%] tracking-[-0.01em] text-center text-black mb-2 font-['Gilroy-SemiBold']">
          Which one to choose? <span className="text-[#AF8C32]">Compare</span>{" "}
          them!
        </h2>
        <p className="text-[20px] font-[400] leading-[100%] tracking-[0] text-center text-[#171616] mb-10 font-['Poppins']">
          Get a detailed comparison between the two cars of your liking to make
          a calculated buying decision.
        </p>

        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            {carSelections?.map((carSelection, index) => (
              <div
                key={carSelection.id}
                className="flex flex-col items-center w-full md:w-auto md:flex-1 relative"
              >
                {carSelection?.make && carSelection?.model ? (
                  <CarCards
                    car={{
                      id: carSelection.id,
                      make:
                        carMakes.find((m) => m.id === carSelection.make)
                          ?.name || carSelection.make,
                      model:
                        carModels.find((m) => m.id === carSelection.model)
                          ?.name || carSelection.model,
                      year: getSelectedCarDetails(carSelection)?.year || 2023,
                      price: getSelectedCarDetails(carSelection)?.price || 0,
                      image: getCarImage(carSelection),
                    }}
                    linkUrl="#"
                    hideViewDetails
                    hideYear
                  />
                ) : (
                  <CarCard
                    carSelection={carSelection}
                    onRemove={handleRemoveCarSelection}
                    showRemoveButton={carSelections.length > 2}
                    getCarImage={getCarImage}
                    getSelectedCarDetails={getSelectedCarDetails}
                    carMakes={carMakes}
                    carModels={carModels}
                  />
                )}

                {/* Make & Model selectors */}
                <div className="w-full flex gap-2 items-center justify-center mb-6">
                  <CustomSelect
                    value={carSelection.make}
                    onValueChange={(value) =>
                      handleMakeChange(value, carSelection.id)
                    }
                  >
                    <CustomSelectTrigger
                      className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent w-[177.55px] h-[43.14px]"
                      placeholderColor="#696969"
                      borderColor="#CFCFCF"
                    >
                      <span>
                        {carSelection.make
                          ? carMakes.find((m) => m.id === carSelection.make)
                              ?.name || carSelection.make
                          : "Make"}
                      </span>
                    </CustomSelectTrigger>
                    <CustomSelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                      {carMakes.map((make) => {
                        const isDisabled = isMakeSelected(
                          make.id,
                          carSelection.id
                        );
                        return (
                          <CustomSelectItem
                            key={make.id}
                            value={make.id}
                            disabled={isDisabled}
                            className={`py-2 border-b border-gray-200 last:border-0 ${
                              isDisabled ? "opacity-50" : ""
                            }`}
                          >
                            {make.name}
                          </CustomSelectItem>
                        );
                      })}
                    </CustomSelectContent>
                  </CustomSelect>

                  <CustomSelect
                    value={carSelection.model}
                    onValueChange={(value) =>
                      handleModelChange(value, carSelection.id)
                    }
                    disabled={!carSelection.make}
                  >
                    <CustomSelectTrigger
                      className="pl-9 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 bg-transparent w-[177.55px] h-[43.14px]"
                      placeholderColor="#696969"
                      borderColor="#CFCFCF"
                    >
                      <span>
                        {carSelection.model
                          ? carModels.find((m) => m.id === carSelection.model)
                              ?.name || carSelection.model
                          : "Model"}
                      </span>
                    </CustomSelectTrigger>
                    <CustomSelectContent className="bg-gray-100 border-0 rounded-md shadow-md">
                      {carModels
                        .filter((model) => model.makeId === carSelection.make)
                        .map((model) => (
                          <CustomSelectItem
                            key={model.id}
                            value={model.id}
                            className="py-2 border-b border-gray-200 last:border-0"
                          >
                            {model.name}
                          </CustomSelectItem>
                        ))}
                    </CustomSelectContent>
                  </CustomSelect>
                </div>

                {/* VS circle between cars */}
                {index < carSelections.length - 1 && (
                  <div
                    className="hidden md:block absolute top-[38%] z-10"
                    style={{
                      left: "100%",
                      transform: "translate(-50%, -50%)",
                      width: "32px",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="border-l-2 border-dashed border-gray-300 h-16"></div>
                      <div className="rounded-full bg-green-900 text-white font-semibold flex items-center justify-center w-12 h-12 text-sm shadow-md my-2">
                        VS
                      </div>
                      <div className="border-l-2 border-dashed border-gray-300 h-16"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className={`bg-green-900 hover:bg-[#003A2F] text-white px-8 py-2 h-11 ${
                !canCompare && "opacity-70 cursor-not-allowed"
              }`}
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
                      <TableCell className="font-medium border-r border-b border-gray-200 px-4 py-3">
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
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#000000] font-['Gilroy-SemiBold'] font-normal leading-[100%] tracking-[-0.01em] text-left mb-3 sm:mb-4">
                Similar <span className="text-[#AF8C32]">Listings</span>
              </h2>
              {/* Use EmblaCarousel component */}
              <EmblaCarousel
                selectedCars={selectedCars}
                emblaRef={emblaRef}
                scrollPrev={scrollPrev}
                scrollNext={scrollNext}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
