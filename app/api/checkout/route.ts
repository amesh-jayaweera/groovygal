import { NextResponse } from "next/server"
import Stripe from "stripe"
import type { CartItem } from "@/models/cart"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    const { items, shippingAddress } = await request.json()

    if (!items || !items.length) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: "lkr",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe expects amounts in cents
      },
      quantity: item.quantity,
    }))

    // Add shipping fee if subtotal is less than 5000 LKR
    const subtotal = items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
    if (subtotal < 5000) {
      lineItems.push({
        price_data: {
          currency: "lkr",
          product_data: {
            name: "Shipping",
            description: "Standard shipping",
          },
          unit_amount: 350 * 100, // 350 LKR in cents
        },
        quantity: 1,
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
      shipping_address_collection: {
        allowed_countries: ["LK"], // Sri Lanka
      },
      metadata: {
        shippingAddress: JSON.stringify(shippingAddress),
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
