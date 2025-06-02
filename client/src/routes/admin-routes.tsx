import { Switch } from "wouter";
import { ProtectedRoute } from "@/lib/protected-route";
import DashboardPage from "@/pages/dashboard-page";


export function AdminRoutes() {
  return (
    <Switch>
      <ProtectedRoute path="/admin/dashboard" component={DashboardPage} />
    </Switch>
  );
} 