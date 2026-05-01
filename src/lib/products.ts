import fansData from "@/data/fans.json";
import { exploreProducts } from "@/data/exploreProducts";

export interface Product {
  name: string;
  price: string | number;
  image: any;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export function getProductById(id: string): Product {
  let targetProduct = fansData.find((item) => item.product_link.endsWith(id));
  if (!targetProduct) {
    targetProduct = exploreProducts.find(
      (item) => item.id.toString() === id,
    ) as any;
  }

  if (!targetProduct) {
    return {
      name: "Premium Product",
      price: 199.99,
      image: "/assets/vertical-1.jpg",
      category: "PREMIUM",
      description: "A wonderful premium product matching our aesthetic.",
      rating: 5.0,
      reviews: 128,
    };
  }

  //figure out the image path
  const rawImage = (targetProduct as any).image;
  let finalImage = rawImage;

  if (typeof rawImage === "string") {
    const isExternalLink = rawImage.startsWith("http");
    const isAbsolutePath = rawImage.startsWith("/");

    if (!isExternalLink && !isAbsolutePath) {
      finalImage = "/assets/" + rawImage;
    }
  }

  //return the final clean product object
  return {
    name: (targetProduct as any).title || (targetProduct as any).name,
    price: (targetProduct as any).price,
    image: finalImage,
    category: (targetProduct as any).category || "FASHION",
    rating: (targetProduct as any).rating || 5,
    reviews: (targetProduct as any).reviews || 128,
    description:
      (targetProduct as any).description ||
      "Beautiful and exquisite design perfect for your daily aesthetic.",
  };
}
