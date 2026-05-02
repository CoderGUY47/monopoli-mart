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
    <section className="relative container mx-auto max-w-[1440px] px-6 py-14 pt-20 text-center">
      <h2 className="font-playfair mb-10 text-6xl tracking-tight text-stone-800">
        Explore <span className="font-bold italic">Products</span>
      </h2>
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <button
          id="explore-prev"
          className="z-10 -mt-40 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/20 bg-black/5 text-black/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
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
            className="w-full pb-12!"
          >
            {exploreProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group flex h-full cursor-pointer flex-col items-center">
                  <div className="relative mx-auto mb-10 aspect-1/2 w-full max-w-[240px] transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute top-4 -right-2 -z-10 h-full w-full rounded-sm bg-black/5 blur-xl transition-colors group-hover:bg-black/10"></div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-rose-50 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover opacity-100 transition-opacity duration-500"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                    <div className="absolute -bottom-5 left-1/2 h-[15px] w-[85%] -translate-x-1/2 rounded-[100%] bg-black/20 opacity-100 blur-md transition-colors group-hover:bg-black/30"></div>
                  </div>
                  <div className="text-center">
                    <p className="mb-2 text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                      {product.category || "SERUM"}
                    </p>
                    <h4 className="font-playfair mb-1 text-[1.1rem] text-stone-800">
                      {product.name}
                    </h4>
                    <p className="font-playfair flex items-center justify-center gap-1 text-sm text-gray-600 italic">
                      <i className="fa-solid fa-bangladeshi-taka-sign text-xs"></i>
                      {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          id="explore-next"
          className="z-10 -mt-40 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/20 bg-black/5 text-black/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      <Link
        href="/products"
        className="mt-2 inline-flex items-center bg-rose-500 px-10 py-4 font-medium text-white transition-colors hover:bg-rose-600"
      >
        Explore More <ArrowUpRight className="ml-3 h-4 w-4" />
      </Link>
    </section>
  );
}
