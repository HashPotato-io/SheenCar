import React from "react";
import CarSvg from "../assets/car3.svg";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomSelectItem } from "@/components/ui/custom-select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FormData } from "@/types/form";

interface CarSpecificationsFormProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | boolean) => void;
}

const CarSpecificationsForm: React.FC<CarSpecificationsFormProps> = ({
  formData,
  handleInputChange,
}) => (
  <div>
    <div className="text-2xl lg:text-[34px] flex justify-center lg:justify-start font-['Gilroy-SemiBold'] lg:px-9 mb-4 font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
      Highlight Your <span className="text-[#AF8C32] mx-2">Car's</span> Specs
    </div>
    <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 lg:px-10">
      <div className="flex flex-col lg:max-w-lg lg:min-w-[512px] xl:min-w-[672px] xl:max-w-2xl 3xl:w-full gap-8 order-2 lg:order-1">
        <div className="flex flex-col gap-5">
          {/* Engine/Motor */}
          <div className="flex flex-col gap-6">
            <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Engine/Motor
            </p>
            <div className="flex flex-col gap-4 lg:gap-2.5">
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <CustomSelect
                    value={formData.engineType}
                    onValueChange={(value) =>
                      handleInputChange("engineType", value)
                    }
                  >
                    <CustomSelectTrigger
                      className="w-full"
                      variant="outline"
                      required
                    >
                      <SelectPrimitive.Value placeholder="Engine Type" />
                    </CustomSelectTrigger>
                    <CustomSelectContent>
                      <CustomSelectItem value="petrol">Petrol</CustomSelectItem>
                      <CustomSelectItem value="diesel">Diesel</CustomSelectItem>
                      <CustomSelectItem value="electric">Electric</CustomSelectItem>
                      <CustomSelectItem value="hybrid">Hybrid</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>
                </div>
                <div className="w-full">
                  <CustomSelect
                    value={formData.cylinder}
                    onValueChange={(value) => handleInputChange("cylinder", value)}
                  >
                    <CustomSelectTrigger
                      className="w-full"
                      variant="outline"
                      required
                    >
                      <SelectPrimitive.Value placeholder="Cylinder" />
                    </CustomSelectTrigger>
                    <CustomSelectContent>
                      <CustomSelectItem value="3">3 Cylinder</CustomSelectItem>
                      <CustomSelectItem value="4">4 Cylinder</CustomSelectItem>
                      <CustomSelectItem value="6">6 Cylinder</CustomSelectItem>
                      <CustomSelectItem value="8">8 Cylinder</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <CustomSelect
                    value={formData.driveType}
                    onValueChange={(value) => handleInputChange("driveType", value)}
                  >
                    <CustomSelectTrigger
                      className="w-full"
                      variant="outline"
                    >
                      <SelectPrimitive.Value placeholder="Drive Type" />
                    </CustomSelectTrigger>
                    <CustomSelectContent>
                      <CustomSelectItem value="fwd">
                        Front Wheel Drive
                      </CustomSelectItem>
                      <CustomSelectItem value="rwd">
                        Rear Wheel Drive
                      </CustomSelectItem>
                      <CustomSelectItem value="awd">
                        All Wheel Drive
                      </CustomSelectItem>
                      <CustomSelectItem value="4wd">4 Wheel Drive</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>
                </div>
                <div className="w-full">
                  <CustomSelect
                    value={formData.fuelType}
                    onValueChange={(value) => handleInputChange("fuelType", value)}
                  >
                    <CustomSelectTrigger
                      className="w-full"
                      variant="outline"
                    >
                      <SelectPrimitive.Value placeholder="Fuel Type" />
                    </CustomSelectTrigger>
                    <CustomSelectContent>
                      <CustomSelectItem value="petrol">Petrol</CustomSelectItem>
                      <CustomSelectItem value="diesel">Diesel</CustomSelectItem>
                      <CustomSelectItem value="electric">Electric</CustomSelectItem>
                      <CustomSelectItem value="hybrid">Hybrid</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>
                </div>
              </div>
            </div>
          </div>
          {/* Transmission */}
          <div className="flex flex-col gap-6">
            <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Transmission
            </p>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="w-full">
                <CustomSelect
                  value={formData.gearbox}
                  onValueChange={(value) => handleInputChange("gearbox", value)}
                >
                  <CustomSelectTrigger
                    className="w-full"
                    variant="outline"
                  >
                    <SelectPrimitive.Value placeholder="Gearbox" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="manual">Manual</CustomSelectItem>
                    <CustomSelectItem value="automatic">Automatic</CustomSelectItem>
                    <CustomSelectItem value="semi-automatic">
                      Semi-Automatic
                    </CustomSelectItem>
                    <CustomSelectItem value="cvt">CVT</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div className="w-full">
                <CustomSelect
                  value={formData.transmission}
                  onValueChange={(value) =>
                    handleInputChange("transmission", value)
                  }
                >
                  <CustomSelectTrigger
                    className="w-full"
                    variant="outline"
                    required
                  >
                    <SelectPrimitive.Value placeholder="Transmission" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="5-speed">5 Speed</CustomSelectItem>
                    <CustomSelectItem value="6-speed">6 Speed</CustomSelectItem>
                    <CustomSelectItem value="7-speed">7 Speed</CustomSelectItem>
                    <CustomSelectItem value="8-speed">8 Speed</CustomSelectItem>
                    <CustomSelectItem value="9-speed">9 Speed</CustomSelectItem>
                    <CustomSelectItem value="10-speed">10 Speed</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
            </div>
          </div>
          {/* Steering */}
          <div className="flex flex-col gap-6">
            <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Steering
            </p>
            <div className="flex flex-col gap-6">
              <CustomCheckbox
                label="Power Assisted"
                name="steeringFeatures"
                value="powerAssisted"
                checked={formData.powerAssisted}
                onChange={(checked) =>
                  handleInputChange("powerAssisted", checked)
                }
              />
            </div>
          </div>
          {/* Wheels and Tires */}
          <div className="flex flex-col gap-6">
            <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Wheels and Tires
            </p>
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="w-full">
                <CustomSelect
                  value={formData.wheelType}
                  onValueChange={(value) => handleInputChange("wheelType", value)}
                >
                  <CustomSelectTrigger
                    className="w-full"
                    variant="outline"
                  >
                    <SelectPrimitive.Value placeholder="Wheel Type" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="alloy">Alloy Wheels</CustomSelectItem>
                    <CustomSelectItem value="steel">Steel Wheels</CustomSelectItem>
                    <CustomSelectItem value="forged">
                      Forged Wheels
                    </CustomSelectItem>
                    <CustomSelectItem value="chrome">
                      Chrome Wheels
                    </CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
              <div className="w-full">
                <CustomInput
                  variant="outline"
                  placeholder="Tire Size"
                  className="w-full h-[40px]"
                  value={formData.tireSize}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("tireSize", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          {/* Fuel Economy */}
          <div className="flex flex-col gap-6">
            <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Fuel Economy
            </p>
            <div className="w-full">
              <CustomInput
                variant="outline"
                placeholder="Fuel Tank Capacity (Liters)"
                className="w-full h-[40px]"
                value={formData.fuelTankCapacity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("fuelTankCapacity", e.target.value)
                }
                required
                showGalIcon
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right Column - Car Illustration */}
      <div className="flex flex-col gap-4  items-center order-1 lg:order-2 lg:mt-[100px]">
        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
          <img src={CarSvg} alt="car-illustration" width="195" height="111" />
        </div>
        <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
          Let buyers know what makes your car stand out. Add details like engine
          type, transmission, fuel type, and others to help them make informed
          decisions.
        </p>
      </div>
    </div>
  </div>
);

export default CarSpecificationsForm;
