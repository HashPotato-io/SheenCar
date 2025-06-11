import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import Banner from "../assets/banner.png";
import SheencarLogo from "../assets/sheencar-logo.svg";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);

  // Redirect to home if already logged in
  if (user && !isLoading) {
    navigate("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="bg-cover bg-center min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8"
      >
        <div className="flex flex-col items-center justify-center gap-5 max-w-[804px] w-full">
          <div className="font-['Gilroy-SemiBold'] text-2xl md:text-4xl lg:text-[44px] text-center text-white tracking-tight px-4">
            {currentStep === 4 ? (
              "Password Reset Successful!"
            ) : (
              <>Forgot your <span className="text-[#AF8C32]">Password</span>?</>
            )}
          </div>
          <ForgotPasswordForm onStepChange={(step) => setCurrentStep(step)} />
        </div>
      </div>
    </div>
  );
}
