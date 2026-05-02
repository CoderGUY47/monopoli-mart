"use client";

import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-rose-500 px-6 py-28 text-center">
      <h2 className="font-playfair mb-6 text-[3.5rem] leading-tight font-bold tracking-wide text-white italic md:text-6xl">
        Join our Newsletter
      </h2>
      <p className="font-outfit mx-auto mb-7 max-w-[460px] text-base leading-relaxed font-light text-white/90">
        Stay updated with our latest collections and exclusive offers.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto flex w-full max-w-[580px] items-center border border-white p-1"
      >
        <input
          type="email"
          placeholder="Email address"
          className="font-outfit flex-1 bg-transparent px-4 py-3 text-base text-white placeholder-white/80 focus:outline-none"
          required
          suppressHydrationWarning
        />
        <button
          type="submit"
          className="flex h-full items-center bg-white px-7 py-3 text-[13px] font-bold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Subscribe <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
        </button>
      </form>
    </section>
  );
}
