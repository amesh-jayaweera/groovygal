"use client"

import { useState } from "react"
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Product } from "@/models/product"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.id || "")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant)

    addToCart({
      productId: product._id,
      variantId: variant?.id,
      name: product.name + (variant ? ` - ${variant.name}` : ""),
      price: variant?.price || product.price,
      quantity,
      image: product.images[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
      </div>

      <p className="text-muted-foreground">{product.description}</p>

      {product.variants.length > 0 && (
        <div className="space-y-2">
          <label htmlFor="variant" className="text-sm font-medium">
            Size
          </label>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger id="variant">
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              {product.variants.map((variant) => (
                <SelectItem key={variant.id} value={variant.id}>
                  {variant.name} {variant.inventory < 5 && variant.inventory > 0 && `(Only ${variant.inventory} left)`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium">
          Quantity
        </label>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-r-none"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="flex h-9 w-12 items-center justify-center border-y border-input bg-background">
            {quantity}
          </div>
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-l-none" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button className="flex-1" onClick={handleAddToCart} disabled={product.variants.length > 0 && !selectedVariant}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>

      <div className="mt-4 space-y-2 rounded-lg border p-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">SKU:</span>
          <span className="text-muted-foreground">
            {product.variants.find((v) => v.id === selectedVariant)?.sku || "N/A"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">Categories:</span>
          <span className="text-muted-foreground">{product.categories.join(", ")}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">Tags:</span>
          <span className="text-muted-foreground">{product.tags.join(", ")}</span>
        </div>
      </div>
    </div>
  )
}
