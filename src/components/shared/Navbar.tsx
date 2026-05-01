"use client";

import Link from "next/link";
import Image from "next/image";
import { User, ShoppingBag} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="w-full bg-rose-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-[1440px]">
        <Link href="/" className="flex items-center">
          <Image 
            src={require("@/assets/logo.png").default} 
            alt="Monopoly-Mart Logo" 
            width={280} 
            height={100} 
            className="object-contain h-30 w-auto mix-blend-multiply" 
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-12 text-base font-normal">
          <Link href="/" className="relative text-gray-900 pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:origin-bottom-left after:scale-x-100 after:transition-transform after:duration-300">
            Home
          </Link>
          <Link href="/about-us" className="relative text-gray-600 hover:text-gray-900 transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:origin-bottom-right hover:after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            About Us 
          </Link>
          <Link href="/products" className="relative text-gray-600 hover:text-gray-900 transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:origin-bottom-right hover:after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            Products
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/signup">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-none font-bold uppercase tracking-wider text-xs transition-all">
              Signup
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-none font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2">
              Login <User className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/cart" className="relative w-[30px] h-[30px] flex items-center justify-center transition-colors" aria-label="Shopping Cart">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center leading-none">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}