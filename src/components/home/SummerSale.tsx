"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SummerSale() {
  const images = [1, 2, 3, 4, 5];

  return (
    <section className="relative flex h-[450px] w-full items-center justify-center overflow-hidden bg-rose-50 md:h-[450px]">
      <div className="absolute inset-0 z-0 flex items-start opacity-99">
        <style>{`
          @keyframes scroll-infinite-bg {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider-bg-track {
            display: flex;
            width: max-content;
            animation: scroll-infinite-bg 45s linear infinite;
          }
        `}</style>

        <div className="slider-bg-track gap-0 px-2">
          {[...images, ...images, ...images].map((num, idx) => (
            <div
              key={idx}
              className="relative h-[450px] w-[300px] overflow-hidden md:w-[400px]"
            >
              <Image
                src={`/assets/horizontal-${num}.jpg`}
                alt={`Summer Backdrop ${num}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
              <div className="pointer-events-none absolute inset-0 bg-rose-500/10 mix-blend-overlay" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-center bg-black/70 p-0 shadow-2xl duration-500 md:p-0">
        <div className="flex h-[450px] w-[400px] flex-col items-center justify-center bg-black/60 p-4 md:p-5">
          <h2 className="font-playfair transform text-center text-6xl leading-24 font-extrabold tracking-widest text-white drop-shadow-md md:text-8xl">
            70% <br />
            <span className="text-8xl font-bold text-white md:text-9xl">
              Sale
            </span>
          </h2>

          <button className="mt-6 inline-flex items-center bg-black px-8 py-4 text-sm font-bold tracking-widest text-white uppercase hover:bg-white hover:text-black">
            Claim Promo
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
