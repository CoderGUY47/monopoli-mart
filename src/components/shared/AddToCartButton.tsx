"use client";

import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  product: {
    id: string | number;
    title: string;
    price: string | number;
    image: any;
  };
  className?: string;
}

export default function AddToCartButton({
  product,
  className,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const session = authClient.useSession();
  const user = session.data?.user;

  const handleAddToCart = () => {
    if (!user) {
      toast.info("Please login to add items to cart");
      return;
    }
    addToCart(product);
  };

  return (
    <Button onClick={handleAddToCart} className={className}>
      Add to Cart
    </Button>
  );
}
