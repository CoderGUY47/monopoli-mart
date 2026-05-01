import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Articles() {
  const rightArticles = [
    {
      id: 1,
      title: "The Science of Hydration: Why Your Skin Needs More Than Just Water",
      description: "Dive deep into the molecular level of skincare and learn how to lock in moisture for 24-hour radiance.",
    },
    {
      id: 2,
      title: "Evening Rituals for a Morning Glow",
      description: "Discover the perfect 5-step night routine that works with your skin's natural regeneration cycle while you sleep.",
    },
    {
      id: 3,
      title: "Sun Protection: The Ultimate Anti-Aging Secret",
      description: "Why SPF is the most important step in your routine, and how to choose the right one for your skin type.",
    },
  ];

  return (
    <section className="bg-rose-50 py-24 px-6">
      <div className="container mx-auto max-w-[1440px] px-8">

        
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 block">
            Glow Journal
          </span>
          <h2 className="text-6xl font-playfair text-stone-800 leading-tight">
            Articles and <span className="italic font-bold">Insights</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          
          <div className="flex flex-col animate__animated animate__fadeInLeft">
            
            <div className="relative w-full aspect-4/3 mb-10 overflow-hidden shadow-2xl">
              <Image 
                src={require("@/assets/horizontal-3.jpg").default}
                alt="Articles feature image"
                fill
                className="object-cover transform transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-4 block">
                Editor's Choice
              </span>
              <h3 className="font-playfair text-stone-800 text-4xl leading-tight mb-5">
                Minimalist Skincare: How to Achieve More with Less
              </h3>
              <p className="text-gray-500 font-outfit leading-relaxed mb-6 text-lg">
                The "Skinimalism" movement is taking over. We show you how to curate a high-performance routine with only three essential products.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 text-white font-semibold transition-all duration-300 hover:bg-rose-600 group"
              >
                Read Ful Article
                <ArrowUpRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          
          <div className="flex flex-col divide-y divide-gray-200 animate__animated animate__fadeInRight animate__delay-1s">
            {rightArticles.map((article, idx) => (
              <div key={article.id} className={`flex flex-col gap-3 ${idx === 0 ? "pb-12" : "py-12"} group cursor-pointer`}>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  Insights • {idx + 1}
                </span>
                <h3 className="font-playfair text-stone-800 text-2xl leading-snug group-hover:text-rose-500 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-500 font-outfit leading-relaxed">
                  {article.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-500 hover:text-rose-600 hover:gap-3 transition-all duration-300 mt-2"
                >
                  LEARN MORE
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
