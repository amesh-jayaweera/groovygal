import { ProductCard } from "@/components/product/product-card"
import type { Product } from "@/models/product"

// Mock data - would be fetched from database in real implementation
const products: Product[] = [
  {
    _id: "1",
    name: "Retro Floral Dress",
    slug: "retro-floral-dress",
    description: "A beautiful floral dress with a vintage-inspired silhouette.",
    price: 4500,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["dresses"],
    tags: ["floral", "retro", "summer"],
    variants: [],
    featured: true,
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    name: "High-Waisted Denim Jeans",
    slug: "high-waisted-denim-jeans",
    description: "Classic high-waisted jeans with a comfortable stretch fit.",
    price: 3800,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["bottoms"],
    tags: ["denim", "casual", "basics"],
    variants: [],
    featured: true,
    isNew: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    name: "Vintage-Inspired Blouse",
    slug: "vintage-inspired-blouse",
    description: "A lightweight blouse with delicate embroidery details.",
    price: 2900,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["tops"],
    tags: ["vintage", "elegant", "work"],
    variants: [],
    featured: true,
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "4",
    name: "Statement Earrings",
    slug: "statement-earrings",
    description: "Bold, colorful earrings that add a pop to any outfit.",
    price: 1200,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["accessories"],
    tags: ["jewelry", "statement", "colorful"],
    variants: [],
    featured: true,
    isNew: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "5",
    name: "Pleated Midi Skirt",
    slug: "pleated-midi-skirt",
    description: "An elegant pleated skirt that transitions from day to night.",
    price: 3200,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["bottoms"],
    tags: ["elegant", "versatile", "office"],
    variants: [],
    featured: false,
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "6",
    name: "Retro Sunglasses",
    slug: "retro-sunglasses",
    description: "Vintage-inspired sunglasses with UV protection.",
    price: 1800,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["accessories"],
    tags: ["summer", "retro", "beach"],
    variants: [],
    featured: false,
    isNew: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "7",
    name: "Puff Sleeve Top",
    slug: "puff-sleeve-top",
    description: "A trendy top with puff sleeves and a flattering fit.",
    price: 2500,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["tops"],
    tags: ["trendy", "casual", "summer"],
    variants: [],
    featured: false,
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "8",
    name: "Wrap Dress",
    slug: "wrap-dress",
    description: "A flattering wrap dress in a vibrant print.",
    price: 4200,
    images: ["/placeholder.svg?height=400&width=300"],
    categories: ["dresses"],
    tags: ["elegant", "office", "versatile"],
    variants: [],
    featured: false,
    isNew: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export function ProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}
