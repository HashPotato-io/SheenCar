import React from "react";
import { Button } from "./button";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="icon"
          className={`rounded w-8 h-8 ${
            currentPage === i
              ? "bg-[#003A2F] text-white hover:bg-[#00251C]"
              : "border-gray-200 bg-gray-100"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <nav className="flex items-center gap-1">
      <Button
        variant="outline"
        size="icon"
        className="rounded w-8 h-8 border-gray-200 text-gray-500"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded w-8 h-8 border-gray-200 text-gray-500"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </Button>
      
      {renderPageNumbers()}
      
      <Button
        variant="outline"
        size="icon"
        className="rounded w-8 h-8 border-gray-200 text-gray-500"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded w-8 h-8 border-gray-200 text-gray-500"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </Button>
    </nav>
  );
} 