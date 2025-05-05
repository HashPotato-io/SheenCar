import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-montserrat">
          Find Your <span className="text-secondary">Perfect Ride</span> - Search, Buy, and Drive Away!
        </h1>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          SheenCar helps you find the car of your dreams. Compare prices, specs, and reviews to make the best choice.
        </p>
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-full p-2 max-w-3xl mx-auto flex items-center"
        >
          <Input
            type="text"
            placeholder="What do you need help with?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-none shadow-none focus-visible:ring-0 rounded-full"
          />
          <Button type="submit" size="sm" className="rounded-full">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </form>
      </div>
    </section>
  );
}
