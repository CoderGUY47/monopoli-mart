import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Articles() {
  const rightArticles = [
    {
      id: 1,
      title:
        "The Science of Hydration: Why Your Skin Needs More Than Just Water",
      description:
        "Dive deep into the molecular level of skincare and learn how to lock in moisture for 24-hour radiance.",
    },
    {
      id: 2,
      title: "Evening Rituals for a Morning Glow",
      description:
        "Discover the perfect 5-step night routine that works with your skin&apos;s natural regeneration cycle while you sleep.",
    },
    {
      id: 3,
      title: "Sun Protection: The Ultimate Anti-Aging Secret",
      description:
        "Why SPF is the most important step in your routine, and how to choose the right one for your skin type.",
    },
  ];

  return (
    <section className="bg-rose-50 px-6 py-24">
      <div className="container mx-auto max-w-[1440px] px-8">
        <div className="animate__animated animate__fadeIn mb-16 text-center">
          <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Glow Journal
          </span>
          <h2 className="font-playfair text-6xl leading-tight text-stone-800">
            Articles and <span className="font-bold italic">Insights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
          <div className="animate__animated animate__fadeInLeft flex flex-col">
            <div className="relative mb-10 h-[450px] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/horizontal-3.jpg"
                alt="Articles feature image"
                fill
                className="transform object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="max-w-xl">
              <h3 className="font-playfair mb-4 text-3xl leading-tight font-bold text-stone-800">
                Minimalist Skincare: How to Achieve More with Less
              </h3>
              <p className="font-outfit mb-3 text-lg leading-relaxed text-gray-500">
                The &quot;Skinimalism&quot; movement is taking over. We show you
                how to curate a high-performance routine with only three
                essential products.
              </p>
              <Link
                href="#"
                className="group inline-flex items-center justify-center bg-rose-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-rose-600"
              >
                Read Full Article
                <ArrowUpRight
                  size={18}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight animate__delay-1s flex flex-col divide-y divide-gray-200">
            {rightArticles.map((article, indx) => (
              <div
                key={article.id}
                className={`flex flex-col gap-3 ${indx === 0 ? "pb-12" : "py-12"} group cursor-pointer`}
              >
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Insights • {indx + 1}
                </span>
                <h3 className="font-playfair text-2xl leading-5 text-stone-800 transition-colors duration-300 group-hover:text-rose-500">
                  {article.title}
                </h3>
                <p className="font-outfit leading-relaxed text-gray-500">
                  {article.description}
                </p>
                <Link
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-rose-500 transition-all duration-300 hover:gap-3 hover:text-rose-600"
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
