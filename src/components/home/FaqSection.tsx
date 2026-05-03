"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "01",
      question: "How long until I see results?",
      answer:
        "That's why we provide a full size chart on every product page to help you measure your foot accurately. If you're in between sizes, we usually recommend sizing up for comfort.",
    },
    {
      id: "02",
      question: "Are your products cruelty-free?",
      answer:
        "Yes, all our products are 100% cruelty-free and certified by PETA. We never test on animals at any stage of product development.",
    },
    {
      id: "03",
      question: "Is it safe for sensitive skin?",
      answer:
        "Absolutely. Our formulas are dermatologist-tested and specifically designed for all skin types, including highly sensitive skin.",
    },
    {
      id: "04",
      question: "What skin types are your products for?",
      answer:
        "Our products are universal but particularly beneficial for those looking for deep hydration and a natural glow.",
    },
  ];

  return (
    <section className="bg-white py-34 sm:py-60">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-32">
          <div className="w-full lg:w-2/5">
            <span className="mb-6 block text-sm font-medium tracking-wide text-[#a8a8a8]">
              FAQ
            </span>
            <h2 className="font-playfair mb-12 text-5xl leading-[1.1] text-stone-800 md:text-7xl">
              Stay Curious, <br />
              <span className="font-bold italic">Stay Active</span>
            </h2>
            <button className="group inline-flex items-center bg-rose-500 px-10 py-5 text-white transition-all duration-300 hover:bg-rose-600">
              <span className="text-lg font-medium">Call Center</span>
              <ArrowUpRight className="ml-4 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="w-full space-y-0 lg:w-3/5">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="overflow-hidden border-b border-rose-200 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="group flex w-full items-center justify-between py-8 text-left focus:outline-none"
                >
                  <h3
                    className={`font-playfair text-2xl text-stone-800 transition-colors md:text-3xl ${activeIndex === index ? "opacity-100" : "opacity-80"}`}
                  >
                    <span className="mr-2 text-rose-500">{faq.id}.</span>{" "}
                    {faq.question}
                  </h3>
                  <div className="text-stone-800">
                    {activeIndex === index ? (
                      <ChevronUp className="h-6 w-6 opacity-60" />
                    ) : (
                      <ChevronDown className="h-6 w-6 opacity-40 transition-opacity group-hover:opacity-80" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[300px] pb-10 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-lg text-sm leading-relaxed text-[#6b6b6b] md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
