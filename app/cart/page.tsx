import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"

export const metadata = {
  title: "Shopping Cart | GroovyGal",
  description: "Review and manage the items in your shopping cart.",
}

export default function CartPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
