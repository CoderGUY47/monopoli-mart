"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Heart } from "lucide-react";
import allProducts from "@/data/allProducts.json";
import { useCart } from "@/context/CartContext";

export default function AllProducts() {
  const { addToCart } = useCart();
  return (
    <section className="bg-rose-50 py-32 px-6">
      <div className="container mx-auto max-w-[1440px]">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <p className="text-gray-400 tracking-[0.3em] uppercase text-[10px] mb-3 font-bold">Catalog</p>
          <h2 className="text-5xl md:text-7xl font-playfair text-stone-800 mb-6">
            All <span className="italic font-bold">Products</span>
          </h2>
          <p className="text-gray-500 font-outfit max-w-lg leading-relaxed">
            Browse our complete collection - fans, beauty products, lifestyle essentials and more. All in one place.
          </p>
        </div>

        
        <div className="flex justify-between items-center border-y border-[#dcd6ce] py-4 mb-12">
          <span className="text-sm font-outfit text-gray-500">Showing {allProducts.length} Results</span>
          <select className="bg-transparent border-none text-sm font-outfit text-stone-800 outline-none cursor-pointer">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {allProducts.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer relative">
              
              
              <div className="relative w-full aspect-4/5 bg-white overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                
                
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 bg-white text-gray-600 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors shadow-md">
                    <Heart size={16} />
                  </button>
                </div>

                <Link href={`/product/${product.id}`} className="block w-full h-full relative">
                  <Image
                    src={
                      product.image.startsWith("products-images/")
                        ? require(`@/assets/${product.image}`).default
                        : require(`@/assets/${product.image}`).default
                    }
                    alt={product.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>

                
                <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-full bg-rose-500 text-white py-4 font-outfit text-[13px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
                  >
                    <ShoppingBag size={16} /> Add to Cart
                  </button>
                </div>
              </div>

              
              <div className="flex flex-col flex-1">
                <div className="flex text-emerald-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} strokeWidth={i < 4 ? 0 : 1.5} />
                  ))}
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-playfair text-[1.1rem] text-stone-800 font-semibold mb-2 group-hover:text-rose-500 transition-colors leading-tight">
                    {product.title}
                  </h3>
                </Link>
                <div className="text-gray-500 font-outfit text-sm font-medium mt-auto">
                  {product.price}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
