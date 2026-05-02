import AllProducts from "@/components/home/AllProducts";

export const metadata = {
  title: "Products | Monopoly-Mart",
  description: "Browse our entire collection of premium products.",
};

export default function PagesRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <AllProducts />
    </div>
  );
}
