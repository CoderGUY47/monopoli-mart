"use client";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { exploreProducts } from "@/data/exploreProducts";
import Image from "next/image";


export default function ExploreProducts() {
  return (
    <section className="py-24 px-6 container mx-auto text-center relative max-w-[1440px]">
      <p className="text-gray-400 tracking-[0.3em] uppercase text-[10px] mb-3">
        Products
      </p>
      <h2 className="text-[3.5rem] font-playfair text-stone-800 mb-16 tracking-tight">
        Explore <span className="italic font-bold">Products</span>
      </h2>
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <button
          id="explore-prev"
          className="w-12 h-12 rounded-full border border-rose-500 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all shrink-0 z-10"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <div className="flex-1 overflow-hidden px-4 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: "#explore-prev", nextEl: "#explore-next" }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full !pb-12"
          >
            {exploreProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center group cursor-pointer h-full">
                  <div className="relative w-full aspect-1/2 mb-10 max-w-[240px] mx-auto transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute top-4 -right-2 w-full h-full bg-black/5 blur-xl rounded-sm -z-10 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 bg-rose-50 flex items-center justify-center overflow-hidden z-10 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-[15px] bg-black/20 blur-md rounded-[100%] opacity-100 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">
                      {product.category || "SERUM"}
                    </p>
                    <h4 className="font-playfair text-[1.1rem] text-stone-800 mb-1">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 font-playfair text-sm italic">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button id="explore-next" className="w-12 h-12 rounded-full border border-rose-500 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all shrink-0 z-10">
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
      <Link href="/products" className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 inline-flex items-center font-medium transition-colors">
        Explore More <ArrowUpRight className="w-4 h-4 ml-3" />
      </Link>
    </section>
  );
}
