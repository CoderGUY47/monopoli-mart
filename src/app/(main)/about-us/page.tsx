import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import aboutSection from "@/assets/about-us.jpg";
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
  const galleryImages = [
    { src: image1, alt: "image 1" },
    { src: image2, alt: "image 2" },
    { src: image3, alt: "image 3" },
    { src: image4, alt: "image 4" },
    { src: image5, alt: "image 5" },
    { src: image6, alt: "image 6" },
    { src: image7, alt: "image 7" },
    { src: image8, alt: "image 8" },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
        <Image
          src={aboutSection}
          alt="About Monopoly-Mart"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-playfair max-w-4xl text-5xl leading-tight font-bold text-white md:text-7xl">
            Beauty rooted in{" "}
            <span className="text-rose-500 italic">nature</span>
          </h1>
          <p className="font-Normal mt-6 max-w-2xl text-2xl text-white/70">
            We believe skincare should be honest, effective, and kind - to you
            and to the earth.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-[1440px] grid-cols-2 gap-0 px-6 py-16 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center border-r border-rose-200 px-6 py-12 text-center">
          <span className="font-sans text-4xl font-bold text-stone-800 md:text-5xl">
            120K+
          </span>
          <span className="mt-2 font-sans text-sm font-semibold tracking-widest text-rose-500 uppercase">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-r border-rose-200 px-6 py-12 text-center">
          <span className="font-sans text-4xl font-bold text-stone-800 md:text-5xl">
            100%
          </span>
          <span className="mt-2 font-sans text-sm font-semibold tracking-widest text-rose-500 uppercase">
            Pure Botanical
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-r border-rose-200 px-6 py-12 text-center">
          <span className="font-sans text-4xl font-bold text-stone-800 md:text-5xl">
            50+
          </span>
          <span className="mt-2 font-sans text-sm font-semibold tracking-widest text-rose-500 uppercase">
            Products
          </span>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          <span className="font-sans text-4xl font-bold text-stone-800 md:text-5xl">
            8+
          </span>
          <span className="mt-2 font-sans text-sm font-semibold tracking-widest text-rose-500 uppercase">
            Years of Trust
          </span>
        </div>
      </section>

      <section className="container mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={storyImage}
            alt="Our Roots"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-rose-500 px-6 py-4 text-white">
            <p className="text-xs font-bold tracking-widest uppercase">
              Founded
            </p>
            <p className="font-playfair text-3xl font-bold">2026</p>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-sm font-semibold tracking-wider text-rose-500 uppercase">
            Who We Are
          </p>
          <h2 className="font-playfair text-4xl leading-tight font-bold text-stone-800 md:text-5xl">
            Crafted with care, <br />
            <span className="text-rose-500 italic">worn with confidence</span>
          </h2>
          <p className="text-lg leading-relaxed font-light text-stone-600">
            Monopoly-Mart was born from a simple belief - that everyone deserves
            access to skincare that actually works. We source the finest natural
            ingredients and combine them with cutting-edge science to create
            formulas that nourish, protect, and transform.
          </p>
          <p className="leading-relaxed font-light text-stone-600">
            From the highlands of Australia to the lush forests of Southeast
            Asia, our ingredients travel the world so your skin doesn&apos;t
            have to.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-rose-500 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-rose-600"
          >
            Shop Now <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/*values section */}
      <section className="bg-stone-900 py-24">
        <div className="container mx-auto max-w-[1440px] px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-rose-400 uppercase">
              What Drives Us
            </p>
            <h2 className="font-playfair text-4xl font-bold text-white md:text-5xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            <div className="space-y-4 bg-stone-900 p-12 transition-colors hover:bg-stone-800">
              <div className="h-[2px] w-10 bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Nature First
              </h3>
              <p className="leading-relaxed font-light text-gray-400">
                Every formula starts with the purest botanical ingredients
                sourced responsibly from around the world.
              </p>
            </div>
            <div className="space-y-4 bg-stone-900 p-12 transition-colors hover:bg-stone-800">
              <div className="h-[2px] w-10 bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Skin Science
              </h3>
              <p className="leading-relaxed font-light text-gray-400">
                Our lab-backed formulations are clinically tested and
                dermatologist-approved for all skin types.
              </p>
            </div>
            <div className="space-y-4 bg-stone-900 p-12 transition-colors hover:bg-stone-800">
              <div className="h-[2px] w-10 bg-rose-500" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Sustainability
              </h3>
              <p className="leading-relaxed font-light text-gray-400">
                From biodegradable packaging to carbon-offset shipping, we care
                for the planet as much as your skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*gallery section*/}
      <section className="pt-24">
        <div className="container mx-auto mb-12 max-w-[1440px] px-6 text-center">
          <p className="mb-4 text-sm font-semibold tracking-wider text-rose-500 uppercase">
            Behind the Brand
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-800 md:text-5xl">
            Life at Monopoly-Mart
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-rose-500/0 transition-colors duration-500 group-hover:bg-rose-500/20" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rose-500 py-20 text-center text-white">
        <div className="container mx-auto max-w-[1440px] space-y-4 px-6">
          <h2 className="font-playfair text-4xl font-bold md:text-6xl">
            Ready to glow?
          </h2>
          <p className="mx-auto max-w-xl text-lg font-light text-white/80">
            Explore our full range of botanical skincare crafted just for you.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-2 bg-white px-10 py-5 text-sm font-bold tracking-widest text-rose-500 uppercase transition-colors hover:bg-rose-50"
          >
            Browse Products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
