"use client";

import Link from "next/link";
import Image from "next/image";
import { User, ShoppingBag } from "lucide-react";
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
  const [savedProfileFromStorage, setSavedProfileFromStorage] =
    useState<any>(null);

  useEffect(() => {
    const handleStorageUpdate = () => {
      const savedSessionString = localStorage.getItem("user_profile");
      if (savedSessionString) {
        setSavedProfileFromStorage(JSON.parse(savedSessionString));
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
    <nav className="w-full bg-rose-50">
      <div className="container mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Monopoly-Mart Logo"
            width={200}
            height={70}
            className="h-20 w-auto object-contain mix-blend-multiply"
            priority
          />
          <p className="font-playfair pr-6 text-2xl leading-relaxed font-bold text-gray-800">
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

        {/* if logged in then. it will show the card profile button. hide the signup and login button */}
        {currentUserProfile ? (
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
            <Link href="/">
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
            <Link href="/signup">
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
      </div>
    </nav>
  );
}
