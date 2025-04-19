"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Cart, CartItem } from "@/models/cart"

interface CartContextType {
  cart: Cart
  cartCount: number
  addToCart: (item: CartItem) => void
  updateCartItem: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  })

  const cartCount = cart.items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const calculateTotals = (items: CartItem[]) => {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const shipping = subtotal > 5000 ? 0 : 350 // Free shipping over LKR 5000
    const tax = subtotal * 0.08 // 8% tax
    const total = subtotal + shipping + tax

    return {
      subtotal,
      shipping,
      tax,
      total,
    }
  }

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (cartItem) => cartItem.productId === item.productId && cartItem.variantId === item.variantId,
      )

      let newItems: CartItem[]

      if (existingItemIndex > -1) {
        newItems = [...prevCart.items]
        newItems[existingItemIndex].quantity += item.quantity
      } else {
        newItems = [...prevCart.items, item]
      }

      return {
        items: newItems,
        ...calculateTotals(newItems),
      }
    })
  }

  const updateCartItem = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => (item.productId === productId ? { ...item, quantity } : item))

      return {
        items: newItems,
        ...calculateTotals(newItems),
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.productId !== productId)

      return {
        items: newItems,
        ...calculateTotals(newItems),
      }
    })
  }

  const clearCart = () => {
    setCart({
      items: [],
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
