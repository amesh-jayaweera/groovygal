"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Heart, User, Menu, Search, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart/cart-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const { cartCount } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Shop",
      active: pathname === "/products" || pathname.startsWith("/products/"),
    },
    {
      href: "/categories",
      label: "Categories",
      active: pathname === "/categories" || pathname.startsWith("/categories/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav routes={routes} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-playfair text-xl font-bold">GroovyGal</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {searchOpen ? (
            <div className="relative flex items-center">
              <Input type="search" placeholder="Search products..." className="w-full md:w-[200px] lg:w-[300px]" />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function MobileNav({ routes }: { routes: { href: string; label: string; active: boolean }[] }) {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-playfair text-xl font-bold">GroovyGal</span>
      </Link>
      <div className="flex flex-col space-y-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
