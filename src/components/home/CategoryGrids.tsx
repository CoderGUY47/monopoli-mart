import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = [
  { title: "Daily Glow", image: "/assets/vertical-4.jpg" },
  { title: "Botanical Blend", image: "/assets/vertical-5.jpg" },
  { title: "Fresh Start", image: "/assets/vertical-6.jpg" },
  { title: "Nourish Deeply", image: "/assets/vertical-7.jpg" },
];

export default function CategoryGrids() {
  return (
    <section className="grid h-full w-full grid-cols-1 border-0 md:grid-cols-2 lg:grid-cols-4 md:pt-20 bg-red-50">
      {categories.map((card, i) => (
        <div
          key={i}
          className="group relative h-[600px] cursor-pointer overflow-hidden border-0 bg-black"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover opacity-60 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-90"
          />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-black/50 via-transparent to-black/70" />
          <div className="relative z-20 flex h-full flex-col justify-between p-8 text-white">
            {/* top corner */}
            <div className="flex items-start justify-between">
              {i % 2 === 0 ? (
                <h4 className="font-playfair translate-y-0 text-xl italic transition-transform duration-500 group-hover:-translate-y-1">
                  {card.title}
                </h4>
              ) : (
                <div />
              )}
              <CategoryCircle isTop={true} />
            </div>

            {/* bottom corner */}
            <div className="flex items-end justify-between">
              {i % 2 !== 0 ? (
                <h4 className="font-playfair translate-y-0 text-xl italic transition-transform duration-500 group-hover:translate-y-1">
                  {card.title}
                </h4>
              ) : (
                <div />
              )}
              <CategoryCircle isTop={false} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function CategoryCircle({ isTop }: { isTop: boolean }) {
  return (
    <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:border-transparent group-hover:bg-white group-hover:text-black">
      <ArrowUpRight
        className={`h-6 w-6 transform transition-all duration-700 ease-in-out ${isTop ? "-rotate-45 group-hover:rotate-0" : "rotate-90 group-hover:rotate-45"} group-hover:scale-125`}
      />
    </div>
  );
}
