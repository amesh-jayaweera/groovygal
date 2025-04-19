import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Order Confirmation | GroovyGal",
  description: "Thank you for your order!",
}

export default function CheckoutSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 md:py-24">
      <div className="mx-auto max-w-md text-center">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>
        <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Thank you for your order!</h1>
        <p className="mt-4 text-muted-foreground">
          Your order has been confirmed and will be shipped soon. We've sent you an email with your order details and
          tracking information.
        </p>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/account/orders">View Order</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
