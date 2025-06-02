import { Switch } from "wouter";
import { ProtectedRoute } from "@/lib/protected-route";
import DashboardPage from "@/pages/dashboard-page";
import PostAdPage from "@/pages/post-ad-page";
import DealerCarsPage from "@/pages/dealer-cars-page";

export function DealerRoutes() {
  return (
    <Switch>
      <ProtectedRoute path="/dealer/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/dealer/post-ad" component={PostAdPage} />
      <ProtectedRoute path="/dealer/cars" component={DealerCarsPage} />
    </Switch>
  );
} 