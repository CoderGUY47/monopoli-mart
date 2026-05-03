import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-stone-900 pt-20 pb-10 text-white">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-7 border-b border-gray-600/30 px-6 pb-12 md:flex-row">
        {/* col 1: brand (35%) */}
        <div className="w-full space-y-2 md:w-[50%]">
          <Link href="/" className="flex items-center gap-3 justify-start">
            <Image
              src="/assets/logo.png"
              alt="Monopoly-Mart Logo"
              width={280}
              height={100}
              className="h-30 w-auto object-contain"
              priority
            />
            <p className="font-playfair text-3xl leading-relaxed font-bold text-gray-400 lowercase">
              Monopoly-Mart
            </p>
          </Link>
          <p className="w-[450px] text-lg leading-relaxed font-light text-gray-400">
            Powered by nature, backed by science. Gentle on your skin, fierce on
            results.
          </p>
        </div>

        {/* col 3: support (15%) */}
        <div className="w-full md:w-[25%]">
          <h4 className="font-playfair mb-6 text-xl font-semibold italic">
            Support
          </h4>
          <ul className="space-y-4 text-lg font-light text-gray-400">
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="transition-colors hover:text-white"
              >
                Shipping
              </Link>
            </li>
            <li>
              <Link
                href="/returns"
                className="transition-colors hover:text-white"
              >
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* col 4: essentials (15%) */}
        <div className="w-full md:w-[25%]">
          <h4 className="font-playfair mb-6 text-xl font-semibold italic">
            Legal
          </h4>
          <ul className="space-y-4 text-lg font-light text-gray-400">
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="transition-colors hover:text-white"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* col 5: information (20%) */}
        <div className="w-full space-y-3 md:w-[20%]">
          <h4 className="font-playfair mb-6 text-lg font-semibold italic">
            Information
          </h4>
          <div className="flex flex-col space-y-4 text-sm font-light text-gray-400">
            <p>+8801722920920</p>
            <p>Gulshan, Dhaka, Bangladesh</p>
            <p>hello@monopoly-mart.com</p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 opacity-80 transition-all duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white hover:opacity-100"
              >
                <FaFacebook className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 opacity-80 transition-all duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white hover:opacity-100"
              >
                <FaXTwitter className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" /> 
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 opacity-80 transition-all duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white hover:opacity-100"
              >
                <FaInstagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-6 text-center text-base font-semibold tracking-[0.1rem] text-gray-500">
        ©{new Date().getFullYear()} Monopoly-Mart | All rights reserved.{" "}
        <span className="text-white">Developed by </span>
        <Link href="/" className="text-rose-500">
          CoderGUY47
        </Link>
      </div>
    </footer>
  );
}
