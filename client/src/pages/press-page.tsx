import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' 
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Driving the <span className="text-yellow-400">Future</span> of Car Buying & Selling
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover how SheenCar is reshaping the auto marketplace through smart tech, trusted listings,
            <br />
            and a people-first platform.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              From individual car owners to professional dealers, SheenCar empowers users 
              with a seamless digital platform for posting, trading, and discovering cars across 
              America.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                9,500+
              </div>
              <p className="text-gray-700 font-medium">Total Cars Listed</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                5,200+
              </div>
              <p className="text-gray-700 font-medium">Active Listings</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                850+
              </div>
              <p className="text-gray-700 font-medium">Dealers Onboarded</p>
            </div>

            {/* Row 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                17,000+
              </div>
              <p className="text-gray-700 font-medium">Offers Made</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                20+
              </div>
              <p className="text-gray-700 font-medium">Team Members</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                2025
              </div>
              <p className="text-gray-700 font-medium">Year Founded</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}