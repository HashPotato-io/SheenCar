import React from "react";
import { Dialog, DialogContent } from "./dialog";
import { X } from "lucide-react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: string;
  title?: string;
  children: React.ReactNode;
  width?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  icon,
  title,
  children,
  width = "max-w-[419px]",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent
        className={`
          rounded-2xl
          md:p-8 
          relative 
          fixed 
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2
          max-h-[95vh]
          overflow-y-auto
          transition-all
          duration-300
          ease-in-out
            w-[90vw] sm:w-auto
          ${width}
          
          scrollable
        `}
      >
        {/*         <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button> */}

        {icon && (
          <div className="flex justify-center mb-6">
            <img src={icon} alt="modal-icon" />
          </div>
        )}

        {title && (
          <h2
            className="text-center text-[22px] md:text-[26px] mb-4"
            style={{
              fontFamily: "Gilroy-Medium",
              fontWeight: 400,
              lineHeight: "100%",
              color: "#000000",
            }}
          >
            {title}
          </h2>
        )}

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
