"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

// This component displays the top 3 most popular products
export default function PopularProducts() {
  const { addToCart } = useCart();
  const session = authClient.useSession();
  const [localUser, setLocalUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user_profile");
    if (stored) setLocalUser(JSON.parse(stored));
  }, []);

  const user = session.data?.user || localUser;
  const [popularFans, setPopularFans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // loading the product data from the api
  useEffect(() => {
    async function fetchFans() {
      try {
        const res = await fetch("/api/fans");
        const data = await res.json();
        if (Array.isArray(data)) {
          setPopularFans(data.slice(0, 3));
        } else if (data && Array.isArray(data.fans)) {
          setPopularFans(data.fans.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFans();
  }, []);

  return (
    <section className="relative z-10 bg-rose-50 px-6 py-24">
      <div className="container mx-auto max-w-[1440px]">
        {/* header section for popular products */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-playfair mb-4 text-5xl text-stone-800 md:text-6xl">
            Popular <span className="font-bold italic">Products</span>
          </h2>
          <p className="font-outfit max-w-lg text-xl text-gray-500">
            Our most loved products, handpicked for your collection.
          </p>
        </div>

        {/* if loading is true it will show a spinner */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-rose-500 border-t-transparent"></div>
          </div>
        ) : (
          /* display the products in a responsive grid */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularFans.map((product, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* product image with hover zoom effect */}
                <div className="relative mb-6 flex h-[400px] w-full items-center justify-center overflow-hidden bg-[#f9f6f3]">
                  <Image
                    src={product.image?.startsWith("/") ? product.image : (product.image ? `/assets/${product.image}` : product.image_url)}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex grow flex-col">
                  {/* product title */}
                  <h3 className="font-playfair mb-2 line-clamp-2 text-lg leading-snug font-bold text-stone-800">
                    {product.title}
                  </h3>

                  {/* pricing section with taka sign */}
                  <div className="font-outfit mt-auto mb-6 flex flex-row items-center justify-between text-base font-medium text-gray-700">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-bangladeshi-taka-sign text-[12px]"></i>
                      <span>
                        {product.price.toString().replace(/[^0-9,]/g, "")}
                      </span>
                    </div>
                    {/* rating stars */}
                    <div className="flex items-center gap-1 text-emerald-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* action buttons for cart and details */}
                  <div className="mt-auto flex flex-col gap-2">
                    <button
                      onClick={() => {
                        /* check if user is logged in before adding to cart */
                        if (!user) {
                          toast.info("Please login to add items to cart");
                          return;
                        }
                        addToCart(product);
                      }}
                      className="font-outfit w-full bg-rose-500 px-4 py-3 text-center text-sm tracking-wider text-white uppercase transition-colors duration-300 hover:bg-rose-600"
                    >
                      Add to Cart
                    </button>
                    <Link
                      href={product.product_link || `/product/${product.id}`}
                      className="font-outfit w-full border border-rose-500 px-4 py-3 text-center text-sm tracking-wider text-rose-500 uppercase transition-colors duration-300 hover:bg-rose-500 hover:text-white"
                      onClick={(e) => {
                        if (!user) {
                          e.preventDefault();
                          toast.info("Login for product details");
                        }
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* link to see more products */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center border border-rose-500 bg-transparent px-10 py-4 font-medium text-rose-500 transition-colors hover:bg-rose-500 hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
