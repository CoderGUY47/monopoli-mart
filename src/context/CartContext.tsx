"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";

export interface CartItem {
  id: string | number;
  title: string;
  price: string | number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "LOAD"; payload: CartItem[] }
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: string | number }
  | { type: "UPDATE_QTY"; payload: { id: string | number; quantity: number } }
  | { type: "CLEAR" };

function cartReducer(cart: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD": {
      const exists = cart.find((item) => item.id === action.payload.id);
      if (exists) {
        // Item already in cart → just bump its quantity
        return cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // New item → add with quantity 1
      return [...cart, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE":
      return cart.filter((item) => item.id !== action.payload);

    case "UPDATE_QTY":
      return cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "CLEAR":
      return [];
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  //load saved cart from localStorage on first render
  useEffect(() => {
    try {
      const saved = localStorage.getItem("monopoly-mart-cart");
      if (saved) dispatch({ type: "LOAD", payload: JSON.parse(saved) });
    } catch {
      console.error("Could not restore cart from localStorage.");
    }
  }, []);

  //rersist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("monopoly-mart-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: CartItem) {
    const alreadyInCart = cart.some((item) => item.id === product.id);
    const msg = alreadyInCart
      ? `Quantity increased for ${product.title}`
      : `${product.title} added to cart!`;

    //toast so it doesn't fire during a render cycle
    setTimeout(() => toast.success(msg), 0);
    dispatch({ type: "ADD", payload: product });
  }

  function removeFromCart(id: string | number) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function updateQuantity(id: string | number, quantity: number) {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QTY", payload: { id, quantity } });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  // Derived totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
        : item.price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
}

