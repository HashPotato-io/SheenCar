import React, { useState, useEffect } from "react";
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
import CarSvg from "../assets/car5.svg";
import CarDetailsForm from "../components/CarDetailsForm";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import CustomFileUpload from "@/components/ui/custom-fileupload";
import CarFeaturesForm from "@/components/CarFeaturesForm";
import { FormData } from "@/types/form";
import { CustomSelectItem } from "@/components/ui/custom-select";
import * as SelectPrimitive from "@radix-ui/react-select";
import CarSpecificationsForm from "../components/CarSpecificationsForm";
import CustomToggle from "@/components/ui/custom-toggle";
import PricingAndPreferencesForm from "../components/PricingAndPreferencesForm";
import AdSubmittedModal from "../components/modals/AdSubmittedModal";

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
    style: { marginLeft: "-4px" },
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
  const [showSubmittedModal, setShowSubmittedModal] = useState(false);
  const [requestType, setRequestType] = useState<string>("");
  const [serviceAgreementError, setServiceAgreementError] = useState(false);
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
    priceNegotiable: false,
    tradeCar: false,
    acceptableTradeCars: "",
    adjustPriceDifference: false,
    tradeCarMake: "",
    tradeCarModel: "",

    // Contact Details
    showContactDetails: false,

    // Service Agreement
    serviceAgreement: false,
  });

  const validateCurrentStep = () => {
    if (
      currentStep === 3 &&
      requestType === "sell" &&
      !formData.serviceAgreement
    ) {
      setServiceAgreementError(true);
      return false;
    }
    setServiceAgreementError(false);

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
        /*   return formData.price && formData.currency; */
        return true;
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
        // Navigate to checkout with return URL
        const returnUrl = encodeURIComponent(window.location.pathname);
        setLocation(`/checkout?returnUrl=${returnUrl}`);
      }
    }
    return false;
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps((prev) => prev.filter((step) => step !== currentStep));
      setServiceAgreementError(false);
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
          <PricingAndPreferencesForm
            formData={formData}
            handleInputChange={handleInputChange}
            requestType={requestType}
            serviceAgreementError={serviceAgreementError}
          />
        );
      default:
        return null;
    }
  };

  // Add this function to handle successful payment return
  const handlePaymentSuccess = () => {
    setShowSubmittedModal(true);
  };

  // Check for payment success in URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paymentSuccess = searchParams.get("paymentSuccess");
    if (paymentSuccess === "true") {
      handlePaymentSuccess();
    }
  }, []);

  // Add useEffect to get requestType from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get("requestType");
    setRequestType(type || "");
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[46px] font-[400] leading-[100%] tracking-[-0.01em] text-center text-black font-['Gilroy-SemiBold'] mb-8">
            {requestType ? (
              requestType === "sell" ? (
                <>
                  <span style={{ color: "#AF8C32" }}>Sell</span> It for Me
                </>
              ) : (
                <>
                  <span style={{ color: "#AF8C32" }}>Buy</span> It for Me
                </>
              )
            ) : (
              "Car Listing Details"
            )}
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
            {currentStep === steps?.length - 1 ? "Proceed to Pay" : "Next"}
          </CustomButton>
        </div>
      </div>
      <Footer />

      <AdSubmittedModal
        isOpen={showSubmittedModal}
        onClose={() => setShowSubmittedModal(false)}
      />
    </div>
  );
};

export default PostAdPage;
