export interface CartItem {
  productId: string
  variantId?: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
}
