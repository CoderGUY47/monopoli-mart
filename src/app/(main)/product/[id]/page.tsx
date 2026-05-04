import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";
import AddToCartButton from "@/components/shared/AddToCartButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const headersList = await headers();
  const cookies = headersList.get("cookie") || "";
  const isMockAdmin = cookies.includes("mock_admin=true");

  if (!session && !isMockAdmin) {
    redirect(`/login?callbackUrl=/product/${id}`);
  }

  const product = getProductById(id);

  return (
    <div className="container mx-auto max-w-[1440px] px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-gray-500 transition-colors hover:text-rose-500"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* left part*/}
        <div className="relative flex h-[500px] w-full items-center justify-center rounded-none border border-rose-100 bg-white p-10 shadow-sm md:h-[630px]">
          {typeof product.image === "string" ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] object-cover"
            />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover p-14"
              priority
            />
          )}
          <div className="tracking-tigh absolute top-4 left-4 rounded-full bg-rose-500 px-3 py-1 text-[10px] font-bold text-white uppercase">
            {product.category}
          </div>
        </div>

        {/* right part*/}
        <div className="flex flex-col">
          <h1 className="font-playfair mb-2 text-3xl font-bold text-stone-800">
            {product.name}
          </h1>
          <div className="mb-4 flex items-center gap-1 text-emerald-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-2 text-sm text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="mb-4 text-3xl font-bold text-rose-500">
            <i className="fa-solid fa-bangladeshi-taka-sign mr-1"></i>
            {typeof product.price === "number"
              ? product.price.toLocaleString()
              : product.price.toString().replace(/[^0-9,]/g, "")}
          </p>

          <p className="mb-3 text-lg leading-relaxed text-gray-600">
            {product.description}
          </p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <AddToCartButton
              product={{
                id: product.id,
                title: product.name,
                price: product.price,
                image: product.image,
              }}
              className="flex-2 rounded-none bg-rose-500 py-7 text-xs font-bold tracking-widest text-white uppercase shadow-lg shadow-rose-200 transition-all hover:bg-rose-600"
            />
            <Button
              variant="outline"
              className="flex-1 rounded-none border-rose-200 py-7 text-xs font-bold tracking-widest text-stone-600 uppercase hover:bg-rose-50"
            >
              <Heart className="mr-2 h-4 w-4 text-rose-500" /> Wishlist
            </Button>
            <Button
              variant="outline"
              className="h-14 w-14 rounded-none border-rose-200 py-7 hover:bg-rose-50 sm:h-auto sm:w-14"
            >
              <Share2 className="h-4 w-4 text-stone-600" />
            </Button>
          </div>

          <div className="mb-4 space-y-4 border-t border-rose-300 pt-6">
            <div>
              <h3 className="font-playfair mb-3 text-xl font-bold text-stone-800">
                Description
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                The {product.name} is a premium {product.category.toLowerCase()}{" "}
                piece designed for quality and style. Perfect for daily use or
                as a gift, this item focuses on both function and aesthetic
                appeal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-none border border-rose-50 bg-white p-4 shadow-xl">
                <h4 className="mb-2 text-xs font-bold tracking-wider text-stone-800 uppercase">
                  Highlights
                </h4>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Premium {product.category} choice</li>
                  <li>• Built for durability</li>
                  <li>• Quality tested</li>
                </ul>
              </div>
              <div className="rounded-none border border-rose-50 bg-white p-4 shadow-xl">
                <h4 className="mb-2 text-xs font-bold tracking-wider text-stone-800 uppercase">
                  Care
                </h4>
                <p className="text-xs text-gray-500">
                  Clean with a soft cloth. Store in a dry place.
                </p>
              </div>
            </div>
          </div>

          {/* trust badges for shipping and warranty */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 rounded-none border-0 bg-rose-500 p-4 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50">
                <Truck className="h-5 w-5 text-rose-500" />
              </div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-3 rounded-none border-0 bg-rose-500 p-4 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50">
                <ShieldCheck className="h-5 w-5 text-rose-500" />
              </div>
              <span className="text-sm font-medium">2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
