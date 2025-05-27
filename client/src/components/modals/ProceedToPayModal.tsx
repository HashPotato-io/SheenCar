import React, { useState } from "react";
import Rocket from "../../assets/Icon/Rocket.svg";

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
  const [selectedDuration, setSelectedDuration] = useState<number>(7);
  const [selectedBudget, setSelectedBudget] = useState<number>(50);

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

          {/* Text content */}
          <div className="text-center mb-6">
            <h2
              className="mb-4"
              style={{
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
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#585353",
                textAlign: "left",
              }}
            >
              Set your preferred duration and budget to increase your listing’s
              visibility. The more you invest, the better your placement!
            </div>
            <p
              className="mb-2"
              style={{
                fontFamily: "Poppins",
                fontWeight: 300,
                fontSize: "16px",
                color: "#585353",
              }}
            >
              {carDetails.year} {carDetails.make} {carDetails.model}
            </p>
          </div>

          {/* Duration Selection */}
          <div className="mb-4">
            <h4
              className="text-left mb-2"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#171616",
              }}
            >
              Select Duration
            </h4>
            <div className="flex gap-2">
              {[7, 14, 30].map((days) => (
                <button
                  key={days}
                  onClick={() => setSelectedDuration(days)}
                  className={`flex-1 py-2 rounded-md border ${
                    selectedDuration === days
                      ? "border-[#003A2F] bg-[#003A2F] text-white"
                      : "border-gray-300"
                  }`}
                >
                  {days} Days
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mb-6">
            <h4
              className="text-left mb-2"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#171616",
              }}
            >
              Select Budget
            </h4>
            <div className="flex gap-2">
              {[50, 100, 200].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedBudget(amount)}
                  className={`flex-1 py-2 rounded-md border ${
                    selectedBudget === amount
                      ? "border-[#003A2F] bg-[#003A2F] text-white"
                      : "border-gray-300"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Proceed to Pay button */}
          <button
            className="w-full h-[44px] rounded-[7.27px] bg-[#003A2F] text-white font-['Gilroy-Regular'] text-[19.4px] leading-[100%] text-center mb-4"
            style={{
              fontFamily: "Gilroy-Regular",
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            Proceed to Pay
          </button>

          {/* Sub text */}
          <p
            className="text-center"
            style={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#535353",
            }}
          >
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPayModal;
