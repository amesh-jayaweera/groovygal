import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { CategoryShowcase } from "@/components/sections/category-showcase"
import { BrandValues } from "@/components/sections/brand-values"
import { Newsletter } from "@/components/sections/newsletter"

export default async function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <BrandValues />
      <Newsletter />
    </div>
  )
}
