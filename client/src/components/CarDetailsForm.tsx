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
    <div> <div className="flex justify-center lg:justify-start items-center w-full">
          <h2 className="text-2xl lg:text-[34px] lg:px-9 mb-8 font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black ">
            Tell Us About Your <span className="text-[#AF8C32]">Car</span>
          </h2>
        </div>

    <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 xl:gap-10 lg:px-10">
      {/* Left Column - Form */}

      <div className=" space-y-6  lg:max-w-lg xl:min-w-[672px] xl:max-w-2xl 3xl:w-full order-2 lg:order-1">
       
        <div className="flex flex-col gap-4">
          <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Vehicle Details
          </p>
          <div className="flex flex-col gap-6">
            {/* Make and Model */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full">
                <CustomSelect
                  value={formData.make}
                  onValueChange={(value) => handleInputChange("make", value)}
                >
                  <CustomSelectTrigger
                    className="w-full"
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
                    <CustomSelectItem value="mercedes">
                      Mercedes
                    </CustomSelectItem>
                    <CustomSelectItem value="audi">Audi</CustomSelectItem>
                    <CustomSelectItem value="volkswagen">
                      Volkswagen
                    </CustomSelectItem>
                    <CustomSelectItem value="hyundai">Hyundai</CustomSelectItem>
                    <CustomSelectItem value="kia">Kia</CustomSelectItem>
                    <CustomSelectItem value="nissan">Nissan</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div className="w-full">
                <CustomSelect
                  value={formData.model}
                  onValueChange={(value) => handleInputChange("model", value)}
                >
                  <CustomSelectTrigger
                    className="w-full"
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Model" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
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

            {/* Year, Zip Code, and Exterior Color */}
            <div className="flex flex-col md:flex-row gap-6  md:gap-4">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <CustomSelect
                  value={formData.year}
                  onValueChange={(value) => handleInputChange("year", value)}
                >
                  <CustomSelectTrigger
                    variant="outline"
                    required
                    className="w-full"
                  >
                    <SelectPrimitive.Value placeholder="Year" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    {Array.from({ length: 25 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <CustomSelectItem key={year} value={year.toString()}>
                          {year}
                        </CustomSelectItem>
                      );
                    })}
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div className="flex gap-4 ">
              <div className="w-full lg:w-1/2">
                <CustomInput
                  variant="outline"
                  placeholder="Interior Color"
                  className="w-full h-[40px]"
                  value={formData.interiorColor}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("interiorColor", e.target.value)
                  }
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <CustomInput
                  variant="outline"
                  placeholder="Exterior Color"
                  className="w-full h-[40px]"
                  value={formData.exteriorColor}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("exteriorColor", e.target.value)
                  }
                />
              </div>
              </div>
            </div>

            {/* Doors and Seating Capacity */}
            <div className="flex flex-row gap-4 md:gap-6">
              <div className="w-full">
                <CustomInput
                  variant="outline"
                  placeholder="No. of doors"
                  className="w-full h-[40px]"
                  value={formData.doors}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("doors", e.target.value)
                  }
                />
              </div>
              <div className="w-full">
                <CustomInput
                  variant="outline"
                  placeholder="Seating Capacity"
                  className="w-full h-[40px]"
                  value={formData.seatingCapacity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("seatingCapacity", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Body Type */}
            <div>
              <CustomInput
                variant="outline"
                placeholder="Body Type"
                className="w-full h-[40px]"
                value={formData.bodyType}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("bodyType", e.target.value)
                }
                required
              />
            </div>

            {/* Condition and Mileage */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full">
                <CustomSelect
                  value={formData.condition}
                  onValueChange={(value) =>
                    handleInputChange("condition", value)
                  }
                >
                  <CustomSelectTrigger
                    className="w-full"
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Condition" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="excellent">
                      Excellent
                    </CustomSelectItem>
                    <CustomSelectItem value="very-good">
                      Very Good
                    </CustomSelectItem>
                    <CustomSelectItem value="good">Good</CustomSelectItem>
                    <CustomSelectItem value="fair">Fair</CustomSelectItem>
                    <CustomSelectItem value="poor">Poor</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div className="w-full">
                <CustomInput
                  variant="outline"
                  placeholder="Mileage"
                  className="w-full h-[40px]"
                  value={formData.mileage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("mileage", e.target.value)
                  }
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div>
              <CustomInput
                variant="outline"
                placeholder="ZIP Code"
                className="w-full h-[40px]"
                value={formData.zipCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("zipCode", e.target.value)
                }
                showZipCodeIcon={true}
                iconColor="#545454"
                required
              />
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="flex flex-col gap-2.5">
          <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Verification
          </p>
          <CustomInput
            variant="outline"
            required
            placeholder="VIN (Vehicle Identification Number)"
            className="w-full h-[40px]"
            value={formData.vin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("vin", e.target.value)
            }
          />
        </div>

        {/* Description Section */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Description
          </p>
          <CustomTextarea
            variant="outline"
            placeholder="Description"
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("description", e.target.value)
            }
            className="w-full"
          />
        </div>
      </div>

      {/* Right Column - Car Illustration */}
      <div className="flex flex-col gap-4 order-1 lg:order-2 items-center lg:mt-[100px]">
        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
          <img src={CarSvg} alt="car-illustration" width="195" height="111" />
        </div>
        <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
          Tell us about your car — from its make to model to mileage and
          condition. The more accurate your details, the better the match with
          interested buyers!
        </p>
      </div>
    </div>
    </div>
  );
};

export default CarDetailsForm;
