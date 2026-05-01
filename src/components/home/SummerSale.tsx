"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SummerSale() {
  const images = [1, 2, 3, 4, 5];

  return (
    <section className="relative w-full overflow-hidden bg-rose-50 h-[450px] md:h-[450px] flex items-center justify-center">
      
      <div className="absolute inset-0 flex items-start z-0 opacity-99">
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
              className="relative w-[300px] md:w-[400px] h-[450px] overflow-hidden"
            >
              <Image
                src={require(`@/assets/horizontal-${num}.jpg`).default}
                alt={`Summer Backdrop ${num}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      
      <div className="relative z-10 bg-black/70 w-full p-0 md:p-0 shadow-2xl flex flex-col items-center justify-center duration-500">
        <div className="bg-rose-500/50 w-[400px] h-[450px] flex flex-col p-4 md:p-5 items-center justify-center">
        <h2 className="text-6xl md:text-8xl font-extrabold font-playfair text-white text-center transform leading-24 tracking-widest drop-shadow-md">
          70% <br />
          <span className="text-white font-bold text-8xl md:text-9xl">Sale</span>
        </h2>

        <button className="mt-6 bg-black hover:bg-white text-white hover:text-black px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center">
          Claim Promo
          <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        </div>
      </div>
    </section>
  );
}
