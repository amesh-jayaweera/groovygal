import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/models/product"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:border-primary">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
            New
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm font-medium">{formatPrice(product.price)}</p>
          {product.compareAtPrice && (
            <p className="text-xs text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</p>
          )}
        </div>
      </div>
    </div>
  )
}
