import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'outline';
  label?: string;
  required?: boolean;
}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ className, variant = 'default', label, required, ...props }, ref) => {
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
        <textarea
          className={cn(
            variant === 'default' && "flex w-full border-b border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle placeholder:text-black focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-black",
            variant === 'outline' && "flex w-[750px] h-[150px] border border-[#CFCFCF] rounded-[6px] bg-transparent px-4 py-[10px] text-sm ring-offset-background placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle placeholder:text-black focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-['Poppins'] font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-black",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
CustomTextarea.displayName = "CustomTextarea"

export { CustomTextarea } 