import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProfileActionButton from "@/components/profile-action-button";
import EditIcon from "../assets/Icon/edit.svg";
import EditIcon2 from "../assets/Icon/edit2.svg";
import Plus from "../assets/Icon/Plus.svg";
import ProductCardVariant2, {
  ButtonState,
} from "@/components/cards/product-card-variant-2";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyCars, dummyOffers, dummyTradeDeals } from "@/components/dummydata"
import CustomPhoneInput from "@/components/ui/phone-input";
import TabSection from "@/components/ui/tab-section";
import RequestTypeModal from "@/components/modals/request-type-modal";
import AccountHero from "@/components/account-hero";

import { useLocation, useSearchParams } from "wouter";
import DealDetailsView from "@/components/deal-details-view";
import OfferDetailsView from "@/components/offer-details-view";
import { useMobileDevice } from "@/hooks/useMobileDevice";

const tabList = ["Active", "Pending", "Closed", "Request"];

// Keep the original tab list for UI navigation
const tradeDealsTabList = ["My Trade Proposals", "Deals Received"];

// First, define the Car interface
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  status: string; // For status badge
  buttonState: string; // Added this required property
  dealType?: "sell" | "buy";
  tradeWith?: string;
  tabType: string; // For tab filtering
  isTraded?: boolean;
  tradeAmount?: number;
}

// Add these new interfaces and dummy data after the existing Car interface
interface Offer {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  status: string; // Changed to string to match Car interface
  buttonState: string; // Added this required property
  offerAmount: number;
  offerDate: string;
  tabType: "My Listings" | "My Offers";
  ownerName: string;
  buyerName: string;
  receivedAmount: number// Assuming ownerName is available in the offer
}

// Add the offers tab list
const offersTabList = ["My Listings", "My Offers"];



