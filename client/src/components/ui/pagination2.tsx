import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Pagination2Props {
  currentPage: number;
  totalPages: number ;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination2: React.FC<Pagination2Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center gap-1 py-4 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
        <ChevronLeft className="w-4 h-4 -ml-2" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
        onClick={() => onPageChange(currentPage - 1)}
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
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-md w-8 h-8 border-gray-200 text-gray-700"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
        <ChevronRight className="w-4 h-4 -ml-2" />
      </Button>
    </div>
  );
};

export default Pagination2; 