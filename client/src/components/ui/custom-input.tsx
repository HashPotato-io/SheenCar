import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ZipCodeIcon,
  InchIcon,
  GalIcon,
  UpIcon,
  DownIcon,
} from "@/components/icons";

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showZipCodeIcon?: boolean;
  showInchIcon?: boolean;
  showGalIcon?: boolean;
  variant?: "default" | "outline";
  label?: string;
  required?: boolean;
  iconColor?: string;
  type?: string;
  placeholderColor?: string;
  borderColor?: string;
  rightIcon?: React.ReactNode;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      className,
      type = "text",
      showZipCodeIcon,
      showInchIcon,
      showGalIcon,
      variant = "default",
      label,
      required,
      iconColor = "#003A2F",
      placeholderColor = "#696969",
      borderColor = "#CFCFCF",
      rightIcon,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleStepUp = () => {
      if (inputRef.current) {
        inputRef.current.stepUp();
        inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };

    const handleStepDown = () => {
      if (inputRef.current) {
        inputRef.current.stepDown();
        inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };

    return (
      <div className="flex flex-col gap-1 relative">
        {label && (
          <div className="flex items-center gap-1">
            <span className="font-['Poppins'] text-sm text-black">{label}</span>
            {required && <span className="text-[#DC1A1A]">*</span>}
          </div>
        )}
        {!label && required && (
          <span className="absolute left-[-12px] text-[#DC1A1A]">*</span>
        )}
        <div className="relative">
          <style>
            {`
              input[data-placeholder-color]::placeholder {
                color: ${placeholderColor} !important;
              }
            `}
          </style>
          <input
            type={type}
            data-placeholder-color
            style={{
              borderColor: borderColor
            }}
            className={cn(
              variant === "default" &&
                `flex h-10 w-full border-b bg-transparent px-3 py-2 text-sm md:text-base ring-offset-background file:border-0 file:bg-transparent  file:font-medium placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle`,
              variant === "outline" &&
                `flex h-[40px] w-full border rounded-[6px] bg-transparent px-4 py-[10px] text-sm md:text-base  ring-offset-background file:border-0 file:bg-transparent  file:font-medium placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle`,
              showZipCodeIcon && "pl-10",
              showInchIcon && "pr-10",
              showGalIcon && "pr-10",
              type === "number" &&
                "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              className
            )}
            ref={(node) => {
              // Handle both the forwarded ref and our internal ref
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              // Use the mutable ref object directly
              inputRef.current = node;
            }}
            {...props}
          />
          {type === "number" && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleStepUp}
              >
                <UpIcon />
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleStepDown}
              >
                <DownIcon />
              </button>
            </div>
          )}
          {showZipCodeIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <ZipCodeIcon width={20} height={20} fill={iconColor} />
            </div>
          )}
          {showInchIcon && (
            <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
              <InchIcon width={10} height={11} fill="#696969" />
            </div>
          )}
          {showGalIcon && (
            <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
              <GalIcon width={18} height={15} fill="#696969" />
            </div>
          )}
          {rightIcon && (
            <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