const Account = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabFade, setTabFade] = useState(false);
  const [postAdFade, setPostAdFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMainTab, setActiveMainTab] = useState("My Ads");
  const itemsPerPage = 9;


  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view");
  const dealId = searchParams.get("id");
  const [, location] = useLocation();
  const isMobile = useMobileDevice();

  // Calculate total pages based on filtered cars
  const filteredCars = dummyCars.filter(
    (car) => car?.tabType === tabList?.[selectedTab]
  );
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Update the getCurrentPageItems function to explicitly return Car[]
  const getCurrentPageItems = (): Car[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCars.slice(startIndex, endIndex) as Car[];
  };

  // Update the handleTabChange function
  const handleTabChange = (index: number) => {
    setContentFade(true);
    // Clear query parameters when changing tabs
    setSearchParams({});
    setTimeout(() => {
      setSelectedTab(index);
      setContentFade(false);
    }, 300);
  };

  // Update the handleMainTabChange function
  const handleMainTabChange = (tab: string) => {
    setContentFade(true);
    // Clear query parameters when changing main tabs
    setSearchParams({});
    setTimeout(() => {
      setActiveMainTab(tab);
      setContentFade(false);
    }, 300);
  };

  // Add new state for request modal
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Update handlePostAdClick
  const handlePostAdClick = () => {
    if (selectedTab === 3) {
      // Request tab
      setIsRequestModalOpen(true);
    } else {
      setPostAdFade(true);
      setTimeout(() => {
        setPostAdFade(false);
        // Navigate to post ad page
        location("/post-ad");
      }, 300);
    }
  };

  // Update the handlers for request type selection
  const handleSellRequest = () => {
    setIsRequestModalOpen(false);
    // Navigate to post-ad page with sell request type
    location("/post-ad?requestType=sell");
  };

  const handleBuyRequest = () => {
    setIsRequestModalOpen(false);
    // Navigate to post-ad page with buy request type
    location("/post-ad?requestType=buy");
  };

  // Add new state for modal
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  // Add handler for profile edit
  const handleEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  // Add handler for saving profile changes
  const handleSaveProfile = () => {
    // TODO: Implement save logic
    setIsEditProfileOpen(false);
  };

  // Add handler for password change
  const handleChangePassword = () => {
    // TODO: Implement password change logic
  };

  // Add this state
  const [contentFade, setContentFade] = useState(false);

  // Add new state for Trade Deals
  const [selectedTradeTab, setSelectedTradeTab] = useState(0);
  const [tradeTabFade, setTradeTabFade] = useState(false);
  const [currentTradePage, setCurrentTradePage] = useState(1);

  // Calculate total pages for trade deals
  const filteredTradeDeals = dummyTradeDeals.filter(
    (deal) => deal?.tabType === tradeDealsTabList?.[selectedTradeTab]
  );
  const totalTradePages = Math.ceil(filteredTradeDeals.length / itemsPerPage);

  const handleTradePageChange = (page: number) => {
    setCurrentTradePage(page);
  };

  // Get current page items for trade deals
  const getCurrentTradePageItems = () => {
    const startIndex = (currentTradePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTradeDeals.slice(startIndex, endIndex);
  };

  // Update the handleTradeTabClick function
  const handleTradeTabClick = (index: number) => {
    if (selectedTradeTab !== index) {
      setTradeTabFade(true);
      // Clear query parameters when changing trade tabs
      setSearchParams({});
      setTimeout(() => {
        setSelectedTradeTab(index);
        setTradeTabFade(false);
      }, 300);
    }
  };

  // Update the renderTradeDealContent function
  const renderTradeDealContent = (items: Car[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6   xl:grid-cols-3  mb-8 place-items-center md:place-items-start">



        {items?.map((car) => (
          <ProductCardVariant2
            key={car.id}
            car={car}
            linkUrl={`/car/${car.id}`}
            buttonState={
              tradeDealsTabList[selectedTradeTab] === "Deals Received"
                ? car.status === "active"
                  ? "viewDeals"  // If status is "active", show "View Deals"
                  : car.status === "completed"
                    ? "viewTradeDetails"  // If status is "completed", show "View Trade Details"
                    : "reopenAd"
                : "withdrawProposal"

            }
            disabled={tradeDealsTabList[selectedTradeTab] == "My Trade Proposals" && (car.status === "rejected" || car.status === "completed")}
            status={car.status as any}
            dealType={car?.dealType}
            tiny={isMobile}
          />
        ))}
      </div>
    );
  };

  // Add new function to handle closing the deal view
  const handleCloseDealView = () => {
    setSearchParams({});
  };

  // Add new state for offers
  const [selectedOfferTab, setSelectedOfferTab] = useState(0);
  const [offerTabFade, setOfferTabFade] = useState(false);
  const [currentOfferPage, setCurrentOfferPage] = useState(1);

  const renderOfferContent = (items: any[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6   xl:grid-cols-3  mb-8 ">

        {items?.map((item) => {
          const offer = item as Offer;
          // Determine the button state based on the offer's status and tab
          let buttonState: ButtonState = "viewOffers"; // default state for offers

          if (offersTabList[selectedOfferTab] === "My Listings") {
            if (offer.status === "completed") {
              buttonState = "viewDetails"; // Set to "viewDetails" if status is "completed"
            }
            else if (offer.status === "closed") {
              buttonState = "reopenAd"; // Set to "viewDetails" if status is "completed"
            } else {
              buttonState = "viewOffers"; // Default to "viewOffers" for other statuses
            }
          } else {

            buttonState = "withdrawOffer"; // Othe

          }

          return (
            <ProductCardVariant2
              key={offer.id}
              car={{
                id: offer.id,
                make: offer.make,
                model: offer.model,
                year: offer.year,
                price: offer.price,
                image: offer.image,
                tabType: offer.tabType,
                name: offer.ownerName,
                buyerName: offer.buyerName,
                receivedAmount: offer.receivedAmount // Assuming ownerName is available in the offer
              }}
              linkUrl={`/car/${offer.id}`}

              buttonState={buttonState} //
              status={offer.status as any}
              disabled={offersTabList[selectedOfferTab] == "My Offers" && (offer.status === "rejected" || offer.status === "completed" || offer.status === "closed")}
              offerDetails={{
                amount: offer.offerAmount,
                date: offer.offerDate,
              }}
              tiny={isMobile}
            />
          );
        })}
      </div>
    );
  };

  // Update the renderTabContent function to handle the offers view
  const renderTabContent = () => {
    // If we're viewing a deal or offer, show the details view
    if (view === "deal" && dealId) {
      return (
        <DealDetailsView
          onCloseTrade={handleCloseDealView}
          onViewProductDetails={() => {
            location(`/trade-car/sellers/${"5"}/cars/${"1"}`);
          }}
          sellerId={"5"}
          carId={"1"}
        />
      );
    }

    if (view === "offers" && dealId) {
      return (
        <OfferDetailsView
          onCloseOffer={handleCloseDealView}
          onViewProductDetails={() => {
            location(`/trade-car/sellers/5/cars/1`);
          }}
          sellerId={"5"}
          carId={"1"}
        />
      );
    }

    // Otherwise, show the regular tab content
    switch (activeMainTab) {
      case "My Ads":
        return (
          <div
            className="opacity-100 transition-opacity duration-300 mx-5  ease-in-out"
            style={{
              opacity: contentFade ? 0 : 1,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 md:mb-8">
              <div className="flex gap-[10px] text-3xl  font-semibold md:text-[40px]  text-black">
                My <span className="text-[#AF8C32]">Ads</span>
              </div>
              <div className="w-full flex justify-center md:justify-end">
                <button
                  className="w-full  md:w-[216px] h-11 bg-[#003A2F] text-white border border-[#003A2F] rounded-md font-light text-base cursor-pointer flex items-center justify-center gap-2 px-5 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: postAdFade ? 0 : 1,
                  }}
                  onClick={handlePostAdClick}
                >
                  <img src={Plus} alt="Plus icon" />
                  <span>{selectedTab === 3 ? "Add Request" : "Post Ad"}</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <TabSection
                tabList={tabList}
                selectedTab={selectedTab}
                tabFade={tabFade}
                currentPage={currentPage}
                totalPages={totalPages}
                getCurrentPageItems={getCurrentPageItems}
                onTabClick={handleTabChange}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        );
      case "Trade Deals":
        return (
          <div
            className="opacity-100 transition-opacity duration-300 mx-5 ease-in-out"
            style={{
              opacity: contentFade ? 0 : 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 40, color: "#000000" }} className="">
                Trade <span style={{ color: "#AF8C32" }}>Deals</span>
              </div>
            </div>
            <TabSection
              tabList={tradeDealsTabList}
              selectedTab={selectedTradeTab}
              tabFade={tradeTabFade}
              currentPage={currentTradePage}
              totalPages={totalTradePages}
              getCurrentPageItems={getCurrentTradePageItems}
              onTabClick={handleTradeTabClick}
              onPageChange={handleTradePageChange}
              renderCustomContent={renderTradeDealContent}
              hidePagination={
                tradeDealsTabList[selectedTradeTab] === "Deals Received"
              }
            />
          </div>
        );
      case "Offers":
        return (

          <div
            className="opacity-100 transition-opacity duration-300 mx-5 ease-in-out"
            style={{
              opacity: contentFade ? 0 : 1,
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 40, color: "#000000" }} className="">
                My <span style={{ color: "#AF8C32" }}>Offers</span>
              </div>
            </div>
            <TabSection
              tabList={offersTabList}
              selectedTab={selectedOfferTab}
              tabFade={offerTabFade}
              currentPage={currentOfferPage}
              totalPages={Math.ceil(
                dummyOffers.filter(
                  (offer) => offer.tabType === offersTabList[selectedOfferTab]
                ).length / itemsPerPage
              )}
              getCurrentPageItems={() => {
                const startIndex = (currentOfferPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                return dummyOffers
                  .filter(
                    (offer) => offer.tabType === offersTabList[selectedOfferTab]
                  )
                  .slice(startIndex, endIndex)
                  .map((offer) => ({
                    ...offer,
                    buttonState: offer.buttonState,
                  }));
              }}
              onTabClick={(index) => {
                setOfferTabFade(true);
                setSearchParams({});
                setTimeout(() => {
                  setSelectedOfferTab(index);
                  setOfferTabFade(false);
                }, 300);
              }}
              onPageChange={setCurrentOfferPage}
              renderCustomContent={renderOfferContent}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <AccountHero
        onEditProfile={handleEditProfile}
        onTabChange={handleMainTabChange}
      />
      <div
        className=" " //add px here
        style={{ margin: "40px auto 0 auto", width: "100%" }}
      >
        {renderTabContent()}
      </div>

      {/* Update the Edit Profile Modal */}
      <Dialog open={isEditProfileOpen} onOpenChange={setIsEditProfileOpen}>
        <DialogContent
          className="fixed h-[500px] md:[600px] top-1/2 left-1/2 scrollable -translate-x-1/2 -translate-y-1/2 w-[331px] md:min-w-[633px] md:max-w-[633px] rounded-3xl md:rounded-[34px] bg-[#F8F8F8]"
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Fixed Header */}
          <div className="flex items-center justify-between px-8 md:px-[42px] py-4">
            <DialogTitle
              className="text-2xl font-semibold"
              style={{
                fontWeight: 600,
                fontSize: "24px",
                letterSpacing: "1%",
                color: "#000000",
              }}
            >
              Edit Profile
            </DialogTitle>
          </div>

          {/* Scrollable Content */}
          <div
            className="overflow-y-auto px-8 md:px-[42px] pb-[45px] flex-1"
            style={{
              maxHeight: "calc(645px - 80px)", // Adjust based on header height
            }}
          >
            <div className="grid gap-6 py-4">
              {/* Profile Image Upload with Edit Icon */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-[100px] h-[100px] lg:w-[133px] lg:h-[133px] rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">U</span>
                  </div>
                  <button
                    className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center text-white"
                    onClick={() => {
                      /* TODO: Implement image upload */
                    }}
                  >
                    <img
                      src={EditIcon2}
                      alt="Edit"
                      style={{ display: "block" }}
                      className="w-20 h-20"
                    />
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={profileData.firstName}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      firstName: e.target.value,
                    })
                  }
                  style={{
                    height: 40,
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "1px solid #CFCFCF",
                    background: "transparent",
                  }}
                />
                <Input
                  placeholder="Last Name"
                  value={profileData.lastName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, lastName: e.target.value })
                  }
                  style={{
                    height: 40,
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "1px solid #CFCFCF",
                    background: "transparent",
                  }}
                />
              </div>

              {/* Phone Number with Country Selector */}
              <CustomPhoneInput
                value={profileData.phone}
                onChange={(phone) => setProfileData({ ...profileData, phone })}
              />

              {/* Email Input */}
              <Input
                placeholder="Email"
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                className="w-full"
                style={{
                  height: 40,
                  padding: "10px 16px",
                  borderRadius: 6,
                  border: "1px solid #CFCFCF",
                  background: "transparent",
                }}
              />

              {/* Password Label, Input, and Button */}
              <div>
                <div className="flex items-center gap-2">
                  {/*    <Input
                    id="password" // Add id to link with label
                    placeholder="********" // Updated placeholder to match image
                    type="password"
                    value={profileData.password}
                    onChange={(e) =>
                      setProfileData({ ...profileData, password: e.target.value })
                    }
                    className="flex-1" // Allow input to grow and take remaining space
                    style={{
                      height: 40,
                      padding: "10px 16px",
                      borderRadius: 6,
                      border: "1px solid #CFCFCF",
                      background: "transparent",
                    }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      width: "100%",
                    }}
                  >
                    <Label
                      htmlFor="password"
                      className="mb-2 block text-base font-normal text-black"
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                        marginBottom: 8, // Add some space below the label
                      }}
                    >
                      Password
                    </Label>
                    <div
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#747474",
                      }}
                    >
                      *********
                    </div>
                  </div>
                  <button
                    onClick={handleChangePassword}
                    style={{
                      height: 40,
                      padding: "0 20px", // Padding inside the button
                      borderRadius: 6,
                      border: "1px solid #000000",
                      color: "#000000",
                      fontFamily: "Gilroy-Regular",
                      fontWeight: 400,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      background: "transparent",
                      cursor: "pointer",
                      flexShrink: 0, // Prevent button from shrinking
                    }}
                    className="text-xs md:text-base"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              {" "}
              {/* Container for Save Changes button */}
              <button
                onClick={handleSaveProfile}
                className="px-6 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary/90 w-full" // Added w-full utility class
                style={{ height: 40 }} // Ensure height is consistent with other inputs/buttons
              >
                Save Changes
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <RequestTypeModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSellClick={handleSellRequest}
        onBuyClick={handleBuyRequest}
      />

      <Footer />
    </>
  );
};

export default Account;
