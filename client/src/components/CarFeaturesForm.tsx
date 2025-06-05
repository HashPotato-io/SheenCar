import React from "react";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import CustomFileUpload from "@/components/ui/custom-fileupload";
import CarSvg from "../assets/car4.svg";
import { FormData } from '@/types/form';

interface CarFeaturesFormProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | boolean) => void;
}

const CarFeaturesForm: React.FC<CarFeaturesFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div className="flex flex-col gap-8">
        <div className="text-[34px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
          Highlight Your <span className="text-[#AF8C32]">Car's</span> Features
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Safety Features Section */}
          <div className="flex flex-col gap-8">
            <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Safety Feature
            </p>
            <div className="flex flex-col gap-8">
              <div style={{ display: "flex", gap: "20px" }}>
                <CustomInput
                  required
                  variant="outline"
                  placeholder="No. of Airbags"
                  className="w-[364px] h-[40px]"
                  value={formData.airbags}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("airbags", e.target.value)
                  }
                />
                <CustomInput
                  required
                  variant="outline"
                  placeholder="No. of Seatbelt"
                  className="w-[364px] h-[40px]"
                  value={formData.seatbelts}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("seatbelts", e.target.value)
                  }
                />
              </div>

              <div className="flex gap-[220px]">
                <div className="flex flex-col gap-4">
                  <CustomCheckbox
                    label="Immobilizer"
                    name="safetyFeatures"
                    value="immobilizer"
                    checked={formData.immobilizer}
                    onChange={(checked) => handleInputChange("immobilizer", checked)}
                  />
                  <CustomCheckbox
                    label="ABS (Anti-Lock Braking)"
                    name="safetyFeatures"
                    value="abs"
                    checked={formData.abs}
                    onChange={(value) => handleInputChange("abs", value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <CustomCheckbox
                    label="Child Lock"
                    name="safetyFeatures"
                    value="childLock"
                    checked={formData.childLock}
                    onChange={(value) => handleInputChange("childLock", value)}
                  />
                  <CustomCheckbox
                    label="ISOFIX Child Seat Anchors"
                    name="safetyFeatures"
                    value="isofix"
                    checked={formData.isofix}
                    onChange={(value) => handleInputChange("isofix", value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Exterior Features Section */}
          <div className="flex flex-col gap-8">
            <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Exterior Features
            </p>
            <div className="flex gap-[220px]">
              <div className="flex flex-col gap-4">
                <CustomCheckbox
                  label="Alloy Wheels"
                  name="exteriorFeatures"
                  value="alloyWheels"
                  checked={formData.alloyWheels}
                  onChange={(checked) => handleInputChange("alloyWheels", checked)}
                />
                <CustomCheckbox
                  label="Side Mirrors with Indicators"
                  name="exteriorFeatures"
                  value="sideMirrorsWithIndicators"
                  checked={formData.sideMirrorsWithIndicators}
                  onChange={(value) => handleInputChange("sideMirrorsWithIndicators", value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <CustomCheckbox
                  label="Front Fog Lights"
                  name="exteriorFeatures"
                  value="frontFogLights"
                  checked={formData.frontFogLights}
                  onChange={(value) => handleInputChange("frontFogLights", value)}
                />
              </div>
            </div>
          </div>

          {/* Infotainment Features Section */}
          <div className="flex flex-col gap-8">
            <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Infotainment Features
            </p>
            <div className="flex gap-[40px]">
              <div className="flex flex-col gap-4">
                <CustomInput
                  variant="outline"
                  placeholder="Display Size"
                  className="w-[364px] h-[40px]"
                  value={formData.displaySize}
                  showInchIcon={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("displaySize", e.target.value)
                  }
                />
                <CustomCheckbox
                  label="Front Speakers"
                  name="infotainmentFeatures"
                  value="frontSpeakers"
                  checked={formData.frontSpeakers}
                  onChange={(value) => handleInputChange("frontSpeakers", value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <CustomCheckbox
                  label="USB & Aux Cable"
                  name="infotainmentFeatures"
                  value="usbAuxCable"
                  checked={formData.usbAuxCable}
                  onChange={(value) => handleInputChange("usbAuxCable", value)}
                />
                <CustomCheckbox
                  label="Rear Speakers"
                  name="infotainmentFeatures"
                  value="rearSpeakers"
                  checked={formData.rearSpeakers}
                  onChange={(value) => handleInputChange("rearSpeakers", value)}
                />
              </div>
            </div>
          </div>

          {/* Comfort and Convenience Section */}
          <div className="flex flex-col gap-8">
            <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Comfort and Convenience
            </p>
            <div className="flex gap-[40px]">
              <div className="flex flex-col gap-4">
                <CustomInput
                  variant="outline"
                  placeholder="Seat Material"
                  className="w-[364px] h-[40px]"
                  value={formData.seatMaterial}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("seatMaterial", e.target.value)
                  }
                />
                <CustomCheckbox
                  label="Air Conditioner"
                  name="comfortFeatures"
                  value="airConditioner"
                  checked={formData.airConditioner}
                  onChange={(value) => handleInputChange("airConditioner", value)}
                />
                <CustomCheckbox
                  label="Power Windows"
                  name="comfortFeatures"
                  value="powerWindows"
                  checked={formData.powerWindows}
                  onChange={(value) => handleInputChange("powerWindows", value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <CustomCheckbox
                  label="Keyless Entry"
                  name="comfortFeatures"
                  value="keylessEntry"
                  checked={formData.keylessEntry}
                  onChange={(value) => handleInputChange("keylessEntry", value)}
                />
                <CustomCheckbox
                  label="Climate Control"
                  name="comfortFeatures"
                  value="climateControl"
                  checked={formData.climateControl}
                  onChange={(value) => handleInputChange("climateControl", value)}
                />
                <CustomCheckbox
                  label="Rear Folding Seat"
                  name="comfortFeatures"
                  value="rearFoldingSeat"
                  checked={formData.rearFoldingSeat}
                  onChange={(value) => handleInputChange("rearFoldingSeat", value)}
                />
              </div>
            </div>
          </div>
        </div>
        <CustomFileUpload />
      </div>

      {/* Right Column - Car Illustration */}
      <div className="flex flex-col gap-4 items-center mt-[100px]">
        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
          <img src={CarSvg} alt="car-illustration" width="195" height="111" />
        </div>
        <p className="w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
          Buyers love knowing what makes your car stand out. Select the features and options it comes with — from tech upgrades to safety perks and beyond.
        </p>
      </div>
    </div>
  );
};

export default CarFeaturesForm; 