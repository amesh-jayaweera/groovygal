"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })

    setEmail("")
    setLoading(false)
  }

  return (
    <section className="bg-muted">
      <div className="container px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Join Our Newsletter</h2>
          <p className="mt-2 text-muted-foreground">
            Subscribe to get updates on new arrivals, special offers, and more.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
