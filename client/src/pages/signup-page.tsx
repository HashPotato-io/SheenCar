import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import Banner from "../assets/banner.png";
import SheencarLogo from "../assets/sheencar-logo.svg";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();

  // Redirect to home if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

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
          <img
            className="w-[180px] md:w-[258px] h-auto"
            src={SheencarLogo}
            alt="sheencar-logo"
          />
          <div className="font-['Gilroy-SemiBold'] text-2xl md:text-4xl lg:text-[44px] text-center text-white tracking-tight px-4">
            Find Your <span className="text-[#AF8C32]">Perfect Ride</span> –
            Search, Buy, and Drive Away!
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
} 