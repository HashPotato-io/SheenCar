import React, { useState } from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import DealCard from '@/components/deal-card';
import CloseAdModal from './modals/CloseAdModal';
import AcceptTradeModal from './modals/AcceptTradeModal';
import NoItemsFound from './no-items-found';


// Define the interface for deal data
interface Deal {
  id: number;
  user: {
    name: string;
    avatar?: string;
  };
  tradeWith: string;
  priceAdjustment: number;
  status: 'pending' | 'accepted' | 'rejected';
  message?: string;
  date: string;
}

// Dummy data for deals
const dummyDeals: Deal[] = [
  {
    id: 1,
    user: {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    tradeWith: "Toyota Camry 2023",
    priceAdjustment: 25000,
    status: "pending",
    message: "I'm interested in trading my Honda Civic for your Toyota Camry. Would you be open to this trade?",
    date: "2024-03-15"
  },
  {
    id: 2,
    user: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    tradeWith: "BMW X5 2022",
    priceAdjustment: 55000,
    status: "accepted",
    message: "I can offer my Mercedes GLE plus $5000 for your BMW X5.",
    date: "2024-03-14"
  },
  {
    id: 3,
    user: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    tradeWith: "Tesla Model 3 2023",
    priceAdjustment: 45000,
    status: "rejected",
    message: "Would you consider trading for my Audi A4 with some additional cash?",
    date: "2024-03-13"
  }
];

interface DealDetailsViewProps {
  onCloseTrade: () => void;
  onViewProductDetails: () => void;
  sellerId: string;
  carId: string;
}

const DealDetailsView: React.FC<DealDetailsViewProps> = ({
  onCloseTrade,
  onViewProductDetails,
  sellerId,
  carId
}) => {
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  // Add this function to handle product details view
  const handleViewProductDetails = () => {
    const isCarAvailable = false;

    if (isCarAvailable) {
      //Todo: Implement the logic to view product details
    } else {
      setShowUnavailableModal(true);
    }
  };

  return (
    <div className='flex flex-col gap-6 px-5'>
      <div className='flex flex-col md:flex-row md:justify-between mb-8 md:items-center'>
          <div className='flex flex-col gap-4'>
          <h1
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "-1%",
              color: "#000000",
            }}
            className='text-[26px] md:text-[40px]'
          >
            Deals <span style={{ color: "#AF8C32" }}>Received</span>
          </h1>
          <div
            style={{
              fontFamily: "Gilroy-Medium",
              fontWeight: 400,
       
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#939393",
            }}
            className='text-sm lg:text-lg mb-4 md:mb-0'
          >
            *To chat with sender, click on sender name.
          </div>
        </div>
        <div 
        className='flex gap-4 md:flex-row flex-col md:items-center'>
          <CustomButton
            customStyles={{  height: "40px" }}
            onClick={onViewProductDetails}
          >
            View Product Details
          </CustomButton>
          <CustomButton
            variant="outline"
            customStyles={{
              height: "40px",
            }}
            onClick={() => setShowCloseModal(true)}
          >
            Close Trade
          </CustomButton>
        </div>
      </div>

      {/* Deal Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {dummyDeals.length > 0 ? (
          dummyDeals.map((deal) => (
            <DealCard
              key={deal.id}
              user={deal.user}
              tradeWith={deal.tradeWith}
              priceAdjustment={deal.priceAdjustment}
              onViewDetails={handleViewProductDetails}
              onAccept={() => {
                setSelectedDeal(deal);
                setShowAcceptModal(true);
              }}
              onReject={() => {
                setSelectedDeal(deal);
                setShowRejectModal(true);
              }}
              sellerId={sellerId}
              carId={carId}
            />
          ))
        ) : (
          <NoItemsFound title="No deals found" />
        )}
      </div>

      <AcceptTradeModal
        isOpen={showAcceptModal}
        onClose={() => setShowAcceptModal(false)}
        onConfirm={() => {
          console.log("Accept deal:", selectedDeal?.id);
        }}
        onChatWithBuyer={() => {
          console.log("Chat with buyer:", selectedDeal?.user.name);
          setShowAcceptModal(false);
        }}
      />

      <CloseAdModal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        onConfirm={() => {
          console.log("Reject deal:", selectedDeal?.id);
          setShowRejectModal(false);
        }}
        daysActive={0}
        title="Are You Sure You Want to Reject This Proposal?"
        message="This action cannot be undone. Once rejected, the buyer will be notified and the proposal will be marked as closed."
        confirmButtonText="Reject Proposal"
      />

      <CloseAdModal
        isOpen={showCloseModal}
        onClose={() => setShowCloseModal(false)}
        onConfirm={() => {
          onCloseTrade();
          setShowCloseModal(false);
        }}
        daysActive={5}
        title="Close This Trade?"
        message="This trade has been active for 5 days. You may close it now and reopen it once later. After reopening, it must stay open for another 5 days before a final closure."
        confirmButtonText="Close Trade"
      />

      {/* Add new modal for unavailable car */}
      <CloseAdModal
        isOpen={showUnavailableModal}
        onClose={() => setShowUnavailableModal(false)}
        onConfirm={() => {
          console.log("Reject proposal due to unavailable car");
          setShowUnavailableModal(false);
        }}
        daysActive={0}
        title="Buyer's Car is No Longer Available"
        message="This car is no longer available for trade."
        confirmButtonText="Reject Proposal"
      />
    </div>
  );
};

export default DealDetailsView; 