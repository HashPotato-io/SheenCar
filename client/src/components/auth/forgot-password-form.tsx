import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { useLocation } from "wouter";
import { EyeClose, EyeOpen } from "../icons";

type Step = 1 | 2 | 3 | 4;

interface ForgotPasswordFormProps {
  onStepChange: (step: Step) => void;
}

export function ForgotPasswordForm({ onStepChange }: ForgotPasswordFormProps) {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    resetCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    if (currentStep < 4) {
      const nextStep = (currentStep + 1) as Step;
      setCurrentStep(nextStep);
      onStepChange(nextStep);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full h-10 bg-transparent"
            />
            <CustomButton
              customStyles={{ width: "100%", height: "40px" }}
              onClick={handleNext}
            >
              Next
            </CustomButton>
          </>
        );
      case 2:
        return (
          <>
            <Input
              type="text"
              placeholder="Reset Code"
              value={formData.resetCode}
              onChange={(e) => handleInputChange("resetCode", e.target.value)}
              className="w-full h-10 bg-transparent"
            />
            <CustomButton
              customStyles={{ width: "100%", height: "40px" }}
              onClick={handleNext}
            >
              Next
            </CustomButton>
          </>
        );
      case 3:
        return (
          <>
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full h-10 bg-transparent"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
              >
                {showPassword ? <EyeOpen /> : <EyeClose />}
              </button>
            </div>
            <div className="relative w-full">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="w-full h-10 bg-transparent"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
              >
                {showConfirmPassword ? <EyeOpen /> : <EyeClose />}
              </button>
            </div>
            <CustomButton
              customStyles={{ width: "100%", height: "40px" }}
              onClick={handleNext}
            >
              Confirm
            </CustomButton>
          </>
        );
      case 4:
        return (
          <CustomButton
            customStyles={{ width: "100%", height: "40px" }}
            onClick={() => navigate("/login")}
          >
            Login
          </CustomButton>
        );
    }
  };

  const stepContent = [
    "Enter your email address or phone number below, and we'll send you instructions to reset your password.",
    "Please enter the 6 digit code that was sent to john.doe@gmail.com.",
    "Enter your new password below.",
    "Your password has been successfully reset.",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-['Poppins'] text-base text-center text-white w-full max-w-[376px] mb-8">
        {stepContent[currentStep - 1]}
      </div>
      {currentStep === 4 ? (
        renderStep()
      ) : (
        <div className="w-full max-w-[392px] flex flex-col items-center gap-6 p-6 rounded-[17.22px] bg-[#F8F8F8] mb-5">
          {renderStep()}
        </div>
      )}
    </div>
  );
}
