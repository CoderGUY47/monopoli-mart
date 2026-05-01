"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "01",
      question: "How long until I see results?",
      answer: "That's why we provide a full size chart on every product page to help you measure your foot accurately. If you're in between sizes, we usually recommend sizing up for comfort."
    },
    {
      id: "02",
      question: "Are your products cruelty-free?",
      answer: "Yes, all our products are 100% cruelty-free and certified by PETA. We never test on animals at any stage of product development."
    },
    {
      id: "03",
      question: "Is it safe for sensitive skin?",
      answer: "Absolutely. Our formulas are dermatologist-tested and specifically designed for all skin types, including highly sensitive skin."
    },
    {
      id: "04",
      question: "What skin types are your products for?",
      answer: "Our products are universal but particularly beneficial for those looking for deep hydration and a natural glow."
    }
  ];

  return (
    <section className="bg-rose-50 py-30 sm:py-60">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          
          <div className="w-full lg:w-2/5">
            <span className="text-[#a8a8a8] text-sm font-medium tracking-wide block mb-6">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-playfair leading-[1.1] text-stone-800 mb-12">
              Stay Curious, <br />
              <span className="italic font-bold">Stay Active</span>
            </h2>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-5 inline-flex items-center group transition-all duration-300">
              <span className="text-lg font-medium">Call Center</span>
              <ArrowUpRight className="w-5 h-5 ml-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          
          <div className="w-full lg:w-3/5 space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="border-b border-rose-200 last:border-b-0 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                >
                  <h3 className={`text-2xl md:text-3xl font-playfair text-stone-800 transition-colors ${activeIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                    <span className="mr-2 text-rose-500">{faq.id}.</span> {faq.question}
                  </h3>
                  <div className="text-stone-800">
                    {activeIndex === index ? (
                      <ChevronUp className="w-6 h-6 opacity-60" />
                    ) : (
                      <ChevronDown className="w-6 h-6 opacity-40 group-hover:opacity-80 transition-opacity" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-[300px] pb-10 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm md:text-base text-[#6b6b6b] leading-relaxed max-w-lg">
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
