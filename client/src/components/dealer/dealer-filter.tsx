import { useState } from "react";
import { Label } from "@/components/ui/label";
import { CustomInput } from "../ui/custom-input";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { Star } from "lucide-react";
import { StarEmpty, StarFilled } from "../icons";
import { useMobileDevice } from "@/hooks/useMobileDevice";
import { CustomButton } from "../ui/custom-button";

interface DealerFilterProps {
  onFilterChange?: (filters: DealerFilterState) => void;
}

interface DealerFilterState {
  zipCode: string;
  make: string;
  model: string;
  bodyType: string;
  condition: "used" | "new";
  rating: string;
}

export default function DealerFilter({ onFilterChange }: DealerFilterProps) {
  const [filter, setFilter] = useState<DealerFilterState>({
    zipCode: "",
    make: "",
    model: "",
    bodyType: "",
    condition: "used",
    rating: "",
  });

  const isMobile = useMobileDevice();

  const handleFilterChange = (newFilter: Partial<DealerFilterState>) => {
    const updatedFilter = { ...filter, ...newFilter };
    setFilter(updatedFilter);
    onFilterChange?.(updatedFilter);
  };

  if (isMobile) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Filters</h2>
        <div className="space-y-6">
          {/* ZIP Code */}
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomInput
                placeholder="Zip Code"
                className="w-[251px] h-[48px]"
                showZipCodeIcon={true}
                value={filter.zipCode}
                onChange={(e) =>
                  handleFilterChange({ zipCode: e.target.value })
                }
              />
            </div>
          </div>

          {/* Make */}
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.make}
                onValueChange={(value) => handleFilterChange({ make: value })}
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{filter.make || "Make"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="toyota">Toyota</CustomSelectItem>
                  <CustomSelectItem value="honda">Honda</CustomSelectItem>
                  <CustomSelectItem value="ford">Ford</CustomSelectItem>
                  <CustomSelectItem value="bmw">BMW</CustomSelectItem>
                  <CustomSelectItem value="mercedes">
                    Mercedes-Benz
                  </CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          {/* Model */}
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.model}
                onValueChange={(value) => handleFilterChange({ model: value })}
                disabled={!filter.make}
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>
                    {filter.model ||
                      (filter.make ? "Model" : "Select make first")}
                  </span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="camry">Camry</CustomSelectItem>
                  <CustomSelectItem value="accord">Accord</CustomSelectItem>
                  <CustomSelectItem value="f150">F-150</CustomSelectItem>
                  <CustomSelectItem value="3series">3 Series</CustomSelectItem>
                  <CustomSelectItem value="cclass">C-Class</CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          {/* Body Type */}
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <CustomSelect
                value={filter.bodyType}
                onValueChange={(value) =>
                  handleFilterChange({ bodyType: value })
                }
              >
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{filter.bodyType || "Body Type"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                  <CustomSelectItem value="suv">SUV</CustomSelectItem>
                  <CustomSelectItem value="truck">Truck</CustomSelectItem>
                  <CustomSelectItem value="coupe">Coupe</CustomSelectItem>
                  <CustomSelectItem value="convertible">
                    Convertible
                  </CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black mb-[20px]">
              Condition
            </h3>
            <div className="flex flex-col gap-[4px] space-y-4 ml-[12px]">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="used"
                  name="condition"
                  className="w-4 h-4 accent-green-800"
                  checked={filter.condition === "used"}
                  onChange={() => handleFilterChange({ condition: "used" })}
                />
                <Label htmlFor="used" className="cursor-pointer">
                  Used
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="new"
                  name="condition"
                  className="w-4 h-4 accent-green-800"
                  checked={filter.condition === "new"}
                  onChange={() => handleFilterChange({ condition: "new" })}
                />
                <Label htmlFor="new" className="cursor-pointer">
                  New
                </Label>
              </div>
            </div>
          </div>

          {/* Customer Ratings */}
          <div className="space-y-2">
            <h3 className="font-poppins font-medium text-base leading-none text-black">
              Customer Ratings
            </h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="font-poppins font-normal text-sm leading-none text-black">
                    ({rating})
                  </span>
                  <label htmlFor={`rating${rating}`} className="flex">
                    {[...Array(rating)].map((_, i) => (
                      <StarFilled key={i} />
                    ))}
                    {[...Array(5 - rating)].map((_, i) => (
                      <StarEmpty key={i} />
                    ))}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <CustomButton customStyles={{ width: "262px", height: "40px" }}>
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
        {/* ZIP Code */}
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomInput
              placeholder="Zip Code"
              className="w-[251px] h-[48px]"
              showZipCodeIcon={true}
              value={filter.zipCode}
              onChange={(e) => handleFilterChange({ zipCode: e.target.value })}
            />
          </div>
        </div>

        {/* Make */}
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.make}
              onValueChange={(value) => handleFilterChange({ make: value })}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>{filter.make || "Make"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="toyota">Toyota</CustomSelectItem>
                <CustomSelectItem value="honda">Honda</CustomSelectItem>
                <CustomSelectItem value="ford">Ford</CustomSelectItem>
                <CustomSelectItem value="bmw">BMW</CustomSelectItem>
                <CustomSelectItem value="mercedes">
                  Mercedes-Benz
                </CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        {/* Model */}
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.model}
              onValueChange={(value) => handleFilterChange({ model: value })}
              disabled={!filter.make}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>
                  {filter.model ||
                    (filter.make ? "Model" : "Select make first")}
                </span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="camry">Camry</CustomSelectItem>
                <CustomSelectItem value="accord">Accord</CustomSelectItem>
                <CustomSelectItem value="f150">F-150</CustomSelectItem>
                <CustomSelectItem value="3series">3 Series</CustomSelectItem>
                <CustomSelectItem value="cclass">C-Class</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        {/* Body Type */}
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <CustomSelect
              value={filter.bodyType}
              onValueChange={(value) => handleFilterChange({ bodyType: value })}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>{filter.bodyType || "Body Type"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                <CustomSelectItem value="suv">SUV</CustomSelectItem>
                <CustomSelectItem value="truck">Truck</CustomSelectItem>
                <CustomSelectItem value="coupe">Coupe</CustomSelectItem>
                <CustomSelectItem value="convertible">
                  Convertible
                </CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        {/* Condition */}
        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black mb-[20px]">
            Condition
          </h3>
          <div className="flex flex-col gap-[4px] space-y-4 ml-[12px]">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="used"
                name="condition"
                className="w-4 h-4 accent-green-800"
                checked={filter.condition === "used"}
                onChange={() => handleFilterChange({ condition: "used" })}
              />
              <Label htmlFor="used" className="cursor-pointer">
                Used
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="new"
                name="condition"
                className="w-4 h-4 accent-green-800"
                checked={filter.condition === "new"}
                onChange={() => handleFilterChange({ condition: "new" })}
              />
              <Label htmlFor="new" className="cursor-pointer">
                New
              </Label>
            </div>
          </div>
        </div>

        {/* Customer Ratings */}
        <div className="space-y-2">
          <h3 className="font-poppins font-medium text-base leading-none text-black">
            Customer Ratings
          </h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="font-poppins font-normal text-sm leading-none text-black">
                  ({rating})
                </span>
                <label htmlFor={`rating${rating}`} className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <StarFilled key={i} />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <StarEmpty key={i} />
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
