import React, { useState } from "react";
import Rocket from "../../assets/Icon/Rocket.svg";
import ProceedToPayModal from "./ProceedToPayModal";

interface BoostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  carDetails: {
    make: string;
    model: string;
    year: number;
  };
}

const BoostAdModal: React.FC<BoostAdModalProps> = ({
  isOpen,
  onClose,
  onProceed,
  carDetails,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);


  if (!isOpen) return null;

  const handleBoostClick = () => {
    onClose();
    onProceed();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[420px] relative">
          {/* Close button - outside of scrollable area */}
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

          {/* Scrollable content */}
          <div className="max-h-[100vh] overflow-y-auto">
            <div className="p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img src={Rocket} alt="rocket" />
              </div>

              {/* Text content */}
              <div className="text-center p-4">
                <h2
                  className="mb-4"
                  style={{
                    width: "335px",
                    fontWeight: 400,
                    fontSize: "26px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  Boost Your Listing – Get More Visibility & Sell Faster!
                </h2>

                <h3
                  className="mb-3"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  What Does Boosting Include?
                </h3>

                <div
                  style={{ color: "#585353" }}
                  className="text-left space-y-2 mb-4"
                >
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "22px",
                        letterSpacing: "0%",
                        color: "#585353",
                      }}
                    >
                      Increased visibility on the homepage
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "22px",
                        letterSpacing: "0%",
                        color: "#585353",
                      }}
                    >
                      Higher ranking in search results
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "22px",
                        letterSpacing: "0%",
                        color: "#585353",
                      }}
                    >
                      Featured placement in car listings
                    </p>
                  </div>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  Set Your Boosting Preferences
                </h3>

                <div className="text-left space-y-4 mb-4">
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <h4
                        style={{
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "22px",
                          color: "#171616",
                        }}
                      >
                        Boost Duration:{" "}
                        <span
                          style={{
                            fontWeight: 300,
                            color: "#585353",
                          }}
                        >
                          Select the number of days you want your listing to
                          stay boosted.
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <h4
                        style={{
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "22px",
                          color: "#171616",
                        }}
                      >
                        Boost Budget:{" "}
                        <span
                          style={{
                            fontWeight: 300,
                            color: "#585353",
                          }}
                        >
                          Enter your preferred amount to determine priority
                          placement.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boost Ad button */}
              <button
                onClick={handleBoostClick}
                className="w-full h-[44px] rounded-[7.27px] bg-[#003A2F] text-white font-['Gilroy-Regular'] text-[19.4px] leading-[100%] text-center mb-4"
                style={{
                  fontFamily: "Gilroy-Regular",
                  fontWeight: 400,
                  letterSpacing: "0%",
                }}
              >
                Boost Ad
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
                *Towards the end of your boosting period you will be notified to
                renew your listing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Proceed to Pay Modal */}
      <ProceedToPayModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        carDetails={carDetails}
      />
    </>
  );
};

export default BoostAdModal;
