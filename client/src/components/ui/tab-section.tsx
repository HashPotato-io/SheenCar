import React from "react";
import ProductCardVariant2, {
  ButtonState,
} from "@/components/cards/product-card-variant-2";
import Pagination2 from "@/components/ui/pagination2";
import { useMobileDevice } from "@/hooks/useMobileDevice";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  status: string;
  buttonState: string;
  dealType?: "sell" | "buy";
  tabType: string;
  isTraded?: boolean;
  tradeAmount?: number;
}

interface TabSectionProps {
  tabList: string[];
  selectedTab: number;
  tabFade: boolean;
  currentPage: number;
  totalPages: number;
  getCurrentPageItems: () => Car[];
  onTabClick: (index: number) => void;
  onPageChange: (page: number) => void;
  renderCustomContent?: <T extends Car>(items: T[]) => React.ReactNode;
  hidePagination?: boolean;
}

const TabSection: React.FC<TabSectionProps> = ({
  tabList,
  selectedTab,
  tabFade,
  currentPage,
  totalPages,
  getCurrentPageItems,
  onTabClick,
  onPageChange,
  renderCustomContent,
  hidePagination = false,
}) => {
  const isMobile = useMobileDevice();
  // Add function to get status based on tab
  const getStatusForTab = (
    tab: string
  ): "active" | "completed" | "closed" | "pending" => {
    switch (tab) {
      case "Active":
        return "active";
      case "Pending":
        return "pending";
      case "Closed":
        return "closed";
      case "Request":
        // For Request tab, we'll need to determine status based on buttonState
        return "completed"; // Default for Request tab
      default:
        return "active";
    }
  };

  return (
    <>
      {/* Tab Buttons */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 hide-scrollbar">
        {tabList?.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => onTabClick(idx)}
            className={`
              min-w-[102px] h-[34px] md:w-[210px] md:h-[44px]
              rounded-full border border-[#003A2F]
              ${
                selectedTab === idx
                  ? "bg-[#003A2F] text-white"
                  : "bg-white text-[#003A2F]"
              }
              font-medium text-sm md:text-lg
              px-5 md:px-6
              cursor-pointer
              transition-all duration-300
              outline-none
              whitespace-nowrap
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className={`
          min-h-[120px]
          transition-opacity duration-300
          ${tabFade ? "opacity-0" : "opacity-100"}
        `}
      >
        {renderCustomContent ? (
          renderCustomContent(getCurrentPageItems())
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 place-items-center md:place-items-start">
            {getCurrentPageItems()?.map((car) =>
              isMobile ? (
                <ProductCardVariant2
                  key={car.id}
                  car={car}
                  linkUrl={`/car/${car.id}`}
                  buttonState={car.buttonState as ButtonState}
                  status={
                    car.status as "active" | "completed" | "closed" | "pending"
                  }
                  dealType={car?.dealType}
                  tiny
                />
              ) : (
                <ProductCardVariant2
                  key={car.id}
                  car={car}
                  linkUrl={`/car/${car.id}`}
                  buttonState={car.buttonState as ButtonState}
                  status={
                    car.status as "active" | "completed" | "closed" | "pending"
                  }
                  dealType={car?.dealType}
                />
              )
            )}
          </div>
        )}
        {!hidePagination && (
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </>
  );
};

export default TabSection;
