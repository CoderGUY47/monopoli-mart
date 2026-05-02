"use client";
import React from "react";

const BRANDS = ["LUMIERE", "PURE", "GLOW", "AURA", "MUSE"];

export default function BrandLogos() {
  return (
    <section className="border-y border-stone-100 bg-white py-24 select-none">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold tracking-[0.5em] text-black/40 uppercase">
            Trusted Partners
          </span>
        </div>

        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-5">
          {BRANDS.map((brand, idx) => (
            <span
              key={idx}
              className="font-playfair cursor-default text-2xl font-black tracking-tighter text-stone-200 transition-colors duration-500 hover:text-rose-500 md:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
