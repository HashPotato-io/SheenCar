import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Car, Handshake, Award, Search, Star, TrendingUp } from "lucide-react";

export default function AdvertisePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          
          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              SheenCar provides businesses, dealerships, and automotive brands with the opportunity to reach a highly engaged audience 
              of car buyers and sellers. Our platform offers targeted advertising solutions that maximize visibility and drive results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-16 max-w-6xl mx-auto">
            
            {/* Helping Dealers Expand Their Reach */}
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-yellow-100 p-6 rounded-full">
                    <Handshake className="w-16 h-16 text-yellow-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-100 p-3 rounded-full">
                    <Car className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Helping Dealers Expand Their Reach
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Dealerships can showcase their inventory with featured listings, ensuring their 
                  vehicles appear at the top of search results. With our Dealer Packages, 
                  businesses can access premium placement and advertising tools to connect 
                  with serious buyers.
                </p>
              </div>
            </div>

            {/* Empowering Brands with High-Impact Advertising */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-blue-100 p-6 rounded-full">
                    <Award className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-100 p-3 rounded-full">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Empowering Brands with High-Impact Advertising
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Automotive service providers, insurance companies, and car accessory 
                  brands can leverage banner ads, sponsored content, and custom promotions 
                  to engage a focused audience of car enthusiasts and buyers.
                </p>
              </div>
            </div>

            {/* Boosting Individual Sellers' Visibility */}
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-green-100 p-6 rounded-full">
                    <Search className="w-16 h-16 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-100 p-3 rounded-full">
                    <Car className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Boosting Individual Sellers' Visibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Private sellers can enhance their listings with Boosted Ads, giving them priority 
                  placement and increased exposure to potential buyers.
                </p>
              </div>
            </div>

          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advertise with SheenCar?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of automotive businesses that trust SheenCar to reach their target audience effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Visibility</h3>
              <p className="text-gray-600">Get your listings seen by thousands of potential buyers every day.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Placement</h3>
              <p className="text-gray-600">Featured listings appear at the top of search results.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeted Audience</h3>
              <p className="text-gray-600">Reach serious car buyers and automotive enthusiasts.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}