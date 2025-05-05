import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Car } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, X, Rocket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BoostModalProps {
  car: Car;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function BoostModal({ car, open, setOpen }: BoostModalProps) {
  const [days, setDays] = useState(7);
  const [budget, setBudget] = useState(100);
  const [total, setTotal] = useState(100);
  const { toast } = useToast();

  const boostMutation = useMutation({
    mutationFn: async (data: { carId: number; days: number; budget: number }) => {
      await apiRequest("POST", `/api/cars/${data.carId}/boost`, {
        days: data.days,
        budget: data.budget,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user/cars"] });
      toast({
        title: "Boost successful",
        description: `Your ad for ${car.make} ${car.model} has been boosted for ${days} days`,
      });
      setOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Boost failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "days" | "budget"
  ) => {
    const value = parseInt(e.target.value) || 0;
    
    if (type === "days") {
      setDays(value);
      // Adjust total based on days and current budget
      setTotal(Math.round((value / 7) * budget));
    } else {
      setBudget(value);
      // Adjust total based on budget and current days
      setTotal(Math.round((days / 7) * value));
    }
  };

  const handleBoost = () => {
    boostMutation.mutate({
      carId: car.id,
      days,
      budget,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Rocket className="h-5 w-5 text-secondary" />
            Customize Your Boost!
          </DialogTitle>
          <DialogDescription>
            Set your preferred duration and budget to increase your listing's visibility. The more you invest, the better your placement!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="days" className="text-sm font-medium">
              Boosting Preferences:
            </label>
            <Input
              id="days"
              type="number"
              placeholder="Days"
              min={1}
              max={30}
              value={days}
              onChange={(e) => handleInputChange(e, "days")}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium">
              $ Budget
            </label>
            <Input
              id="budget"
              type="number"
              placeholder="Budget"
              min={10}
              max={1000}
              value={budget}
              onChange={(e) => handleInputChange(e, "budget")}
            />
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold">
              ${total}
            </div>
            <div className="text-sm text-neutral-500">
              For {days} days
            </div>
          </div>
          
          <Button
            className="w-full"
            onClick={handleBoost}
            disabled={boostMutation.isPending}
          >
            {boostMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            Proceed to Pay
          </Button>
          
          <div className="text-xs text-neutral-500 text-center">
            *Towards the end of your boosting period you will be notified to renew your listing.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
