"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

// Mock data - would be fetched from database in real implementation
const orders = [
  {
    id: "1",
    orderNumber: "GG2023001",
    date: "2023-05-15",
    status: "delivered",
    total: 8700,
    items: 3,
  },
  {
    id: "2",
    orderNumber: "GG2023015",
    date: "2023-06-22",
    status: "processing",
    total: 4500,
    items: 1,
  },
]

export function AccountOrders() {
  if (orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>View and track your orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="mb-4 text-muted-foreground">You haven't placed any orders yet.</p>
            <Button asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>View and track your orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">#{order.orderNumber}</p>
                  <Badge
                    variant={
                      order.status === "delivered" ? "default" : order.status === "processing" ? "secondary" : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.date).toLocaleDateString()} • {order.items} items
                </p>
                <p className="font-medium">{formatPrice(order.total)}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/account/orders/${order.id}`}>View Order</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
