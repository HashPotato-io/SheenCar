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

export function AdvanceSearch() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedCarModel, setSelectedCarModel] = useState<string | null>(null);

  return (
    <div
      style={{
        width: "80vw",
        height: "145px",
        background: "#F8F8F8",
        borderRadius: "34px",
        position: "relative",
      }}
      className="flex gap-2 items-center p-8"
    >
      <SearchToggle />
      <div>
        <img src={Search} alt="search" width="19px" height="19px" />
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <CustomInput placeholder="Zip Code" className="w-[147px] h-[45px]" />
        </div>

        <div className="flex flex-col gap-2">
          <CustomSelect onValueChange={(value) => setSelectedModel(value)}>
            <CustomSelectTrigger className="w-[184px] h-[48px]">
              <span>{selectedModel ? selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1) : "Make"}</span>
            </CustomSelectTrigger>
            <CustomSelectContent>
              <CustomSelectItem value="toyota">Toyota</CustomSelectItem>
              <CustomSelectItem value="honda">Honda</CustomSelectItem>
              <CustomSelectItem value="ford">Ford</CustomSelectItem>
            </CustomSelectContent>
          </CustomSelect>
        </div>

        <div className="flex flex-col gap-2">
          <CustomSelect onValueChange={(value) => setSelectedCarModel(value)}>
            <CustomSelectTrigger className="w-[184px] h-[48px]">
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
      <div style={{ marginLeft: "30px" }}>
        <CustomButton 
          customStyles={{ 
            width: "120px", 
            height: "40px",
            borderRadius: "6px"
          }}
          disabled={!selectedModel}
        >
          Search
        </CustomButton>
      </div>
      <div
        style={{
          fontFamily: "Gilroy-Regular",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#000000",
          marginLeft: "10px",
        }}
      >
        Advanced Search
      </div>
    </div>
  );
}
