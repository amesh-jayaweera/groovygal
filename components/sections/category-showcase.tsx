import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "Dresses",
    slug: "dresses",
    image: "/placeholder.svg?height=600&width=400",
    description: "From casual to formal, find the perfect dress for any occasion.",
  },
  {
    name: "Tops",
    slug: "tops",
    image: "/placeholder.svg?height=600&width=400",
    description: "Blouses, t-shirts, and more to complete your everyday look.",
  },
  {
    name: "Bottoms",
    slug: "bottoms",
    image: "/placeholder.svg?height=600&width=400",
    description: "Skirts, pants, and shorts in various styles and fabrics.",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/placeholder.svg?height=600&width=400",
    description: "The finishing touches that make your outfit uniquely you.",
  },
]

export function CategoryShowcase() {
  return (
    <section className="container px-4 py-8 md:py-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Shop by Category</h2>
        <p className="mt-2 text-muted-foreground">Explore our collections and find your perfect style.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={cn(
              "group relative overflow-hidden rounded-lg border bg-background transition-all hover:border-primary",
            )}
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={400}
                height={600}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-1 text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
