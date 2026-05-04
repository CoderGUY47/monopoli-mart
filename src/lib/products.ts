import fansData from "@/data/fans.json";
import allProducts from "@/data/allProducts.json";
import { exploreProducts } from "@/data/exploreProducts";

export interface Product {
  id: string | number;
  name: string;
  price: string | number;
  image: any;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export function getProductById(id: string): Product {
  // Normalize slug for comparison
  const slug = id.toLowerCase();

  // 1. Find product in multiple data sources
  const target =
    (fansData as any[]).find(
      (f) =>
        f.id === id ||
        f.product_link?.endsWith(id) ||
        f.title?.toLowerCase().replace(/\s+/g, "-") === slug,
    ) ||
    exploreProducts.find(
      (p) =>
        p.id.toString() === id ||
        p.name?.toLowerCase().replace(/\s+/g, "-") === slug,
    ) ||
    (allProducts as any[]).find(
      (p) =>
        p.id.toString() === id ||
        p.title?.toLowerCase().replace(/\s+/g, "-") === slug,
    );

  // 2. Fallback if product not found
  if (!target) {
    return {
      id,
      name: "Premium Product",
      price: 199.99,
      image: "/assets/vertical-1.jpg",
      category: "PREMIUM",
      description: "A wonderful premium product matching our aesthetic.",
      rating: 5.0,
      reviews: 128,
    };
  }

  // 3. Resolve Image Path
  let finalImage = target.image;
  if (
    typeof finalImage === "string" &&
    !finalImage.startsWith("http") &&
    !finalImage.startsWith("/")
  ) {
    finalImage = `/assets/${finalImage}`;
  }

  // 4. Return normalized product object
  return {
    id: target.id || id,
    name: target.title || target.name,
    price: target.price,
    image: finalImage,
    category: target.category || "BEAUTY",
    rating: target.rating || 5,
    reviews: target.reviews || 128,
    description:
      target.description ||
      "Beautiful and exquisite design perfect for your daily aesthetic.",
  };
}
