"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-6 text-green-100" />
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with SheenCar
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get the latest car deals, market insights, and exclusive offers delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-green-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p className="text-green-100">
                You'll receive our latest updates and exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-green-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}