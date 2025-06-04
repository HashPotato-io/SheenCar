import { NavLink } from "react-router-dom";
import sheencarLogo from "../../assets/sheencarLogo.svg";

export default function Sidebar() {
    return (
        <aside  className="flex flex-col items-center bg-[#003A2F] rounded-tr-xl rounded-br-xl
                 min-h-full min-w-64 xl:min-w-68 py-4">
            <div className="my-8">
                <img src={sheencarLogo} alt="SheenCar Logo" className="w-10 md:w-40" />
            </div>

            <nav className="flex flex-col justify-center  text-left space-y-1 w-full  font-medium">
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                    end
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                    User Management
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                    Car Listings Management
                </NavLink>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                    Dealer Management
                </NavLink>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                    Buy It for Me Requests
                </NavLink>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                   Sell It for Me Requests
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                   Boosted Ads
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                   Payments
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                       `block px-3 py-2  ${isActive ? "bg-white text-black" : "text-white"
                        }`
                    }
                >
                   Notifications
                </NavLink>
            </nav>
        </aside>
    );
}
