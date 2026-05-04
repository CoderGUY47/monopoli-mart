"use client";

import Link from "next/link";
import Image from "next/image";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const currentSessionData = authClient.useSession();
  const [savedProfileFromStorage, setSavedProfileFromStorage] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleStorageUpdate = () => {
      const savedSessionString = localStorage.getItem("user_profile");
      if (savedSessionString) {
        setSavedProfileFromStorage(JSON.parse(savedSessionString));
        // Ensure cookie is synced for server-side checks if mock admin
        if (!document.cookie.includes("mock_admin=true")) {
          document.cookie = "mock_admin=true; path=/;";
        }
      } else {
        setSavedProfileFromStorage(null);
      }
    };

    //cureent check
    handleStorageUpdate();
    //check for new profile update
    window.addEventListener("user_profile_updated", handleStorageUpdate);

    return () => {
      window.removeEventListener("user_profile_updated", handleStorageUpdate);
    };
  }, []);

  const currentUserProfile =
    currentSessionData.data?.user || savedProfileFromStorage;
  const handleSignOut = async () => {
    await authClient.signOut();
    localStorage.removeItem("user_profile");
    document.cookie = "mock_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setSavedProfileFromStorage(null);
  };

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:transition-transform after:duration-300 ${
      isActive
        ? "text-gray-900 after:scale-x-100 after:origin-bottom-left font-medium"
        : "text-gray-600 hover:text-gray-900 transition-colors after:origin-bottom-right hover:after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100"
    }`;
  };

  return (
    <nav className="relative w-full bg-rose-50">
      <div className="container mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Monopoly-Mart Logo"
            width={200}
            height={70}
            className="h-14 w-auto object-contain mix-blend-multiply md:h-20"
            priority
          />
          <p className="hidden pr-6 font-playfair text-2xl font-bold leading-relaxed text-gray-800 md:block">
            Monopoli-Mart
          </p>
        </Link>
        <div className="hidden items-center space-x-12 text-base font-normal md:flex">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about-us" className={getLinkClass("/about-us")}>
            About Us
          </Link>
          <Link href="/products" className={getLinkClass("/products")}>
            Products
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!isMounted ? (
            <div className="h-10 w-24 animate-pulse bg-gray-200"></div>
          ) : currentUserProfile ? (
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="/cart"
                className="relative flex h-[30px] w-[30px] items-center justify-center transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[11px] leading-none font-bold text-white">
                  {totalItems}
                </span>
              </Link>
              <Link
                href="/profile"
                className="relative"
                title={currentUserProfile.name || "Profile"}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={currentUserProfile?.image || ""}
                    alt={currentUserProfile.name || "User Avatar"}
                    referrerPolicy="no-referrer"
                  />
                  <AvatarFallback className="bg-gray-500 text-sm font-bold text-white">
                    {currentUserProfile?.name.charAt(0).toUpperCase() || "X"}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Link href="/" className="hidden md:block">
                <Button
                  onClick={handleSignOut}
                  className="rounded-none bg-rose-500 px-8 py-6 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-rose-600"
                >
                  Logout
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              {/* if not logged in then. it will show the signup and login button. hide the profile button */}
              <Link href="/signup" className="hidden md:block">
                <Button className="rounded-none bg-rose-500 px-8 py-6 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-rose-600">
                  Signup
                </Button>
              </Link>
              <Link href="/login">
                <Button className="group flex items-center gap-3 rounded-none bg-rose-500 px-8 py-6 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-rose-600">
                  Login
                  <div className="rounded-full bg-white p-1.5 text-rose-500 transition-colors">
                    <User className="h-4 w-4" />
                  </div>
                </Button>
              </Link>
            </div>
          )}

          <button
            className="flex items-center justify-center p-1 text-gray-800 transition-colors hover:text-rose-500 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-xl md:hidden">
          <div className="flex flex-col space-y-1 p-6">
            <Link
              href="/"
              className={`block px-4 py-3 text-lg font-medium transition-colors ${pathname === "/" ? "text-rose-500" : "text-gray-800 hover:text-rose-500"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`block px-4 py-3 text-lg font-medium transition-colors ${pathname === "/about-us" ? "text-rose-500" : "text-gray-800 hover:text-rose-500"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className={`block px-4 py-3 text-lg font-medium transition-colors ${pathname === "/products" ? "text-rose-500" : "text-gray-800 hover:text-rose-500"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            {!currentUserProfile ? (
              <Link
                href="/signup"
                className="block px-4 py-3 text-lg font-bold text-rose-500 transition-colors hover:text-rose-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Signup
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-lg font-bold text-rose-500 transition-colors hover:text-rose-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
