import Banner from "@/components/shared/Banner";
import SummerSale from "@/components/home/SummerSale";
import BrandLogos from "@/components/home/BrandLogos";
import ExploreProducts from "@/components/home/ExploreProducts";
import CategoryGrids from "@/components/home/CategoryGrids";
import FaqSection from "@/components/home/FaqSection";
import Testimonials from "@/components/home/Testimonials";
import Articles from "@/components/home/Articles";
import Newsletter from "@/components/home/Newsletter";
import PopularProducts from "@/components/home/PopularProducts";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#f7f4ee]">
      {/* Base scrolling group */}
      <div className="relative z-30 bg-[#f7f4ee]">
        <Banner />
        <BrandLogos />
        <SummerSale />
        <ExploreProducts />
      </div>

      {/* Slidiing Over Checkpoint 1 */}
      <div className="relative z-20 bg-rose-50 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col">
        <PopularProducts />
        <CategoryGrids />
      </div>

      {/* Sticky Checkpoint 2 */}
      <div
        className="sticky z-10"
        style={{ top: "min(0px, calc(100vh - 100%))" }}
      >
        <FaqSection />
      </div>

      {/* Slidiing Over Checkpoint 2 */}
      <div className="relative z-20 bg-rose-50 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col">
        <Testimonials />
        <Articles />
        <div className="bg-stone-900 w-full">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
