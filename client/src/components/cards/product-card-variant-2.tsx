import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import Arrow from "../../assets/Icon/arrow.svg";
import BoostAdModal from "../modals/BoostAdModal";
import ProceedToPayModal from "../modals/ProceedToPayModal";
import RenewBoostModal from "../modals/RenewBoostModal";
import CloseAdModal from "../modals/CloseAdModal";
import CloseAdBoostedModal from "../modals/ClosedAdBoostedModal";
import RenewAdModal from "../modals/RenewAdModal";
import ReopenAdModal from "../modals/ReopenAdModal";
import WithdrawAdModal from "../modals/WithdrawAdModal";
import CloseRequestModal from "../modals/CloseRequestModal";
import DeleteAdModal from "../modals/DeleteAdModal";
import WithdrawTradeProposalModal from "../modals/WithdrawTradeProposalModal";
import WithdrawOfferModal from "../modals/WithdrawOfferModal";
import { CustomButton } from "../ui/custom-button";
import StatusBadge from "../ui/status-badge";
import { DeleteIcon, EditIcon } from "../icons";
import CompletedTradeModal from "../modals/CompletedTradeModal";
import OfferCard from "../offer-card";
import OfferCompletedModal from "../modals/OfferCompletedModal";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  tabType?: string;
  isTraded?: boolean;
  tradeWith?: string;
  tradeAmount?: number;
  name?: string; // Assuming ownerName is part of the car object
  traded?: string;
  adjustment?: string; // Assuming this is the price adjustment for trade
  tradedWithName?: string;
  adjustedAmount?: number;
  buyerName?: string;
  receivedAmount?: number

};

type ModalStep =
  | "none"
  | "boostAd"
  | "proceedToPay"
  | "renewBoost"
  | "closeAd"
  | "closeAdBoosted"
  | "renewAd"
  | "reopenAd"
  | "withdrawAd"
  | "closeRequest"
  | "deleteAd"
  | "viewDeals"
  | "withdrawProposal"
  | "viewOffers"
  | "withdrawOffer"
  | "viewDetails"
  | "viewTradeDetails"

export type ButtonState =
  | "boostAd"
  | "boosted"
  | "renewAd"
  | "reopenAd"
  | "withdrawAd"
  | "closeRequest"
  | "reopenRequest"
  | "disabled"
  | "renewBoost"
  | "viewDeals"
  | "withdrawProposal"
  | "viewOffers"
  | "withdrawOffer"
  | "viewDetails"
  | "viewTradeDetails"

interface CarCardsProps {
  car: Car;
  linkUrl: string;
  small?: boolean;
  tiny?: boolean | null;
  buttonState?: ButtonState;
  status?: "active" | "completed" | "closed" | "pending";
  dealType?: "sell" | "buy";
  disabled?: boolean;
  offerDetails?: {
    amount: number;
    date: string;
  };
}

