import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  },
  {
    id: 3,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
  },
  {
    id: 4,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    id: 5,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
  },
  {
    id: 6,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    id: 7,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  },
  {
    id: 8,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
  },
  {
    id: 9,
    question: "consectetur, adipisci velit, sed quia non numquam eius modi?",
    answer: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  }
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-700 font-medium pr-4">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' 
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="text-yellow-400">Questions?</span> We're here to answer you
            <br />
            every query!
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {faqData.map((item, index) => (
                <FAQAccordion key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}