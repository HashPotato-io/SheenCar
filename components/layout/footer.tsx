import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SheenCar</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect car. Browse thousands of listings from verified dealers and private sellers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/search" className="hover:text-white">Browse Cars</Link></li>
              <li><Link href="/new-cars" className="hover:text-white">New Cars</Link></li>
              <li><Link href="/used-cars" className="hover:text-white">Used Cars</Link></li>
              <li><Link href="/compare" className="hover:text-white">Compare Cars</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/post-ad" className="hover:text-white">Post Ad</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/services/sell-for-me" className="hover:text-white">Sell for Me</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="/security" className="hover:text-white">Security</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 SheenCar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}