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
      <Banner />
      <BrandLogos />
      <SummerSale />
      <ExploreProducts />
      <PopularProducts />
      <CategoryGrids />
      <FaqSection />
      <Testimonials />
      <Articles />
      <Newsletter />
    </div>
  );
}
