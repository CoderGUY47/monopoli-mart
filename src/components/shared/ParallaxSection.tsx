"use client";

import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; 
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.15, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setElementTop(el.getBoundingClientRect().top + window.scrollY);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = (scrollY - elementTop) * speed;

  const spring = useSpring({
    transform: `translateY(${offset}px)`,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.div ref={ref} style={spring} className={className}>
      {children}
    </animated.div>
  );
}
