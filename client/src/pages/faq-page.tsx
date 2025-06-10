import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/hero-section";
import FaqBanner from "../assets/faq-banner.png";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 3,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
  },
  {
    id: 4,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: 5,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    id: 6,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 7,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 8,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    id: 9,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer:
      "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

// Add this new component for the plus/minus icons
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

function FAQAccordion({ item }: { item: FAQItem }) {
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

export default function FAQPage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        headingContent={
          <div
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "clamp(32px, 5vw, 50px)",
              lineHeight: "120%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
              margin: "60px auto",
              padding: "0 20px",
            }}
          >
            Got <span style={{ color: "#AF8C32" }}>Questions?</span> We're here
            to answer you
            <br className="hidden sm:block" />
            every query!
          </div>
        }
        bgImage={FaqBanner}
        hideSearch={true}
      />

      {/* FAQ Section */}
      <div className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "120%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#000000",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData?.map((item, index) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
