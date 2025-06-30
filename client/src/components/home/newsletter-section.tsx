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
    <div className="bg-[#101010] min-h-[524px] flex justify-center items-center px-3 py-6 md:p-10">
      <div className="w-[95%] min-h-[404px] rounded-[12px] md:rounded-[24px] bg-[#003A2F] mx-auto flex flex-col md:flex-row justify-between items-center p-5 md:p-8">
        <div className="w-full max-w-[723px] flex flex-col gap-4">
          <h2 className="font-['Gilroy-SemiBold'] font-semibold text-center md:text-left md:text-[46px] text-2xl leading-[30px] md:leading-[120%] tracking-[-1%] text-white break-words">
            Driven by Passion? Stay Updated with SheenCar!
          </h2>
          <p className="font-['Poppins'] font-normal text-sm text-center md:text-left md:text-base leading-[140%] text-white w-full max-w-[723px] break-words">
           Be the first to know about latest car listings, and exciting deals – delivered straight to your inbox!
          </p>

          <img
            className="w-full md:hidden h-auto max-h-[309px] object-contain"
            src={CarNewsLetter}
            alt="car"
          />
          <div className="flex flex-row gap-1.5 items-center md:mt-2">
            <div className="w-full lg:w-2/3">
            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-4 py-2.5 rounded-md border border-[#A2A2A2] bg-transparent text-white placeholder:text-[#A2A2A2] placeholder:font-poppins placeholder:text-base placeholder:leading-none"
            />
            </div>
            <div className="w-1/3">
            <CustomButton
              onClick={handleSubmit}
              disabled={isPending}
              customStyles={{
                width: window.innerWidth < 480 ? "100%" : "111px",
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
          </div>

          <p className="font-['Poppins'] font-[300] text-center md:text-left text-[10px] md:text-xs leading-none text-white w-full sm:w-[418px] break-words">
            By subscribing, you agree to our Privacy Notice and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="hidden lg:block w-full max-w-[469px] mt-10 md:mt-0">
          <img
            className="w-full h-auto max-h-[309px] object-contain"
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
