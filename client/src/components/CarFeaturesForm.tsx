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
    <div>
      <div className="text-2xl lg:text-[34px] flex justify-center text-center lg:justify-start font-['Gilroy-SemiBold'] lg:px-9 mb-4 font-[400] tracking-[-0.01em] text-[#000000]">
        <h1> Highlight Your <span className="text-[#AF8C32] mx-1"> Car's</span> Features</h1>
      </div>


      <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 lg:px-10">
        <div className="flex flex-col lg:max-w-lg xl:min-w-[672px] xl:max-w-2xl 3xl:w-full order-2 lg:order-1 gap-8">

          <div className="flex flex-col gap-10">
            {/* Safety Features Section */}
            <div className="flex flex-col gap-8">
              <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Safety Feature
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="space-y-6">
                  <div className=" w-full ">

                    <CustomInput
                      required
                      variant="outline"
                      placeholder="No. of Airbags"
                      className=" w-full h-[40px]"
                      value={formData.airbags}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("airbags", e.target.value)
                      }
                    />

                  </div>

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
                <div className="space-y-6">
                  <div className="w-full ml-1">

                    <CustomInput
                      required
                      variant="outline"
                      placeholder="No. of Seatbelt"
                      className="w-full h-[40px]"
                      value={formData.seatbelts}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("seatbelts", e.target.value)
                      }
                    />
                  </div>
                  <div className="ml-1">
                    <CustomCheckbox
                      label="Child Lock"
                      name="safetyFeatures"
                      value="childLock"
                      checked={formData.childLock}
                      onChange={(value) => handleInputChange("childLock", value)}
                    />
                  </div>
                  <div className="ml-1">
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
              <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Exterior Features
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className="space-y-6">
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

                <div className="space-y-6">

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
              <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] mt-4 font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Infotainment Features
              </p>
              {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-[40px]">
                <div className="flex flex-col gap-6 lg:gap-4 h-full">
                  <CustomInput
                    variant="outline"
                    placeholder="Display Size"
                    className="w-full h-[40px]"
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
                <div className="flex flex-col gap-6 lg:gap-4 ">
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
                    className="w-full h-[40px]"
                    checked={formData.rearSpeakers}
                    onChange={(value) => handleInputChange("rearSpeakers", value)}
                  />
                </div>
              </div> */}

              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div >
                    <CustomInput
                      variant="outline"
                      placeholder="Display Size"
                      className="w-full h-[40px]"
                      value={formData.displaySize}
                      showInchIcon={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("displaySize", e.target.value)
                      } />
                  </div>
                  <CustomCheckbox
                    label="USB & Aux Cable"
                    name="infotainmentFeatures"
                    value="usbAuxCable"
                    checked={formData.usbAuxCable}
                    onChange={(value) => handleInputChange("usbAuxCable", value)}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <CustomCheckbox
                    label="Front Speakers"
                    name="infotainmentFeatures"
                    value="frontSpeakers"
                    checked={formData.frontSpeakers}
                    onChange={(value) => handleInputChange("frontSpeakers", value)}
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
              <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] mt-4 font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Comfort and Convenience
              </p>
              {/* <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px]">
                <div className="flex flex-col gap-6 lg:gap-4">
                  <CustomInput
                    variant="outline"
                    placeholder="Seat Material"
                    className="w-full h-[40px]"
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
                <div className="flex flex-col gap-6 lg:gap-4">
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
              </div> */}

              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  <CustomInput
                    variant="outline"
                    placeholder="Seat Material"
                    className="w-full h-[40px]"
                    value={formData.seatMaterial}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("seatMaterial", e.target.value)
                    }
                  />
                  <CustomCheckbox
                    label="Keyless Entry"
                    name="comfortFeatures"
                    value="keylessEntry"
                    checked={formData.keylessEntry}
                    onChange={(value) => handleInputChange("keylessEntry", value)}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <CustomCheckbox
                    label="Air Conditioner"
                    name="comfortFeatures"
                    value="airConditioner"
                    checked={formData.airConditioner}
                    onChange={(value) => handleInputChange("airConditioner", value)}
                  />
                  <CustomCheckbox
                    label="Climate Control"
                    name="comfortFeatures"
                    value="climateControl"
                    checked={formData.climateControl}
                    onChange={(value) => handleInputChange("climateControl", value)}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <CustomCheckbox
                    label="Power Windows"
                    name="comfortFeatures"
                    value="powerWindows"
                    checked={formData.powerWindows}
                    onChange={(value) => handleInputChange("powerWindows", value)}
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
        <div className="flex flex-col gap-4 order-1 lg:order-2 items-center lg:mt-[100px]">
          <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
            <img src={CarSvg} alt="car-illustration" width="195" height="111" />
          </div>
          <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
            Buyers love knowing what makes your car stand out. Select the features and options it comes with — from tech upgrades to safety perks and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarFeaturesForm; 