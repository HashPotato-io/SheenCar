import React from "react";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectTrigger,
  CustomSelectItem,
} from "@/components/ui/custom-select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import CarSvg from "../assets/car.svg";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FormData } from "@/types/form";

interface CarDetailsFormProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | boolean) => void;
}

const CarDetailsForm: React.FC<CarDetailsFormProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="flex gap-8">
      {/* Left Column - Form */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-[34px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black mb-2">
            Tell Us About Your <span className="text-[#AF8C32]">Car</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Vehicle Details
          </p>
          <div className="flex flex-col gap-6">
            {/* Make and Model */}
            <div style={{ display: "flex", gap: "26px" }}>
              <div>
                <CustomSelect value={formData.make} onValueChange={(value) => handleInputChange("make", value)}>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Make" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="toyota">Toyota</CustomSelectItem>
                    <CustomSelectItem value="honda">Honda</CustomSelectItem>
                    <CustomSelectItem value="ford">Ford</CustomSelectItem>
                    <CustomSelectItem value="bmw">BMW</CustomSelectItem>
                    <CustomSelectItem value="mercedes">Mercedes</CustomSelectItem>
                    <CustomSelectItem value="audi">Audi</CustomSelectItem>
                    <CustomSelectItem value="volkswagen">Volkswagen</CustomSelectItem>
                    <CustomSelectItem value="hyundai">Hyundai</CustomSelectItem>
                    <CustomSelectItem value="kia">Kia</CustomSelectItem>
                    <CustomSelectItem value="nissan">Nissan</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>

              <div>
                <CustomSelect value={formData.model} onValueChange={(value) => handleInputChange("model", value)}>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Model" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                    <CustomSelectItem value="suv">SUV</CustomSelectItem>
                    <CustomSelectItem value="hatchback">Hatchback</CustomSelectItem>
                    <CustomSelectItem value="coupe">Coupe</CustomSelectItem>
                    <CustomSelectItem value="wagon">Wagon</CustomSelectItem>
                    <CustomSelectItem value="convertible">Convertible</CustomSelectItem>
                    <CustomSelectItem value="pickup">Pickup</CustomSelectItem>
                    <CustomSelectItem value="van">Van</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
            </div>

            {/* Year, Zip Code, and Exterior Color */}
            <div style={{ display: "flex", gap: "15.3px" }}>
              <div>
                <CustomSelect value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                  <CustomSelectTrigger
                    variant="outline"
                    required
                    style={{ width: "239px" }}
                  >
                    <SelectPrimitive.Value placeholder="Year" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    {Array.from({ length: 25 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <CustomSelectItem key={year} value={year.toString()}>{year}</CustomSelectItem>;
                    })}
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div>
                <CustomInput
                  variant="outline"
                  placeholder="Interior Color"
                  className="w-[242px] h-[40px]"
                  value={formData.interiorColor}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("interiorColor", e.target.value)}
                />
              </div>
              <div>
                <CustomInput
                  variant="outline"
                  placeholder="Exterior Color"
                  className="w-[242px] h-[40px]"
                  value={formData.exteriorColor}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("exteriorColor", e.target.value)}
                />
              </div>
            </div>

            {/* Doors and Seating Capacity */}
            <div style={{ display: "flex", gap: "24px" }}>
              <div>
                <CustomInput
                  style={{ width: "364px" }}
                  variant="outline"
                  placeholder="No. of doors"
                  className="w-[234px] h-[40px]"
                  value={formData.doors}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("doors", e.target.value)}
                  required
                />
              </div>
              <div>
                <CustomInput
                  style={{ width: "364px" }}
                  variant="outline"
                  placeholder="Seating Capacity"
                  className="w-[234px] h-[40px]"
                  value={formData.seatingCapacity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("seatingCapacity", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Body Type */}
            <div>
              <CustomInput
                style={{ width: "752px" }}
                variant="outline"
                placeholder="Body Type"
                className="h-[40px]"
                value={formData.bodyType}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("bodyType", e.target.value)}
                required
              />
            </div>

            {/* Condition and Mileage */}
            <div style={{ display: "flex", gap: "24px" }}>
              <div>
                <CustomSelect value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Condition" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="excellent">Excellent</CustomSelectItem>
                    <CustomSelectItem value="very-good">Very Good</CustomSelectItem>
                    <CustomSelectItem value="good">Good</CustomSelectItem>
                    <CustomSelectItem value="fair">Fair</CustomSelectItem>
                    <CustomSelectItem value="poor">Poor</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div>
                <CustomInput
                  style={{ width: "364px" }}
                  variant="outline"
                  placeholder="Mileage"
                  className="h-[40px]"
                  value={formData.mileage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("mileage", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div>
              <CustomInput
                style={{ width: "752px" }}
                variant="outline"
                placeholder="ZIP Code"
                className="h-[40px]"
                value={formData.zipCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("zipCode", e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Verification
          </p>
          <CustomInput
            variant="outline"
            required
            placeholder="VIN (Vehicle Identification Number)"
            className="w-[752px] h-[40px]"
            value={formData.vin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("vin", e.target.value)}
          />
        </div>

        {/* Description Section */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Description
          </p>
          <CustomTextarea
            variant="outline"
            placeholder="Description"
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("description", e.target.value)}
            className="w-[752px]"
          />
        </div>
      </div>

      {/* Right Column - Car Illustration */}
      <div className="flex flex-col gap-4 items-center mt-[100px]">
        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
          <img src={CarSvg} alt="car-illustration" width="195" height="111" />
        </div>
        <p className="w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
          Tell us about your car — from its make to model to mileage and
          condition. The more accurate your details, the better the match with
          interested buyers!
        </p>
      </div>
    </div>
  );
};

export default CarDetailsForm;
