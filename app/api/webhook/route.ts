import { NextResponse } from "next/server"
import Stripe from "stripe"
import clientPromise from "@/lib/db"
import type { OrderStatus, PaymentStatus } from "@/models/order"

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("Missing Stripe environment variables")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  const payload = await request.text()
  const signature = request.headers.get("stripe-signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`)
    return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      await fulfillOrder(session)
    } catch (error) {
      console.error("Error fulfilling order:", error)
      return NextResponse.json({ error: "Error fulfilling order" }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}

async function fulfillOrder(session: Stripe.Checkout.Session) {
  // Retrieve the session with line items
  const expandedSession = await stripe.checkout.sessions.retrieve(session.id, { expand: ["line_items"] })

  const lineItems = expandedSession.line_items
  if (!lineItems) {
    throw new Error("No line items found")
  }

  // Connect to database
  const client = await clientPromise
  const db = client.db()

  // Generate order number
  const orderCount = await db.collection("orders").countDocuments()
  const orderNumber = `GG${new Date().getFullYear()}${(orderCount + 1).toString().padStart(4, "0")}`

  // Create order items from line items
  const orderItems = lineItems.data.map((item) => {
    const productName = item.description
    return {
      productId: item.price?.product,
      name: productName,
      price: item.amount_total / 100 / item.quantity,
      quantity: item.quantity,
      image: "/placeholder.svg?height=100&width=100", // Default placeholder, would be replaced with actual image
    }
  })

  // Calculate order totals
  const subtotal = lineItems.data.reduce((total, item) => {
    // Skip shipping item
    if (item.description === "Shipping") {
      return total
    }
    return total + item.amount_total / 100
  }, 0)

  const shipping = lineItems.data.find((item) => item.description === "Shipping")
    ? 350 // Standard shipping fee
    : 0

  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  // Create order in database
  await db.collection("orders").insertOne({
    userId: session.customer,
    orderNumber,
    items: orderItems,
    subtotal,
    shipping,
    tax,
    total,
    shippingAddress: JSON.parse(session.metadata?.shippingAddress || "{}"),
    billingAddress: JSON.parse(session.metadata?.shippingAddress || "{}"), // Using shipping as billing for simplicity
    paymentMethod: "card",
    paymentStatus: "paid" as PaymentStatus,
    orderStatus: "processing" as OrderStatus,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}
