import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Shield, Shield as ShieldIcon, FileCheck, AlertCircle, BarChart, ListChecks, Clock } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">SheenCar's Commitment to Security</h1>
          <p className="text-gray-300">Safeguarding your information is our top priority</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-700 mb-6">
            At SheenCar, we pride on the trust and confidence that the SheenCar community places in keeping all the categorized vehicle information, personal, and privacy information safe and to do so, we've put in place the best security technologies and practices industry can offer. We're committed to protecting your personal information and designed various security measures to thwart bad usage, and safeguard your personal information.
          </p>

          {/* Security Sections */}
          <div className="space-y-8">
            {/* Governance & Compliance */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <FileCheck className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Governance</span> & Compliance
              </h2>
              <p className="text-gray-700">
                Our security program is comprehensive and complies with industry recognized security frameworks. All systems are continually assessed against security requirements to ensure compliance with our policies and external standards.
              </p>
            </div>

            {/* Risk Management */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <AlertCircle className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Risk</span> Management
              </h2>
              <p className="text-gray-700">
                Our risk management process helps us identify and manage risk on an ongoing basis. Our security team works alongside those managing our systems to help them identify, quantify, and address security risks throughout the system and application development lifecycle.
              </p>
            </div>

            {/* Vendor Security & Third-Party Assessments */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <ShieldIcon className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Vendor Security</span> & Third-Party Assessments
              </h2>
              <p className="text-gray-700 mb-4">
                We hold our vendors to the same security standards that we hold ourselves. We require our vendors to comply with best security practices and perform security reviews when onboarding new vendors.
              </p>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>We review the security practices of all of our third-party service providers.</li>
                <li>We require all vendors to report security incidents that affect SheenCar data.</li>
                <li>We assess all vendor software for secure coding practices prior to deployment to production.</li>
              </ul>
            </div>

            {/* Access Control & Identity Management */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <BarChart className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Access Control</span> & Identity Management
              </h2>
              <p className="text-gray-700">
                Access to our systems and customer data is limited by role-based controls. We implement the principle of least privilege, ensuring the minimal level of data access needed can be granted to complete your job function.
              </p>
            </div>

            {/* Data Privacy & Protection */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <ListChecks className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Data Privacy</span> & Protection
              </h2>
              <p className="text-gray-700 mb-4">
                Your data is important to us and we take steps to protect it.
              </p>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>All non-public customer data is classified as sensitive and has strict retention and usage requirements.</li>
                <li>Customer data is used only for the agreed-upon business purpose in compliance with the SheenCar policies.</li>
                <li>We protect data using encryption for data in transit and at rest, which helps prevent unauthorized access.</li>
              </ul>
            </div>

            {/* Secure Operations & Threat Monitoring */}
            <div className="border-b pb-6">
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <Clock className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Secure Operations</span> & Threat Monitoring
              </h2>
              <p className="text-gray-700">
                We monitor and run systems securely and continuously monitor for threats. Our security team is on-call 24/7/365 and responds immediately to security alerts. We deploy security tools such as threat monitoring, log management, intrusion detection, and data loss prevention solutions to maintain security.
              </p>
            </div>

            {/* Commitment to Continuous Improvement */}
            <div>
              <h2 className="flex items-center text-xl font-semibold mb-3">
                <Shield className="text-amber-500 mr-2" size={24} />
                <span className="text-amber-500">Commitment</span> to Continuous Improvement
              </h2>
              <p className="text-gray-700">
                We continually improve our security posture to stay ahead of emerging threats. Our security team works with experts across the company to ensure that our defensive countermeasures evolve and keep pace with changing technological and security landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}