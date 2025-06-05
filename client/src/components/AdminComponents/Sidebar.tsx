import { Link, useLocation } from "wouter";
import sheencarLogo from "../../assets/sheencarLogo.svg";

export default function Sidebar() {
    const [location] = useLocation();
    
    const isActive = (path: string) => location === path;

    return (
        <aside  className="flex flex-col items-center bg-[#003A2F] rounded-tr-xl rounded-br-xl
                 min-h-full min-w-64 xl:min-w-68 py-4">
            <div className="my-8">
                <img src={sheencarLogo} alt="SheenCar Logo" className="w-10 md:w-40" />
            </div>

            <nav className="flex flex-col justify-center  text-left space-y-1 w-full  font-medium">
                <Link
                    href="/admin/dashboard"
                    className={`block px-3 py-2 ${isActive("/admin/dashboard") ? "bg-white text-black" : "text-white"}`}
                >
                    Dashboard
                </Link>

                <Link
                    href="/admin/users"
                    className={`block px-3 py-2 ${isActive("/admin/users") ? "bg-white text-black" : "text-white"}`}
                >
                    User Management
                </Link>

                <Link
                    href="/admin/cars"
                    className={`block px-3 py-2 ${isActive("/admin/cars") ? "bg-white text-black" : "text-white"}`}
                >
                    Car Listings Management
                </Link>
                
                <Link
                    href="/admin/dealers"
                    className={`block px-3 py-2 ${isActive("/admin/dealers") ? "bg-white text-black" : "text-white"}`}
                >
                    Dealer Management
                </Link>
                
                <Link
                    href="/admin/buy-requests"
                    className={`block px-3 py-2 ${isActive("/admin/buy-requests") ? "bg-white text-black" : "text-white"}`}
                >
                    Buy It for Me Requests
                </Link>
                
                <Link
                    href="/admin/sell-requests"
                    className={`block px-3 py-2 ${isActive("/admin/sell-requests") ? "bg-white text-black" : "text-white"}`}
                >
                   Sell It for Me Requests
                </Link>
                
                <Link
                    href="/admin/boosted-ads"
                    className={`block px-3 py-2 ${isActive("/admin/boosted-ads") ? "bg-white text-black" : "text-white"}`}
                >
                   Boosted Ads
                </Link>
                
                <Link
                    href="/admin/payments"
                    className={`block px-3 py-2 ${isActive("/admin/payments") ? "bg-white text-black" : "text-white"}`}
                >
                   Payments
                </Link>
                
                <Link
                    href="/admin/notifications"
                    className={`block px-3 py-2 ${isActive("/admin/notifications") ? "bg-white text-black" : "text-white"}`}
                >
                   Notifications
                </Link>
            </nav>
        </aside>
    );
}
