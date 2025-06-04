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
import CarSvg from "../assets/car3.svg";
import CarDetailsForm from "../components/CarDetailsForm";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import CustomFileUpload from "@/components/ui/custom-fileupload";
import CarFeaturesForm from "@/components/CarFeaturesForm";
import { FormData } from "@/types/form";
import { CustomSelectItem } from "@/components/ui/custom-select";
import * as SelectPrimitive from "@radix-ui/react-select";
import CarSpecificationsForm from "../components/CarSpecificationsForm";

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

const PostAdPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<FormData>({
    // Basic Information
    make: "",
    model: "",
    year: "",
    mileage: "",
    mileageType: "",
    transmission: "",
    fuelType: "",
    condition: "",
    seatingCapacity: "",
    doors: "",
    bodyType: "",
    zipCode: "",
    interiorColor: "",
    exteriorColor: "",
    vin: "",
    description: "",
    engineSize: "",
    powerOutput: "",

    // Safety Features
    airbags: "",
    seatbelts: "",
    immobilizer: false,
    abs: false,
    childLock: false,
    isofix: false,

    // Exterior Features
    alloyWheels: false,
    sideMirrorsWithIndicators: false,
    frontFogLights: false,

    // Infotainment Features
    displaySize: "",
    frontSpeakers: false,
    rearSpeakers: false,
    usbAuxCable: false,

    // Comfort Features
    seatMaterial: "",
    airConditioner: false,
    powerWindows: false,
    keylessEntry: false,
    climateControl: false,
    rearFoldingSeat: false,

    // Engine Specifications
    engineType: "",
    cylinder: "",
    driveType: "",
    gearbox: "",
    powerAssisted: false,

    // Wheels and Tires
    wheelType: "",
    tireSize: "",
    fuelTankCapacity: "",

    // Pricing
    price: "",
    currency: "USD",
  });

  const validateCurrentStep = () => {
    console.log(formData);
    switch (currentStep) {
      case 0:
        /*    return (
          formData?.make !== "" &&
          formData?.model !== "" &&
          formData?.year !== "" &&
          formData?.mileage !== "" &&
          formData?.doors !== "" &&
          formData?.seatingCapacity !== "" &&
          formData?.condition !== "" &&
          formData?.description !== ""
        ); */
        return true;
      case 1:
        /* return formData?.transmission && formData?.fuelType; */
        return true;
      case 2:
        /* return formData.engineSize && formData.powerOutput; */
        return true;
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
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
          <CarFeaturesForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <CarSpecificationsForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <div style={{ display: "flex", gap: "40px" }}>
            <div className="flex flex-col gap-8">
              <div className="text-[34px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
                Set Your <span className="text-[#AF8C32]">Price</span> &
                Preferences
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              ></div>
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
                Let buyers know what makes your car stand out. Add details like
                engine type, transmission, fuel type, and others to help them
                make informed decisions.
              </p>
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
