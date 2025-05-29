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
              style={{
                width: "330px",
                height: "40px",
                background: "transparent",
              }}
            />
            <CustomButton
              customStyles={{ width: "330px", height: "40px" }}
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
              style={{
                width: "330px",
                height: "40px",
                background: "transparent",
              }}
            />
            <CustomButton
              customStyles={{ width: "330px", height: "40px" }}
              onClick={handleNext}
            >
              Next
            </CustomButton>
          </>
        );
      case 3:
        return (
          <>
            <div style={{ position: "relative", width: "330px" }}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  background: "transparent",
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeOpen /> : <EyeClose />}
              </button>
            </div>
            <div style={{ position: "relative", width: "330px" }}>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                style={{
                  width: "100%",
                  height: "40px",
                  background: "transparent",
                }}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? <EyeOpen /> : <EyeClose />}
              </button>
            </div>
            <CustomButton
              customStyles={{ width: "330px", height: "40px" }}
              onClick={handleNext}
            >
              Confirm
            </CustomButton>
          </>
        );
      case 4:
        return (
          <CustomButton
            customStyles={{ width: "314px", height: "40px" }}
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#FFFFFF",
          width: "376px",
          height: "48px",
          marginBottom: "30px",
        }}
      >
        {stepContent[currentStep - 1]}
      </div>
      {currentStep === 4 ? (
        renderStep()
      ) : (
        <div
          style={{
            width: "392px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "26px",
            padding: "24px 26px",
            borderRadius: "17.22px",
            background: "#F8F8F8",
            marginBottom: "20px",
          }}
        >
          {renderStep()}
        </div>
      )}
    </div>
  );
}
