"use client";

import React from "react";

const BANDS = [
  "AESTHETIQUE",
  "LUMIÈRE",
  "ESSENCE",
  "SILHOUETTE",
  "ÉLÉGANCE"
];

export default function BrandLogos() {
  return (
    <section className="mt-14 mb-16 overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-24">
          {BANDS.map((brand, idx) => (
            <div
              key={idx}
              className="text-xl md:text-2xl font-sans font-bold text-emerald-800/50 cursor-default tracking-wider"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
