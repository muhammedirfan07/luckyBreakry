import { Cake, Sandwich, Cookie, Croissant } from "lucide-react";
import cakesImage from "@/assets/menu-cakes.jpg";
import breadImage from "@/assets/menu-bread.jpg";
import snacksImage from "@/assets/menu-snacks.jpg";
import sandwichImage from "@/assets/menu-sandwich.jpg";
import cookiesImage from "@/assets/menu-cookies.jpg";
import heroCakeImage from "@/assets/hero-cake.jpg";
import BF from '@/assets/backforest.jpg'
import wf from '@/assets/whiteforest.webp'
import rich from '@/assets/richa.webp'
import vcake from '@/assets/vcake.webp'

export interface Product {
  name: string;
  price: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: any;
  image: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "cake",
    name: "Cake",
    icon: Cake,
    image: heroCakeImage,
    products: [
      { name: "Strawberry Delight", price: "400", image: heroCakeImage },
      { name: "Vanilla Elegance", price: "400", image:vcake  },
      { name: "Black Forest", price: "400", image: BF },
      { name: "White Forest", price: "400", image: wf },
      { name: "Rich almond", price: "450", image: rich },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    icon: Sandwich,
    image: sandwichImage,
    products: [
      { name: "Club Sandwich", price: "12.00", image: sandwichImage },
      { name: "Gourmet Veggie", price: "10.00", image: sandwichImage },
      { name: "Classic BLT", price: "11.00", image: sandwichImage },
    ],
  },
  {
    id: "cookies",
    name: "Cookies",
    icon: Cookie,
    image: cookiesImage,
    products: [
      { name: "Chocolate Chip", price: "3.50", image: cookiesImage },
      { name: "Oatmeal Raisin", price: "3.00", image: cookiesImage },
      { name: "Double Chocolate", price: "4.00", image: cookiesImage },
    ],
  },
  {
    id: "bread",
    name: "Bread",
    icon: Croissant,
    image: breadImage,
    products: [
      { name: "Sourdough Loaf", price: "8.00", image: breadImage },
      { name: "French Baguette", price: "5.00", image: breadImage },
      { name: "Whole Wheat", price: "6.00", image: breadImage },
    ],
  },
];
