import { Link } from "wouter";
import { useState } from "react";
import { Car } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Car as CarIcon } from "lucide-react";

export default function ComparisonTool() {
  const [selectedCar1, setSelectedCar1] = useState<Car | null>(null);
  const [selectedCar2, setSelectedCar2] = useState<Car | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDialog, setActiveDialog] = useState<"car1" | "car2" | null>(null);

  const { data: searchResults } = useQuery<Car[]>({
    queryKey: ["/api/cars/search", searchQuery],
    enabled: !!searchQuery && searchQuery.length > 2,
  });

  const handleSelectCar = (car: Car) => {
    if (activeDialog === "car1") {
      setSelectedCar1(car);
    } else if (activeDialog === "car2") {
      setSelectedCar2(car);
    }
    setActiveDialog(null);
    setSearchQuery("");
  };

  const compareBtnEnabled = selectedCar1 && selectedCar2;

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2 font-montserrat">
          Which one to choose? <span className="text-secondary">Compare</span> them!
        </h2>
        <p className="text-neutral-600 mb-10 max-w-2xl mx-auto">
          Get a detailed comparison between the cars on your buying shortlist to make a confident buying decision.
        </p>
        
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Dialog open={activeDialog === "car1"} onOpenChange={(open) => !open && setActiveDialog(null)}>
              <DialogTrigger asChild>
                <div 
                  className={`border-2 ${selectedCar1 ? 'border-solid border-primary' : 'border-dashed border-neutral-300'} rounded-lg p-4 flex flex-col items-center justify-center h-64 cursor-pointer`}
                  onClick={() => setActiveDialog("car1")}
                >
                  {selectedCar1 ? (
                    <>
                      <img 
                        src={selectedCar1.images?.[0] || "https://via.placeholder.com/150"}
                        alt={`${selectedCar1.make} ${selectedCar1.model}`}
                        className="w-32 h-32 object-contain mb-2"
                      />
                      <p className="font-medium">{selectedCar1.year} {selectedCar1.make} {selectedCar1.model}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-32 h-32 mb-4 flex items-center justify-center">
                        <CarIcon className="w-24 h-24 opacity-30 text-neutral-400" />
                      </div>
                      <Button>Select First Car</Button>
                    </>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Select First Car to Compare</h3>
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
                          src={car.images?.[0] || "https://via.placeholder.com/50"}
                          alt={`${car.make} ${car.model}`}
                          className="w-12 h-12 object-contain"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{car.year} {car.make} {car.model}</p>
                          <p className="text-sm text-neutral-500">${car.price}</p>
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
            
            <Dialog open={activeDialog === "car2"} onOpenChange={(open) => !open && setActiveDialog(null)}>
              <DialogTrigger asChild>
                <div 
                  className={`border-2 ${selectedCar2 ? 'border-solid border-primary' : 'border-dashed border-neutral-300'} rounded-lg p-4 flex flex-col items-center justify-center h-64 cursor-pointer`}
                  onClick={() => setActiveDialog("car2")}
                >
                  {selectedCar2 ? (
                    <>
                      <img 
                        src={selectedCar2.images?.[0] || "https://via.placeholder.com/150"}
                        alt={`${selectedCar2.make} ${selectedCar2.model}`}
                        className="w-32 h-32 object-contain mb-2"
                      />
                      <p className="font-medium">{selectedCar2.year} {selectedCar2.make} {selectedCar2.model}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-32 h-32 mb-4 flex items-center justify-center">
                        <CarIcon className="w-24 h-24 opacity-30 text-neutral-400" />
                      </div>
                      <Button>Select Second Car</Button>
                    </>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Select Second Car to Compare</h3>
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
                          src={car.images?.[0] || "https://via.placeholder.com/50"}
                          alt={`${car.make} ${car.model}`}
                          className="w-12 h-12 object-contain"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{car.year} {car.make} {car.model}</p>
                          <p className="text-sm text-neutral-500">${car.price}</p>
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
          </div>
          
          <div className="mt-8">
            {compareBtnEnabled ? (
              <Link href={`/compare?car1=${selectedCar1.id}&car2=${selectedCar2.id}`}>
                <Button size="lg">Compare Now</Button>
              </Link>
            ) : (
              <>
                <Button size="lg" disabled className="opacity-50 cursor-not-allowed">
                  Compare Now
                </Button>
                <p className="text-sm text-neutral-500 mt-2">Select two cars to compare</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
