"use client";

import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import leftCard from "@/assets/left-comment-card.png";
import rightCard from "@/assets/right-comment-card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    initials: "JA",
    name: "Jessica Alexandra",
    rating: 4,
    text: "The bag looks even better in person. It instantly leveled up my outfit-now I can't go anywhere without it.",
  },
  {
    id: 2,
    initials: "LA",
    name: "Louisa Aurora",
    rating: 4,
    text: "The bag looks even better in person. It instantly leveled up my outfit-now I can't go anywhere without it.",
  },
  {
    id: 3,
    initials: "DH",
    name: "Devina Hermansyah",
    rating: 4,
    text: "The bag looks even better in person. It instantly leveled up my outfit-now I can't go anywhere without it.",
  },
  {
    id: 4,
    initials: "RM",
    name: "Rachel Monroe",
    rating: 5,
    text: "Absolutely love the quality. The packaging was beautiful and delivery was fast. Will definitely buy again.",
  },
  {
    id: 5,
    initials: "SK",
    name: "Sophia Kim",
    rating: 5,
    text: "Such a stunning piece. It exceeded my expectations. My friends can't stop complimenting it every time I wear it.",
  },
  {
    id: 6,
    initials: "NP",
    name: "Nina Patel",
    rating: 4,
    text: "Great quality and exactly as described. Really happy with my purchase and the customer service was excellent.",
  },
];

export default function Testimonials() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const portraitSpring = useSpring({
    transform: `translateY(${scrollY * -0.06}px)`,
    config: { mass: 1, tension: 180, friction: 55 },
  });

  return (
    <>
      
      <section className="bg-rose-500 relative mt-[180px] mb-[120px] z-30 overflow-visible py-20">
        <div className="container mx-auto px-8 max-w-[1440px] relative">
          <div className="grid grid-cols-3 gap-0 items-center">

            
            <div className="flex flex-col justify-between gap-14 z-10">
              <h2 className="text-6xl md:text-7xl font-playfair text-white leading-[1.05] italic">
                What<br />
                They <span className="not-italic font-bold">Say</span><br />
                <span className="not-italic">About Us</span>
              </h2>

              <div className="relative w-full max-w-[380px] transform transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={leftCard}
                  alt="comment card"
                  className="w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.22))" }}
                  priority
                />
                <div className="absolute inset-0 px-7 pt-6 pb-12 flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <span className="text-[10px] text-rose-500 font-bold">MB</span>
                      </div>
                      <span className="font-playfair text-stone-800 font-bold text-sm">Maya B.</span>
                    </div>
                    <div className="flex text-emerald-400 gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-outfit">
                    The bag looks even better in person. It instantly leveled up my outfit-now I can not go anywhere without it.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-center relative z-50">
              <animated.div
                style={{ ...portraitSpring, marginTop: "80px", marginBottom: "-380px" }}
                className="relative"
              >
                <div className="w-[380px] h-[750px] flex items-center justify-center shadow-[0_60px_120px_-20px_rgba(0,0,0,0.55)] overflow-hidden relative">
                  <Image
                    src={require("@/assets/vertical-1.jpg").default}
                    alt="Fashion model"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center border-4 border-rose-500 z-50 shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110">
                  <ChevronDown size={28} />
                </div>
              </animated.div>
            </div>

            
            <div className="flex flex-col justify-between gap-14 items-end z-10">
              <div className="relative w-full max-w-[380px] transform transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={rightCard}
                  alt="comment card"
                  className="w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.22))" }}
                  priority
                />
                <div className="absolute inset-0 px-7 pt-6 pb-12 flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <span className="text-[10px] text-rose-500 font-bold">AS</span>
                      </div>
                      <span className="font-playfair text-stone-800 font-bold text-sm">Aurora S.</span>
                    </div>
                    <div className="flex text-emerald-400 gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-outfit">
                    The bag looks even better in person. It instantly leveled up my outfit-now I can not go anywhere without it.
                  </p>
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-playfair text-white leading-[1.05] text-right">
                Trust<br />
                <span className="italic font-bold">Their</span><br />
                Voices
              </h2>
            </div>

          </div>
        </div>
      </section>

      
      <section className="bg-rose-50 py-20">
        <div className="container mx-auto px-8 max-w-[1440px]">
          <style>{`
            .review-swiper .swiper-pagination {
              position: relative;
              margin-top: 48px;
            }
            .review-swiper .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #fecdd3; 
              opacity: 1;
            }
            .review-swiper .swiper-pagination-bullet-active {
              background: #f43f5e; 
            }
          `}</style>
          <Swiper
            className="review-swiper"
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            allowTouchMove={true}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div className="py-4">
                  
                  <div className="flex text-emerald-400 gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < r.rating ? "currentColor" : "none"}
                        strokeWidth={i < r.rating ? 0 : 1.5}
                        className={i < r.rating ? "" : "text-rose-200"}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                      <span className="text-xs text-rose-500 font-bold">{r.initials}</span>
                    </div>
                    <span className="font-playfair text-stone-800 font-semibold text-lg">{r.name}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-outfit">
                    {r.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
