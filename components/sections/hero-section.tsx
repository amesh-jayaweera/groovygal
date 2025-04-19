import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Vintage Vibes for the Modern Sri Lankan Woman
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover unique fashion that blends retro aesthetics with contemporary designs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline">
                  Explore Collections
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
