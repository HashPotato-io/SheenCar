import React, { useState, useEffect } from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import AvatarIcon from "../../assets/Icon/avatar.svg";

interface FormData {
  email: string;
  confirmEmail: string;
  firstName: string;
  lastName: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
}

interface FormErrors {
  [key: string]: string;
}

interface StripeCheckoutProps {
  duration: number;
  budget: number;
  carDetails: {
    make: string;
    model: string;
    year: number;
  };
  onPaymentSuccess: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  duration,
  budget,
  carDetails,
  onPaymentSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: "johndoe@email.com",
    confirmEmail: "johndoe@email.com",
    firstName: "",
    lastName: "",
    country: "United States",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Load Stripe.js with the correct protocol
    const protocol = window.location.protocol;
    const script = document.createElement("script");
    script.src = `${protocol}//js.stripe.com/v3/`;
    script.async = true;
    script.onload = () => {
      // Initialize Stripe after script loads
      // const stripe = Stripe('your-publishable-key');
      // const elements = stripe.elements();
      // const cardElement = elements.create('card');
      // cardElement.mount('#card-element');
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.confirmEmail)
      newErrors.confirmEmail = "Please confirm your email";
    if (formData.email !== formData.confirmEmail)
      newErrors.confirmEmail = "Emails do not match";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.addressLine1) newErrors.addressLine1 = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Here you would integrate with Stripe
      console.log("Processing payment with data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle successful payment
      alert("Payment processed successfully!");
      onPaymentSuccess();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const countries = ["United States", "Canada", "United Kingdom", "Australia"];
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Order Summary */}
      <div
        style={{ background: "#003A2F" }}
        className="w-2/5 bg-teal-800 text-white p-8 flex flex-col"
      >
        <button className="flex items-center text-white mb-8 hover:text-gray-200 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <img src={AvatarIcon} alt="SheenCar" className="w-6 h-6 mr-2" />

          <span
            className="font-medium"
            style={{
              fontFamily: "Gabarito",
              fontWeight: 500,
              fontSize: "15.9px",
              lineHeight: "20.45px",
              letterSpacing: "0%",
              color: "#FFFFFF",
            }}
          >
            SheenCar
          </span>
        </button>

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-12">${budget?.toFixed(2)}</h1>

          <div className="space-y-6">
            <div className="flex justify-between items-center py-2 border-b border-teal-700">
              <span>Listing Boost ({duration} days)</span>
              <span>${budget?.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-teal-700">
              <span>Subtotal</span>
              <span>$10.00</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-teal-700">
              <span>Tax</span>
              <span>$0.00</span>
            </div>

            <div className="flex justify-between items-center py-3 text-lg font-semibold">
              <span>Total due</span>
              <span>$10.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="flex-1 p-8 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="space-y-6">
            {/* Shipping Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="johndoe@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Email
                  </label>
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.confirmEmail ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="johndoe@email.com"
                  />
                  {errors.confirmEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Address
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {(errors.firstName || errors.lastName) && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName || errors.lastName}
                    </p>
                  )}

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    className={`w-full mt-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.addressLine1 ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.addressLine1 && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.addressLine1}
                    </p>
                  )}

                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2"
                    className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="ZIP"
                      className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.zip ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {(errors.city || errors.zip) && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city || errors.zip}
                    </p>
                  )}

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full mt-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>

              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    defaultChecked
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="card"
                    className="ml-2 flex items-center text-sm font-medium text-gray-900"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Card
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Information
                  </label>

                  {/* Stripe Elements would mount here */}
                  <div className="border border-gray-300 rounded-md p-3 bg-white">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="flex-1 border-none outline-none text-sm"
                      />
                      <div className="flex space-x-1">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="w-full bg-teal-800 hover:bg-teal-900 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "Pay"}
            </button>

            {/* Stripe Branding */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center text-xs text-gray-500">
                Powered by{" "}
                <span className="ml-1 font-semibold text-indigo-600">
                  Stripe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;