const Card: React.FC<CarCardsProps> = ({
  car,
  linkUrl,
  small,
  tiny,
  buttonState = "boostAd",
  status,
  dealType,
  disabled = false,
  offerDetails,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentStep, setCurrentStep] = useState<ModalStep>("none");
  const [daysActive, setDaysActive] = useState(5);
  const [, setLocation] = useLocation();

  console.log(dealType);
  console.log(status, "status");

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleCloseAd = () => {
    setShowMenu(false);
    if (buttonState === "boosted") {
      setCurrentStep("closeAdBoosted");
    } else {
      setCurrentStep("closeAd");
    }
  };

  const handleDeleteAd = () => {
    setShowMenu(false);
    setCurrentStep("deleteAd");
  };

  const handleBoostClick = () => {
    if (buttonState === "renewBoost") {
      setCurrentStep("renewBoost");
    } else {
      setCurrentStep("boostAd");
    }
  };

  const handleBoostAdClose = () => {
    setCurrentStep("none");
  };

  const handleProceedToPay = () => {
    setCurrentStep("proceedToPay");
  };

  const handleWithDrawProposal = () => {
    setCurrentStep("withdrawProposal");
  };
  const handleViewDetails = () => {
    setCurrentStep("viewDetails");
    console.log("Current Step Set to:", currentStep);
    console.log("Clickkkkkkk", currentStep);
  }
  const handleViewTradeDetails = () => {
    setCurrentStep("viewTradeDetails")
  }
  const handleProceedToPayClose = () => {
    setCurrentStep("none");
  };

  const handleEditAd = () => {
    console.log("Edit ad clicked");
  };

  const handleCloseAdConfirm = () => {
    setCurrentStep("none");
  };

  const handleRenewAd = () => {
    setCurrentStep("renewAd");
  };

  const handleReopenAd = () => {
    setCurrentStep("reopenAd");
  };

  const handleWithdrawAd = () => {
    setShowMenu(false);
    setCurrentStep("withdrawAd");
  };

  const handleWithdrawAdConfirm = () => {
    setCurrentStep("none");
    // Add any additional withdrawal logic here
  };

  const handleCloseRequest = () => {
    setShowMenu(false);
    setCurrentStep("closeRequest");
  };

  const handleDeleteAdConfirm = () => {
    setCurrentStep("none");
    // Add any additional deletion logic here
  };

  console.log("details", car.buyerName, car.receivedAmount)

  const getButtonText = (state: ButtonState): string => {
    switch (state) {
      case "boostAd":
        return "Boost Ad";
      case "boosted":
        return "Boosted";
      case "renewAd":
        return "Renew Ad";
      case "viewTradeDetails":
        return "View Trade Details";
      case "reopenAd":
        return "Reopen Ad";
      case "withdrawAd":
        return "Withdraw Ad";
      case "closeRequest":
        return "Close Request";
      case "reopenRequest":
        return "Reopen Request";
      case "renewBoost":
        return "Renew Boost";
      case "viewDeals":
        return "View Deals";
      case "withdrawProposal":
        return "Withdraw Proposal";
      case "viewOffers":
        return "View Offers";
      case "withdrawOffer":
        return "Withdraw Offer";
      case "viewDetails":
        return "View Details";
      default:
        return "Boost Ad";
    }
  };

  const getButtonStyles = (state: ButtonState) => {
    const baseStyles = {
      width: "357px",
      height: "44px",
      gap: "9.7px",
      borderRadius: "7.27px",
    };

    if (disabled) {
      return {
        ...baseStyles,
        opacity: 0.4,
        backgroundColor: "#003A2F",
        cursor: "not-allowed",
      };
    }

    switch (state) {
      case "boosted":
      case "withdrawProposal":
      case "withdrawOffer":
        return {
          ...baseStyles,
          opacity: car.isTraded ? 0.4 : 1,
          backgroundColor: "#003A2F",
        };
      default:
        return baseStyles;
    }
  };

  const getButtonClickHandler = (state: ButtonState) => {
    if (disabled) {
      return undefined;
    }

    if (state === "withdrawProposal" && car?.isTraded) {
      return undefined;
    }

    if (state === "renewAd") {
      return handleRenewAd;
    }

    if (state === "reopenAd") {
      return handleReopenAd;
    }

    if (state === "withdrawAd") {
      return handleWithdrawAd;
    }

    if (state === "closeRequest") {
      return handleCloseRequest;
    }

    if (state === "reopenRequest") {
      return handleReopenAd;
    }

    if (state === "viewDeals") {
      return () => {
        setLocation(`/account?view=deal&id=${car.id}`);
      };
    }

    if (state === "viewOffers") {
      return () => {
        setLocation(`/account?view=offers&id=${car.id}`);
      };
    }


    if (state === "withdrawProposal") {
      return handleWithDrawProposal;
    }

    if (state === "viewTradeDetails") {
      return handleViewTradeDetails
    }

    if (state === "viewDetails") {
      return handleViewDetails;
    }

    if (state === "withdrawOffer") {
      return () => setCurrentStep("withdrawOffer");
    }

    // Default case - handle boost click
    return handleBoostClick;
  };

  const MenuButton = () => {
    // Add early return if tabType is My Trade Proposals
    if (car.tabType === "My Trade Proposals") {
      return null;
    }

    if (status === "active" && buttonState !== "withdrawOffer") {
      return (
        <div
          className="absolute top-2 right-2 cursor-pointer"
          style={{
            background: "#FFFFFF",
            width: "39px",
            height: "39px",
            borderRadius: "19.5px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleMenuClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="6" r="2" fill="#171616" />
            <circle cx="12" cy="12" r="2" fill="#171616" />
            <circle cx="12" cy="18" r="2" fill="#171616" />
          </svg>
        </div>
      );
    }

    if ((status === "closed" || status === "completed") && buttonState !== "withdrawOffer") {
      return (
        <div
          className="absolute top-2 right-2 cursor-pointer"
          style={{
            background: "#FFFFFF",
            width: "39px",
            height: "39px",
            borderRadius: "19.5px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleDeleteAd}
        >
          <DeleteIcon />
        </div>
      );
    }


    if (status === "pending" && buttonState !== "withdrawOffer") {
      return (
        <div
          className="absolute top-2 right-2 cursor-pointer"
          style={{
            background: "#FFFFFF",
            width: "39px",
            height: "39px",
            borderRadius: "19.5px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleEditAd}
        >
          <EditIcon />
        </div>
      );
    }

    return null;
  };

  const DropdownMenu = () => (
    <div
      className="absolute top-12 right-2 bg-white rounded-lg shadow-lg py-2 z-10"
      style={{ minWidth: "120px" }}
    >
      {status === "active" && (
        <button
          onClick={handleCloseAd}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
        >
          Close Ad
        </button>
      )}
      {status === "pending" && (
        <>
          <button
            onClick={handleWithdrawAd}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
          >
            Withdraw Ad
          </button>
          <button
            onClick={handleCloseRequest}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
          >
            Close Request
          </button>
        </>
      )}
      <button
        onClick={handleDeleteAd}
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
      >
        Delete Ad
      </button>
    </div>
  );

  if (tiny) {
    return (
      <div
        className=" "
        style={{
          boxShadow: "1.52px 1.52px 9.14px 0px #0000001F",
          width: "100%",
          height: "364px",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="overflow-hidden group w-full h-[378px]">
          <div className="relative h-full">
            <div
              style={{ borderRadius: "13px" }}
              className="h-[280px] overflow-hidden"
            >
              <img
                style={{ borderRadius: "13px" }}
                src={car?.image}
                alt={`${car?.make} ${car?.model}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {status && (
                <div className="absolute top-2 left-2">
                  <StatusBadge status={status} />
                </div>
              )}
              <MenuButton />
              {showMenu && status === "active" && <DropdownMenu />}
            </div>
            <div
              className="bg-[#EEEEEE] p-[12px] w-full flex flex-col absolute left-0 right-0"
              style={{
                top: dealType ? "200px" : "231px",
                borderRadius: "13px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                height: dealType ? "176px" : "148px",
              }}
            >
              <div className="flex flex-col gap-[8px] ml-[10px] w-full">
                {dealType && (
                  <div className="">
                    <StatusBadge status={dealType} />
                  </div>
                )}
                <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold']">
                  {car?.make} {car?.model}
                </div>
                <div className="align-middle font-normal text-[#585353] leading-[100%] tracking-[-0.01em] text-[16px] font-['Poppins']">
                  {car?.year}
                </div>
                {car?.tabType === "My Trade Proposals" ? (
                  <div style={{
                    fontFamily: 'Gilroy-Regular',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#585353'
                  }}>
                    {car.isTraded ? (
                      <>
                        Traded with: {car.tradeWith}
                        <br />
                        No Amount Involved: Even Trade
                      </>
                    ) : (
                      <>
                        To Trade with: {car.tradeWith}
                        <br />
                        Amount to Pay: ${car.tradeAmount?.toLocaleString()}
                      </>
                    )}
                  </div>
                ) : (
                  <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[22px] font-['Gilroy-SemiBold']">
                    Price: ${car?.price.toLocaleString()}
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-2 w-full ">
                <CustomButton
                  customStyles={{
                    ...getButtonStyles(buttonState),
                    width: "100%",
                    height: "40px",
                  }}
                  onClick={getButtonClickHandler(buttonState)}
                  disabled={disabled}
                >
                  {getButtonText(buttonState)}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        {/* Boost Ad Modal */}
        <BoostAdModal
          isOpen={currentStep === "boostAd"}
          onClose={handleBoostAdClose}
          carDetails={{
            make: car?.make,
            model: car?.model,
            year: car?.year,
          }}
          onProceed={handleProceedToPay}
        />

        {/* Proceed to Pay Modal */}
        <ProceedToPayModal
          isOpen={currentStep === "proceedToPay"}
          onClose={handleProceedToPayClose}
          carDetails={{
            make: car.make,
            model: car.model,
            year: car.year,
          }}
        />

        {/* RenewBoostModal */}
        <RenewBoostModal
          isOpen={currentStep === "renewBoost"}
          onClose={() => setCurrentStep("none")}
          carDetails={{
            make: car.make,
            model: car.model,
            year: car.year,
          }}
          onProceed={handleProceedToPay}
        />

        <CloseAdModal
          isOpen={currentStep === "closeAd"}
          onClose={() => setCurrentStep("none")}
          onConfirm={handleCloseAdConfirm}
          daysActive={daysActive}
        />

        <CloseAdBoostedModal
          isOpen={currentStep === "closeAdBoosted"}
          onClose={() => setCurrentStep("none")}
          onConfirm={handleCloseAdConfirm}
          daysActive={daysActive}
        />

        <RenewAdModal
          isOpen={currentStep === "renewAd"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional renewal logic here
          }}
          carDetails={{
            make: car.make,
            model: car.model,
            year: car.year,
          }}
        />

        <ReopenAdModal
          isOpen={currentStep === "reopenAd"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional reopen logic here
          }}
        />

        {/* Add WithdrawAdModal */}
        <WithdrawAdModal
          isOpen={currentStep === "withdrawAd"}
          onClose={() => setCurrentStep("none")}
          onConfirm={handleWithdrawAdConfirm}
        />

        {/* Add CloseRequestModal */}
        <CloseRequestModal
          isOpen={currentStep === "closeRequest"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional close request logic here
          }}
        />

        <DeleteAdModal
          isOpen={currentStep === "deleteAd"}
          onClose={() => setCurrentStep("none")}
          onConfirm={handleDeleteAdConfirm}
        />

        <WithdrawTradeProposalModal
          isOpen={currentStep === "withdrawProposal"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional withdrawal logic here
          }}
        />
        <OfferCompletedModal
          isOpen={currentStep === "viewDetails"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional view offers logic here
          }}
          tradeDetails={{
            buyerName: car.buyerName,

            receivedAmount: car.receivedAmount


          }}
        />

        <CompletedTradeModal
          isOpen={currentStep === "viewTradeDetails"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
          }}
          tradeDetails={{
            tradedWithName: car.tradedWithName,
            tradedWith: car.tradeWith,
            traded: car.traded,
            adjustment: car.adjustment,
            adjustedAmount: car.adjustedAmount


          }}




        />
        <WithdrawOfferModal
          isOpen={currentStep === "withdrawOffer"}
          onClose={() => setCurrentStep("none")}
          onConfirm={() => {
            setCurrentStep("none");
            // Add any additional withdrawal logic here
          }}
        />
      </div>
    );
  }

  if (small) {
    // Small version
    return (
      <div
        className="bg-white rounded-[9px] overflow-hidden shadow-sm border border-white-100 group"
        style={{
          width: 208.8,
          height: 215, // 163 + 75 - 23
          top: 1.51,
          left: 1.51,
        }}
      >
        <div className="relative h-full">
          <div className="h-[163px] bg-gray-200 overflow-hidden rounded-t-[9px] relative">
            <img
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
            />
            {status && (
              <div className="absolute top-2 left-2">
                <StatusBadge status={status} />
              </div>
            )}
            <MenuButton />
            {showMenu && status === "active" && <DropdownMenu />}
          </div>
          <div
            className="bg-[#EEEEEE] p-[8px] w-full h-[75px] flex justify-between absolute left-0 right-0"
            style={{
              top: "140px",
              borderRadius: "9px 9px 0 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col gap-[4px] ml-[6px]">
              <div className="">
                <StatusBadge status={"sell"} />
              </div>
              <div className="font-normal text-[#171616] leading-[1] text-[14px]">
                {car.make} {car.model}
              </div>
              <div className="font-normal text-[#585353] leading-[1] text-[10px]">
                {car.year}
              </div>
              <div className="font-normal text-[#171616] leading-[1] text-[14px]">
                Price: ${car.price.toLocaleString()}
              </div>
            </div>
            <Link href={linkUrl}>
              <div className="mt-[10px] mr-[6px]">
                <img src={Arrow} alt="arrow" />
              </div>
            </Link>
          </div>
          {/* Removed spacer div */}
        </div>
      </div>
    );
  }

  // Default (large) version
  return (
    <div
      style={{
        boxShadow: "1.52px 1.52px 9.14px 0px #0000001F",
        width: "398px",
        height: "454px",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="overflow-hidden group w-[391px] h-[448px]">
        <div className="relative h-full">
          <div
            style={{ borderRadius: "13px" }}
            className="h-[309px] overflow-hidden"
          >
            <img
              style={{ borderRadius: "13px" }}
              src={car?.image}
              alt={`${car?.make} ${car?.model}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {status && (
              <div className="absolute top-2 left-2">
                <StatusBadge status={status} />
              </div>
            )}
            <MenuButton />
            {showMenu && status === "active" && <DropdownMenu />}
          </div>
          <div
            className="bg-[#EEEEEE] p-[12px] w-[391px] h-[197px] flex flex-col absolute left-0 right-0"
            style={{
              top: dealType ? "228px" : "250px",
              borderRadius: "13px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              height: dealType ? "220px" : "197px",
            }}
          >
            <div className="flex flex-col gap-[10px] ml-[10px] ">
              {dealType && (
                <div className="">
                  <StatusBadge status={dealType} />
                </div>
              )}
              <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[27px] font-['Gilroy-SemiBold']">
                {car?.make} {car?.model}
              </div>
              <div className="align-middle font-normal text-[#585353] leading-[100%] tracking-[-0.01em] text-[18px] font-['Poppins']">
                {car?.year}
              </div>
              {car?.tabType === "My Trade Proposals" ? (
                <div style={{
                  fontFamily: 'Gilroy-Regular',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#585353'
                }}>
                  {car.isTraded ? (
                    <>
                      Traded with: {car.tradeWith}
                      <br />
                      No Amount Involved: Even Trade
                    </>
                  ) : (
                    <>
                      To Trade with: {car.tradeWith}
                      <br />
                      Amount to Pay: ${car.tradeAmount?.toLocaleString()}
                    </>
                  )}
                </div>
              ) : (
                <div className="align-middle font-normal text-[#171616] leading-[100%] tracking-[-0.01em] text-[26px] font-['Gilroy-SemiBold']">
                  Price: ${car?.price.toLocaleString()}
                </div>
              )}
            </div>

            <div className="flex justify-center mt-4">
              <CustomButton
                customStyles={getButtonStyles(buttonState)}
                onClick={getButtonClickHandler(buttonState)}
                disabled={disabled}
              >
                {getButtonText(buttonState)}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      {/* Boost Ad Modal */}
      <BoostAdModal
        isOpen={currentStep === "boostAd"}
        onClose={handleBoostAdClose}
        carDetails={{
          make: car?.make,
          model: car?.model,
          year: car?.year,
        }}
        onProceed={handleProceedToPay}
      />

      {/* Proceed to Pay Modal */}
      <ProceedToPayModal
        isOpen={currentStep === "proceedToPay"}
        onClose={handleProceedToPayClose}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year,
        }}
      />

      {/* RenewBoostModal */}
      <RenewBoostModal
        isOpen={currentStep === "renewBoost"}
        onClose={() => setCurrentStep("none")}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year,
        }}
        onProceed={handleProceedToPay}
      />

      <CloseAdModal
        isOpen={currentStep === "closeAd"}
        onClose={() => setCurrentStep("none")}
        onConfirm={handleCloseAdConfirm}
        daysActive={daysActive}
      />

      <CloseAdBoostedModal
        isOpen={currentStep === "closeAdBoosted"}
        onClose={() => setCurrentStep("none")}
        onConfirm={handleCloseAdConfirm}
        daysActive={daysActive}
      />

      <RenewAdModal
        isOpen={currentStep === "renewAd"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional renewal logic here
        }}
        carDetails={{
          make: car.make,
          model: car.model,
          year: car.year,
        }}
      />

      <ReopenAdModal
        isOpen={currentStep === "reopenAd"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional reopen logic here
        }}
      />

      <CompletedTradeModal
        isOpen={currentStep === "viewTradeDetails"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
        }}
        tradeDetails={{
          tradedWithName: car.tradedWithName,
          tradedWith: car.tradeWith,
          traded: car.traded,
          adjustment: car.adjustment,
          adjustedAmount: car.adjustedAmount


        }}




      />

      <OfferCompletedModal
        isOpen={currentStep === "viewDetails"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional view offers logic here
        }}
        tradeDetails={{
          buyerName: car.buyerName,

          receivedAmount: car.receivedAmount


        }}
      />
      {/* Add WithdrawAdModal */}
      <WithdrawAdModal
        isOpen={currentStep === "withdrawAd"}
        onClose={() => setCurrentStep("none")}
        onConfirm={handleWithdrawAdConfirm}
      />

      {/* Add CloseRequestModal */}
      <CloseRequestModal
        isOpen={currentStep === "closeRequest"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional close request logic here
        }}
      />

      <DeleteAdModal
        isOpen={currentStep === "deleteAd"}
        onClose={() => setCurrentStep("none")}
        onConfirm={handleDeleteAdConfirm}
      />

      <WithdrawTradeProposalModal
        isOpen={currentStep === "withdrawProposal"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional withdrawal logic here
        }}
      />

      <WithdrawOfferModal
        isOpen={currentStep === "withdrawOffer"}
        onClose={() => setCurrentStep("none")}
        onConfirm={() => {
          setCurrentStep("none");
          // Add any additional withdrawal logic here
        }}
      />
    </div>
  );
};

export default Card;
