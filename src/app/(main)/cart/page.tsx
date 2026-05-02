"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-rose-50/50 px-6 text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-rose-100">
          <ShoppingBag className="h-10 w-10 text-rose-300" />
        </div>
        <h1 className="font-playfair mb-4 text-4xl text-black">
          Your cart is empty
        </h1>
        <p className="mb-10 max-w-md text-gray-500">
          Looks like you haven&apos;t added anything to your cart yet. Discover
          our premium products and start your glow journey today.
        </p>
        <Link href="/">
          <Button className="rounded-none bg-[#1a2b23] px-10 py-6 text-lg font-medium text-white hover:bg-[#0f1a15]">
            EXPLORE PRODUCTS
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/10 px-6 py-24">
      <div className="container mx-auto max-w-[1440px]">
        <h1 className="font-playfair mb-12 text-5xl text-black">
          Shopping <span className="italic">Cart</span>
        </h1>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="group relative flex items-center gap-6 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-40 w-32 overflow-hidden border border-rose-100 bg-white">
                  <Image
                    src={
                      typeof item.image === "string" &&
                      !item.image.startsWith("/")
                        ? `/assets/${item.image}`
                        : item.image
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-playfair mb-1 text-xl text-black">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400 capitalize">
                    Category: Premium
                  </p>
                  <div className="mb-4 flex items-center gap-1 text-lg font-bold text-rose-600">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-[15px]"></i>
                    {item.price.toString().replace(/[^0-9,]/g, "")}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 transition-colors hover:bg-gray-50"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 transition-colors hover:bg-gray-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-6 right-6 p-2 text-gray-300 transition-colors hover:text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border-t-4 border-rose-500 bg-white p-8 shadow-sm">
              <h2 className="font-playfair mb-8 text-2xl font-bold text-black">
                Order Summary
              </h2>
              <div className="mb-8 space-y-4">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal ({totalItems} items)</span>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-xs"></i>
                    {totalPrice.toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxes</span>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-xs"></i>
                    0
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-xl font-bold text-[#1a2b23]">
                  <span>Total</span>
                  <div className="flex items-center gap-1 text-2xl">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-xl"></i>
                    {totalPrice.toLocaleString()}
                  </div>
                </div>
                <p className="mt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Including VAT
                </p>
              </div>

              <Button className="group w-full rounded-none bg-[#1a2b23] py-8 text-lg font-bold text-white hover:bg-[#0f1a15]">
                PROCEED TO CHECKOUT{" "}
                <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
              </Button>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-6 w-10 rounded-sm bg-gray-100"></div>
                <div className="h-6 w-10 rounded-sm bg-gray-100"></div>
                <div className="h-6 w-10 rounded-sm bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
