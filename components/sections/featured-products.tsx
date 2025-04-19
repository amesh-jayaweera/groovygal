import Link from "next/link"
import { ProductCard } from "@/components/product/product-card"

// Mock data - would be fetched from database in real implementation
const featuredProducts = [
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
]

export function FeaturedProducts() {
  return (
    <section className="container px-4 py-8 md:py-12">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Products</h2>
          <p className="text-muted-foreground">Our most popular items, handpicked for you.</p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
