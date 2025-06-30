import React from "react";
import { CustomButton } from "../ui/custom-button";
import NotificationCard from "../AdminComponents/NotificationsCard";
import ListApproved from "../../assets/list-approved.svg";
import ListRejected from "../../assets/list-rejected.svg";
import NewOffer from "../../assets/new-offer.svg";
import BoostExpire from "../../assets/boost-expire.svg"

const Notification = () => {
  const notifications = [
    {
      id: '1',
      type: 'success' as const,
      source: ListApproved,
      title: 'Listing Approved!',
      description: 'Your car listing for 2022 Toyota Corolla SE has been approved and is now live on SheenCar!',
      time: '10:30 pm',
    },
    {
      id: '2',
      type: 'expiring' as const,
      source: BoostExpire,
      title: 'Boosting Expiring Soon – Renew Now!',
      description: 'Your boosted listing for [Car Make & Model] is set to expire in 24 hours. Renew Now!',
      time: '10:30 pm',
    },
    {
      id: '3',
      type: 'rejected' as const,
      source: ListRejected,
      title: 'Listing Rejected',
      description: 'Your car listing for 2019 Honda Civic EX has been rejected because [Reason]. Resubmit the car with the necessary changes.',
      time: '10:30 pm',
    },
    {
      id: '4',
      type: 'offer' as const,
      source: NewOffer,
      title: 'New Offer Received',
      description: 'A new offer of $18,500 has been placed on your 2018 Ford Mustang GT. Keep an eye on your bids and respond to interested buyers!',
      time: '10:30 pm',
      isHighlighted: true,
      badge: '1050 + 86 Hot',
    },
 
  ];

  return (
    <div className="flex justify-center items-center">
    <div style={{ padding: "24px" }}>
      <div
       
        className="flex flex-col md:flex-row max-w-[90vw] justify-between items-center mb-6"
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "Gilroy-SemiBold, sans-serif",
            fontWeight: 400,
            fontSize: "34px",
            lineHeight: "100%",
            letterSpacing: "-1%",
            color: "#171616",
          }}
          className="text-[26px] md:text-[34px] w-full text-left"
        >
          Notifications
        </h2>
        <div className="w-full md:w-1/2  lg:w-1/4  mt-7 md:mt-0">
        <CustomButton customStyles={{ width: "100%", fontSize: "16px" }}>Mark all as read</CustomButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            icon={notification.source}
            title={notification.title}
            description={notification.description}
            time={notification.time}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Notification;
