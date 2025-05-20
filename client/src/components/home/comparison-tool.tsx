import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Car as CarIcon } from "lucide-react";
import { carMakes, carModels } from "@/lib/car-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define car selection interface
interface CarSelection {
  id: number;
  make: string;
  model: string;
}

export default function ComparisonTool() {
  // Initialize with two empty car selections
  const [carSelections, setCarSelections] = useState<CarSelection[]>([
    { id: 1, make: "", model: "" },
    { id: 2, make: "", model: "" }
  ]);

  // Handle make selection and reset model when make changes
  const handleMakeChange = (value: string, selectionId: number) => {
    setCarSelections(
      carSelections.map(selection => 
        selection.id === selectionId 
          ? { ...selection, make: value, model: "" } 
          : selection
      )
    );
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
  };

  // Add a new car selection slot
  const addNewCarSelection = () => {
    const newId = Math.max(...carSelections.map(car => car.id)) + 1;
    setCarSelections([...carSelections, { id: newId, make: "", model: "" }]);
  };

  // Control UI state based on selections
  const canAddMoreCars = carSelections.length < 3;
  const canCompare = carSelections.length >= 2 && 
    carSelections.filter(car => car.make && car.model).length >= 2;

  // Build URL parameters for comparison
  const buildCompareUrl = () => {
    const params = carSelections
      .filter(car => car.make && car.model)
      .map((car, index) => `car${index + 1}=${car.make}_${car.model}`)
      .join("&");
    
    return `/compare?${params}`;
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Which one to choose? <span className="text-primary">Compare</span> them!
        </h2>
        <p className="text-neutral-600 mb-10 max-w-2xl mx-auto">
          Get a detailed comparison between the cars on your buying shortlist to make a calculated buying decision.
        </p>
        
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-sm">
          <div className="flex flex-wrap md:flex-row items-center justify-center gap-6">
            {carSelections.map((carSelection, index) => (
              <div key={carSelection.id} className="flex flex-col items-center w-full md:w-auto md:flex-1 relative">
                {/* Car illustration */}
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-4 flex items-center justify-center h-32 w-full mb-4">
                  <CarIcon className="w-20 h-20 opacity-30 text-neutral-400" />
                </div>
                
                {/* Make & Model selectors */}
                <div className="w-full space-y-2">
                  <Select
                    value={carSelection.make}
                    onValueChange={(value) => handleMakeChange(value, carSelection.id)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Make" />
                    </SelectTrigger>
                    <SelectContent>
                      {carMakes.map((make) => (
                        <SelectItem key={make.id} value={make.id}>
                          {make.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select
                    value={carSelection.model}
                    onValueChange={(value) => handleModelChange(value, carSelection.id)}
                    disabled={!carSelection.make}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Model" />
                    </SelectTrigger>
                    <SelectContent>
                      {carModels
                        .filter(model => model.makeId === carSelection.make)
                        .map((model) => (
                          <SelectItem key={model.id} value={model.id}>
                            {model.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Add plus icon between cars */}
                {index < carSelections.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <PlusCircle className="text-primary w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            {canCompare ? (
              <Link href={buildCompareUrl()}>
                <Button variant="default" className="bg-primary text-white">Compare Now</Button>
              </Link>
            ) : (
              <Button variant="default" disabled className="opacity-50 cursor-not-allowed">
                Compare Now
              </Button>
            )}
            
            {canAddMoreCars && (
              <Button 
                variant="outline" 
                onClick={addNewCarSelection}
                className="flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                Add Another Car
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
