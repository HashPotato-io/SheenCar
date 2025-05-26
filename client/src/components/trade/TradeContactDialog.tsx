import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Trade1 from "../../assets/trade-1.svg";
import ProductCard from "../cards/product-card";

interface Seller {
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  phoneNumber: string;
}

interface CarType {
  make: string;
  model: string;
  year: number;
  price: number;
  seller: Seller;
}

interface TradeContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  seller: Seller;
  car: CarType;
}

const dummyCars = [
  {
    id: 1,
    title: "Toyota Corolla SE",
    year: 2025,
    price: 22500,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Honda Civic LX",
    year: 2024,
    price: 21000,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const TradeContactDialog: React.FC<TradeContactDialogProps> = ({
  open,
  onOpenChange,
  seller,
  car,
}) => {
  const [flow, setFlow] = useState<
    "main" | "select" | "add" | "trade" | "proposal"
  >("main");
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md h-auto">
        <div className="p-6 text-center">
          {flow === "main" && (
            <>
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img src={Trade1} alt="trade" />
              </div>
              {/* Title */}
              <div
                style={{
                  fontFamily: "Gilroy-Medium, sans-serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#000000",
                }}
                className="mb-2"
              >
                Interested in this Car? Make an Offer today!
              </div>
              {/* Subtitle */}
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#585353",
                }}
                className="mb-6"
              >
                Want to trade your car for this listing?
                <br />
                Choose how you'd like to proceed.
              </div>
              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#003A2F] text-white py-3 px-4 rounded-lg font-medium transition-colors hover:bg-[#00251C] mb-2"
                  onClick={() => setFlow("select")}
                >
                  Select From Listings
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#AF8C32] text-[#AF8C32] py-3 px-4 rounded-lg font-medium transition-colors hover:bg-[#AF8C32]/10 hover:text-[#AF8C32] hover:border-[#AF8C32]"
                  onClick={() => setFlow("add")}
                >
                  Add Car for Trade
                </Button>
              </div>
              {/* Disclaimer */}
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                *If the seller allows Price Adjustment, the system will
                automatically calculate the difference based on vehicle values.
              </p>
            </>
          )}

          {flow === "select" && (
            <>
              <h2
                style={{
                  fontFamily: "Gilroy-Medium, sans-serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#171616",
                }}
                className="mb-2"
              >
                Select a Car from Your Active Listings
              </h2>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#585353",
                }}
                className="mb-6"
              >
                Choose one of your active listings to propose a trade.
              </p>
              <div className="mb-4 space-y-3">
                {dummyCars?.map((item) => (
                  <label key={item.id} className="flex w-full">
                    <input
                      type="radio"
                      name="select-car"
                      className="mr-3 accent-green-800"
                      checked={selectedCarId === item.id}
                      onChange={() => setSelectedCarId(item.id)}
                    />
                    <ProductCard
                      title={item.title}
                      year={item.year}
                      price={item.price}
                      image={item.image}
                    />
                  </label>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#585353",
                }}
                className="mb-6"
              >
                Only Cars that will keep the trade even are allowed.
              </p>
              <Button
                className="w-full bg-[#003A2F] hover:bg-[#00251C] text-white py-3 px-4 rounded-lg font-medium transition-colors mb-2"
                disabled={selectedCarId === null}
                onClick={() => setFlow("trade")}
              >
                Confirm Selection
              </Button>
              {/* <Button
                variant="ghost"
                className="w-full mt-2"
                onClick={() => setFlow("main")}
              >
                Back
              </Button> */}
            </>
          )}

          {flow === "add" && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Add a Car for Trade
              </h2>
              <p className="text-[#585353] text-sm mb-6">
                (A form to add your car details would appear here.)
              </p>
              {/* Placeholder for add car form */}
              <div className="mb-4 border rounded p-4 text-gray-500">
                [Add car for trade form goes here]
              </div>
              <Button className="w-full bg-[#003A2F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#00251C] transition-colors mb-2">
                Submit Car for Trade
              </Button>
              <Button
                variant="ghost"
                className="w-full mt-2"
                onClick={() => setFlow("main")}
              >
                Back
              </Button>
            </>
          )}

          {flow === "trade" && (
            <>
              <h2
                style={{
                  fontFamily: "Gilroy-Medium, sans-serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#171616",
                }}
                className="mb-2"
              >
                Trade Proposal Summary
              </h2>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#585353",
                }}
                className="mb-6"
              >
                You're proposing an even trade! Review the details below before
                submitting your offer.
              </p>

              <div className="mb-6">
                <div
                  style={{
                    fontFamily: "Gilroy-SemiBold, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#171616",
                  }}
                  className="text-left mb-2"
                >
                  Your Selected Car:
                </div>
                {selectedCarId && (
                  <ProductCard
                    title={
                      dummyCars.find((c) => c.id === selectedCarId)?.title || ""
                    }
                    year={
                      dummyCars.find((c) => c.id === selectedCarId)?.year || 0
                    }
                    price={
                      dummyCars.find((c) => c.id === selectedCarId)?.price || 0
                    }
                    image={
                      dummyCars.find((c) => c.id === selectedCarId)?.image || ""
                    }
                  />
                )}
              </div>
              <div className="mb-4">
                <div
                  style={{
                    fontFamily: "Gilroy-SemiBold, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#171616",
                  }}
                  className="text-left mb-2"
                >
                  To be Traded with:
                </div>
                <ProductCard
                  title={car.make + " " + car.model}
                  year={car.year}
                  price={car.price}
                  image={
                    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  }
                />
              </div>

              {/* <div className="mb-8 flex flex-col gap-2">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "18px",
                    letterSpacing: "0%",
                    color: "#585353",
                    textAlign: "left",
                  }}
                >
                  If the seller accepts your proposal, they will be required to
                  pay the following amount.
                </div>
                <div
                  style={{
                    fontFamily: "Gilroy-SemiBold, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#171616",
                    textAlign: "left",
                  }}
                >
                  Amount to Receive: $2,000
                </div>
              </div> */}

              <Button
                className="w-full bg-[#003A2F] hover:bg-[#00251C] text-white py-3 px-4 rounded-lg font-medium transition-colors mb-2"
                disabled={selectedCarId === null}
                onClick={() => {
                  setFlow("proposal");
                }}
              >
                Submit Proposal
              </Button>
              {/* <Button
                variant="ghost"
                className="w-full mt-2"
                onClick={() => setFlow("main")}
              >
                Back
              </Button> */}
            </>
          )}

          {flow === "proposal" && (
            <>
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img src={Trade1} alt="trade" />
              </div>
              {/* Title */}
              <div
                style={{
                  fontFamily: "Gilroy-Medium, sans-serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#000000",
                }}
                className="mb-2"
              >
                Trade Proposal Sent Successfully!
              </div>
              {/* Subtitle */}
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#585353",
                }}
              >
                Your trade offer has been sent to the seller. Now, just sit
                tight and wait for their response! You’ll get a notification
                once the seller reviews your proposal.
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TradeContactDialog;
