import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "@/components/shared/ToastProvider";
import { CartProvider } from "@/context/CartContext";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Monopoly-Mart - Beauty eCommerce",
  description: "Because You Deserve Hydrated Skin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`flex min-h-full flex-col bg-[#f7f4ee] font-sans text-[#2c2b29]`}
        suppressHydrationWarning
      >
        <CartProvider>{children}</CartProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
