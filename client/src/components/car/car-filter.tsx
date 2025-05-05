import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carMakes, carModels } from "@/lib/car-types";

interface FilterState {
  zipCode: string;
  make: string;
  model: string;
  priceRange: [number, number];
  mileageRange: [number, number];
  yearRange: [number, number];
  sellerType: { dealer: boolean; private: boolean };
  condition: { used: boolean; new: boolean };
}

export default function CarFilter() {
  const [location, navigate] = useLocation();
  
  // Initialize with URL params if they exist
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  
  const [filter, setFilter] = useState<FilterState>({
    zipCode: searchParams.get("zipCode") || "",
    make: searchParams.get("make") || "",
    model: searchParams.get("model") || "",
    priceRange: [
      parseInt(searchParams.get("minPrice") || "15000"),
      parseInt(searchParams.get("maxPrice") || "150000"),
    ],
    mileageRange: [
      parseInt(searchParams.get("minMileage") || "0"),
      parseInt(searchParams.get("maxMileage") || "100000"),
    ],
    yearRange: [
      parseInt(searchParams.get("minYear") || "2003"),
      parseInt(searchParams.get("maxYear") || "2023"),
    ],
    sellerType: {
      dealer: searchParams.get("dealer") === "true",
      private: searchParams.get("private") === "true" || !searchParams.has("private"),
    },
    condition: {
      used: searchParams.get("used") === "true" || !searchParams.has("used"),
      new: searchParams.get("new") === "true",
    },
  });

  const availableModels = filter.make 
    ? carModels.filter(model => model.makeId === filter.make)
    : [];

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (filter.zipCode) params.set("zipCode", filter.zipCode);
    if (filter.make && filter.make !== "any") params.set("make", filter.make);
    if (filter.model && filter.model !== "any") params.set("model", filter.model);
    
    params.set("minPrice", filter.priceRange[0].toString());
    params.set("maxPrice", filter.priceRange[1].toString());
    
    params.set("minMileage", filter.mileageRange[0].toString());
    params.set("maxMileage", filter.mileageRange[1].toString());
    
    params.set("minYear", filter.yearRange[0].toString());
    params.set("maxYear", filter.yearRange[1].toString());
    
    params.set("dealer", filter.sellerType.dealer.toString());
    params.set("private", filter.sellerType.private.toString());
    
    params.set("used", filter.condition.used.toString());
    params.set("new", filter.condition.new.toString());
    
    navigate(`/search?${params.toString()}`);
  };

  const resetFilters = () => {
    setFilter({
      zipCode: "",
      make: "any",
      model: "any",
      priceRange: [15000, 150000],
      mileageRange: [0, 100000],
      yearRange: [2003, 2023],
      sellerType: { dealer: false, private: true },
      condition: { used: true, new: false },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold">ZIP Code</h3>
        <Input
          type="text"
          placeholder="Enter ZIP code"
          value={filter.zipCode}
          onChange={(e) => setFilter({ ...filter, zipCode: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Make</h3>
        <Select
          value={filter.make}
          onValueChange={(value) => setFilter({ ...filter, make: value, model: "" })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Make</SelectItem>
            {carMakes.map((make) => (
              <SelectItem key={make.id} value={make.id}>
                {make.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Model</h3>
        <Select
          value={filter.model}
          onValueChange={(value) => setFilter({ ...filter, model: value })}
          disabled={!filter.make}
        >
          <SelectTrigger>
            <SelectValue placeholder={filter.make ? "Select model" : "Select make first"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Model</SelectItem>
            {availableModels.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Price</h3>
        <div className="flex justify-between text-sm">
          <span>${filter.priceRange[0].toLocaleString()}</span>
          <span>${filter.priceRange[1].toLocaleString()}</span>
        </div>
        <Slider
          value={filter.priceRange}
          min={0}
          max={300000}
          step={1000}
          onValueChange={(value) => setFilter({ ...filter, priceRange: value as [number, number] })}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Mileage</h3>
        <div className="flex justify-between text-sm">
          <span>{filter.mileageRange[0].toLocaleString()} miles</span>
          <span>{filter.mileageRange[1].toLocaleString()} miles</span>
        </div>
        <Slider
          value={filter.mileageRange}
          min={0}
          max={200000}
          step={1000}
          onValueChange={(value) => setFilter({ ...filter, mileageRange: value as [number, number] })}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Year Range</h3>
        <div className="flex justify-between text-sm">
          <span>{filter.yearRange[0]}</span>
          <span>{filter.yearRange[1]}</span>
        </div>
        <Slider
          value={filter.yearRange}
          min={1990}
          max={new Date().getFullYear()}
          step={1}
          onValueChange={(value) => setFilter({ ...filter, yearRange: value as [number, number] })}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Seller Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="dealer"
              checked={filter.sellerType.dealer}
              onCheckedChange={(checked) =>
                setFilter({
                  ...filter,
                  sellerType: { ...filter.sellerType, dealer: checked as boolean },
                })
              }
            />
            <Label htmlFor="dealer">Dealer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="private"
              checked={filter.sellerType.private}
              onCheckedChange={(checked) =>
                setFilter({
                  ...filter,
                  sellerType: { ...filter.sellerType, private: checked as boolean },
                })
              }
            />
            <Label htmlFor="private">Private Seller</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Condition</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="used"
              checked={filter.condition.used}
              onCheckedChange={(checked) =>
                setFilter({
                  ...filter,
                  condition: { ...filter.condition, used: checked as boolean },
                })
              }
            />
            <Label htmlFor="used">Used</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new"
              checked={filter.condition.new}
              onCheckedChange={(checked) =>
                setFilter({
                  ...filter,
                  condition: { ...filter.condition, new: checked as boolean },
                })
              }
            />
            <Label htmlFor="new">New</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
        <Button variant="outline" onClick={resetFilters} className="w-full">Reset</Button>
      </div>
    </div>
  );
}
