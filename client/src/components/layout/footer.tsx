import { Link } from "wouter";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import TikTok from "../../assets/tiktok.svg";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-20 mb-12 p-12">
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
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <img src={TikTok} alt="TikTok" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
              Our Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  About SheenCar
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
              Important
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/security"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Visitor Agreement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Gilroy-SemiBold'] font-normal text-[18px] leading-[26px] tracking-[0%] text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Dealer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Gilroy-Regular'] font-normal text-[16px] leading-[100%] tracking-[0%] text-white hover:text-white transition-colors"
                >
                  Chat with Us
                </a>
              </li>
            </ul>
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
