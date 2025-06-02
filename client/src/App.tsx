import { Switch, Route, useSearchParams, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from '@/contexts/auth-context';
import NotFound from "@/pages/not-found";
import { UserRoutes } from "./routes/user-routes";
import { DealerRoutes } from "./routes/dealer-routes";
import { AdminRoutes } from "./routes/admin-routes";
import { useEffect } from "react";


// Add ScrollToTop component
function ScrollToTop() {
  const [location] = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, searchParams]);

  return null;
}

function Router() {
  return (
    <Switch>
      {/* Admin routes */}
      <Route path="/admin/*" component={AdminRoutes} />
      
      {/* Dealer routes */}
      <Route path="/dealer/*" component={DealerRoutes} />
      
      {/* General user routes */}
      <Route path="/*" component={UserRoutes} />
      
      {/* 404 route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
