import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/hero-section";
import FaqBanner from "../assets/faq-banner.png";
import { CustomAccordion } from "@/components/custom-accordion";

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
            {faqData?.map((item) => (
              <CustomAccordion key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
