import { notFound } from "next/navigation"
import { Suspense } from "react"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductTabs } from "@/components/product/product-tabs"
import { RelatedProducts } from "@/components/product/related-products"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data - would be fetched from database in real implementation
const products = [
  {
    _id: "1",
    name: "Retro Floral Dress",
    slug: "retro-floral-dress",
    description:
      "A beautiful floral dress with a vintage-inspired silhouette. This dress features a flattering A-line cut, delicate floral print, and a comfortable stretch fabric that moves with you. Perfect for both casual outings and special occasions.",
    price: 4500,
    compareAtPrice: 5000,
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    categories: ["dresses"],
    tags: ["floral", "retro", "summer"],
    variants: [
      {
        id: "1-s",
        name: "Small",
        price: 4500,
        sku: "RFD-S",
        inventory: 10,
        attributes: { size: "S" },
      },
      {
        id: "1-m",
        name: "Medium",
        price: 4500,
        sku: "RFD-M",
        inventory: 15,
        attributes: { size: "M" },
      },
      {
        id: "1-l",
        name: "Large",
        price: 4500,
        sku: "RFD-L",
        inventory: 8,
        attributes: { size: "L" },
      },
    ],
    featured: true,
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function getProduct(slug: string) {
  // In a real implementation, this would fetch from the database
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return null
  }

  return product
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    return {
      title: "Product Not Found | GroovyGal",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | GroovyGal`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <Suspense fallback={<Skeleton className="aspect-square w-full" />}>
          <ProductGallery images={product.images} />
        </Suspense>
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      <RelatedProducts currentProductId={product._id} />
    </div>
  )
}
