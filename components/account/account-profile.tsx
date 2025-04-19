"use client"

import type React from "react"

import { useState } from "react"
import type { User } from "next-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface AccountProfileProps {
  user: User
}

export function AccountProfile({ user }: AccountProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user.name || "")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })

    setIsEditing(false)
    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user.email || ""} disabled />
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">{user.name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isEditing ? (
          <div className="flex gap-2">
            <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsEditing(false)} disabled={isLoading}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </CardFooter>
    </Card>
  )
}
