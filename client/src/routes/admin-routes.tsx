import { Switch } from "wouter";
import { ProtectedRoute } from "@/lib/protected-route";
import { Route } from "wouter";
import Dashboard from "@/AdminPages/dashboard";
import Notifications from "@/AdminPages/notifications";
import UserTablePage from "@/AdminPages/UserManagement";
import UserInsights from "@/AdminPages/UserInsights";
import CarListingManagement from "@/AdminPages/car-listing-management";


export function AdminRoutes() {
  return (
    <Switch>
       <Route path="/admin/dashboard" component={Dashboard} />
       <Route path="/admin/notifications" component={Notifications} />
        <Route path="/admin/user-management" component={UserTablePage} />
         <Route path="/admin/user-insights" component={UserInsights} />
          <Route path="/admin/car-listings" component={CarListingManagement} />
    </Switch>
  );
} 