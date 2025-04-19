import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-playfair text-xl font-bold">GroovyGal</span>
            </Link>
            <p className="text-sm text-muted-foreground">Vintage vibes for the modern Sri Lankan woman</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/dresses" className="text-muted-foreground hover:text-primary">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/categories/tops" className="text-muted-foreground hover:text-primary">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/categories/bottoms" className="text-muted-foreground hover:text-primary">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-muted-foreground hover:text-primary">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-primary">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GroovyGal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
