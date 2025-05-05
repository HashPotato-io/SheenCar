import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AuthForms from "@/components/auth/auth-forms";

export default function AuthPage() {
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
      <main className="flex-1">
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
          <div className="flex items-center justify-center p-6 md:p-10 order-2 md:order-1">
            <AuthForms />
          </div>

          <div className="auth-hero-section flex flex-col justify-center p-10 text-white order-1 md:order-2">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <span className="text-primary font-montserrat font-bold text-2xl">
                  Sheen<span className="text-secondary">Car</span>
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
                Find Your <span className="text-secondary">Perfect Ride</span> - Search, Buy, and Drive Away!
              </h1>
              <p className="mb-6">
                Join SheenCar today and get access to exclusive car listings, personalized alerts, and special offers. Buy, sell, and compare cars with confidence!
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to thousands of verified car listings</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Powerful search tools and personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure messaging with sellers and support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
