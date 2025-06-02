import React, { useEffect } from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, title, children }: DrawerProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-40  z-40"
                onClick={onClose}
            />

            <div
                className="fixed top-0 right-0 h-full bg-white shadow-xl rounded-tl-lg rounded-bl-lg rounded-sm flex  z-50 w-80 max-w-full p-6  flex-col
                   transform transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
                onClick={(e) => e.stopPropagation()}
            ><div className=" flex justify-between items-center">
                    {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="self-end text-gray-500 font-semibold hover:text-gray-700 mb-4"
                        aria-label="Close drawer"
                    >
                        ✕
                    </button>
                </div>



                {/* Content */}
                <div className="overflow-auto">{children}</div>
            </div>
        </>
    );
}
