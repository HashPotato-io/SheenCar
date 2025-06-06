import React from "react";
import Notification from "@/components/notification/notification";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const NotificationPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Notification />
      <Footer />
    </div>
  );
};

export default NotificationPage;
