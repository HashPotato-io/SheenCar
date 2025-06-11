import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

const VisitorAgreement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#171616] mb-2 tracking-tight">
            <span style={{ color: "#AF8C32" }}>Visitor</span>{" "}
            <span className="font-normal">Agreement</span>
          </h1>
          <p className="text-sm text-[#585353]">
            Last Updated: November 7, 2022
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-[#171616]">
            Welcome to SheenCar! By accessing or using our website, mobile
            applications, or services (collectively, the "Platform"), you agree
            to the following terms and conditions outlined in this Visitor
            Agreement. Please read them carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>1.</span> Acceptance of Terms
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              By using SheenCar, you acknowledge and agree to comply with this
              Visitor Agreement, our Privacy Notice, and any other applicable
              policies. If you do not agree with any part of these terms, please
              refrain from using our Platform.
            </p>
          </section>

          {/* 2. Use of the Platform */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>2.</span> Use of the Platform
            </h2>
            <p className="text-lg leading-relaxed text-[#171616] mb-4">
              SheenCar provides a marketplace for buying, selling, and trading
              vehicles. As a visitor, you may browse listings, explore vehicle
              information, and use other available resources. However,
              unauthorized use of the Platform, including scraping data,
              attempting to access restricted areas, or engaging in fraudulent
              activities, is strictly prohibited.
            </p>
          </section>

          {/* 3. User Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>3.</span> User Conduct
            </h2>
            <p className="text-lg leading-relaxed text-[#171616] mb-4">
              When using SheenCar, you agree to:
            </p>
            <ul className="space-y-2 text-lg leading-relaxed text-[#171616] ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Provide accurate and truthful information.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Respect the rights and privacy of other users.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Avoid posting or engaging in misleading, defamatory, or
                  harmful activities.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comply with all applicable laws and regulations.</span>
              </li>
            </ul>
          </section>

          {/* 4. Account Registration */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>4.</span> Account Registration
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              Certain features of SheenCar may require account registration. If
              you choose to register, you are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              under your account.
            </p>
          </section>

          {/* 5. Listing and Transactions */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>5.</span> Listing and Transactions
            </h2>
            <ul className="space-y-2 text-lg leading-relaxed text-[#171616]">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  SheenCar does not own or sell vehicles directly; we act as a
                  platform connecting buyers and sellers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Buyers and sellers are responsible for verifying vehicle
                  details and ensuring the legitimacy of transactions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  SheenCar is not liable for any disputes, misrepresentations,
                  or financial losses arising from transactions conducted on the
                  Platform.
                </span>
              </li>
            </ul>
          </section>

          {/* 6. Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>6.</span> Privacy and Data Protection
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              We respect your privacy and handle your data in accordance with
              our Privacy Notice. By using SheenCar, you consent to the
              collection and use of your information as described in our policy.
            </p>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>7.</span> Intellectual Property
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              All content on SheenCar, including text, images, logos, and
              software, is owned or licensed by SheenCar. You may not reproduce,
              modify, or distribute any content without prior authorization.
            </p>
          </section>

          {/* 8. Third-Party Links and Services */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>8.</span> Third-Party Links and Services
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              SheenCar may contain links to third-party websites or services. We
              are not responsible for their content, policies, or practices.
              Your interactions with third parties are at your own risk.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>9.</span> Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              SheenCar is provided "as is" without warranties of any kind. We do
              not guarantee uninterrupted service, error-free functionality, or
              the accuracy of listings. To the fullest extent permitted by law,
              SheenCar disclaims any liability for damages arising from your use
              of the Platform.
            </p>
          </section>

          {/* 10. Termination and Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>10.</span> Termination and Modifications
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              SheenCar reserves the right to modify, suspend, or terminate the
              Platform or any part of this Agreement at any time. Continued use
              of the Platform after changes constitutes acceptance of the
              revised terms.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>11.</span> Governing Law
            </h2>
            <p className="text-lg leading-relaxed text-[#171616]">
              This Agreement is governed by the laws of [Your Jurisdiction]. Any
              disputes arising from this Agreement shall be resolved in the
              appropriate courts of [Your Jurisdiction].
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-[#171616] mb-4 tracking-tight">
              <span style={{ color: "#AF8C32" }}>12.</span> Contact Us
            </h2>
            <div className="text-lg leading-relaxed text-[#171616] space-y-2">
              <p>
                If you have any questions regarding this Visitor Agreement,
                please contact us at:
              </p>
              <p>Email: [support@sheencar.com]</p>
              <p>Phone: [Insert Contact Number]</p>
              <p>Address: [Insert Physical Address]</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-lg leading-relaxed text-[#171616] text-center">
            By using SheenCar, you acknowledge that you have read, understood,
            and agreed to this Visitor Agreement.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisitorAgreement;
