import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarFilter from "@/components/car/car-filter";
import CarCards from "@/components/cards/car-cards";
import { useMobileDevice } from "@/hooks/useMobileDevice";
import { FilterIcon } from "./icons";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  sellerId: number;
};

interface TradeCarMainProps {
  filterVisible: boolean;
  setFilterVisible: (visible: boolean) => void;
  cars: Car[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  carsCount: React.ReactNode;
}

export default function TradeCarMain({
  filterVisible,
  setFilterVisible,
  cars,
  currentPage,
  totalPages,
  handlePageChange,
  carsCount,
}: TradeCarMainProps) {
  const pageSize = 8;
  const paginatedCars = cars.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const isMobile = useMobileDevice();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <main className=" bg-neutral-50 lg:p-8">
      <div className="  lg:px-10 mt-10 md:mt-0 xl:p-0">
        {/*      <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setFilterVisible(!filterVisible)}
            className="w-full"
          >
            {filterVisible ? (
              <>
                <ChevronLeft className="mr-2 h-4 w-4" /> Hide Filters
              </>
            ) : (
              <>
                <ChevronRight className="mr-2 h-4 w-4" /> Show Filters
              </>
            )}
          </Button>
        </div> */}

        <div className="flex flex-col  lg:flex-row gap-12">
          {!isMobile ? (
            <div
              className={`xl:w-1/4 ${
                filterVisible ? "block" : "hidden"
              } lg:block`}
            >
              <CarFilter />
            </div>
          ) : null}
          <div className=" mt-4 m-5 md:m-10 lg:m-0">
            <h1 className="text-2xl  font-bold mb-6">{carsCount}</h1>
            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
                className="px-3"
                onClick={() => setIsFilterModalOpen(true)}
              >
                <FilterIcon />{" "}
                <span
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontWeight: 400,
                    fontSize: "17.56px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#595959",
                  }}
                >
                  Filters
                </span>
              </div>
            ) : null}

           

            <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
              {paginatedCars?.map((car) =>
                isMobile ? (
                  <CarCards
                    key={car?.id}
                    car={{
                      id: car.id,
                      make: car.make,
                      model: car.model,
                      year: car.year,
                      price: car.price,
                      image: car.image,
                      sellerId: car.sellerId,
                    }}
                    tiny
                    linkUrl={`/trade-car/sellers/${car?.sellerId}/cars/${car?.id}`}
                    
                  />
                ) : (
                  <CarCards
                    key={car?.id}
                    car={{
                      id: car.id,
                      make: car.make,
                      model: car.model,
                      year: car.year,
                      price: car.price,
                      image: car.image,
                      sellerId: car.sellerId,
                    }}
                    small
                    linkUrl={`/trade-car/sellers/${car?.sellerId}/cars/${car?.id}`}
                    
                  />
                )
              )}
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 py-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                <ChevronLeft className="w-4 h-4 -ml-2" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {Array?.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="icon"
                    className={`rounded-md w-8 h-8 ${
                      currentPage === pageNum
                        ? "bg-[#003A2F] text-white hover:bg-[#00251C]"
                        : "border-gray-200 text-gray-700"
                    }`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              <Button
                variant="outline"
                size="icon"
                className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4 -ml-2" />
              </Button>
            </div>
          </div>
        </div>
         <Dialog
              open={isFilterModalOpen}
              onOpenChange={setIsFilterModalOpen}
            >
              <DialogContent
                style={{
                  width: "340px",
                  padding: "30px 20px",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 16px 1px #0000001A",
                }}
                className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto"
              >
                <CarFilter />
              </DialogContent>
            </Dialog>
      </div>
    </main>
  );
}
