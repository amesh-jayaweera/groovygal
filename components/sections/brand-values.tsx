import { Heart, Leaf, Sparkles, Users } from "lucide-react"

export function BrandValues() {
  return (
    <section className="container px-4 py-8 md:py-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Brand Values</h2>
        <p className="mt-2 text-muted-foreground">What makes GroovyGal special and why our customers love us.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Creativity</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We blend vintage inspiration with modern trends to create unique pieces.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Inclusivity</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our designs celebrate diversity and are made for women of all shapes and sizes.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Quality</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We use premium materials and pay attention to every detail in our garments.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <Leaf className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Sustainability</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We're committed to ethical production and reducing our environmental impact.
          </p>
        </div>
      </div>
    </section>
  )
}
