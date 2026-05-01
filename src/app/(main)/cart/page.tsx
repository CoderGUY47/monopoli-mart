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
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-rose-50/50 px-6 text-center">
        <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-10 h-10 text-rose-300" />
        </div>
        <h1 className="text-4xl font-playfair text-[#1a2b23] mb-4">
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-10 max-w-md">
          Looks like you haven't added anything to your cart yet. Discover our
          premium products and start your glow journey today.
        </p>
        <Link href="/">
          <Button className="bg-[#1a2b23] hover:bg-[#0f1a15] text-white px-10 py-6 text-lg font-medium rounded-none">
            EXPLORE PRODUCTS
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-rose-50/30 min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-[1440px]">
        <h1 className="text-5xl font-playfair text-[#1a2b23] mb-12">
          Shopping <span className="italic">Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white p-6 shadow-sm group hover:shadow-md transition-shadow relative"
              >
                <div className="relative w-32 h-40 bg-white border border-rose-100 overflow-hidden shrink-0">
                  <Image
                    src={
                      typeof item.image === "string" && !item.image.startsWith("/")
                        ? `/assets/${item.image}`
                        : item.image
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-playfair text-xl text-[#1a2b23] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 capitalize">
                    Category: Premium
                  </p>
                  <div className="text-rose-600 font-bold text-lg mb-4">
                    {item.price}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-50 transition-colors"
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
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-6 right-6 text-gray-300 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-sm border-t-4 border-rose-500">
              <h2 className="text-2xl font-playfair font-bold text-[#1a2b23] mb-8">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxes</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-10">
                <div className="flex justify-between text-xl font-bold text-[#1a2b23]">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                  Including VAT
                </p>
              </div>

              <Button className="w-full bg-[#1a2b23] hover:bg-[#0f1a15] text-white py-8 text-lg font-bold rounded-none group">
                PROCEED TO CHECKOUT{" "}
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-10 h-6 bg-gray-100 rounded-sm"></div>
                <div className="w-10 h-6 bg-gray-100 rounded-sm"></div>
                <div className="w-10 h-6 bg-gray-100 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
