"use client";
import React, { useEffect, useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imageSpring = useSpring({
    transform: `translateY(${scrollY * 0.08}px)`,
    config: { mass: 1, tension: 200, friction: 50 },
  });

  const statsSpring = useSpring({
    transform: `translateY(${scrollY * -0.04}px)`,
    config: { mass: 1, tension: 200, friction: 50 },
  });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent">
      
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <div className="relative w-full h-full">
                <Image
                  src={require(`@/assets/horizontal-${num}.jpg`).default}
                  alt={`Background ${num}`}
                  fill
                  className="object-cover"
                  priority={num === 1}
                />
                
                <div className="absolute inset-0 bg-black/40 z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pt-24 pb-0 px-8 relative container mx-auto max-w-[1440px] z-10">
        <div className="flex flex-col items-center relative">
          
          <div className="absolute top-[-50%] md:top-[-80%] left-1/2 -translate-x-1/2 w-full h-[900px] md:w-full md:h-[900px] bg-yellow-500/10 border-4 border-dashed border-amber-100 rounded-b-full z-0 shadow-[0_0_100px_rgba(0,0,0,0.4)] pointer-events-none" />

          <animated.div className="text-center space-y-6 mb-24 relative z-10">
            <h1 className="flex flex-col items-center text-center font-playfair drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] w-full relative z-10 z-[20]">
              <span className="text-xl md:text-3xl lg:text-4xl font-playfair text-white font-semibold tracking-widest mb-2 md:mb-3">
                In this summer, you
              </span>
              <div className="relative flex flex-col items-center justify-center text-[10vw] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black uppercase leading-[0.8] tracking-tighter md:tracking-[-0.04em] transition-transform duration-700 cursor-default mb-4 md:mb-8">
                <span className="text-white text-7xl mb-4 md:mb-6">
                  Have to
                </span>
                <div className="px-4 pt-2 transition-transform duration-500 group">
                  <span className="text-white">Protect</span>
                </div>
              </div>
              <span className="text-4xl md:text-6xl lg:text-7xl text-white italic font-bold flex flex-wrap items-center justify-center gap-4 group">
                <div className="w-20 md:w-30 h-[2px] bg-rose-100 hidden sm:block mr-2 mt-2" />
                <span className="font-outfit font-bold text-2xl md:text-4xl uppercase tracking-[0.2em] transform translate-y-1">
                  your skin.
                </span>
                <div className="w-20 md:w-30 h-[2px] bg-rose-100 hidden sm:block ml-2 mt-2" />
              </span>
            </h1>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
