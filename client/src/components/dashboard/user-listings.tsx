import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Car } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Trash2, Rocket } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BoostModal from "./boost-modal";

export default function UserListings() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showBoostModal, setShowBoostModal] = useState(false);

  const { data: userCars, isLoading } = useQuery<{
    active: Car[];
    pending: Car[];
    requests: Car[];
  }>({
    queryKey: ["/api/user/cars"],
    enabled: !!user,
  });

  const deleteMutation = useMutation({
    mutationFn: async (carId: number) => {
      await apiRequest("DELETE", `/api/cars/${carId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user/cars"] });
      toast({
        title: "Car listing deleted",
        description: "Your car listing has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to delete car listing",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleDeleteListing = (car: Car) => {
    deleteMutation.mutate(car.id);
  };

  const handleBoost = (car: Car) => {
    setSelectedCar(car);
    setShowBoostModal(true);
  };

  const handleRenewAd = async (car: Car) => {
    try {
      await apiRequest("POST", `/api/cars/${car.id}/renew`, {});
      queryClient.invalidateQueries({ queryKey: ["/api/user/cars"] });
      toast({
        title: "Ad renewed",
        description: "Your ad has been renewed successfully",
      });
    } catch (error) {
      toast({
        title: "Failed to renew ad",
        description: "An error occurred while renewing your ad",
        variant: "destructive",
      });
    }
  };

  const renderCarGrid = (cars: Car[] | undefined, type: 'active' | 'pending' | 'requests') => {
    if (!cars || cars.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-neutral-500">No {type} listings found</p>
          {type === 'active' && (
            <Button asChild className="mt-4">
              <Link href="/post-ad">Post an Ad</Link>
            </Button>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={car.images?.[0] || "https://via.placeholder.com/400x240?text=No+Image"} 
                alt={`${car.make} ${car.model}`} 
                className="w-full h-48 object-cover"
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-2 right-2"
                onClick={() => handleDeleteListing(car)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-montserrat font-bold text-lg text-neutral-800">
                {car.make} {car.model}
              </h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-neutral-600">{car.year}</span>
                <span className="font-bold text-primary">${car.price.toLocaleString()}</span>
              </div>
              
              <div className="mt-4">
                {type === 'active' && (
                  <>
                    {car.boosted ? (
                      <Button 
                        className="w-full bg-neutral-200 text-neutral-600 cursor-not-allowed"
                        disabled
                      >
                        Boosted!
                      </Button>
                    ) : (
                      <Button 
                        className="w-full"
                        onClick={() => handleBoost(car)}
                      >
                        <Rocket className="h-4 w-4 mr-2" /> Boost Ad
                      </Button>
                    )}
                  </>
                )}
                
                {type === 'active' && car.needsRenewal && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => handleRenewAd(car)}
                  >
                    Renew Ad
                  </Button>
                )}
                
                {type === 'pending' && (
                  <Button className="w-full bg-amber-500 hover:bg-amber-600" disabled>
                    Awaiting Approval
                  </Button>
                )}
                
                {type === 'requests' && (
                  <Button variant="outline" className="w-full">
                    View Request
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-montserrat">My <span className="text-secondary">Ads</span></h2>
          <Button asChild>
            <Link href="/post-ad">+ Post Ad</Link>
          </Button>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            {renderCarGrid(userCars?.active, 'active')}
          </TabsContent>
          
          <TabsContent value="pending" className="mt-6">
            {renderCarGrid(userCars?.pending, 'pending')}
          </TabsContent>
          
          <TabsContent value="requests" className="mt-6">
            {renderCarGrid(userCars?.requests, 'requests')}
          </TabsContent>
        </Tabs>
      </div>
      
      {showBoostModal && selectedCar && (
        <BoostModal 
          car={selectedCar} 
          open={showBoostModal} 
          setOpen={setShowBoostModal} 
        />
      )}
    </>
  );
}
