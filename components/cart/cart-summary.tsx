"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice } from "@/lib/utils"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { getStripe } from "@/lib/stripe"

export function CartSummary() {
  const { cart } = useCart()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async () => {
    if (cart.items.length === 0) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await getStripe()
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-medium">Order Summary</h2>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatPrice(cart.subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>{cart.shipping > 0 ? formatPrice(cart.shipping) : "Free"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax</span>
          <span>{formatPrice(cart.tax)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatPrice(cart.total)}</span>
        </div>
        <Button className="w-full" size="lg" onClick={handleCheckout} disabled={cart.items.length === 0 || isLoading}>
          {isLoading ? "Processing..." : "Checkout"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
        <div className="text-center">
          <Link href="/products" className="text-sm text-primary hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
