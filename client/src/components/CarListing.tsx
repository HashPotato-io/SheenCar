import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarFilter from "@/components/car/car-filter";
import CarCards from "@/components/cards/car-cards";

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
  carsCount
}: TradeCarMainProps) {
  const pageSize = 8;
  const paginatedCars = cars.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <main className="flex-1 bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <div className="lg:hidden mb-4">
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
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div
            className={`lg:w-1/4 ${
              filterVisible ? "block" : "hidden"
            } lg:block`}
          >
            <CarFilter />
          </div>
          <div className="mt-[10px]">
            <h1 className="text-2xl font-bold mb-6">
              {carsCount}
            </h1>
            <div className="flex gap-4 flex-wrap -mx-2">
              {paginatedCars?.map((car) => (
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
                  linkUrl={`/trade-car/sellers/${car?.sellerId}/cars/${car?.id}`}
                  small
                />
              ))}
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
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
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
      </div>
    </main>
  );
} 