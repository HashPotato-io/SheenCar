import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import UserProfile from "./UserProfile";
import { ChatSendIcon } from "../icons";


interface Chat {
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

interface Message {
  text: string;
  time: string;
  sender: "me" | "other";
}

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState<string>("Karen Faye");
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Record<string, Message[]>>({
    "Karen Faye": [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Pellentesque...",
        time: "12:01 pm",
        sender: "other",
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Eleifend orci...",
        time: "12:01 pm",
        sender: "me",
      },
    ],
    "Arlene McCoy": [
      {
        text: "Hi there! How can I help you today?",
        time: "12:01 pm",
        sender: "other",
      },
    ],
    "Jesse Bell": [
      {
        text: "Thanks for reaching out!",
        time: "12:01 pm",
        sender: "other",
      },
    ],
    "Brooklyn Simmons": [
      {
        text: "Hello! Nice to meet you...",
        time: "12:01 pm",
        sender: "other",
      },
    ],
    "Tori Warren": [
      {
        text: "Welcome to our chat!",
        time: "12:01 pm",
        sender: "other",
      },
    ],
  });

  const chats: Chat[] = [
    {
      name: "Arlene McCoy",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Hello! Nice to meet you...",
      time: "12:01 pm",
      unread: true,
    },
    {
      name: "Karen Faye",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hello! Nice to meet you...",
      time: "9:30 pm",
      unread: false,
    },
    {
      name: "Jesse Bell",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hello! Nice to meet you...",
      time: "12:01 pm",
      unread: true,
    },
    {
      name: "Brooklyn Simmons",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hello! Nice to meet you...",
      time: "12:01 pm",
      unread: false,
    },
    {
      name: "Tori Warren",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hello! Nice to meet you...",
      time: "12:01 pm",
      unread: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "me",
      };
      
      setChatMessages(prev => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), newMessage]
      }));
      
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[300px] xl:w-fit scrollable  bg-[#003A2F] hidden md:flex text-white  flex-col">
        <UserProfile
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
          name="John Doe"
        />

        {/* Chats Header */}
        <div className="p-4">
          <h2 className="font-['Gilroy-SemiBold'] font-normal text-[22px] leading-[100%] tracking-[-0.01em] text-white">
            Chats
          </h2>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats?.map((chat) => (
            <div
              key={chat.name}
              onClick={() => setSelectedChat(chat.name)}
              className={`flex items-center w-[300px] xl:w-[439px] h-[74px] gap-[10px] rounded-lg px-4 xl:px-[54px] py-[10px] cursor-pointer transition-colors ${
                selectedChat === chat.name
                  ? "bg-white border border-black"
                  : "bg-transparent text-white"
              }`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full"
                />
                {chat.unread && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                )}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3
                    className={`font-['Poppins'] font-medoum lg:font-semibold text-base lg:text-[18px] leading-[100%] ${
                      selectedChat === chat.name ? "text-black" : "text-white"
                    }`}
                  >
                    {chat.name}
                  </h3>
                  <span
                    className={`font-['Poppins'] font-normal text-[12px] leading-[100%] ${
                      selectedChat === chat.name ? "text-black" : "text-white"
                    }`}
                  >
                    {chat.time}
                  </span>
                </div>
                <p
                  className={`font-['Poppins'] font-normal text-[14px] leading-[100%] mt-1 ${
                    selectedChat === chat.name ? "text-black" : "text-white"
                  }`}
                >
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-transparent">
        {/* Chat Header */}
        <div className="flex flex-col items-center justify-center py-4">
          <UserProfile
            imageUrl={chats.find(chat => chat.name === selectedChat)?.avatar || ""}
            name={selectedChat}
            imageClassName="w-[75px] h-[75px] lg:w-[112.69px] lg:h-[112.69px] rounded-full border-[12px] border-[#003A2F]"
            nameClassName="md:font-['Gilroy-SemiBold'] font-normal text-base md:text-[30px] leading-[100%] tracking-[-0.01em] text-black"
          />
        </div>

        {/* Separator Line */}
        <div className="w-[90%] mx-auto border-t border-[#D7D7D7]" />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages[selectedChat]?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-xs sm:max-w-[414px]">
                <div
                  className={`px-[18px] py-[14px] rounded-[30px] font-['Poppins'] font-normal text-[14px] leading-[100%] ${
                    msg.sender === "me"
                      ? "bg-transparent text-black border border-[#D7D7D7]"
                      : "bg-[#003A2F] text-white"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <p
                  className={`font-['Poppins'] font-normal text-[12px] leading-[100%] text-[#7F7F7F] mt-4 ${
                    msg.sender === "me" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <input
              style={{ background: "transparent" }}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write something..."
              className="w-full h-[44px] px-[16px] py-[10px] border border-[#D9D9D9] rounded-[6px] focus:outline-none placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:text-[#6F6F6F]"
            />
            <button
              onClick={handleSendMessage}
              className="w-[48px] h-[44px] gap-[8px] rounded-[6px] py-[10px] px-[12px] bg-[#003A2F] text-white hover:bg-emerald-700 transition-colors"
            >
              <ChatSendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
