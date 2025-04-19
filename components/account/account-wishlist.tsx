"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/models/product"
import { formatPrice } from "@/lib/utils"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// Mock data - would be fetched from database in real implementation
const wishlistItems: Product[] = [
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
]

export function AccountWishlist() {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: Product) => {
    addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleRemoveFromWishlist = (productId: string) => {
    // In a real implementation, this would call an API to remove the item from the wishlist
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wishlist</CardTitle>
          <CardDescription>Items you've saved for later</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="mb-4 text-muted-foreground">Your wishlist is empty.</p>
            <Button asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wishlist</CardTitle>
        <CardDescription>Items you've saved for later</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {wishlistItems.map((product) => (
            <div
              key={product._id}
              className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link href={`/products/${product.slug}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 sm:mt-0">
                <Button variant="outline" size="sm" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleRemoveFromWishlist(product._id)}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
