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
import { AccountIcon, Chat2Icon, NotificationIcon } from "../icons";

export default function Header() {
  const [, navigate] = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(user);

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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="flex-shrink-0">
              <img src={SheenCarLogo} alt="SheenCar Logo" className="h-8 md:h-10" />
            </Link>
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="px-3 py-2 text-neutral-800 font-medium flex items-center hover:bg-[#E9E9E9] data-[state=open]:bg-[#E9E9E9] transition-colors duration-200"
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
                    <DropdownMenuContent
                      className="w-[200px] p-0"
                      style={{
                        width: "200px",
                        height: "auto",
                        gap: "10px",
                        paddingTop: "8px",
                        paddingRight: "20px",
                        paddingBottom: "10px",
                        paddingLeft: "20px",
                        borderRadius: "6px",
                        background: "#FFFFFF",
                        marginTop: "20px",
                        animationDuration: "0ms",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #E5E7EB",
                      }}
                      sideOffset={5}
                    >
                      {item.children.map((child, index) => (
                        <DropdownMenuItem
                          key={child.name}
                          className="p-0 focus:bg-[#E9E9E9] hover:bg-[#E9E9E9] data-[state=open]:bg-[#E9E9E9] w-full"
                          style={{
                            fontFamily: "Gilroy-Regular",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#171616",
                            marginBottom:
                              index < item.children.length - 1 ? "10px" : "0",
                            padding: "8px 0",
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          <Link
                            href={child.href}
                            className="w-full block hover:text-inherit px-4 py-2"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </nav>
          </div>

          {/* Right side buttons and icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {user && (
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/notifications" className="hover:opacity-80">
                  <NotificationIcon />
                </Link>
                <Link href="/chat" className="hover:opacity-80">
                  <Chat2Icon />
                </Link>
                <Link href="/account" className="hover:opacity-80">
                  <AccountIcon />
                </Link>
              </div>
            )}
            
            <Link href="/post-ad" className="hidden md:block">
              <Button
                variant="outline"
                className="border-[#AF8C32] text-[#AF8C32] hover:bg-[#AF8C32] hover:text-white"
              >
                Post Ad
              </Button>
            </Link>

            {user ? (
              <Button
                onClick={handleLogout}
                className="w-[100px] md:w-[120px]"
                style={{ background: "#761B1C" }}
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
                  {user && (
                    <div className="flex items-center space-x-4 mb-4">
                      <Link href="/notifications" onClick={() => setMobileMenuOpen(false)}>
                        <NotificationIcon />
                      </Link>
                      <Link href="/chat" onClick={() => setMobileMenuOpen(false)}>
                        <Chat2Icon />
                      </Link>
                      <Link href="/account" onClick={() => setMobileMenuOpen(false)}>
                        <AccountIcon />
                      </Link>
                    </div>
                  )}
                  
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
      </div>
    </header>
  );
}
