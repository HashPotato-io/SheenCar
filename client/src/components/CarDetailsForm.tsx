import React from "react";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import CarSvg from "../assets/car.svg";

// Import or define the FormData interface
interface FormData {
  make: string;
  model: string;
  year: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  condition: string;
  seatingCapacity: string;
  description: string;
  price: string;
  doors: string;
  mileageType: string;
  engineSize?: string;
  powerOutput?: string;
  currency?: string;
  zipCode: string;
  interiorColor: string;
  bodyType: string;
  vin: string;
}

interface CarDetailsFormProps {
  formData: FormData; // Update to use full FormData type
  handleInputChange: (field: keyof FormData, value: string) => void; // Update to match PostAdPage
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
                <CustomSelect>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                    value={formData.make}
                    onChange={(e) => handleInputChange("make", e.target.value)}
                  >
                    Make
                  </CustomSelectTrigger>
                  <CustomSelectContent></CustomSelectContent>
                </CustomSelect>
              </div>

              <div>
                <CustomSelect>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                  >
                    Model
                  </CustomSelectTrigger>
                  <CustomSelectContent></CustomSelectContent>
                </CustomSelect>
              </div>
            </div>

            {/* Year, Zip Code, and Interior Color */}
            <div style={{ display: "flex", gap: "15.3px" }}>
              <div>
                <CustomSelect>
                  <CustomSelectTrigger
                    variant="outline"
                    required
                    style={{ width: "239px" }}
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                  >
                    Year
                  </CustomSelectTrigger>
                  <CustomSelectContent></CustomSelectContent>
                </CustomSelect>
              </div>
              <div>
                <CustomInput
                  variant="outline"
                  placeholder="Zip Code"
                  className="w-[242px] h-[40px]"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                />
              </div>
              <div>
                <CustomInput
                  variant="outline"
                  placeholder="Interior Color"
                  className="w-[242px] h-[40px]"
                  value={formData.interiorColor}
                  onChange={(e) =>
                    handleInputChange("interiorColor", e.target.value)
                  }
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
                  onChange={(e) => handleInputChange("doors", e.target.value)}
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
                  onChange={(e) =>
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
                onChange={(e) => handleInputChange("bodyType", e.target.value)}
                required
              />
            </div>

            {/* Condition and Mileage */}
            <div style={{ display: "flex", gap: "24px" }}>
              <div>
                <CustomSelect>
                  <CustomSelectTrigger
                    style={{ width: "364px" }}
                    variant="outline"
                    required
                    value={formData.condition}
                    onChange={(e) =>
                      handleInputChange("condition", e.target.value)
                    }
                  >
                    Condition
                  </CustomSelectTrigger>
                  <CustomSelectContent></CustomSelectContent>
                </CustomSelect>
              </div>
              <div>
                <CustomInput
                  style={{ width: "364px" }}
                  variant="outline"
                  placeholder="Mileage"
                  className="h-[40px]"
                  value={formData.mileage}
                  onChange={(e) => handleInputChange("mileage", e.target.value)}
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
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
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
            onChange={(e) => handleInputChange("vin", e.target.value)}
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
            onChange={(e) => handleInputChange("description", e.target.value)}
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
