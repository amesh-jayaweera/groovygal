"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice } from "@/lib/utils"

export function CartItems() {
  const { cart, updateCartItem, removeFromCart } = useCart()

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <h2 className="text-lg font-medium">Your cart is empty</h2>
        <p className="mt-1 text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="mt-4">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-lg border">
      <div className="divide-y">
        {cart.items.map((item) => (
          <div key={`${item.productId}-${item.variantId}`} className="flex items-center gap-4 p-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {formatPrice(item.price)} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateCartItem(item.productId, Math.max(1, item.quantity - 1))}
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-4 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateCartItem(item.productId, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(item.productId)}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove item</span>
              </Button>
            </div>
            <div className="w-20 text-right">{formatPrice(item.price * item.quantity)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
