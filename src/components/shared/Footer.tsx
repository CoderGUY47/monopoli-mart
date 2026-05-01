import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-600/30 pb-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center bg-white">
            <Image
              src={require("@/assets/logo.png").default}
              alt="Monopoly-Mart Logo"
              width={280}
              height={100}
              className="object-contain h-30 w-auto mix-blend-multiply"
              priority
            />
          </Link>
          <p className="text-sm text-gray-400 font-light leading-relaxed pr-6">
            Powered by nature, backed by science. Gentle on your skin, fierce on
            results.
          </p>
          <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-playfair font-semibold text-lg mb-6 italic">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="hover:text-white transition-colors"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/404" className="hover:text-white transition-colors">
                404
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair font-semibold text-lg mb-6 italic">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-playfair font-semibold text-lg mb-6 italic">
            Information
          </h4>
          <div className="text-sm font-light text-gray-400 flex flex-col space-y-4">
            <p>+8801722920920</p>
            <p>Gulshan, Dhaka, Bangladesh</p>
            <p>hello@monopoly-mart.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-6 text-center tracking-[0.1rem] text-base text-gray-500 font-semibold">
        ©{new Date().getFullYear()} Monopoly-Mart | All rights reserved.{" "}
        <span className="text-rose-500">Developed by</span>
        <Link href="https://monopoly-mart.com" className="text-rose-500">
          CoderGUY47
        </Link>
      </div>
    </footer>
  );
}
