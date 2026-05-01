import AllProducts from "@/components/home/AllProducts";

export const metadata = {
  title: "Products | Monopoly-Mart",
  description: "Browse our entire collection of premium products.",
};

export default function PagesRoute() {
  return (
    <div className="flex flex-col bg-[#f7f4ee] min-h-screen">
      <AllProducts />
    </div>
  );
}
