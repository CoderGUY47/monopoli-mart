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
    <div className="flex flex-col bg-white">
      {/*base scrolling group */}
      <div className="relative z-30 bg-white">
        <Banner />
        <BrandLogos />
        <SummerSale />
        <ExploreProducts />
      </div>

      {/*slidiing Over Checkpoint 1 */}
      <div className="flex flex-col relative z-20 bg-white">
        <PopularProducts />
        <CategoryGrids />
      </div>

      {/*sticky checkpoint 2 */}
      <div className="sticky z-10" style={{ top: "min(0px, calc(100vh - 100%))" }}>
        <FaqSection />
      </div>

      {/* slidiing over checkpoint 2 */}
      <div className="flex flex-col relative z-20 bg-white">
        <Testimonials />
        <Articles />
        <div className="bg-stone-900 w-full">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
