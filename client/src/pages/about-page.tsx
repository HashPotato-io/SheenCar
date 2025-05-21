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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SheenCar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-50 p-4">
                  <FileText className="h-8 w-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Information</h3>
              <p className="text-gray-600">Comprehensive details about every vehicle listing to help you make informed decisions</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-50 p-4">
                  <MessageSquare className="h-8 w-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-gray-600">Connect directly with sellers to ask questions, negotiate, and finalize deals effortlessly</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-50 p-4">
                  <ShieldCheck className="h-8 w-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-gray-600">All listings undergo verification to ensure authenticity and prevent fraudulent activities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
            At SheenCar, we are passionate about connecting you to larger-than-life car choices, backed by a tailored, trustworthy approach. Our experienced team of automotive professionals work around the clock to ensure the platform offers the right user experience with the search feature and comparing options to select perfect car for any lifestyle!
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