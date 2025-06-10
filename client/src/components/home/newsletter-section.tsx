import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle } from "lucide-react";
import CarNewsLetter from "../../assets/car-newsletter.svg";
import { CustomButton } from "@/components/ui/custom-button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/newsletter/subscribe", {
        email,
      });
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
    <div
      style={{
        background: "#101010",
        minHeight: "524px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "95%",
          minHeight: "404px",
          gap: "10px",
          borderRadius: "24px",
          background: "#003A2F",
          margin: "auto",
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "723px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "clamp(24px, 5vw, 46px)",
              lineHeight: "120%",
              letterSpacing: "-1%",
              color: "#FFFFFF",
            }}
          >
            Driven by Passion? Stay Updated with SheenCar!
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "clamp(14px, 3vw, 16px)",
              lineHeight: "140%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              width: "100%",
              maxWidth: "723px",
            }}
          >
            Get exclusive access to the latest car listings, expert tips, market
            insights, and exciting deals – delivered straight to your inbox. No
            spam, just pure car goodness!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 480 ? "column" : "row",
              gap: "6px",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: window.innerWidth <= 480 ? "100%" : "263px",
                height: "40px",
                padding: "10px 16px",
                borderRadius: 6,
                border: '1px solid #A2A2A2',
                background: "transparent",
                color: "#FFFFFF",
              }}
              className="placeholder:text-[#A2A2A2] placeholder:font-poppins placeholder:text-base placeholder:leading-none"
            />
            <CustomButton
              onClick={handleSubmit}
              disabled={isPending}
              customStyles={{
                width: window.innerWidth <= 480 ? "100%" : "111px",
                height: "40px",
                gap: 8,
                borderRadius: 6,
                background: "#AF8C32",
                fontFamily: "Gilroy-Regular",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#000000",
              }}
            >
              {isPending ? "Submitting..." : "Submit"}
            </CustomButton>
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              width: "418px",
            }}
          >
            By subscribing, you agree to our Privacy Notice and consent to
            receive updates from our company.
          </div>
        </div>
        <div style={{ 
          width: "100%", 
          maxWidth: "469px",
          marginTop: window.innerWidth <= 768 ? "40px" : "0" 
        }}>
          <img
            style={{ 
              width: "100%", 
              height: "auto",
              maxHeight: "309px",
              objectFit: "contain" 
            }}
            src={CarNewsLetter}
            alt="car"
          />
        </div>
      </div>
    </div>
    /*   <section className="py-16 bg-primary text-white">
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
    </section> */
  );
}
