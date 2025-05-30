import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

type HeroSectionProps = {
  searchInput: string;
  setSearchInput: (val: string) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  headingContent: React.ReactNode;
  bgImage?: string;
};

export default function HeroSection({
  searchInput,
  setSearchInput,
  handleSearchSubmit,
  headingContent,
  bgImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
}: HeroSectionProps) {
  return (
    <div className="relative w-full bg-gradient-to-r from-neutral-900 to-neutral-800 py-12">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        {headingContent}
        <div className="mt-8">
          <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto">
            <div className="max-w-4xl w-full flex items-center justify-between bg-white rounded-full shadow-md overflow-hidden pl-4 pr-2 py-1">
              <div className="flex items-center flex-grow">
                <SearchIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="What do you need help with?"
                  className="w-full border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 py-2 px-0"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#003A2F] hover:bg-[#00251C] rounded-full px-6 py-2 text-white ml-2"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
