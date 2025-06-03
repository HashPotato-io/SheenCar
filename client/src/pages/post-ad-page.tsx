import React, { useState } from "react";
import { useLocation } from "wouter";
import Stepper from "../components/Stepper";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { CustomButton } from "@/components/ui/custom-button";
import CarSvg from "../assets/car4.svg";
import CarDetailsForm from "../components/CarDetailsForm";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";

const steps = [
  {
    name: "Basic Information",
    style: { marginLeft: "-24px" },
  },
  {
    name: "Features",
    style: { marginLeft: "-2px" },
  },
  {
    name: "Specifications",
    style: { marginLeft: "-6px" },
  },
  {
    name: "Pricing & Listing",
    style: {},
  },
];

// Add interface for form data
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
  immobilizer: boolean;
  abs: boolean;
  childLock: boolean;
  isofix: boolean;
  alloyWheels: boolean;
  sideMirrorsWithIndicators: boolean;
  frontFogLights: boolean;
  displaySize: string;
  frontSpeakers: boolean;
  usbAuxCable: boolean;
  rearSpeakers: boolean;
  seatMaterial: string;
  airConditioner: boolean;
  powerWindows: boolean;
  keylessEntry: boolean;
  climateControl: boolean;
  rearFoldingSeat: boolean;
}

const PostAdPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<FormData>({
    make: "",
    model: "",
    year: "",
    mileage: "",
    transmission: "",
    fuelType: "",
    condition: "",
    seatingCapacity: "",
    description: "",
    price: "",
    doors: "",
    mileageType: "",
    zipCode: "",
    interiorColor: "",
    bodyType: "",
    vin: "",
    immobilizer: false,
    abs: false,
    childLock: false,
    isofix: false,
    alloyWheels: false,
    sideMirrorsWithIndicators: false,
    frontFogLights: false,
    displaySize: "",
    frontSpeakers: false,
    usbAuxCable: false,
    rearSpeakers: false,
    seatMaterial: "",
    airConditioner: false,
    powerWindows: false,
    keylessEntry: false,
    climateControl: false,
    rearFoldingSeat: false,
  });

  // Add validation function
  const validateCurrentStep = () => {
    console.log(formData);
    switch (currentStep) {
      case 0:
        return (
          formData?.make !== "" &&
          formData?.model !== "" &&
          formData?.year !== "" &&
          formData?.mileage !== "" &&
          formData?.doors !== "" &&
          formData?.seatingCapacity !== "" &&
          formData?.condition !== "" &&
          /*           formData?.mileageType !== "" && */
          formData?.description !== ""
        );
      case 1:
        return formData.transmission && formData.fuelType;
      case 2:
        return formData.engineSize && formData.powerOutput;
      case 3:
        return formData.price && formData.currency;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCompletedSteps((prev) => [...prev, currentStep]);

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Handle form submission
        console.log("Form submitted:", formData);
        setLocation("/account");
      }
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps((prev) => prev.filter((step) => step !== currentStep));
    } else {
      setLocation("/account");
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <CarDetailsForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 1:
        return (
          <div style={{ display: "flex", gap: "40px" }}>
            <div className="flex flex-col gap-8">
              <div className="text-[34px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
                Highlight Your <span className="text-[#AF8C32]">Car's</span>{" "}
                Features
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
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
                        value={formData.zipCode}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                      />
                      <CustomInput
                        required
                        variant="outline"
                        placeholder="No. of Seatbelt"
                        className="w-[364px] h-[40px]"
                        value={formData.zipCode}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("zipCode", e.target.value)
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
                          onChange={(checked) =>
                            handleInputChange("immobilizer", checked)
                          }
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
                          onChange={(value) =>
                            handleInputChange("childLock", value)
                          }
                        />
                        <CustomCheckbox
                          label="ISOFIX Child Seat Anchors"
                          name="safetyFeatures"
                          value="isofix"
                          checked={formData.isofix}
                          onChange={(value) =>
                            handleInputChange("isofix", value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                        onChange={(checked) =>
                          handleInputChange("alloyWheels", checked)
                        }
                      />
                      <CustomCheckbox
                        label="Side Mirrors with Indicators"
                        name="exteriorFeatures"
                        value="sideMirrorsWithIndicators"
                        checked={formData.sideMirrorsWithIndicators}
                        onChange={(value) =>
                          handleInputChange("sideMirrorsWithIndicators", value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <CustomCheckbox
                        label="Front Fog Lights"
                        name="exteriorFeatures"
                        value="frontFogLights"
                        checked={formData.frontFogLights}
                        onChange={(value) =>
                          handleInputChange("frontFogLights", value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                    Infotainment Features
                  </p>
                  <div className="flex gap-[40px]">
                    <div className="flex flex-col gap-4">
                      <CustomInput
                        required
                        variant="outline"
                        placeholder="Display Size"
                        className="w-[364px] h-[40px]"
                        value={formData.displaySize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("displaySize", e.target.value)
                        }
                      />
                      <CustomCheckbox
                        label="Front Speakers"
                        name="infotainmentFeatures"
                        value="frontSpeakers"
                        checked={formData.frontSpeakers}
                        onChange={(value) =>
                          handleInputChange("frontSpeakers", value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <CustomCheckbox
                        label="USB & Aux Cable"
                        name="infotainmentFeatures"
                        value="usbAuxCable"
                        checked={formData.usbAuxCable}
                        onChange={(value) =>
                          handleInputChange("usbAuxCable", value)
                        }
                      />
                      <CustomCheckbox
                        label="Rear Speakers"
                        name="infotainmentFeatures"
                        value="rearSpeakers"
                        checked={formData.rearSpeakers}
                        onChange={(value) =>
                          handleInputChange("rearSpeakers", value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                    Comfort and Convenience
                  </p>
                  <div className="flex gap-[40px]">
                    <div className="flex flex-col gap-4">
                      <CustomInput
                        required
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
                        onChange={(value) =>
                          handleInputChange("airConditioner", value)
                        }
                      />
                      <CustomCheckbox
                        label="Power Windows"
                        name="comfortFeatures"
                        value="powerWindows"
                        checked={formData.powerWindows}
                        onChange={(value) =>
                          handleInputChange("powerWindows", value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <CustomCheckbox
                        label="Keyless Entry"
                        name="comfortFeatures"
                        value="keylessEntry"
                        checked={formData.keylessEntry}
                        onChange={(value) =>
                          handleInputChange("keylessEntry", value)
                        }
                      />
                      <CustomCheckbox
                        label="Climate Control"
                        name="comfortFeatures"
                        value="climateControl"
                        checked={formData.climateControl}
                        onChange={(value) =>
                          handleInputChange("climateControl", value)
                        }
                      />
                      <CustomCheckbox
                        label="Rear Folding Seat"
                        name="comfortFeatures"
                        value="rearFoldingSeat"
                        checked={formData.rearFoldingSeat}
                        onChange={(value) =>
                          handleInputChange("rearFoldingSeat", value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Car Illustration */}
            <div className="flex flex-col gap-4 items-center mt-[100px]">
              <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
                <img
                  src={CarSvg}
                  alt="car-illustration"
                  width="195"
                  height="111"
                />
              </div>
              <p className="w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
                Buyers love knowing what makes your car stand out. Select the
                features and options it comes with — from tech upgrades to
                safety perks and beyond.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Car <span className="text-teal-600">Specifications</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Additional specifications
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Engine Size
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="e.g., 2.0L"
                    value={formData.engineSize || ""}
                    onChange={(e) =>
                      handleInputChange("engineSize", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Power Output
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="e.g., 150 HP"
                    value={formData.powerOutput || ""}
                    onChange={(e) =>
                      handleInputChange("powerOutput", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="w-80 flex flex-col items-center">
              <div className="w-64 h-64 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  className="text-teal-600"
                >
                  {/* Car Specifications SVG */}
                  <path
                    fill="currentColor"
                    d="M20 45c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm80 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM15 35h90c2.8 0 5-2.2 5-5V20c0-5.5-4.5-10-10-10H20c-5.5 0-10 4.5-10 10v10c0 2.8 2.2 5 5 5z"
                  />
                </svg>
              </div>
              <div className="text-center px-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Add technical specifications of your car. These details are
                  important for buyers who are looking for specific performance
                  characteristics.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Pricing & <span className="text-teal-600">Listing</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Set your price and listing preferences
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Currency
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    value={formData.currency || "USD"}
                    onChange={(e) =>
                      handleInputChange("currency", e.target.value)
                    }
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-80 flex flex-col items-center">
              <div className="w-64 h-64 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  className="text-teal-600"
                >
                  {/* Pricing SVG */}
                  <path
                    fill="currentColor"
                    d="M20 45c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm80 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM15 35h90c2.8 0 5-2.2 5-5V20c0-5.5-4.5-10-10-10H20c-5.5 0-10 4.5-10 10v10c0 2.8 2.2 5 5 5z"
                  />
                </svg>
              </div>
              <div className="text-center px-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Set your asking price and preferred currency. Make sure to
                  research similar listings to set a competitive price.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[46px] font-[400] leading-[100%] tracking-[-0.01em] text-center text-black font-['Gilroy-SemiBold'] mb-8">
            Car Listing Details
          </h1>

          <Stepper
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        </div>

        {/* Content */}
        <div>{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex gap-10 mt-14">
          <CustomButton
            onClick={handleBack}
            variant="outline"
            customStyles={{ width: "355px", height: "40px" }}
            outlineColor="#AF8C32"
          >
            {currentStep === 0 ? "Cancel" : "Back"}
          </CustomButton>
          <CustomButton
            onClick={handleNext}
            /*       disabled={!validateCurrentStep()} */
            customStyles={{ width: "354px", height: "40px" }}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </CustomButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostAdPage;
