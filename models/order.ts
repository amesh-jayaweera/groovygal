import type { Address } from "./user"

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

export type PaymentStatus = "pending" | "processing" | "paid" | "failed" | "refunded"

export interface OrderItem {
  productId: string
  variantId?: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  _id: string
  userId: string
  orderNumber: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  notes?: string
  createdAt: Date
  updatedAt: Date
}
