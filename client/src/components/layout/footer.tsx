import { Link } from "wouter";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import TikTok from "../../assets/tiktok.svg";

// Define types for our menu items
type MenuItem = {
  title: string;
  href: string;
  isLink?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

// Define the menu sections data
const menuSections: MenuSection[] = [
  {
    title: "Our Company",
    items: [
      { title: "About SheenCar", href: "/about", isLink: true },
      { title: "Our Team", href: "/team", isLink: true },
      { title: "Advertise with SheenCar", href: "/advertise", isLink: true },
    ],
  },
  {
    title: "Important",
    items: [
      { title: "Security", href: "/security", isLink: true },
      { title: "Visitor Agreement", href: "#" },
      { title: "Fraud Awareness", href: "#" },
      { title: "Delivery", href: "#" },
      { title: "Privacy Notice", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Press", href: "#" },
      { title: "Faq", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Customer Support", href: "/contact" },
      { title: "Dealer Support", href: "#" },
      { title: "Chat with Us", href: "#" },
    ],
  },
];

// Social media links data
const socialLinks = [
  { icon: Facebook, alt: "Facebook", href: "#" },
  { icon: Instagram, alt: "Instagram", href: "#" },
  { icon: TikTok, alt: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-14 mb-12 p-12">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* <Link href="/" className="flex items-center mb-4">
              <span className="text-white font-montserrat font-bold text-xl">
                Sheen<span className="text-secondary">Car</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Your trusted platform for buying, selling, and comparing cars with ease. 
              Drive your dreams, today with confidence.
            </p> */}
            <div className="w-[345px] h-[51px] font-['Gilroy-Regular'] font-normal text-[14px] leading-[100%] tracking-[0%] text-white">
              SheenCar – Your trusted platform for buying, selling, and
              exploring cars with ease. Drive your dream, trade with confidence.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <img src={social.icon} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>

          {menuSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ minWidth: "100px" }}>
                    {item.isLink ? (
                      <Link
                        href={item.href}
                        className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #FFFFFF87",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="pt-8"
        >
          <p className="font-['Gilroy-Medium'] font-normal text-[11px] leading-[100%] tracking-[0%] text-white text-center">
            © {new Date().getFullYear()} SheenCar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
