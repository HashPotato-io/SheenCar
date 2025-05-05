import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Car } from "@shared/schema";
import { Loader2, ArrowLeft, Check, X, Divide } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ComparePage() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  const [car1Id, setCar1Id] = useState<string>(searchParams.get("car1") || "");
  const [car2Id, setCar2Id] = useState<string>(searchParams.get("car2") || "");

  const { data: car1, isLoading: isLoadingCar1 } = useQuery<Car>({
    queryKey: [`/api/cars/${car1Id}`],
    enabled: !!car1Id,
  });

  const { data: car2, isLoading: isLoadingCar2 } = useQuery<Car>({
    queryKey: [`/api/cars/${car2Id}`],
    enabled: !!car2Id,
  });

  const isLoading = isLoadingCar1 || isLoadingCar2;

  const specifications = [
    { label: "Year", key: "year" },
    { label: "Price", key: "price", formatter: (val: number) => `$${val.toLocaleString()}` },
    { label: "Mileage", key: "mileage", formatter: (val: number) => `${val.toLocaleString()} mi` },
    { label: "Fuel Type", key: "fuelType" },
    { label: "Transmission", key: "transmission" },
    { label: "Body Type", key: "bodyType" },
    { label: "Exterior Color", key: "exteriorColor" },
    { label: "Interior Color", key: "interiorColor" },
    { label: "Engine", key: "engine" },
    { label: "Drivetrain", key: "drivetrain" },
    { label: "MPG (City)", key: "mpgCity" },
    { label: "MPG (Highway)", key: "mpgHighway" },
    { label: "Condition", key: "condition" },
    { label: "VIN", key: "vin" },
  ];

  const getBetterValue = (spec: any, value1: any, value2: any) => {
    if (!value1 || !value2) return null;
    
    if (spec.key === "price") {
      return value1 < value2 ? "car1" : value1 > value2 ? "car2" : "equal";
    }
    
    if (spec.key === "mileage") {
      return value1 < value2 ? "car1" : value1 > value2 ? "car2" : "equal";
    }
    
    if (spec.key === "year") {
      return value1 > value2 ? "car1" : value1 < value2 ? "car2" : "equal";
    }
    
    if (spec.key === "mpgCity" || spec.key === "mpgHighway") {
      return value1 > value2 ? "car1" : value1 < value2 ? "car2" : "equal";
    }
    
    return "equal";
  };

  const renderComparisonValue = (spec: any, car1Value: any, car2Value: any) => {
    const better = getBetterValue(spec, car1Value, car2Value);
    
    if (!better) return null;
    
    if (better === "car1") {
      return <Check className="h-5 w-5 text-green-500" />;
    } else if (better === "car2") {
      return <Check className="h-5 w-5 text-green-500" />;
    }
    
    return <Divide className="h-5 w-5 text-gray-500" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/search">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold mb-6 font-montserrat">
            Compare <span className="text-secondary">Cars</span>
          </h1>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : car1 && car2 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 border-r text-center bg-neutral-50">
                  <h3 className="text-lg font-semibold">Specifications</h3>
                </div>
                <div className="p-4 border-r text-center">
                  <h3 className="text-lg font-semibold font-montserrat">
                    {car1.year} {car1.make} {car1.model}
                  </h3>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold font-montserrat">
                    {car2.year} {car2.make} {car2.model}
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 border-r"></div>
                <div className="p-4 border-r">
                  <img 
                    src={car1.images?.[0] || "https://via.placeholder.com/400x240?text=No+Image"} 
                    alt={`${car1.make} ${car1.model}`} 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="p-4">
                  <img 
                    src={car2.images?.[0] || "https://via.placeholder.com/400x240?text=No+Image"} 
                    alt={`${car2.make} ${car2.model}`} 
                    className="w-full h-48 object-contain"
                  />
                </div>
              </div>
              
              <Table>
                <TableBody>
                  {specifications.map((spec, index) => {
                    const value1 = (car1 as any)[spec.key];
                    const value2 = (car2 as any)[spec.key];
                    const displayValue1 = spec.formatter ? spec.formatter(value1) : value1;
                    const displayValue2 = spec.formatter ? spec.formatter(value2) : value2;
                    
                    return (
                      <TableRow key={index} className={index % 2 === 0 ? 'bg-neutral-50' : ''}>
                        <TableCell className="font-medium">{spec.label}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <span>{displayValue1 || 'N/A'}</span>
                            <div className="ml-2">
                              {renderComparisonValue(spec, value1, value2)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <span>{displayValue2 || 'N/A'}</span>
                            <div className="ml-2">
                              {renderComparisonValue(spec, value2, value1)}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              
              <div className="grid grid-cols-3 border-t">
                <div className="p-6 border-r"></div>
                <div className="p-6 border-r text-center">
                  <Link href={`/cars/${car1.id}`}>
                    <Button size="lg">View Details</Button>
                  </Link>
                </div>
                <div className="p-6 text-center">
                  <Link href={`/cars/${car2.id}`}>
                    <Button size="lg">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">No Cars Selected for Comparison</h2>
              <p className="text-neutral-600 mb-6">
                Please select two cars to compare their features and specifications.
              </p>
              <Link href="/search">
                <Button>Browse Cars</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
