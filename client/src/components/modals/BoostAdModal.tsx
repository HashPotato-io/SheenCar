import React, { useState } from "react";
import Rocket from "../../assets/Icon/Rocket.svg";
import ProceedToPayModal from "./ProceedToPayModal";
import CustomModal from "../ui/custom-modal";

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
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        icon={Rocket}
        title="Boost Your Listing – Get More Visibility & Sell Faster!"
      >
        <div className="text-center p-4">
          <h3
            className="mb-3"
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
              fontFamily: "Gilroy-Medium",
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

        <button
          onClick={handleBoostClick}
          className="w-full h-[44px] rounded-[7.27px] bg-[#003A2F] text-white font-['Gilroy-Regular'] text-[19.4px] leading-[100%] text-center"
          style={{
            fontFamily: "Gilroy-Regular",
            fontWeight: 400,
            letterSpacing: "0%",
          }}
        >
          Boost Ad
        </button>

        <p
          className="text-left mt-1"
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
      </CustomModal>

      <ProceedToPayModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        carDetails={carDetails}
      />
    </>
  );
};

export default BoostAdModal;
