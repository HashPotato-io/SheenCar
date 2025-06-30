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
import ContactModalImage from "../assets/contact-modal.svg"

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
          <div
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              textAlign: "center",
              color: "#FFFFFF",
              width: "100%",
              maxWidth: "802px",
              margin: "90px auto",
              padding: "0 20px",
            }}
          >
            <span style={{ color: "#AF8C32" }}>Customer</span> Support – How Can
            We Assist You?
          </div>
        }
        bgImage={ContactBanner}
        hideSearch={true}
      />

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Form */}
            <div className="w-full">
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
                <div className="flex flex-col md:flex-row gap-[12px]">
                  <div className="w-full md:w-1/2">
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      variant="outline"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <CustomInput
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      variant="outline"
                      style={{ width: "100%" }}
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
                    style={{ width: "100%" }}
                  />
                </div>

                <CustomButton
                  type="submit"
                  customStyles={{
                    width: "100%",
                    height: "50px",
                  }}
                >
                  Submit
                </CustomButton>
              </form>
            </div>

            {/* Right Side - Car Image */}
            <img
              className="w-full hidden lg:block lg:w-[435px] h-auto lg:h-[435px] object-contain"
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
        width="max-w-[419px] w-[90%]"
        title="Thanks for Reaching Out!"
        icon={ContactModalImage}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-[339px]">
          {/* Message */}
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "22px",
              textAlign: "center",
              color: "#585353",
            }}
          >
            Your message has been received, and our team will review it shortly.
            If necessary, we'll get back to you as soon as possible.
          </p>
        </div>
      </CustomModal>

      <Footer />
    </div>
  );
}
