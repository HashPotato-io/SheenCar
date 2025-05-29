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
        className="bg-cover bg-center h-100% flex items-center justify-center"
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
          <img
            style={{ width: "258px", height: "92px" }}
            src={SheencarLogo}
            alt="sheencar-logo"
          />
          <div
            style={{
              width: "804px",
              height: "108px",
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "44px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Find Your <span style={{ color: "#AF8C32" }}>Perfect Ride</span> –
            Search, Buy, and Drive Away!
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
} 