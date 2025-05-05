import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription successful!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe(email);
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">
              Driven by Passion? Stay Updated with SheenCar!
            </h2>
            <p className="mb-6 text-neutral-200">
              Subscribe to our newsletter to get the latest updates on new car listings, automotive news, and exclusive offers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="text-secondary mr-2 h-5 w-5" />
                <span>First access to premium listings</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-secondary mr-2 h-5 w-5" />
                <span>Exclusive discounts on our services</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-secondary mr-2 h-5 w-5" />
                <span>Market insights and price trends</span>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="mt-8 flex">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-l-md rounded-r-none border-0 text-neutral-800 focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-neutral-800 font-medium rounded-l-none"
                disabled={isPending}
              >
                {isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
          <div className="md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Luxury Car"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
