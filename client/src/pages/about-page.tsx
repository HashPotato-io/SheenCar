import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { 
  FileText, MessageSquare, Car, Handshake, Users, Clock, 
  ShieldCheck, PieChart, Settings, Award
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div 
        className="bg-gray-900 text-white py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1560361586-8242b1fcb35a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80")' 
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Driving Dreams Forward: The Story 
            <br/>
            Behind <span className="text-amber-500">SheenCar</span>
          </h1>
        </div>
      </div>

      {/* Why Choose SheenCar */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Why <span className="text-amber-500">choose</span> SheenCar?</h2>
          <p className="text-gray-600 text-center mb-12">Your Trusted Partner for a Smarter Car Buying & Selling Experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="mb-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" className="mx-auto">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="18" r="5" fill="#d1fae5" stroke="#15803d" strokeWidth="1.5"/>
                    <path d="M14 2V8H20" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 18H20" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-amber-500 font-semibold mb-2">Verified Dealers</h3>
              <p className="text-gray-600 text-sm">Our dealers are verified for authenticity, giving you complete peace of mind</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="mb-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" className="mx-auto">
                    <circle cx="9" cy="21" r="1" fill="#15803d"/>
                    <circle cx="20" cy="21" r="1" fill="#15803d"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="8" r="6" fill="#d1fae5" stroke="#15803d" strokeWidth="1.5"/>
                    <path d="M14 8L18 8" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 6L16 10" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-amber-500 font-semibold mb-2">Smart Buying</h3>
              <p className="text-gray-600 text-sm">Browse a wide range of verified listings and drive home your perfect car</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="mb-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" className="mx-auto">
                    <path d="M22 12H17L14 21L10 3L7 12H2" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17" cy="7" r="5" fill="#d1fae5" stroke="#15803d" strokeWidth="1.5"/>
                    <path d="M17 9V5" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5L19 7" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-amber-500 font-semibold mb-2">Quick Selling</h3>
              <p className="text-gray-600 text-sm">Reach genuine buyers quickly with our simple listings process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2"><span className="text-amber-500">Who</span> We Are</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
            At SheenCar, we are passionate about connecting car buyers and sellers through a seamless, trustworthy platform. Our mission is to make car trading simple, secure, and efficient for everyone. With a commitment to innovation and customer satisfaction, SheenCar offers a safe, user-friendly environment supported by cutting-edge technology and dedicated service.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16">
            SheenCar meticulously curates a trustworthy collection of vehicles, making car buying a stress-free experience that will make you smile from ear to ear. We help buyers find their dream cars and assist sellers in connecting with genuine buyers who will appreciate their vehicles as much as they did.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="rounded-full bg-green-900/20 p-6">
                  <Handshake className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Helping Sellers Connect with Buyers</h3>
                <p className="text-gray-300">
                  We provide sellers with the tools and platform they need to showcase their vehicles effectively and connect with interested buyers who are ready to make a purchase.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="rounded-full bg-green-900/20 p-6">
                  <Car className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Empowering Buyers with Options</h3>
                <p className="text-gray-300">
                  We give buyers access to extensive vehicle listings with detailed information and our innovative comparison tool, helping them make confident decisions based on their specific requirements and preferences.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="rounded-full bg-green-900/20 p-6">
                  <Users className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Supporting Dealers in Growing Their Business</h3>
                <p className="text-gray-300">
                  We partner with dealerships to expand their reach and connect with potential customers, providing them with insights and tools to showcase their inventory and boost their sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6">
            With SheenCar we've positioned a reliable, hassle-free way to buy and sell cars.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}