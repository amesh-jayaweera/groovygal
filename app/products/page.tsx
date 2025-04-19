import { Suspense } from "react"
import { ProductGrid } from "@/components/product/product-grid"
import { ProductFilters } from "@/components/product/product-filters"
import { ProductSkeleton } from "@/components/product/product-skeleton"

export const metadata = {
  title: "Shop All Products | GroovyGal",
  description: "Browse our collection of vintage-inspired fashion for the modern Sri Lankan woman.",
}

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row">
        <aside className="md:w-1/4">
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">All Products</h1>
          <p className="mt-2 text-muted-foreground">Browse our collection of vintage-inspired fashion.</p>
          <Suspense fallback={<ProductSkeleton />}>
            <ProductGrid />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
