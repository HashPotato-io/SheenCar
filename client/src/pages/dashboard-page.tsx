import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import UserListings from "@/components/dashboard/user-listings";
import { Edit, UserRound, MessageSquare, Heart, LogOut } from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function DashboardPage() {
  const { user, logoutMutation } = useAuth();
  const [activeTab, setActiveTab] = useState("my-ads");

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="user-hero-section h-48 md:h-64 relative">
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="bg-white rounded-t-lg p-4 md:p-6 w-full relative -mb-6 md:-mb-8 flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-200 rounded-full overflow-hidden border-4 border-white -mt-16 md:-mt-20 relative">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.username} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserRound className="w-full h-full text-neutral-400 p-4" />
                )}
              </div>
            </div>
            <div className="flex-grow mt-4 md:mt-0 md:ml-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold font-montserrat">{user?.firstName} {user?.lastName}</h1>
                  <p className="text-neutral-500">{user?.email}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-2 md:mt-0"
                  size="sm"
                >
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-1 bg-neutral-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'my-ads' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('my-ads')}
                    >
                      My Ads
                    </li>
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'trade-deals' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('trade-deals')}
                    >
                      Trade Deals
                    </li>
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'offers' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('offers')}
                    >
                      Offers
                    </li>
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'saved-cars' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('saved-cars')}
                    >
                      Saved Cars
                    </li>
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'messages' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('messages')}
                    >
                      Messages
                    </li>
                    <li 
                      className={`px-4 py-2 cursor-pointer hover:bg-neutral-100 ${activeTab === 'account' ? 'text-primary font-medium bg-neutral-100' : ''}`}
                      onClick={() => setActiveTab('account')}
                    >
                      Account Settings
                    </li>
                    <li 
                      className="px-4 py-2 cursor-pointer hover:bg-neutral-100 text-red-500"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 inline mr-2" /> Logout
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <Label>Messages</Label>
                    </div>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                      <Label>Saved Cars</Label>
                    </div>
                    <span className="font-semibold">12</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              {activeTab === 'my-ads' && <UserListings />}
              
              {activeTab === 'trade-deals' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Trade Deals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-neutral-500 mb-4">You don't have any trade deals yet.</p>
                      <Link href="/search">
                        <Button>Browse Cars</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'offers' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Offers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-neutral-500 mb-4">You don't have any offers yet.</p>
                      <Link href="/post-ad">
                        <Button>Post Your Car</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'saved-cars' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Cars</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-neutral-500 mb-4">You haven't saved any cars yet.</p>
                      <Link href="/search">
                        <Button>Browse Cars</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'messages' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-neutral-500 mb-4">You don't have any messages yet.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'account' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-500 mb-4">Account settings coming soon.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
