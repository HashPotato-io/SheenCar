import React, { useState } from "react";
import Header from "@/components/layout/header";
import { Link } from "react-router-dom";
interface Chat {
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: boolean;
}

export default function MobileChat() {
    const [selectedChat, setSelectedChat] = useState<string | null>(null);

    const chats: Chat[] = [
        {
            name: "Arlene McCoy",
            avatar: "https://i.pravatar.cc/150?img=1",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: true,
        },
        {
            name: "John Doe",
            avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
        {
            name: "Jerome Bell",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
        {
            name: "Brooklyn Simmons",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
        {
            name: "Wade Warren",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
        {
            name: "Brooklyn Simmons",
            avatar: "https://randomuser.me/api/portraits/women/46.jpg",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
        {
            name: "Arlene McCoy",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            lastMessage: "Hello! Nice to meet you...",
            time: "12:30 pm",
            unread: false,
        },
    ];

    return (
        <div className="w-full  mx-auto min-h-screen bg-[#003A2F] flex flex-col ">

            <Header />
            {/* Chats Header */}
            <div className="px-8 pt-8 pb-4">
                <h2 className="font-['Gilroy-SemiBold'] font-normal text-[22px] leading-[100%] tracking-[-0.01em] text-white">
                    Chats
                </h2>
            </div>

            {/* Avatars Row */}
            <div className="flex items-center gap-3 px-8 py-2 overflow-x-auto">
                {chats.slice(0, 5).map((chat, idx) => (
                    <div key={chat.name + idx} className="flex flex-col items-center">
                        <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full border-4 border-[#FFD600] object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto pb-2">
                {chats.map((chat, idx) => (
                    <div
                        key={chat.name + idx}
                        onClick={() => setSelectedChat(chat.name)}
                        className={`flex items-center gap-3 rounded-lg cursor-pointer transition-colors px-8 py-2 my-1
              ${selectedChat === chat.name
                                ? "bg-white text-black"
                                : "hover:bg-[#014C3C]"
                            }
            `}
                    >
                        <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <Link to={`/chat/${chat.name}`} >
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                                <h3
                                    className={`font-['Poppins'] font-semibold text-[16px] truncate ${selectedChat === chat.name ? "text-black" : "text-white"
                                        }`}
                                >
                                    {chat.name}
                                </h3>
                                <span
                                    className={`font-['Poppins'] font-normal text-[12px] ${selectedChat === chat.name ? "text-black" : "text-white"
                                        }`}
                                >
                                    {chat.time}
                                </span>
                            </div>
                            <p
                                className={`font-['Poppins'] font-normal text-[14px] truncate ${selectedChat === chat.name ? "text-black" : "text-white"
                                    }`}
                            >
                                {chat.lastMessage}
                            </p>
                        </div>
                        </Link>
                        {/* {chat.unread && (
                            <span className="ml-2 w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
}