import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  AlertTriangle,
  Shield,
  FileCheck,
  AlertCircle,
  UserCheck,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import TeamBanner from "../assets/team-banner.png";
import { useState } from "react";
import FraudBanner from "../assets/fraud-banner.png";

type FraudSection = {
  icon: React.ElementType;
  title: string;
  highlightedWord: string;
  description: string;
  listItems?: string[];
};

const fraudSections: FraudSection[] = [
  {
    icon: AlertTriangle,
    title: "Common Fraud Types",
    highlightedWord: "Common Fraud",
    description:
      "Be aware of these common fraud schemes in the automotive industry:",
    listItems: [
      "Fake vehicle listings with attractive prices",
      "Requests for advance payments or deposits",
      "Pressure to complete transactions quickly",
      "Sellers avoiding in-person meetings",
      "Requests to communicate outside the platform",
    ],
  },
  {
    icon: Shield,
    title: "Safe Trading Practices",
    highlightedWord: "Safe Trading",
    description: "Follow these essential practices to protect yourself:",
    listItems: [
      "Always meet in person to inspect the vehicle",
      "Verify the seller's identity and vehicle documentation",
      "Use SheenCar's secure payment system",
      "Never share personal financial information",
      "Trust your instincts - if it seems too good to be true, it probably is",
    ],
  },
  {
    icon: UserCheck,
    title: "Seller Verification",
    highlightedWord: "Seller Verification",
    description:
      "Before proceeding with any transaction, verify the seller's credentials:",
    listItems: [
      "Check seller's profile and history on SheenCar",
      "Verify contact information and business details",
      "Look for verified dealer badges",
      "Review seller's ratings and reviews",
      "Confirm vehicle documentation matches seller information",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure Payment Guidelines",
    highlightedWord: "Secure Payment",
    description:
      "Protect your financial information with these payment guidelines:",
    listItems: [
      "Use only SheenCar's approved payment methods",
      "Never send money through wire transfers or gift cards",
      "Keep all payment records and receipts",
      "Be cautious of requests for partial payments",
      "Verify payment confirmation through official channels",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Safety",
    highlightedWord: "Communication",
    description:
      "Stay safe while communicating with potential buyers or sellers:",
    listItems: [
      "Use SheenCar's messaging system for all communications",
      "Be wary of requests to communicate through external platforms",
      "Never share personal financial information",
      "Keep all communication records",
      "Report suspicious behavior immediately",
    ],
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    highlightedWord: "Document Verification",
    description: "Always verify these important documents:",
    listItems: [
      "Vehicle registration and title",
      "Service history and maintenance records",
      "Insurance documentation",
      "Seller's identification",
      "Any relevant warranties or guarantees",
    ],
  },
];

export default function FraudPage() {
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "20px 0",
            }}
            className="w-full px-4 md:px-0"
          >
            <div
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 50px)",
                lineHeight: "120%",
                letterSpacing: "-1%",
                textAlign: "center",
                color: "#FFFFFF",
              }}
              className="w-full md:w-auto"
            >
              Stay Alert: Protect Yourself from{" "}
              <span style={{ color: "#AF8C32" }}>Fraud</span>
            </div>
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF",
              }}
              className="w-full md:w-[878px] text-base md:text-xl"
            >
              Learn how to spot scams, avoid fraudulent transactions, and trade
              safely on SheenCar.
            </div>
          </div>
        }
        bgImage={FraudBanner}
        hideSearch={true}
      />

      {/* Main Content */}
      <div className="flex-grow bg-white p-4 md:p-[24px]">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "0%",
                color: "#171616",
                marginBottom: "24px",
              }}
              className="text-base md:text-xl"
            >
              At SheenCar, we're committed to ensuring you have the knowledge
              and tools to navigate every step of your car-buying or selling
              journey safely. Whether you're negotiating, financing, trading, or
              reselling—whether with a dealer or a private seller—your security
              is our priority.
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "0%",
                color: "#171616",
              }}
            >
              While most listings and inquiries on SheenCar are genuine, it's
              important to stay vigilant against fraudulent activity. Some
              individuals may post fake listings to scam buyers, while others
              may approach legitimate sellers with deceptive offers. We
              encourage all users to exercise caution and follow best practices
              to protect themselves from fraud. If a deal seems too good to be
              true, it probably is. Stay informed, trade confidently, and follow
              our fraud prevention tips to ensure a secure and hassle-free
              experience.
            </p>
          </div>

          {/* Fraud Sections */}

          {/* Additional Content Sections */}
          <div className="space-y-8 mt-12">
            {/* Advice for Buyers */}
            <div className="border-b pb-6">
              <h2
                style={{
                  fontFamily: "Gilroy-Bold",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  color: "#000000",
                  marginBottom: "16px",
                }}
                className="text-lg md:text-xl"
              >
                Advice for <span style={{ color: "#AF8C32" }}>Buyers</span>
              </h2>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Inspect the Car, Preferably in Person
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  Be wary of sellers who refuse to meet in person, face to face.
                </li>
                <li>
                  Use caution if the seller only wants to communicate via email
                  or text message.
                </li>
                <li>
                  Be extremely wary if the seller refuses to or claims they
                  cannot talk on the phone.
                </li>
                <li>
                  If possible, have a car mechanic join you and inspect the
                  vehicle before you pay to complete a sale.
                </li>
                <li>
                  Exercise caution if the seller states the vehicle must be
                  shipped or is currently not in their physical possession.
                </li>
              </ul>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Avoid Listings That Are Too Good to Be True
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  Ask for popular sports cars and SUVs priced at half of what
                  they're worth are almost always lures used by scam artists.
                  Use a price check tool to get an approximate idea of an
                  automobile's worth before responding to a suspicious listing.
                </li>
                <li>
                  If you have suspicions about a listing or Cars.com, please do
                  not hesitate to contact our Fraud Prevention Department. We
                  can be reached at fraud@cars.com or 888-780-1288.
                </li>
                <li>
                  Exercise extreme caution before wiring any deposits using
                  Western Union, MoneyGram, PayPal, Bitcoin and other
                  cryptocurrencies, escrow services or gift cards.
                </li>
                <li>
                  The safest way to purchase a car is in person using cash in a
                  public place. However, if you must wire funds, please make
                  sure you verify the receiving account by contacting the bank
                  directly prior to doing so.
                </li>
                <li>
                  We never recommend doing business with an overseas car dealer
                  or seller. Sending money in any form overseas will likely
                  result in losing all of it. Western Union and MoneyGram are
                  popular for internet scams because the funds are generally
                  untraceable and unavailable by law enforcement or individual
                  card/bank.
                </li>
                <li>
                  Please be aware that fraudsters may set up fake escrow
                  services in an attempt to deceive consumers. Before you commit
                  to using any escrow service, we recommend researching the
                  service thoroughly online and through the state licensing
                  authority that has licensed the company.
                </li>
              </ul>

              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  marginBottom: "16px",
                }}
                className="text-sm md:text-lg"
              >
                Note that current online fraud trend involves a fraudulent
                seller requesting payment via gift cards from popular stores or
                websites. If you encounter a seller who proposes payment through
                this method, please cut off all communication with the seller
                and reach out to us.
              </p>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Learn About a Vehicle's History
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  Consider purchasing a vehicle history report such as those
                  offered by Carfax. While vehicle history reports do not
                  necessarily include every piece of information about a used
                  car, they can be a helpful tool to identify major issues or
                  defects, general location and more.
                </li>
                <li>
                  It can be indicative of auto fraud if the seller is unable or
                  unwilling to provide the vehicle identification number or a
                  copy of the title.
                </li>
              </ul>
            </div>

            {/* Advice for Sellers */}
            <div className="border-b pb-6">
              <h2
                style={{
                  fontFamily: "Gilroy-Bold",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  color: "#000000",
                  marginBottom: "16px",
                }}
                className="text-lg md:text-xl"
              >
                Advice for <span style={{ color: "#AF8C32" }}>Sellers</span>
              </h2>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Dealing Locally Is Best
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  The safest and recommended way to deal is in person, face to
                  face.
                </li>
                <li>
                  Use caution if the buyer only wants to communicate via email
                  or text message.
                </li>
                <li>
                  Avoid buyers who are currently out of the country or claim to
                  reside overseas.
                </li>
                <li>
                  Be extremely wary if the buyer refuses to or claims he or she
                  cannot talk on the phone.
                </li>
              </ul>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Avoid Complicated Payment Schemes
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  As the one selling, you are in control. Always state your
                  preferred method of payment and be suspicious of a payment
                  process that involves third parties in any way.
                </li>
                <li>
                  Exercise caution with payment processes that involve prepaid
                  debit or gift cards.
                </li>
                <li>
                  Note that an online fraud trend involves the fraudster sending
                  you a cashier's check for more than the purchase amount of
                  your car and asking you to send the difference back to them
                  via wire, gift card or some other means. These cashier's
                  checks are almost always counterfeit and your bank will hold
                  you liable for all losses incurred.
                </li>
              </ul>

              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#171616",
                  marginBottom: "8px",
                }}
                className="text-base md:text-lg"
              >
                Verify Payment
              </h3>
              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  Do not transfer the title of your car to the buyer until their
                  check has cleared or you have otherwise received full payment
                  for your vehicle.
                </li>
                <li>Never accept a check for more than your asking price.</li>
                <li>
                  You should always verify the authenticity of any cashier's or
                  certified check with the issuing bank.
                </li>
                <li>
                  Do not rely on the phone number printed on the check; look up
                  the issuing bank's phone number yourself if you plan to call.
                </li>
                <li>
                  The bank can verify the routing number, account number and
                  name on the account. The issuing bank will tell you if there
                  are funds available to cover the designated amount.
                </li>
              </ul>
            </div>

            {/* Phishing Scams */}
            <div className="border-b pb-6">
              <h2
                style={{
                  fontFamily: "Gilroy-Bold",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  color: "#000000",
                  marginBottom: "16px",
                }}
                className="text-lg md:text-xl"
              >
                Phishing <span style={{ color: "#AF8C32" }}>Scams</span>
              </h2>

              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  marginBottom: "16px",
                }}
                className="text-sm md:text-lg"
              >
                Always be wary of text messages or emails that include links.
                Fraudsters will often use these links to attempt to bring you to
                a fake version of the site. The purpose of this is to obtain
                your login credentials in order to use your account to post
                fraudulent listings. If you receive an email that includes
                links, we recommend taking the following precautions to avoid
                falling victim to them:
              </p>

              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                className="text-sm md:text-lg"
              >
                <li>
                  Check the "from" address to ensure that it is legitimate.
                </li>
                <li>
                  Hover over the links, but don't click on them. When hovering
                  over a link you will generally receive a small pop-up message
                  that displays the URL the link will take you to. If this looks
                  suspicious, do not click the link.
                </li>
                <li>
                  Analyze the greeting and grammar. If the email is vague (e.g.,
                  "Hello, Valued Customer") or the grammar is poor, odds are
                  higher that the email is illegitimate.
                </li>
              </ul>

              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  marginBottom: "16px",
                }}
                className="text-sm md:text-lg"
              >
                While the above data fraud awareness steps should help bring
                some protection against phishing scams, there is no way to 100%
                guarantee an email's legitimacy. Generally, the safest option is
                to not click on any links and to go directly to Cars.com within
                your web browser. If you ever have any hesitation or think
                something looks suspicious, please feel free to forward it us.
              </p>
            </div>

            {/* Other Helpful Information */}
            <div>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  color: "#000000",
                  marginBottom: "16px",
                }}
              >
                Other Helpful{" "}
                <span style={{ color: "#AF8C32" }}>Information</span>
              </h2>

              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  marginBottom: "16px",
                }}
                className="text-sm md:text-lg"
              >
                We do not get involved in transactions between buyers and
                sellers. Any correspondence you have regarding a particular
                vehicle occurs directly between you and the seller.
              </p>

              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  marginBottom: "16px",
                }}
              >
                We will never ask you to provide personal or financial
                information via email. If you receive an unsolicited email that
                claims to be from sheencar.com, reach out to us to verify it
                prior to taking any other action. This includes requests for
                information such as:
              </p>

              <ul
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  color: "#171616",
                  paddingLeft: "20px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <li>Username or password</li>
                <li>Bank account information</li>
                <li>Credit card information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
