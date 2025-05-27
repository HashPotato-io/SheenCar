import { useState } from "react";
import { NewCarIcon, UsedCarIcon } from "../icons";

interface SearchToggleProps {
  onToggle?: (value: "new" | "used") => void;
}

export function SearchToggle({ onToggle }: SearchToggleProps) {
  const [activeOption, setActiveOption] = useState<"new" | "used">("new");

  const handleToggle = (option: "new" | "used") => {
    setActiveOption(option);
    onToggle?.(option);
  };

  return (
    <div className="flex items-center justify-center w-[344px] h-[68px] gap-[7.43px] p-[5.95px_5.2px] rounded-[40.89px] bg-[#F8F8F8] shadow-[0px_4px_4px_0px_#0000001F] absolute left-1/2 -translate-x-1/2 -top-[34px]">
      <button
        onClick={() => handleToggle("new")}
        className={`flex-1 h-full rounded-[34.44px] transition-all flex items-center justify-center gap-2 ${
          activeOption === "new" ? "bg-[#003A2F] shadow-sm" : "bg-transparent"
        }`}
      >
        <NewCarIcon className={activeOption === "new" ? "text-white" : ""} fill={activeOption === "new" ? "white" : "black"} />
        <span className={`font-['Gilroy-SemiBold'] text-base leading-[100%] align-middle ${
          activeOption === "new" ? "text-white" : "text-black"
        }`}>New Cars</span>
      </button>
      <button
        onClick={() => handleToggle("used")}
        className={`flex-1 h-full rounded-[34.44px] transition-all flex items-center justify-center gap-2 ${
          activeOption === "used" ? "bg-[#003A2F] shadow-sm" : "bg-transparent"
        }`}
      >
        <UsedCarIcon className={activeOption === "used" ? "text-white" : ""} fill={activeOption === "used" ? "white" : "black"} />
        <span className={`font-['Gilroy-SemiBold'] text-base leading-[100%] align-middle ${
          activeOption === "used" ? "text-white" : "text-black"
        }`}>Used Cars</span>
      </button>
    </div>
  );
}
