import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomInput } from "@/components/ui/custom-input";
import Search from "../assets/Icon/search.svg";
import { SearchToggle } from "./ui/search-toggle";
import { CustomButton } from "./ui/custom-button";
import { useState } from 'react';
import { AdvancedSearchDialog } from "./advanced-search-dialog";

export function AdvanceSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedCarModel, setSelectedCarModel] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState({
    fuelType: null,
    mileage: null,
    transmission: null,
    bodyType: null,
    condition: null,
    sellerType: null,
    interiorColor: null,
    exteriorColor: null,
    cylinder: null,
  });

  const handleValueChange = (field: string, value: string) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div
        style={{
          width: "90vw",
          height: "auto",
          background: "#F8F8F8",
          borderRadius: "34px",
          position: "relative",
        }}
        className="flex flex-col md:flex-row gap-2 items-center p-8"
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          <SearchToggle />
          <div>
            <img src={Search} alt="search" width="19px" height="19px" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <CustomInput placeholder="Zip Code" className="w-full h-[45px]" />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <CustomSelect onValueChange={(value) => setSelectedModel(value)}>
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{selectedModel ? selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1) : "Make"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="toyota">Toyota</CustomSelectItem>
                  <CustomSelectItem value="honda">Honda</CustomSelectItem>
                  <CustomSelectItem value="ford">Ford</CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <CustomSelect onValueChange={(value) => setSelectedCarModel(value)}>
                <CustomSelectTrigger className="w-full h-[48px]">
                  <span>{selectedCarModel ? selectedCarModel.charAt(0).toUpperCase() + selectedCarModel.slice(1) : "Model"}</span>
                </CustomSelectTrigger>
                <CustomSelectContent>
                  <CustomSelectItem value="camry">Camry</CustomSelectItem>
                  <CustomSelectItem value="civic">Civic</CustomSelectItem>
                  <CustomSelectItem value="focus">Focus</CustomSelectItem>
                </CustomSelectContent>
              </CustomSelect>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <CustomButton 
            customStyles={{ 
              width: "100%", 
              height: "40px",
              borderRadius: "6px"
            }}
            disabled={!selectedModel}
          >
            Search
          </CustomButton>
          <div
            style={{
              fontFamily: "Gilroy-Regular",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#000000",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(true)}
          >
            Advanced Search
          </div>
        </div>
      </div>

      <AdvancedSearchDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        searchParams={searchParams}
        onValueChange={handleValueChange}
      />
    </>
  );
}
