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
import CarSvg from "../assets/car.svg";
import CarDetailsForm from "../components/CarDetailsForm";

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
  doors: string; // Add missing fields
  mileageType: string; // Add missing fields
  engineSize?: string;
  powerOutput?: string;
  currency?: string;
}

const PostAdPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
    doors: "", // Initialize new fields
    mileageType: "", // Initialize new fields
  });

  // Add validation function
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          formData.make &&
          formData.model &&
          formData.year &&
          formData.mileage &&
          formData.doors &&
          formData.seatingCapacity &&
          formData.condition &&
          formData.mileageType &&
          formData.description
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
    } else {
      setLocation("/account");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
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
          <div className="flex gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Car <span className="text-teal-600">Features</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Select the features your car has
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Transmission
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    value={formData.transmission}
                    onChange={(e) =>
                      handleInputChange("transmission", e.target.value)
                    }
                  >
                    <option value="">Select Transmission</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="cvt">CVT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Fuel Type
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    value={formData.fuelType}
                    onChange={(e) =>
                      handleInputChange("fuelType", e.target.value)
                    }
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
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
                  {/* Car Features SVG */}
                  <path
                    fill="currentColor"
                    d="M20 45c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm80 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM15 35h90c2.8 0 5-2.2 5-5V20c0-5.5-4.5-10-10-10H20c-5.5 0-10 4.5-10 10v10c0 2.8 2.2 5 5 5z"
                  />
                </svg>
              </div>
              <div className="text-center px-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Select the transmission type and fuel type of your car. These
                  details help potential buyers understand your vehicle better.
                </p>
              </div>
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

          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Content */}
        <div className="bg-white">{renderStepContent()}</div>

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
