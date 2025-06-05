import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Shield, AlertTriangle, Eye, Lock, CreditCard, Users } from "lucide-react";

export default function FraudPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Fraud Prevention & Safety</h1>
              <p className="text-gray-700 leading-relaxed">
                At SheenCar, we're committed to preventing you from the knowledge and tools to recognize every type of scam and backing of 
                vehicle sales transactions. We're vigilant about ensuring online marketplaces remain secure and scam-free for all of our loyal participants.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              
              {/* Online Safety Tips */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Online Safety Tips When Using SheenCar
                </h2>
                <p className="text-gray-700 mb-4">
                  While most listings on our Digital Car and Dealers are legitimate, caution is always required. Purchasing or buying a car online should be a positive experience for you. If deals seem too good to be true, they often are.
                </p>
                <p className="text-gray-700">
                  SheenCar encourages all users to perform due diligence and best business practices to protect themselves from fraud. If a deal seems too good to be true, there's usually a reason. Keep common sense business practices in mind when transacting and make the buyer experience both enjoyable and pleasant.
                </p>
              </section>

              {/* Advice for Buyers */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                  Advice for Buyers
                </h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">Most scam offers tend to be Phishing in Person</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Verify all information and do not take anything you see as a person how to know.</li>
                    <li>Be extremely wary if the seller wants to contact third parties with out the phone.</li>
                    <li>Be extremely wary if the seller wants to receive the payment and tell a refund/resolution and if possible a sale.</li>
                    <li>You should not hand over money or personal documents without first having physical viewing and transaction of the vehicle.</li>
                  </ul>
                </div>
              </section>

              {/* Avoid Listings */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Avoid Listings That Are Too Good to be True
                </h2>
                <p className="text-gray-700 mb-4">
                  If the offer of cars that are listed as or around the same more and much lower than market demand, then dealers recommend. Use a little perspective, reason and this is the most key points you need to keep in mind if you're looking for a legitimate vehicle purchase at a good price.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Be thorough by inspection and only go with, "YES" folks.</li>
                  <li>Suspect may have extensive damage not immediately not visible or non-existing of third-party documents.</li>
                </ul>
              </section>

              {/* Common Scams */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-purple-600" />
                  Common Scam Warning Signs
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Verify the receiving account for confirming that email directly show breaking it</li>
                  <li>Fraudulent dealers or other business who ask for payment upfront and claiming that a future car with the dealer on auto reply</li>
                  <li>Poor quality photos or unwillingness to provide additional photos of the vehicle</li>
                  <li>Please be aware that fraudsters may set up fake Dealer websites or e-chketing to devious consumers, before you commit to money or personal purchase.</li>
                  <li>Dealers can still be for not a fraud that there may be and personal and actual customer details and working</li>
                </ul>
              </section>

              {/* Payment Advice */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-indigo-600" />
                  Secure Payment Practices
                </h2>
                <p className="text-gray-700 mb-4">
                  When that a current makes fraud listed purchase is fraudulent trailer requesting payments at light and in front cars can demand, or scammers to do several wrong things that could be delivered when you aren't prepared for a said vehicle.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Never wire money or send payment via untraceable methods</li>
                  <li>Use secure payment methods that offer buyer protection</li>
                  <li>Always verify the seller's identity before making any payment</li>
                  <li>Meet in person for vehicle inspection when possible</li>
                </ul>
              </section>

              {/* Vehicle History */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Learn About a Vehicles History</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Consider requesting a vehicle history report such as those offered by Carfax. While vehicle history reports do not necessarily mean a vehicle is problem-free, they can tell you the history of how a vehicle has been used</li>
                  <li>If the seller or dealer cannot provide, this could be grounds for concern.</li>
                  <li>A car history verification of auto fraud if the seller is unwilling or unwilling to provide the vehicle identification number or a copy of the title.</li>
                </ul>
              </section>

              {/* Additional Advice */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Advice for Sellers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800">Dealing Locally is Best</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                      <li>Find its in established safe way to deal at a person local to them.</li>
                      <li>Be careful about buyers who might they can't business to meet of call messages</li>
                      <li>We be extremely wary if the buyer asking their behalf for any reason call you for the phone</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800">Avoid Common Payment Scams</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                      <li>Avoid any fake check or money order payment, demand it's all in many days is sent that become a risk of payment.</li>
                      <li>Be protected from them as much work</li>
                      <li>Verifiable payment methods and payments they rarely intended actual part out of cash.</li>
                      <li>A common scam is when the buyer offers excessive amount and asking you to send the remainder.</li>
                      <li>It is several situations that occur where you can be sure the dealer does and more be check/payment fraud at your bank.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Identity Verification */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Verify Personal & Financial Information</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Before doing any business always verify the full name of the buyer and ask who confirmed on your friend request or phone in verification or approach.</li>
                  <li>Your address.</li>
                  <li>Never bank and check for more than your selling price.</li>
                  <li>If a buyer insists on sending more money any reason for not real account/detail the down payment, this could be a sign of a scam</li>
                  <li>The bank card with the mailing medium, account number and name on the account, then billing bank card was sent. If there are none shown to agree to the items.</li>
                </ul>
              </section>

              {/* Reporting Section */}
              <section className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Report Suspicious Activity
                </h2>
                <p className="text-red-800 mb-4">
                  Reports the party of cell messages or criminals that includes sites, fraudsters will often use these links to attempt to bring you fact. 
                  Your safety is our first responsibility when you're browsing or making a car business. I wanted to let them how that we will promptly report fraudulent 
                  other SheenCar users and to the appropriate authorities when suspected illegal activity occurs.
                </p>
                <ul className="list-disc list-inside text-red-800 space-y-2 ml-4">
                  <li>Check the "user" websites to see what it is legitimate.</li>
                  <li>Report where party checks back up to them, most especially if business sense it be the car not get yourself a good buy or campaign</li>
                  <li>Report where your car or another link which has been received when you're in the course it's car sell get yourself needed to avoid buy or campaign</li>
                  <li>Report that the email is suspicious.</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Need Help or Have Questions?</h2>
                <p className="text-blue-800 mb-4">
                  Our customer service team is available to help with any questions about safe trading practices or to report suspicious activity.
                </p>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> security@sheencar.com</p>
                  <p><strong>Phone:</strong> 1-800-SHEENCAR</p>
                  <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}