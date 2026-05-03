"use client";

import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-rose-500 px-6 py-16 text-center md:py-28">
      <h2 className="font-playfair mb-4 text-4xl leading-tight font-bold tracking-wide text-white italic md:mb-6 md:text-6xl lg:text-7xl">
        Join our Newsletter
      </h2>
      <p className="font-outfit mx-auto mb-8 max-w-[800px] text-base leading-relaxed font-light text-white/90 md:mb-7 md:text-xl">
        Stay updated with our latest collections and exclusive offers. Get <span className="font-bold text-white">10% off</span> on your first purchase when you subscribe to our newsletter.
      </p>

      <div className="mx-auto flex w-full max-w-[580px] flex-col items-stretch gap-3 bg-transparent p-0 sm:flex-row sm:items-center sm:gap-0 sm:border sm:border-white/50 sm:bg-white/5 sm:p-1 sm:backdrop-blur-sm sm:transition-all sm:duration-300 sm:focus-within:border-white sm:focus-within:bg-white/10">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="font-outfit w-full border border-white/50 bg-white/5 px-8 py-4 text-base text-white placeholder:text-white/70 focus:border-white focus:outline-none sm:flex-1 sm:border-none sm:bg-transparent sm:px-10 sm:text-lg sm:placeholder:text-white/90 sm:focus:border-transparent"
          required
          suppressHydrationWarning
        />
        <button
          type="button"
          className="flex w-full shrink-0 items-center justify-center bg-white px-6 py-4 text-[13px] font-bold tracking-widest text-rose-500 uppercase transition-all duration-300 hover:bg-rose-50 sm:w-auto sm:h-full sm:px-8"
        >
          Subscribe <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
