import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "wouter";
import Rocket from "../../assets/Icon/Rocket.svg";
import { Input } from "../ui/input";
import { CustomButton } from "../ui/custom-button";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('your_publishable_key_here');

interface ProceedToPayModalProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: {
    make: string;
    model: string;
    year: number;
  };
}

const ProceedToPayModal: React.FC<ProceedToPayModalProps> = ({
  isOpen,
  onClose,
  carDetails,
}) => {
  const [, setLocation] = useLocation();
  const [selectedDuration, setSelectedDuration] = useState<number>(7);
  const [selectedBudget, setSelectedBudget] = useState<number>(50);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    // Navigate to checkout page with state
    setLocation('/checkout', { 
      state: {
        duration: selectedDuration,
        budget: selectedBudget,
        carDetails
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[420px] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="p-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <img src={Rocket} alt="rocket" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Text content */}
            <div className="text-center mb-6">
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Gilroy-Medium",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                Customize Your Boost!
              </h2>
              <div
                className="mb-4"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#585353",
                  textAlign: "left",
                  width: "339px",
                  margin: "0 auto",
                }}
              >
                Set your preferred duration and budget to increase your
                listing's visibility. The more you invest, the better your
                placement!
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "339px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontFamily: "Gilroy-Medium",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                  textAlign: "left",
                }}
              >
                Boosting Preferences:
              </div>
              <Input
                placeholder="Days"
                value={selectedDuration || ""}
                onChange={(e) => setSelectedDuration(Number(e.target.value))}
                style={{
                  width: 339,
                  height: 40,
                  padding: "10px 16px",
                  borderRadius: 6,
                  border: "1px solid #A2A2A2",
                  background: "transparent",
                }}
                className="placeholder:text-[#A2A2A2] placeholder:font-poppins placeholder:text-base placeholder:leading-none"
              />
              <Input
                placeholder="$ Budget"
                value={selectedBudget || ""}
                onChange={(e) => setSelectedBudget(Number(e.target.value))}
                style={{
                  width: 339,
                  height: 40,
                  padding: "10px 16px",
                  borderRadius: 6,
                  border: "1px solid #A2A2A2",
                  background: "transparent",
                }}
                className="placeholder:text-[#A2A2A2] placeholder:font-poppins placeholder:text-base placeholder:leading-none"
              />
            </div>
            {/* New UI section */}
            <div
              className="mt-4 flex flex-col items-center justify-center gap-2"
              style={{ width: "339px", margin: "0 auto" }}
            >
              <div
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  fontWeight: 400,
                  fontSize: "68.19px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                <span
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    fontSize: "43.39px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  $
                </span>
                {selectedBudget}
              </div>
              <div
                style={{
                  fontFamily: "Gilroy-Regular",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                For {selectedDuration} days
              </div>
              <div
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                Expected Viewers: 100-125
              </div>
            </div>

            {/* Proceed to Pay button */}
            <CustomButton 
              customStyles={{ width: "339px" }}
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Proceed To Pay'}
            </CustomButton>

            {/* Sub text */}
            <p
              className="text-center"
              style={{
                fontFamily: "Gilroy-Regular",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#535353",
              }}
            >
              *Towards the end of your boosting period you will be notified to
              renew your listing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPayModal;
