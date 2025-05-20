import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
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
                  <img 
                    src={`/car-silhouette-${index + 1}.svg`} 
                    alt="Car silhouette" 
                    className="w-40 h-40 opacity-40"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cccccc' stroke-width='1'><path d='M7,19H17V21H7V19ZM17,5H15V3H9V5H7V3.88C7,3.38 7.4,3 7.88,3H16.12C16.6,3 17,3.38 17,3.88V5ZM15,7V15H16L13,18L10,15H11V7H15Z'/></svg>";
                    }}
                  />
                </div>
                
                {/* VS circle between cars */}
                {index < carSelections.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-[30%] z-10">
                    <div className="rounded-full bg-green-800 text-white font-medium flex items-center justify-center w-8 h-8 text-xs">
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
              className={`bg-green-800 hover:bg-green-700 text-white px-8 py-2 h-12 rounded-sm ${!canCompare && 'opacity-70 cursor-not-allowed'}`}
              disabled={!canCompare}
              asChild={canCompare ? true : false}
            >
              {canCompare ? (
                <Link href={buildCompareUrl()}>
                  Compare Now
                </Link>
              ) : "Compare Now"}
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
      </div>
    </section>
  );
}
