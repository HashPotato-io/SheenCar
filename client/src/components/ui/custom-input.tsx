import * as React from "react"
import { cn } from "@/lib/utils"
import { ZipCodeIcon } from "@/components/icons"

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showZipCodeIcon?: boolean;
  variant?: 'default' | 'outline';
  label?: string;
  required?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, showZipCodeIcon, variant = 'default', label, required, ...props }, ref) => {
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
          <input
            type={type}
            className={cn(
              variant === 'default' && "flex h-10 w-full border-b border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle placeholder:text-black focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-black",
              variant === 'outline' && "flex h-[40px] w-[242px] border border-[#CFCFCF] rounded-[6px] bg-transparent px-4 py-[10px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle placeholder:text-black focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-black",
              showZipCodeIcon && "pl-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {showZipCodeIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <ZipCodeIcon width={20} height={20} />
            </div>
          )}
        </div>
      </div>
    )
  }
)
CustomInput.displayName = "CustomInput"

export { CustomInput } 