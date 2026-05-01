import Image from "next/image";
import Link from "next/link";
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";

// --- Main Page Component ---
export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 pb-24 max-w-[1440px]">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[#1a2b23] mb-8 transition-colors group">
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="relative aspect-3/4 bg-rose-50/50 overflow-hidden rounded-sm">
            <ProductImage src={product.image} alt={product.name} priority />
            <span className="absolute top-4 left-4 bg-[#1a2b23] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
              {product.category}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`aspect-square bg-rose-50/30 overflow-hidden border cursor-pointer ${i === 0 ? "border-rose-500" : "border-transparent hover:border-rose-200"}`}>
                <ProductImage src={product.image} alt="" className="opacity-70" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-[#1a2b23] mb-4">{product.name}</h1>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-1 text-rose-500">
              <RatingStars rating={product.rating} />
              <span className="ml-2 font-bold text-[#1a2b23]">{product.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-emerald-700 text-sm font-medium">
              <Check className="w-4 h-4 mr-1" /> In Stock
            </div>
          </div>

          <div className="text-3xl font-playfair font-bold text-rose-600 mb-8 italic">
            {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-10">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button className="flex-1 bg-[#1a2b23] hover:bg-[#0f1a15] text-white rounded-none py-6 uppercase tracking-widest text-xs">
              Add to Cart
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-none w-14 h-14 md:auto md:px-8 border-gray-200 hover:bg-rose-50 group">
                <Heart className="w-5 h-5 text-rose-500 md:mr-2 group-hover:fill-rose-500 transition-all" />
                <span className="hidden md:inline text-gray-700 font-medium">Wishlist</span>
              </Button>
              <Button variant="outline" className="rounded-none w-14 h-14 border-gray-200 hover:bg-rose-50">
                <Share2 className="w-5 h-5 text-gray-500" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
            <Feature Icon={Truck} title="Free Shipping" subtitle="On orders over $50" />
            <Feature Icon={ShieldCheck} title="2 Year Warranty" subtitle="Guarantee on all products" />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Simple UI Components ---
function ProductImage({ src, alt, className = "", priority = false }: { src: any, alt: string, className?: string, priority?: boolean }) {
  const style = "w-full h-full object-cover mix-blend-multiply";
  if (typeof src === "string") return <img src={src} alt={alt} className={`${style} ${className}`} />;
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image src={src} alt={alt} fill className={style} priority={priority} />
    </div>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={i < Math.floor(rating) ? "currentColor" : "none"} strokeWidth={i < rating ? 0 : 1.5} />
      ))}
    </div>
  );
}

function Feature({ Icon, title, subtitle }: { Icon: any, title: string, subtitle: string }) {
  return (
    <div className="flex items-center text-gray-600 gap-3">
      <div className="w-10 h-10 bg-rose-50/50 rounded-full flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#1a2b23]" />
      </div>
      <div>
        <p className="font-semibold text-[#1a2b23] text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
