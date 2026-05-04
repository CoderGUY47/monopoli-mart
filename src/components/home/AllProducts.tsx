"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "@/context/CartContext";
import allProducts from "@/data/allProducts.json";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { Select } from "../ui/select";

export default function AllProducts() {
  const { addToCart } = useCart();
  const currentSessionData = authClient.useSession();
  const [savedProfileFromStorage, setSavedProfileFromStorage] =
    useState<any>(null);

  useEffect(() => {
    const savedSessionString = localStorage.getItem("user_profile");
    if (savedSessionString)
      setSavedProfileFromStorage(JSON.parse(savedSessionString));
  }, []);

  const currentUserProfile =
    currentSessionData.data?.user || savedProfileFromStorage;

  return (
    <section className="bg-rose-50 px-6 py-10">
      <div className="container mx-auto max-w-[1440px]">
        {/* sorting and result count bar */}
        <div className="mb-12 flex items-center justify-between border-y border-[#dcd6ce] py-4">
          <span className="font-outfit text-sm text-gray-500">
            Showing {allProducts.length} Results
          </span>
          <Select className="font-outfit cursor-pointer border-none bg-transparent text-sm text-stone-800 outline-none">
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </Select>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex cursor-pointer flex-col"
            >
              <div className="relative mb-6 h-[400px] w-full overflow-hidden rounded-sm bg-white transition-all duration-500 group-hover:shadow-2xl">
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors hover:bg-rose-500 hover:text-white">
                    <Heart size={16} />
                  </button>
                </div>
                <Link
                  href={`/product/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative block h-full w-full"
                  onClick={(e) => {
                    if (!currentUserProfile) {
                      e.preventDefault();
                      toast.info("Login for product details");
                    }
                  }}
                >
                  <Image
                    src={product.image.startsWith("/") ? product.image : `/assets/${product.image}`}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 z-20 w-full translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); //use progation for prevent the product details page open when click on add to cart button
                      if (!currentUserProfile) {
                        toast.info("Please login to add items to cart");
                        return;
                      }
                      addToCart({ ...product, quantity: 1 });
                    }}
                    className="font-outfit flex w-full items-center justify-center gap-2 bg-rose-500 py-4 text-[11px] tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-rose-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-2 flex gap-1 text-emerald-400">
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="none" strokeWidth={1.5} />
                </div>
                <Link
                  href={`/product/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    if (!currentUserProfile) {
                      e.preventDefault();
                      toast.info("Login for product details");
                    }
                  }}
                >
                  <h3 className="font-playfair mb-2 text-[1.1rem] leading-tight font-semibold text-stone-800 transition-colors group-hover:text-rose-500">
                    {product.title}
                  </h3>
                </Link>
                <div className="font-outfit mt-auto flex items-center gap-1 text-sm font-medium text-gray-500">
                  <i className="fa-solid fa-bangladeshi-taka-sign text-[12px]"></i>
                  {product.price.toString().replace(/[^0-9,]/g, "")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
