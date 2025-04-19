"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatPrice } from "@/lib/utils"

const categories = [
  { id: "dresses", label: "Dresses" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "accessories", label: "Accessories" },
]

const colors = [
  { id: "black", label: "Black" },
  { id: "white", label: "White" },
  { id: "blue", label: "Blue" },
  { id: "red", label: "Red" },
  { id: "green", label: "Green" },
  { id: "yellow", label: "Yellow" },
  { id: "pink", label: "Pink" },
  { id: "purple", label: "Purple" },
]

const sizes = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Filters</h3>
        <p className="text-sm text-muted-foreground">Narrow down your product search.</p>
      </div>
      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={priceRange}
                min={500}
                max={10000}
                step={100}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">{formatPrice(priceRange[0])}</span>
                <span className="text-sm">{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color.id} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color.id}`} />
                  <label
                    htmlFor={`color-${color.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {color.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sizes">
          <AccordionTrigger>Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size.id}`} />
                  <label
                    htmlFor={`size-${size.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {size.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
