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
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-transparent md:h-auto md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <div className="relative h-full w-full">
                <Image
                  src={`/assets/horizontal-${num}.jpg`}
                  alt={`Background ${num}`}
                  fill
                  className="object-cover"
                  priority={num === 1}
                />

                <div className="absolute inset-0 z-10 bg-black/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 container mx-auto max-w-[1440px] px-4 pb-0 pt-16 md:px-8 md:pt-24">
        <div className="relative flex flex-col items-center">
          <div className="pointer-events-none absolute left-1/2 top-[-24%] z-0 h-[500px] w-[150%] -translate-x-1/2 rounded-b-full border-4 border-dashed border-amber-100 bg-yellow-500/10 shadow-[0_0_100px_rgba(0,0,0,0.4)] md:top-[-80%] md:h-[900px] md:w-full" />

          <animated.div className="relative mt-10 z-10 mb-16 space-y-4 text-center md:mb-24 md:space-y-6">
            <h1 className="font-playfair relative z-10 z-[20] flex w-full flex-col items-center text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
              <span className="font-playfair mb-2 text-xl font-semibold tracking-widest text-white md:mb-3 md:text-3xl lg:text-4xl">
                In this summer, you
              </span>
              <div className="relative mb-4 flex cursor-default flex-col items-center justify-center text-[15vw] font-black uppercase leading-[0.8] tracking-tighter transition-transform duration-700 sm:text-[5rem] md:mb-8 md:text-[6.5rem] md:tracking-[-0.04em] lg:text-[7.5rem]">
                <span className="mb-2 text-5xl text-white md:mb-6 md:text-7xl">
                  Have to
                </span>
                <div className="group px-4 pt-2 transition-transform duration-500">
                  <span className="text-white">Protect</span>
                </div>
              </div>
              <span className="group flex flex-wrap items-center justify-center gap-2 text-3xl font-bold italic text-white md:gap-4 md:text-6xl lg:text-7xl">
                <div className="mt-2 mr-2 hidden h-[2px] w-20 bg-rose-100 sm:block md:w-30" />
                <span className="font-outfit translate-y-1 transform text-xl font-bold uppercase tracking-[0.2em] md:text-4xl">
                  your skin.
                </span>
                <div className="mt-2 ml-2 hidden h-[2px] w-20 bg-rose-100 sm:block md:w-30" />
              </span>
            </h1>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
