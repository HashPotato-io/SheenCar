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
import { CustomInput } from "../ui/custom-input";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { useMobileDevice } from "@/hooks/useMobileDevice";
import { CustomButton } from "../ui/custom-button";

interface FilterState {
  zipCode: string;
  make: string;
  model: string;
  bodyType: string;
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
    bodyType: searchParams.get("bodyType") || "",
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
      private:
        searchParams.get("private") === "true" || !searchParams.has("private"),
    },
    condition: {
      used: searchParams.get("used") === "true" || !searchParams.has("used"),
      new: searchParams.get("new") === "true",
    },
  });
  const isMobile = useMobileDevice();

  const availableModels = filter.make
    ? carModels.filter((model) => model.makeId === filter.make)
    : [];

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filter.zipCode) params.set("zipCode", filter.zipCode);
    if (filter.make && filter.make !== "any") params.set("make", filter.make);
    if (filter.model && filter.model !== "any")
      params.set("model", filter.model);
    if (filter.bodyType && filter.bodyType !== "any")
      params.set("bodyType", filter.bodyType);

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
      bodyType: "any",
      priceRange: [15000, 150000],
      mileageRange: [0, 100000],
      yearRange: [2003, 2023],
      sellerType: { dealer: false, private: true },
      condition: { used: true, new: false },
    });
  };

  if (isMobile) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Filters</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomInput
                placeholder="Zip Code"
                className="w-[251px] h-[48px]"
                showZipCodeIcon={true}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.make}
                onValueChange={(value) => setFilter({ ...filter, make: value })}
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{filter.make || "Make"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="any">Any Make</CustomSelectItem>
                  {carMakes.map((make) => (
                    <CustomSelectItem key={make.id} value={make.id}>
                      {make.name}
                    </CustomSelectItem>
                  ))}
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.model}
                onValueChange={(value) =>
                  setFilter({ ...filter, model: value })
                }
                disabled={!filter.make}
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>
                    {filter.model ||
                      (filter.make ? "Model" : "Select make first")}
                  </span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="any">Any Model</CustomSelectItem>
                  {availableModels.map((model) => (
                    <CustomSelectItem key={model.id} value={model.id}>
                      {model.name}
                    </CustomSelectItem>
                  ))}
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.bodyType}
                onValueChange={(value) =>
                  setFilter({ ...filter, bodyType: value })
                }
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{filter.bodyType || "Body Type"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="any">Any Body Type</CustomSelectItem>
                  <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                  <CustomSelectItem value="suv">SUV</CustomSelectItem>
                  <CustomSelectItem value="hatchback">
                    Hatchback
                  </CustomSelectItem>
                  <CustomSelectItem value="coupe">Coupe</CustomSelectItem>
                  <CustomSelectItem value="wagon">Wagon</CustomSelectItem>
                  <CustomSelectItem value="convertible">
                    Convertible
                  </CustomSelectItem>
                  <CustomSelectItem value="pickup">Pickup</CustomSelectItem>
                  <CustomSelectItem value="van">Van</CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Price
            </h3>
            <div className="flex justify-between text-sm">
              <span>${filter.priceRange[0].toLocaleString()}</span>
              <span>${filter.priceRange[1].toLocaleString()}</span>
            </div>
            <Slider
              value={filter.priceRange}
              min={5000}
              max={100000}
              step={1000}
              onValueChange={(value) =>
                setFilter({ ...filter, priceRange: value as [number, number] })
              }
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Mileage
            </h3>
            <div className="flex justify-between text-sm">
              <span>{filter.mileageRange[0].toLocaleString()} miles</span>
              <span>{filter.mileageRange[1].toLocaleString()} miles</span>
            </div>
            <Slider
              value={filter.mileageRange}
              min={0}
              max={200000}
              step={1000}
              onValueChange={(value) =>
                setFilter({
                  ...filter,
                  mileageRange: value as [number, number],
                })
              }
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Year Range
            </h3>
            <div className="flex justify-between text-sm">
              <span>{filter.yearRange[0]}</span>
              <span>{filter.yearRange[1]}</span>
            </div>
            <Slider
              value={filter.yearRange}
              min={1990}
              max={new Date().getFullYear()}
              step={1}
              onValueChange={(value) =>
                setFilter({ ...filter, yearRange: value as [number, number] })
              }
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Seller Type
            </h3>
            <div className="space-y-6 p-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dealer"
                  checked={filter.sellerType.dealer}
                  onCheckedChange={(checked) =>
                    setFilter({
                      ...filter,
                      sellerType: {
                        ...filter.sellerType,
                        dealer: checked as boolean,
                      },
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
                      sellerType: {
                        ...filter.sellerType,
                        private: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="private">Private Seller</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Condition
            </h3>
            <div className="space-y-6 p-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="used"
                  checked={filter.condition.used}
                  onCheckedChange={(checked) =>
                    setFilter({
                      ...filter,
                      condition: {
                        ...filter.condition,
                        used: checked as boolean,
                      },
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
                      condition: {
                        ...filter.condition,
                        new: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="new">New</Label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CustomButton customStyles={{ width: "100%", height: "40px" }}>
            Apply
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "297px",
        padding: "30px 20px",
        borderRadius: "12px",
        background: "#FFFFFF",
        boxShadow: "2px 2px 16px 1px #0000001A",
      }}
    >
      <h2 className="text-2xl font-semibold mb-4 font-poppins">Filters</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomInput
              placeholder="Zip Code"
              className="w-[251px] h-[48px]"
              showZipCodeIcon={true}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.make}
              onValueChange={(value) => setFilter({ ...filter, make: value })}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>{filter.make || "Make"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="any">Any Make</CustomSelectItem>
                {carMakes.map((make) => (
                  <CustomSelectItem key={make.id} value={make.id}>
                    {make.name}
                  </CustomSelectItem>
                ))}
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.model}
              onValueChange={(value) => setFilter({ ...filter, model: value })}
              disabled={!filter.make}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>
                  {filter.model ||
                    (filter.make ? "Model" : "Select make first")}
                </span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="any">Any Model</CustomSelectItem>
                {availableModels.map((model) => (
                  <CustomSelectItem key={model.id} value={model.id}>
                    {model.name}
                  </CustomSelectItem>
                ))}
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.bodyType}
              onValueChange={(value) =>
                setFilter({ ...filter, bodyType: value })
              }
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>{filter.bodyType || "Body Type"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="any">Any Body Type</CustomSelectItem>
                <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                <CustomSelectItem value="suv">SUV</CustomSelectItem>
                <CustomSelectItem value="hatchback">Hatchback</CustomSelectItem>
                <CustomSelectItem value="coupe">Coupe</CustomSelectItem>
                <CustomSelectItem value="wagon">Wagon</CustomSelectItem>
                <CustomSelectItem value="convertible">
                  Convertible
                </CustomSelectItem>
                <CustomSelectItem value="pickup">Pickup</CustomSelectItem>
                <CustomSelectItem value="van">Van</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Price
          </h3>
          <div className="flex justify-between text-sm">
            <span>${filter.priceRange[0].toLocaleString()}</span>
            <span>${filter.priceRange[1].toLocaleString()}</span>
          </div>
          <Slider
            value={filter.priceRange}
            min={5000}
            max={100000}
            step={1000}
            onValueChange={(value) =>
              setFilter({ ...filter, priceRange: value as [number, number] })
            }
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Mileage
          </h3>
          <div className="flex justify-between text-sm">
            <span>{filter.mileageRange[0].toLocaleString()} miles</span>
            <span>{filter.mileageRange[1].toLocaleString()} miles</span>
          </div>
          <Slider
            value={filter.mileageRange}
            min={0}
            max={200000}
            step={1000}
            onValueChange={(value) =>
              setFilter({ ...filter, mileageRange: value as [number, number] })
            }
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Year Range
          </h3>
          <div className="flex justify-between text-sm">
            <span>{filter.yearRange[0]}</span>
            <span>{filter.yearRange[1]}</span>
          </div>
          <Slider
            value={filter.yearRange}
            min={1990}
            max={new Date().getFullYear()}
            step={1}
            onValueChange={(value) =>
              setFilter({ ...filter, yearRange: value as [number, number] })
            }
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Seller Type
          </h3>
          <div className="space-y-6 p-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dealer"
                checked={filter.sellerType.dealer}
                onCheckedChange={(checked) =>
                  setFilter({
                    ...filter,
                    sellerType: {
                      ...filter.sellerType,
                      dealer: checked as boolean,
                    },
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
                    sellerType: {
                      ...filter.sellerType,
                      private: checked as boolean,
                    },
                  })
                }
              />
              <Label htmlFor="private">Private Seller</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Condition
          </h3>
          <div className="space-y-6 p-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="used"
                checked={filter.condition.used}
                onCheckedChange={(checked) =>
                  setFilter({
                    ...filter,
                    condition: {
                      ...filter.condition,
                      used: checked as boolean,
                    },
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
        {/* 
        <div className="space-y-2">
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
          <Button variant="outline" onClick={resetFilters} className="w-full">
            Reset
          </Button>
        </div> */}
      </div>
    </div>
  );
}
