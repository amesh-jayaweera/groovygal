"use client"

import { useState } from "react"
import { User } from "next-auth"
import { Package, Heart, MapPin, CreditCard, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AccountProfile } from "@/components/account/account-profile"
import { AccountAddresses } from "@/components/account/account-addresses"
import { AccountOrders } from "@/components/account/account-orders"
import { AccountWishlist } from "@/components/account/account-wishlist"

interface AccountDashboardProps {
  user: User
}

export function AccountDashboard({ user }: AccountDashboardProps) {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-4">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="flex flex-col">
            <button
              className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                activeTab === "profile" ? "bg-muted font-medium" : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="h-4 w-4" />
              Profile
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                activeTab === "orders" ? "bg-muted font-medium" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <Package className="h-4 w-4" />
              Orders
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                activeTab === "addresses" ? "bg-muted font-medium" : ""
              }`}
              onClick={() => setActiveTab("addresses")}
            >
              <MapPin className="h-4 w-4" />
              Addresses
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                activeTab === "wishlist" ? "bg-muted font-medium" : ""
              }`}
              onClick={() => setActiveTab("wishlist")}
            >
              <Heart className="h-4 w-4" />
              Wishlist
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                activeTab === "payment" ? "bg-muted font-medium" : ""
              }`}
              onClick={() => setActiveTab("payment")}
            >
              <CreditCard className="h-4 w-4" />
              Payment Methods
            </button>
          </nav>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={() => signOut({ callbackUrl: "/" })}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </CardFooter>
      </Card>
      <div className="lg:col-span-3">
        {activeTab === "profile" && <AccountProfile user={user} />}
        {activeTab === "orders" && <AccountOrders />}
        {activeTab === "addresses" && <AccountAddresses />}
        {activeTab === "wishlist" && <AccountWishlist />}
        {activeTab === "payment" && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No payment methods saved yet.</p>
            </CardContent>
            <CardFooter>
              <Button>Add Payment Method</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
