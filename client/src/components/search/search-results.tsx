import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Car } from "@shared/schema";
import CarCard from "@/components/car/car-card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function SearchResults() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "16");
  
  // Add all filter params to the query key
  const queryParams = Array.from(searchParams.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  const { data, isLoading, error } = useQuery<{ cars: Car[], total: number }>({
    queryKey: ["/api/cars", queryParams],
  });

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  return (
    <div className="space-y-8">
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : error ? (
        <div className="bg-red-50 p-4 rounded-md text-red-500 text-center">
          <p>Failed to load search results. Please try again later.</p>
        </div>
      ) : data && data.cars.length > 0 ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {data.total} {data.total === 1 ? "Car" : "Cars"} Listed
            </h2>
            <div className="text-sm text-neutral-500">
              Showing {(page - 1) * limit + 1}-{Math.min(page * limit, data.total)} of {data.total}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={`/search?${new URLSearchParams({
                      ...queryParams,
                      page: (page - 1).toString()
                    }).toString()}`} />
                  </PaginationItem>
                )}
                
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  // Show 2 pages before and after current page
                  let pageNum = page - 2 + i;
                  
                  // Adjust if we're at the beginning or end
                  if (page < 3) {
                    pageNum = i + 1;
                  } else if (page > totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  }
                  
                  // Skip if out of range
                  if (pageNum < 1 || pageNum > totalPages) {
                    return null;
                  }
                  
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink 
                        href={`/search?${new URLSearchParams({
                          ...queryParams,
                          page: pageNum.toString()
                        }).toString()}`}
                        isActive={pageNum === page}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/search?${new URLSearchParams({
                      ...queryParams,
                      page: (page + 1).toString()
                    }).toString()}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-lg font-semibold mb-2">No cars found</h3>
          <p className="text-neutral-500">
            Try adjusting your search filters to find more results.
          </p>
        </div>
      )}
    </div>
  );
}
