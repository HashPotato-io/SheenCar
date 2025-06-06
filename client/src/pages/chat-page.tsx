import React from "react";
import ChatComponent from "@/components/chat/chat";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ChatComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage;
