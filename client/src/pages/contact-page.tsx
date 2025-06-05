import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { CustomButton } from "@/components/ui/custom-button";
import CustomModal from "@/components/ui/custom-modal";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Reset form after submission
    setFormData({
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80")' 
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Dealer</span> Support Center – We're 
            <br />
            Here to Help
          </h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      variant="outline"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <CustomInput
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      variant="outline"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <CustomTextarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    variant="outline"
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  />
                </div>

                <CustomButton 
                  type="submit"
                  customStyles={{ 
                    width: "100%", 
                    height: "50px",
                    backgroundColor: "#003A2F",
                    color: "white",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontWeight: "600"
                  }}
                >
                  Submit
                </CustomButton>
              </form>
            </div>

            {/* Right Side - Car Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div 
                  className="w-80 h-80 rounded-full bg-cover bg-center shadow-lg"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        width="max-w-md"
      >
        <div className="text-center p-6">
          {/* Close button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-green-600" />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Thanks for Reaching Out!
          </h3>
          
          {/* Message */}
          <p className="text-gray-600 mb-6">
            Your message has been received, and our team will review it shortly. If necessary, we'll get back to you as soon as possible.
          </p>
        </div>
      </CustomModal>

      <Footer />
    </div>
  );
}