import { ProductCard } from "@/components/product/product-card"
import type { Product } from "@/models/product"

// Mock data - would be fetched from database in real implementation
const products: Product[] = [
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

interface RelatedProductsProps {
  currentProductId: string
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product
  const relatedProducts = products.filter((product) => product._id !== currentProductId)

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
