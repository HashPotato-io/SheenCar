import { useState } from "react";

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

function AccordionIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      {isOpen ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="#141414"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="#141414"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export function CustomAccordion({ item }: { item: AccordionItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="w-full max-w-[1164px] mx-auto bg-white rounded-lg border border-[#1414141A] shadow-[0px_8px_24px_0px_#1414140A] overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-auto min-h-[88px] flex items-center gap-4 px-4 sm:px-8 py-6 sm:py-8 hover:bg-gray-50 transition-colors"
        >
          <AccordionIcon isOpen={isOpen} />
          <span className="text-gray-700 font-medium flex-grow text-left text-sm sm:text-base">
            {item.question}
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-8 py-4 sm:py-6 border-t border-[#1414141A]">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item?.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 