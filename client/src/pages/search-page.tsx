import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CarFilter from "@/components/car/car-filter";
import SearchResults from "@/components/search/search-results";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SearchPage() {
  const [filterVisible, setFilterVisible] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">Search Cars</h1>
          
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
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`lg:w-1/4 ${filterVisible ? 'block' : 'hidden'} lg:block`}>
                <CarFilter />
            </div>
            
            <div className="lg:w-3/4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <SearchResults />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
