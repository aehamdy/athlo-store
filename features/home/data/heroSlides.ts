import ROUTES from "@/lib/routes";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    badge: "New Collection",
    title: "New Season Collection",
    description: "Elevate your performance with our latest gear",
    link: `${ROUTES.public.products}`,
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    badge: "Move Without Limits",
    title: "Run Further",
    description: "Lightweight footwear designed for every workout.",
    link: `${ROUTES.public.products}?category=${encodeURIComponent("Sportswear")}`,
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    badge: "Latest Drop",
    title: "Train Like Never Before",
    description: "High-performance apparel for every workout",
    link: `${ROUTES.public.products}?sort=${encodeURIComponent("newest")}`,
  },
];

export default heroSlides;
