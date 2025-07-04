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
      { title: "Visitor Agreement", href: "/visitor", isLink: true },
      { title: "Fraud Awareness", href: "/fraud", isLink: true },
      { title: "Delivery", href: "/delivery", isLink: true },
      { title: "Privacy Notice", href: "/privacy", isLink: true },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Press", href: "/press", isLink: true },
      { title: "FAQ", href: "/faq", isLink: true },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Customer Support", href: "/contact", isLink: true },
      { title: "Dealer Support", href: "/dealer-support" },
      { title: "Chat with Us", href: "/chat", isLink: true },
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


        <div className="flex flex-col lg:flex-row gap-14 mb-12 p-4 md:p-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              maxWidth: "335px",
            }}
          >
            <div className="w-full lg:hidden xl:block font-['Gilroy-Regular'] font-normal text-[14px] leading-[140%] tracking-[0%] text-white">
              SheenCar – Your trusted platform for buying, selling, and
              exploring cars with ease. Drive your dream, trade with confidence.
            </div>
            <div className="flex space-x-4 lg:hidden xl:block">
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

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 w-full">
            {menuSections?.map((section, index) => (
              <div key={index} className="w-full md:w-auto lg:min-w-[180px]">
                <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section?.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="whitespace-nowrap"
                    >
                      {item?.isLink ? (
                        <Link
                          href={item?.href}
                          className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[140%] tracking-[0%] text-white hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={item?.href}
                          className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[140%] tracking-[0%] text-white hover:text-white transition-colors"
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
        </div>
        <div className="w-full text-center mb-10 hidden lg:block xl:hidden font-['Gilroy-Regular'] font-normal text-base leading-[140%] tracking-[0%] text-white">
          SheenCar – Your trusted platform for buying, selling, and
          exploring cars with ease. Drive your dream, trade with confidence.
          <div className=" space-x-4 lg:flex justify-center mt-2 xl:hidden hidden">
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
