"use client";

import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-rose-500 px-6 py-28 text-center">
      <h2 className="font-playfair mb-6 text-7xl leading-tight font-bold tracking-wide text-white italic md:text-6xl">
        Join our Newsletter
      </h2>
      <p className="font-outfit mx-auto mb-7 max-w-[800px] text-xl leading-relaxed font-light text-white/90">
        Stay updated with our latest collections and exclusive offers. Get <span className="font-bold text-white">10% off</span> on your first purchase when you subscribe to our newsletter.
      </p>

      <div className="mx-auto flex w-full max-w-[580px] items-center border border-white/50 bg-white/5 p-1 backdrop-blur-sm transition-all duration-300 focus-within:border-white focus-within:bg-white/10">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="font-outfit flex-1 bg-transparent px-6 py-4 text-lg text-white placeholder:text-white/90 focus:outline-none"
          required
          suppressHydrationWarning
        />
        <button
          type="button"
          className="flex h-full items-center bg-white px-8 py-4 text-[13px] font-bold tracking-widest text-rose-500 uppercase transition-all duration-300 hover:bg-rose-50"
        >
          Subscribe <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
