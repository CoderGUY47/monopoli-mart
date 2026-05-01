"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function PopularProducts() {
  const { addToCart } = useCart();
  const [popularFans, setPopularFans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.error("Failed to fetch fans API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFans();
  }, []);

  return (
    <section className="bg-rose-50 py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-[1440px]">
        
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-playfair text-stone-800 mb-4">
            Popular <span className="italic font-bold">Products</span>
          </h2>
          <p className="text-gray-500 font-outfit max-w-lg">
            Discover our most loved products, handpicked for you. Experinece top-tier cooling with these fan-favorites.
          </p>
        </div>

        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularFans.map((product, idx) => (
            <div key={idx} className="group relative bg-white flex flex-col p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
              
              
              <div className="relative w-full aspect-square bg-[#f9f6f3] mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image ? require(`@/assets/${product.image}`).default : product.image_url}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              
              <div className="flex flex-col grow">
                
                <div className="flex text-emerald-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                
                <h3 className="font-playfair text-lg text-stone-800 font-bold mb-2 line-clamp-2 leading-snug">
                  {product.title}
                </h3>
                
                
                <div className="text-base text-gray-700 font-outfit font-medium mb-6 mt-auto">
                  {product.price}
                </div>

                
                <div className="flex flex-col gap-2 mt-auto">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-rose-500 text-white font-outfit text-sm uppercase tracking-wider py-3 px-4 text-center transition-colors duration-300 hover:bg-rose-600"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={product.product_link || `/product/${product.id}`}
                    className="w-full border border-rose-500 text-rose-500 font-outfit text-sm uppercase tracking-wider py-3 px-4 text-center transition-colors duration-300 hover:bg-rose-500 hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
          </div>
        )}

        
        <div className="mt-16 flex justify-center">
          <Link href="/products" className="bg-transparent border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-10 py-4 inline-flex items-center font-medium transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
