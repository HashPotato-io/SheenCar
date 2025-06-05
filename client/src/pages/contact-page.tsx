import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { CustomButton } from "@/components/ui/custom-button";
import CustomModal from "@/components/ui/custom-modal";
import HeroSection from "@/components/hero-section";
import { useState } from "react";
import { Mail } from "lucide-react";
import ContactImage from "../assets/contact.svg";
import ContactBanner from "../assets/contact-banner.png";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Reset form after submission
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroSection
        searchInput=""
        setSearchInput={() => {}}
        handleSearchSubmit={() => {}}
        headingContent={
          <h1 style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "-1%",
            textAlign: "center"
          }}>
            Customer Support – How Can We Assist You?
          </h1>
        }
        bgImage={ContactBanner}
        hideSearch={true}
      />

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Form */}
            <div >
              <h2
                className="text-2xl font-bold text-gray-900 mb-8"
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  fontWeight: 400,
                  fontSize: "34px",
                  lineHeight: "100%",
                  letterSpacing: "-1%",
                  color: "#171616",
                }}
              >
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-[12px]">
                  <div>
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      variant="outline"
                      style={{ width: "331px" }}
                    />
                  </div>
                  <div>
                    <CustomInput
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      variant="outline"
                      style={{ width: "331px" }}
                    />
                  </div>
                </div>

                <div>
                  <CustomTextarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    variant="outline"
                    rows={6}
                    style={{ width: "674px" }}
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
                    fontWeight: "600",
                  }}
                >
                  Submit
                </CustomButton>
              </form>
            </div>

            {/* Right Side - Car Image */}
            <img
              style={{ width: "435px", height: "435px" }}
              src={ContactImage}
              alt="contact-us"
            />
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
            Your message has been received, and our team will review it shortly.
            If necessary, we'll get back to you as soon as possible.
          </p>
        </div>
      </CustomModal>

      <Footer />
    </div>
  );
}
