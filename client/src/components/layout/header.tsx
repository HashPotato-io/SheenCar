import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/auth-context";
import SheenCarLogo from "../../assets/SheenCar-Logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [, navigate] = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    {
      name: "Cars",
      children: [
        /*     { name: "Browse All Cars", href: "/search" }, */
        { name: "Trade Car", href: "/trade-car" },
        { name: "New Cars", href: "/new-cars" },
        { name: "Used Cars", href: "/used-cars" },
        { name: "Find Dealers", href: "/services/dealer" },
        /*    { name: "Certified Pre-Owned", href: "/search?condition=certified" }, */
      ],
    },
    {
      name: "Sell Your Car",
      children: [
        { name: "Post an Ad", href: "/post-ad" },
        { name: "Sell It for Me", href: "/post-ad?requestType=sell" },
      ],
    },
    {
      name: "Buyer's Tools",
      children: [
        { name: "Buy It for Me", href: "/post-ad?requestType=buy" },
        { name: "Car Comparison", href: "/compare" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src={SheenCarLogo} alt="SheenCar Logo" className="h-10" />
          </Link>
          <nav className="hidden md:flex ml-8">
            {menuItems.map((item) => (
              <div key={item.name} className="w-[200px] relative group">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-3 py-2 text-neutral-800 font-medium flex items-center"
                      style={{
                        fontFamily: "Gilroy-Regular",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "#171616",
                      }}
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem
                        style={{
                          fontFamily: "Gilroy-Regular",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                          color: "#171616",
                        }}
                        key={child.name}
                      >
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/post-ad">
            <Button
              variant="outline"
              className="hidden md:flex border-[#AF8C32] text-[#AF8C32] hover:bg-[#AF8C32] hover:text-white"
            >
              Post Ad
            </Button>
          </Link>
          {user ? (
            <Button
              onClick={handleLogout}
              style={{ background: "#761B1C", width: "120px" }}
            >
              Logout
            </Button>
          ) : (
            <Link href="/auth">
              <Button>Login</Button>
            </Link>
          )}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-6">
                {menuItems?.map((item) => (
                  <div key={item.name} className="flex flex-col space-y-2">
                    <h3 className="font-bold">{item.name}</h3>
                    <div className="flex flex-col space-y-2 ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-neutral-600 hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link href="/post-ad" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-[#AF8C32] text-[#AF8C32] hover:bg-[#AF8C32] hover:text-white"
                  >
                    Post Ad
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
