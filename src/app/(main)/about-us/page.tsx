import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import aboutHero from "@/assets/about-us.jpg";
import storyImage from "@/assets/vertical-4.jpg";
import image1 from "@/assets/horizontal-1.jpg";
import image2 from "@/assets/horizontal-2.jpg";
import image3 from "@/assets/horizontal-3.jpg";
import image4 from "@/assets/horizontal-4.jpg";
import image5 from "@/assets/horizontal-5.jpg";
import image6 from "@/assets/horizontal-6.jpg";
import image7 from "@/assets/horizontal-7.jpg";
import image8 from "@/assets/horizontal-8.jpg";

export default function AboutUsPage() {
  return (
    <div className="bg-rose-50 min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={aboutHero}
          alt="About Monopoly-Mart"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl">
            Beauty rooted in{" "}
            <span className="text-rose-500 italic">nature</span>
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl text-2xl font-Normal">
            We believe skincare should be honest, effective, and kind - to you and to the earth.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-[1440px] px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-0">
        <div className="flex flex-col items-center justify-center py-12 px-6 border-r border-rose-200 text-center">
          <span className="font-sans text-4xl md:text-5xl font-bold text-stone-800">
            120K+
          </span>
          <span className="text-sm font-sans uppercase tracking-widest text-rose-500 font-semibold mt-2">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-12 px-6 border-r border-rose-200 text-center">
          <span className="font-sans text-4xl md:text-5xl font-bold text-stone-800">
            100%
          </span>
          <span className="text-sm font-sans uppercase tracking-widest text-rose-500 font-semibold mt-2">
            Pure Botanical
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-12 px-6 border-r border-rose-200 text-center">
          <span className="font-sans text-4xl md:text-5xl font-bold text-stone-800">
            50+
          </span>
          <span className="text-sm font-sans uppercase tracking-widest text-rose-500 font-semibold mt-2">
            Products
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <span className="font-sans text-4xl md:text-5xl font-bold text-stone-800">
            8+
          </span>
          <span className="text-sm font-sans uppercase tracking-widest text-rose-500 font-semibold mt-2">
            Years of Trust
          </span>
        </div>
      </section>


      <section className="container mx-auto max-w-[1440px] px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={storyImage}
            alt="Our Roots"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-rose-500 text-white px-6 py-4">
            <p className="text-xs uppercase tracking-widest font-bold">
              Founded
            </p>
            <p className="font-playfair text-3xl font-bold">2016</p>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-rose-500 uppercase tracking-[0.3em] text-sm font-semibold">
            Who We Are
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
            Crafted with care, <br />
            <span className="italic text-rose-500">worn with confidence</span>
          </h2>
          <p className="text-stone-600 font-light leading-relaxed text-lg">
            Monopoly-Mart was born from a simple belief - that everyone deserves
            access to skincare that actually works. We source the finest natural
            ingredients and combine them with cutting-edge science to create
            formulas that nourish, protect, and transform.
          </p>
          <p className="text-stone-600 font-light leading-relaxed">
            From the highlands of Australia to the lush forests of Southeast
            Asia, our ingredients travel the world so your skin doesn&apos;t have to.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Shop Now <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/*values section - dark background with three core brand principles*/}
      <section className="bg-stone-900 py-24">
        <div className="container mx-auto max-w-[1440px] px-6">
          <div className="text-center mb-16">
            <p className="text-rose-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              What Drives Us
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            <div className="bg-stone-900 p-12 space-y-4 hover:bg-stone-800 transition-colors">
              <div className="w-10 h-[2px] bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Nature First
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Every formula starts with the purest botanical ingredients
                sourced responsibly from around the world.
              </p>
            </div>
            <div className="bg-stone-900 p-12 space-y-4 hover:bg-stone-800 transition-colors">
              <div className="w-10 h-[2px] bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Skin Science
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Our lab-backed formulations are clinically tested and
                dermatologist-approved for all skin types.
              </p>
            </div>
            <div className="bg-stone-900 p-12 space-y-4 hover:bg-stone-800 transition-colors">
              <div className="w-10 h-[2px] bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Sustainability
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                From biodegradable packaging to carbon-offset shipping, we care
                for the planet as much as your skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*gallery section - 4x2 image grid showing life behind the brand*/}
      <section className="pt-24">
        <div className="container mx-auto max-w-[1440px] px-6 mb-12 text-center">
          <p className="text-rose-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Behind the Brand
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800">
            Life at Monopoly-Mart
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image1}
              alt="image 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image2}
              alt="image 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image3}
              alt="image 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image4}
              alt="image 4"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image5}
              alt="image 5"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image6}
              alt="image 6"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image7}
              alt="image 7"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src={image8}
              alt="image 8"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-colors duration-500" />
          </div>
        </div>
      </section>

      <section className="bg-rose-500 py-24 text-center text-white">
        <div className="container mx-auto max-w-[1440px] px-6 space-y-6">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold">
            Ready to glow?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-light">
            Explore our full range of botanical skincare crafted just for you.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-rose-500 hover:bg-rose-50 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-colors mt-4"
          >
            Browse Products <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
