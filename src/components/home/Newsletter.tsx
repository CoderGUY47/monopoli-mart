"use client";

import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-rose-500 py-28 text-center px-6">
      <h2 className="text-[3.5rem] md:text-6xl font-playfair italic text-white mb-6 font-bold tracking-wide leading-tight">
        Subscribe Our Newsletter
      </h2>
      <p className="text-white/90 max-w-[460px] mx-auto mb-12 font-outfit font-light text-[13px] leading-relaxed">
        Be the first to know about new arrivals, limited deals, and fresh drops-straight to your inbox. No spam, just heat.
      </p>
      
      <form onSubmit={(e) => e.preventDefault()} className="max-w-[480px] w-full mx-auto flex items-center border border-white p-1">
        <input 
          type="email" 
          placeholder="Your email" 
          className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/80 focus:outline-none font-outfit text-[13px]" 
          required
          suppressHydrationWarning
        />
        <button 
          type="submit"
          className="bg-white text-rose-500 px-7 py-3 text-[13px] font-bold flex items-center hover:bg-rose-50 transition-colors h-full"
        >
            Subscribe <ArrowUpRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
        </button>
      </form>
    </section>
  );
}
