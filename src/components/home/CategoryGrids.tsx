import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CategoryGrids() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full border-t border-gray-200">
      
      {[
        { title: "Daily Glow", image: require("@/assets/vertical-4.jpg").default, text: "text-white", border: "border-white/20", hoverBg: "group-hover:bg-white" },
        { title: "Botanical Blend", image: require("@/assets/vertical-5.jpg").default, text: "text-white", border: "border-white/10", hoverBg: "group-hover:bg-[#2c2b29]" },
        { title: "Fresh Start", image: require("@/assets/vertical-6.jpg").default, text: "text-white", border: "border-white/20", hoverBg: "group-hover:bg-white" },
        { title: "Nourish Deeply", image: require("@/assets/vertical-7.jpg").default, text: "text-white", border: "border-white/20", hoverBg: "group-hover:bg-white" }
      ].map((card, i) => (
        <div key={i} className={`relative group cursor-pointer overflow-hidden h-[600px] bg-black border-r border-gray-200 lg:last:border-r-0`}>
          <Image 
            src={card.image}
            alt={card.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/50 z-10"></div>
          
          <div className="relative h-full flex flex-col justify-between p-8 z-20">
            
            <div className={`flex justify-between items-start ${card.text}`}>
              {i % 2 === 0 ? (
                <h4 className="font-playfair italic text-xl">{card.title}</h4>
              ) : <div />}
              
              <div className={`w-[60px] h-[60px] rounded-full border ${card.border} bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${card.hoverBg} group-hover:text-black group-hover:border-transparent transform translate-z-0 will-change-transform`}>
                <ArrowUpRight className="w-6 h-6 transition-transform duration-500 -rotate-45 group-hover:rotate-45" />
              </div>
            </div>

            
            <div className="flex-1"></div>

            
            <div className={`flex justify-between items-end ${card.text}`}>
              {i % 2 !== 0 ? (
                <h4 className="font-playfair italic text-xl">{card.title}</h4>
              ) : <div />}
              
              <div className={`w-[60px] h-[60px] rounded-full border ${card.border} bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${card.hoverBg} group-hover:text-black group-hover:border-transparent transform translate-z-0 will-change-transform`}>
                <ArrowUpRight className="w-6 h-6 transition-transform duration-500 -rotate-45 group-hover:rotate-45" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
