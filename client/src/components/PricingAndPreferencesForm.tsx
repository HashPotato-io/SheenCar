import React from "react";
import { CustomInput } from "@/components/ui/custom-input";

import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomSelectItem } from "@/components/ui/custom-select";
import * as SelectPrimitive from "@radix-ui/react-select";
import CarSvg from "../assets/car5.svg";
import { FormData } from "@/types/form";
import CustomToggle from "./ui/custom-toggle";
import { request } from "http";
import { CustomCheckbox } from "./ui/custom-checkbox";

interface Props {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | boolean) => void;
  requestType?: string;
  serviceAgreementError?: boolean;
}

const PricingAndPreferencesForm: React.FC<Props> = ({
  formData,
  handleInputChange,
  requestType,
  serviceAgreementError,
}) => {
  if (requestType === "sell") {
    return (
      <div>
        <div className="text-2xl lg:text-[34px] flex justify-center lg:justify-start font-['Gilroy-SemiBold'] lg:px-9 mb-4 font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
          Set Your <span className="text-[#AF8C32] mx-2">Price</span> & Confirm
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 xl:gap-10 lg:px-10">
          {/* Left Column - Form */}

          <div className=" space-y-6  lg:max-w-lg lg:min-w-[512px] xl:min-w-[672px] xl:max-w-2xl 3xl:w-full order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <p className="text-[22px] md:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Pricing & Acknowledgment
              </p>
              <div className="flex flex-col gap-2">
                <CustomInput
                  variant="outline"
                  placeholder="$ Expected Price"
                  className="w-full h-[40px]"
                  value={formData.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("price", e.target.value)
                  }
                  required
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    fontFamily: "Gilroy-Regular",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  Price Negotiable
                </div>
                <CustomToggle
                  checked={formData?.priceNegotiable}
                  onChange={(checked) =>
                    handleInputChange("priceNegotiable", checked)
                  }
                />
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-[22px] lg:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                  Final Submission & Service Fee Acknowledgment
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Gilroy-SemiBold",
                      fontWeight: 400,
                      fontSize: "22px",
                      lineHeight: "100%",
                      letterSpacing: "-1%",
                      color: "#000000",
                    }}
                  >
                    Estimated Service Fee
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}
                  >
                    A service fee of $100 will be charged to cover the costs
                    associated with managing the sale on your behalf.
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontFamily: "Gilroy-SemiBold",
                        fontWeight: 400,
                        fontSize: "22px",
                        lineHeight: "100%",
                        letterSpacing: "-1%",
                        color: "#000000",
                        position: "relative",
                      }}
                    >
                      <span className="absolute left-[-12px] text-[#DC1A1A]">
                        *
                      </span>
                      Service Agreement
                    </div>
                    <CustomCheckbox
                      checked={formData?.serviceAgreement}
                      onChange={(checked) =>
                        handleInputChange("serviceAgreement", checked)
                      }
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}
                  >
                    I hereby agree to authorize SheenCar to manage the entire
                    selling process of my vehicle, including listing, marketing,
                    buyer negotiations, and finalizing the transaction on my
                    behalf.
                  </div>
                </div>

                {serviceAgreementError && (
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                      color: "#FF0000",
                    }}
                  >
                    You must agree to the Service Agreement before submitting
                    your request.
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Right Column - Car Illustration */}
          <div className="flex flex-col gap-4 items-center order-1 lg:order-2 lg:mt-[100px]">
            <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
              <img src={CarSvg} alt="car-illustration" width="195" height="111" />
            </div>
            <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
              Decide how you want to sell your car—set a price, enable
              negotiation, or explore car trading options. Your preferences help
              match you with the right buyers.
            </p>
          </div>
        </div>


      </div>
    );
  } else if (requestType === "buy") {
    return (<div>
      <div className="text-2xl lg:text-[34px] flex justify-center lg:justify-start font-['Gilroy-SemiBold'] lg:px-9 mb-4 font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
        Set Your <span className="text-[#AF8C32]">Price</span> & Preferences
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 xl:gap-10 lg:px-10">
        {/* Left Column - Form */}

        <div className=" space-y-6  lg:max-w-lg lg:min-w-[512px] xl:min-w-[672px] xl:max-w-2xl 3xl:w-full order-2 lg:order-1">

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-[22px] md:text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Pricing & Acknowledgment
              </p>

              <p className="text-[22px] md:text-[26px] mt-2 font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                Budget & Financing
              </p>


              <div className="flex flex-col gap-4">
                <div
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "100%",
                    letterSpacing: "-1%",
                    color: "#000000",
                    position: "relative",
                  }}
                >
                  <span className="absolute left-[-12px] text-[#DC1A1A]">
                    *
                  </span>
                  Price Range
                </div>
                <div className="flex gap-3 flex-col md:flex-row">
                  <div className="w-full">
                    <CustomInput
                      variant="outline"
                      type="number"
                      placeholder="$ Minimum Amount"
                      className="w-full h-[40px]"
                      value={formData.minPrice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("minPrice", e.target.value)
                      }
                      min="0"
                      step="100"
                    />
                  </div>
                  <div className="w-full">
                    <CustomInput
                      variant="outline"
                      type="number"
                      placeholder="$ Maximum Amount"
                      className="w-full h-[40px]"
                      value={formData.maxPrice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("maxPrice", e.target.value)
                      }
                      min="0"
                      step="100"
                    />
                  </div>
                </div>
              </div>

              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    fontFamily: "Gilroy-Regular",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  Price Negotiable
                </div>
                <CustomToggle
                  checked={formData?.priceNegotiable}
                  onChange={(checked) =>
                    handleInputChange("priceNegotiable", checked)
                  }
                />
              </div> */}

              <div className="flex flex-col gap-6">
                <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
                  Final Submission & Service Fee Acknowledgment
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Gilroy-SemiBold",
                      fontWeight: 400,
                      fontSize: "22px",
                      lineHeight: "100%",
                      letterSpacing: "-1%",
                      color: "#000000",
                    }}
                  >
                    Estimated Service Fee
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}
                  >
                    A service fee of $100 will be charged to cover the costs
                    associated with managing the sale on your behalf.
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontFamily: "Gilroy-SemiBold",
                        fontWeight: 400,
                        fontSize: "22px",
                        lineHeight: "100%",
                        letterSpacing: "-1%",
                        color: "#000000",
                        position: "relative",
                      }}
                    >
                      <span className="absolute left-[-12px] text-[#DC1A1A]">
                        *
                      </span>
                      Service Agreement
                    </div>
                    <CustomCheckbox
                      checked={formData?.serviceAgreement}
                      onChange={(checked) =>
                        handleInputChange("serviceAgreement", checked)
                      }
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}
                  >
                    I hereby agree to authorize SheenCar to manage the entire
                    selling process of my vehicle, including listing, marketing,
                    buyer negotiations, and finalizing the transaction on my
                    behalf.
                  </div>
                </div>

                {serviceAgreementError && (
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                      color: "#FF0000",
                    }}
                  >
                    You must agree to the Service Agreement before submitting
                    your request.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Car Illustration */}
        <div className="flex flex-col gap-4 items-center order-1 lg:order-2 lg:mt-[100px]">
          <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
            <img src={CarSvg} alt="car-illustration" width="195" height="111" />
          </div>
          <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
            Decide how you want to sell your car—set a price, enable
            negotiation, or explore car trading options. Your preferences help
            match you with the right buyers.
          </p>
        </div>
      </div>
    </div>
    );
  }
  return (<div>
    <div className="text-2xl lg:text-[34px] flex justify-center lg:justify-start font-['Gilroy-SemiBold'] lg:px-9 mb-4 font-[400] leading-[100%] tracking-[-0.01em] text-[#000000]">
      Set Your <span className="text-[#AF8C32] mx-2">Price</span> & Preferences
    </div>

    <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-20 xl:gap-10 lg:px-10">
      {/* Left Column - Form */}

      <div className=" space-y-6  lg:max-w-lg lg:min-w-[512px] xl:min-w-[672px] xl:max-w-2xl 3xl:w-full order-2 lg:order-1">

        <div className="flex flex-col gap-6">
          <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
            Pricing & Listing
          </p>
          <div className="flex flex-col gap-2">
            <CustomInput
              variant="outline"
              placeholder="Price"
              className="w-full h-[40px]"
              value={formData.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("price", e.target.value)
              }
              required
            />
            <div
              style={{
                fontFamily: "Gilroy-Medium",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textAlign: "right",
                color: "#000000",
              }}
            >
              *Listing Fee (Mandatory for All Listings): $5
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between",  alignContent: "center" }}>
            <div
              style={{
                fontFamily: "Gilroy-Regular",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "0%",
                verticalAlign: "middle",
                color: "#000000",
              }}
            >
              Price Negotiable
            </div>
            <input
              type="radio"
              name="negotiable"
              checked={formData?.priceNegotiable === true}
              onChange={() => handleInputChange("priceNegotiable", true)}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid #1D1B20",  // Black outline
                accentColor: "#1D1B20",  // Black checkmark color for modern browsers
                transform: "scale(1.5)",  
                cursor: "pointer"// Make the radio button bigger
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center"  }}>
            <div
              style={{
                fontFamily: "Gilroy-Regular",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "0%",
                verticalAlign: "middle",
                color: "#000000",
              }}
            >
              Trade Car
            </div>
            <input
              type="radio"
              name="negotiable"
              checked={formData?.tradeCar === true}
              onChange={() => handleInputChange("tradeCar", true)}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid #1D1B20",  // Black outline
                accentColor: "#1D1B20",  // Black checkmark color for modern browsers
                transform: "scale(1.5)", 
                cursor: "pointer" // Make the radio button bigger
              }}
            />
          </div>



          {formData?.tradeCar && (
            <div className="mt-4 flex flex-col gap-6">
              <div
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "-1%",
                  color: "#000000",
                }}
              >
                Trading Details
              </div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                List your car for trade and specify what you're looking for.
                You can choose to accept any car or limit trades to a specific
                make & model. If there's a price difference, the system will
                automatically calculate the Price Adjustment for a fair trade.
                Once an offer is accepted, you can chat directly with the
                buyer to finalize the deal!
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-['Gilroy-Regular']">
                  Acceptable Trade Cars
                </label>
                <CustomSelect
                  value={formData.acceptableTradeCars}
                  onValueChange={(value) =>
                    handleInputChange("acceptableTradeCars", value)
                  }
                >
                  <CustomSelectTrigger
                    variant="outline"
                    className="w-full h-[40px]"
                  >
                    <SelectPrimitive.Value placeholder="Select acceptable trade cars" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="any">Any Car</CustomSelectItem>
                    <CustomSelectItem value="specific">
                      Specific Make & Model
                    </CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>

              {formData.acceptableTradeCars === "specific" && (
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <CustomSelect
                      value={formData.tradeCarMake}
                      onValueChange={(value) =>
                        handleInputChange("tradeCarMake", value)
                      }
                    >
                      <CustomSelectTrigger
                        variant="outline"
                        className="w-full h-[40px]"
                      >
                        <SelectPrimitive.Value placeholder="Select make" />
                      </CustomSelectTrigger>
                      <CustomSelectContent>
                        <CustomSelectItem value="toyota">
                          Toyota
                        </CustomSelectItem>
                        <CustomSelectItem value="honda">
                          Honda
                        </CustomSelectItem>
                        <CustomSelectItem value="bmw">BMW</CustomSelectItem>
                        {/* Add more makes as needed */}
                      </CustomSelectContent>
                    </CustomSelect>
                  </div>

                  <div className="flex flex-col gap-2">
                    <CustomSelect
                      value={formData.tradeCarModel}
                      onValueChange={(value) =>
                        handleInputChange("tradeCarModel", value)
                      }
                    >
                      <CustomSelectTrigger
                        variant="outline"
                        className="w-full h-[40px]"
                      >
                        <SelectPrimitive.Value placeholder="Select model" />
                      </CustomSelectTrigger>
                      <CustomSelectContent>
                        <CustomSelectItem value="camry">
                          Camry
                        </CustomSelectItem>
                        <CustomSelectItem value="civic">
                          Civic
                        </CustomSelectItem>
                        <CustomSelectItem value="3series">
                          3 Series
                        </CustomSelectItem>
                        {/* Add more models as needed */}
                      </CustomSelectContent>
                    </CustomSelect>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontFamily: "Gilroy-Regular",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  Willing to Adjust Price Difference in Trade?
                </div>
                <CustomToggle
                  checked={formData?.adjustPriceDifference}
                  onChange={(checked) =>
                    handleInputChange("adjustPriceDifference", checked)
                  }
                />
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                The system will automatically calculate the price difference
                and display the expected Price Adjustment in the trade
                proposal.
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            <p className="text-[26px] font-['Gilroy-SemiBold'] font-[400] leading-[100%] tracking-[-0.01em] text-black">
              Seller Information
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  fontFamily: "Gilroy-Regular",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#000000",
                }}
              >
                Show contact details on page
              </div>
              <CustomToggle
                checked={formData.showContactDetails}
                onChange={(checked) =>
                  handleInputChange("showContactDetails", checked)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Car Illustration */}
      <div className="flex flex-col gap-4 items-center order-1 lg:order-2 lg:mt-[100px]">
        <div className="flex item-center justify-center bg-[#D7FFF1] w-[249px] h-[249px] rounded-[206px]">
          <img src={CarSvg} alt="car-illustration" width="195" height="111" />
        </div>
        <p className="lg:w-[300px] xl:w-[353px] text-[16px] font-['Poppins'] font-[300] leading-[21px] text-center text-[#585353]">
          Decide how you want to sell your car—set a price, enable negotiation,
          or explore car trading options. Your preferences help match you with
          the right buyers.
        </p>
      </div>
    </div>
  </div>
  );
};
export default PricingAndPreferencesForm;
