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
  <div style={{ display: "flex", gap: "40px" }}>
    <div className="flex flex-col gap-8">
      <div className="text-[34px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
        Highlight Your <span className="text-[#AF8C32]">Car's</span> Specs
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Engine/Motor */}
        <div className="flex flex-col gap-6">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Engine/Motor
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <CustomSelect
                value={formData.engineType}
                onValueChange={(value) =>
                  handleInputChange("engineType", value)
                }
              >
                <CustomSelectTrigger
                  style={{ width: "364px" }}
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

              <CustomSelect
                value={formData.cylinder}
                onValueChange={(value) => handleInputChange("cylinder", value)}
              >
                <CustomSelectTrigger
                  style={{ width: "364px" }}
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

            <div style={{ display: "flex", gap: "20px" }}>
              <CustomSelect
                value={formData.driveType}
                onValueChange={(value) => handleInputChange("driveType", value)}
              >
                <CustomSelectTrigger
                  style={{ width: "364px" }}
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

              <CustomSelect
                value={formData.fuelType}
                onValueChange={(value) => handleInputChange("fuelType", value)}
              >
                <CustomSelectTrigger
                  style={{ width: "364px" }}
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
        {/* Transmission */}
        <div className="flex flex-col gap-6">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Transmission
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <CustomSelect
              value={formData.gearbox}
              onValueChange={(value) => handleInputChange("gearbox", value)}
            >
              <CustomSelectTrigger
                style={{ width: "364px" }}
                variant="outline"
                required
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

            <CustomSelect
              value={formData.transmission}
              onValueChange={(value) =>
                handleInputChange("transmission", value)
              }
            >
              <CustomSelectTrigger
                style={{ width: "364px" }}
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
        {/* Steering */}
        <div className="flex flex-col gap-6">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Steering
          </p>
          <div className="flex flex-col gap-4">
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
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Wheels and Tires
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <CustomSelect
              value={formData.wheelType}
              onValueChange={(value) => handleInputChange("wheelType", value)}
            >
              <CustomSelectTrigger
                style={{ width: "364px" }}
                variant="outline"
                required
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

            <CustomInput
              style={{ width: "364px" }}
              variant="outline"
              placeholder="Tire Size"
              className="h-[40px]"
              value={formData.tireSize}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("tireSize", e.target.value)
              }
              required
            />
          </div>
        </div>
        {/* Fuel Economy */}
        <div className="flex flex-col gap-6">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Fuel Economy
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <CustomInput
              style={{ width: "364px" }}
              variant="outline"
              placeholder="Fuel Tank Capacity (Liters)"
              className="h-[40px]"
              value={formData.fuelTankCapacity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("fuelTankCapacity", e.target.value)
              }
              required
            />
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Car Illustration */}
    <div className="flex flex-col gap-4 items-center mt-[100px]">
      <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
        <img src={CarSvg} alt="car-illustration" width="195" height="111" />
      </div>
      <p className="w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
        Let buyers know what makes your car stand out. Add details like engine
        type, transmission, fuel type, and others to help them make informed
        decisions.
      </p>
    </div>
  </div>
);

export default CarSpecificationsForm;
