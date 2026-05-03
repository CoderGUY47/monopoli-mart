"use client";

import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
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
      <section className="relative z-30 mt-[180px] mb-[120px] overflow-visible bg-rose-500 py-20 ">
        <div className="relative container mx-auto max-w-[1440px] px-8">
          <div className="grid grid-cols-3 items-center gap-0">
            <div className="z-10 flex flex-col justify-between gap-14">
              <h2 className="font-playfair text-6xl leading-[1.05] text-white italic md:text-7xl">
                What <br />
                They <span className="font-bold not-italic">Say</span>
                <br />
                <span className="not-italic">About Us</span>
              </h2>

              <div className="relative w-full max-w-[380px] transform transition-all duration-500 hover:-translate-y-1">
                <Image
                  src="/assets/left-comment-card.png"
                  alt="comment card"
                  width={380}
                  height={220}
                  className="h-auto w-full object-contain"
                  style={{
                    filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.22))",
                  }}
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-start p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100">
                        <span className="text-[10px] font-bold text-rose-500">
                          MB
                        </span>
                      </div>
                      <span className="font-playfair text-sm font-bold text-stone-800">
                        Maya B.
                      </span>
                    </div>
                    <div className="flex gap-0.5 text-emerald-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="font-outfit text-sm leading-relaxed text-gray-500">
                    The bag looks even better in person. It instantly leveled up
                    my outfit-now I can not go anywhere without it.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-50 flex flex-col items-center justify-center">
              <animated.div
                style={{
                  ...portraitSpring,
                  marginTop: "80px",
                  marginBottom: "-380px",
                }}
                className="relative"
              >
                <div className="relative flex h-[750px] w-[380px] items-center justify-center overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/assets/vertical-9.jpg"
                    alt="Fashion model"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 z-50 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-4 border-rose-500 bg-rose-500 text-white shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110">
                  <ChevronDown size={28} />
                </div>
              </animated.div>
            </div>

            <div className="z-10 flex flex-col items-end justify-between gap-14">
              <div className="relative w-full max-w-[380px] transform transition-all duration-500 hover:-translate-y-1">
                <Image
                  src="/assets/right-comment-card.png"
                  alt="comment card"
                  width={380}
                  height={220}
                  className="h-auto w-full object-contain"
                  style={{
                    filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.22))",
                  }}
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-start p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100">
                        <span className="text-[10px] font-bold text-rose-500">
                          AS
                        </span>
                      </div>
                      <span className="font-playfair text-sm font-bold text-stone-800">
                        Aurora S.
                      </span>
                    </div>
                    <div className="flex gap-0.5 text-emerald-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="font-outfit text-[11px] leading-relaxed text-gray-500">
                    The bag looks even better in person. It instantly leveled up
                    my outfit-now I can not go anywhere without it.
                  </p>
                </div>
              </div>
              <h2 className="font-playfair text-right text-6xl leading-[1.05] text-white md:text-7xl">
                Trust
                <br />
                <span className="font-bold italic">Their</span>
                <br />
                Voices
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-0 pb-17">
        <div className="container mx-auto max-w-[1440px] px-8">
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
                  <div className="mb-3 flex gap-1 text-emerald-400">
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

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100">
                      <span className="text-xs font-bold text-rose-500">
                        {r.initials}
                      </span>
                    </div>
                    <span className="font-playfair text-lg font-semibold text-stone-800">
                      {r.name}
                    </span>
                  </div>

                  <p className="font-outfit text-sm leading-relaxed text-gray-500">
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
