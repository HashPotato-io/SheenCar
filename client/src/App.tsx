import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import SearchPage from "@/pages/search-page";
import CarDetailsPage from "@/pages/car-details-page";
import ComparePage from "@/pages/compare-page";
import DashboardPage from "@/pages/dashboard-page";
import PostAdPage from "@/pages/post-ad-page";
import NewCarsPage from "@/pages/new-cars-page";
import SecurityPage from "@/pages/security-page";
import AboutPage from "@/pages/about-page";
import TeamPage from "@/pages/team-page";
import FindDealersPage from "@/pages/find-dealers-page";
import DealerProfilePage from "@/pages/dealer-profile-page";
import { ProtectedRoute } from "./lib/protected-route";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/new-cars" component={NewCarsPage} />
      <Route path="/cars/:id" component={CarDetailsPage} />
      <Route path="/compare" component={ComparePage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/services/dealer" component={FindDealersPage} />
      <Route path="/services/dealer/:id" component={DealerProfilePage} />
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/post-ad" component={PostAdPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
