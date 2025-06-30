import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Stepper from "../components/Stepper";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CustomButton } from "@/components/ui/custom-button";
import CarDetailsForm from "../components/CarDetailsForm";
import CarFeaturesForm from "@/components/CarFeaturesForm";
import { FormData } from "@/types/form";
import CarSpecificationsForm from "../components/CarSpecificationsForm";
import PricingAndPreferencesForm from "../components/PricingAndPreferencesForm";
import AdSubmittedModal from "../components/modals/AdSubmittedModal";

const steps = [
  {
    name: "Basic Info",
  },
  {
    name: "Features",
  },
  {
    name: "Specifications",
  },
  {
    name: " Pricing ",
  },
];

const stepStyles = [
  // { paddingLeft: "8px"},// Style for Step 1
  // { paddingLeft: "12px"}, // Style for Step 2
  // {  },
  //  { textAlign: "center" } // Style for Step 3

  { paddingLeft: "3px"},// Style for Step 1
 { paddingLeft: "5px"},// Style for Step 2
{ paddingRight: "37px"},
{ paddingLeft: "8px"},
   
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

  const validateStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          formData?.make !== "" &&
          formData?.model !== "" &&
          formData?.year !== "" &&
          formData?.bodyType !== "" &&
          formData?.condition !== "" &&
          formData?.vin !== "" &&
          formData?.zipCode
        );
      case 1:
        return formData?.airbags && formData?.seatbelts;
      case 2:
        return (
          formData.cylinder &&
          formData.fuelTankCapacity &&
          formData.engineType &&
          formData.transmission 
        );
      case 3:
        return formData.price;
      default:
        return true;
    }
  };

  const validatButton = () => {
    return validateStep(currentStep);
  };

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
    return validateStep(currentStep);
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCompletedSteps((prev) => [...prev, currentStep]);

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } 
      // else {
      //   // Navigate to checkout with return URL
      //   const returnUrl = encodeURIComponent(window.location.pathname);
      //   setLocation(`/checkout?returnUrl=${returnUrl}`);
      // }
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
          <h1 className="text-2xl lg:text-[46px] font-[400] leading-[100%] tracking-[-0.01em] text-center text-black font-['Gilroy-SemiBold'] mb-8">
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
            styles={stepStyles}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        </div>

        {/* Content */}
        <div>{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex md:flex-row flex-col lg:max-w-lg xl:max-w-2xl lg:ml-10   gap-4 xl:gap-10  mt-14">
          <CustomButton
            onClick={handleBack}
            variant="outline"
            outlineColor="#AF8C32"
            className="w-full"
          >
            {currentStep === 0 ? "Cancel" : "Back"}
          </CustomButton>
          <CustomButton
            onClick={handleNext}
            disabled={!validatButton()}
            className="w-full"
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
