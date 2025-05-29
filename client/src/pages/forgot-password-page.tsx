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
        className="bg-cover bg-center h-screen flex items-center justify-center"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "804px",
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "44px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {currentStep === 4 ? (
              "Password Reset Successful!"
            ) : (
              <>Forgot your <span style={{ color: "#AF8C32" }}>Password</span>?</>
            )}
          </div>
          <ForgotPasswordForm onStepChange={(step) => setCurrentStep(step)} />
        </div>
      </div>
    </div>
  );
}
