"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Product } from "@/models/product"

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="mt-12">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="details"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="shipping"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Shipping & Returns
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="pt-4">
        <div className="prose max-w-none dark:prose-invert">
          <p>{product.description}</p>
          <p>
            Our {product.name} is designed to bring a touch of vintage charm to your modern wardrobe. Made with
            high-quality materials and attention to detail, this piece embodies the GroovyGal commitment to quality and
            style.
          </p>
          <p>
            Each item is carefully crafted to ensure comfort, durability, and a perfect fit. The unique design draws
            inspiration from retro fashion while incorporating contemporary elements that make it versatile for various
            occasions.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="details" className="pt-4">
        <div className="prose max-w-none dark:prose-invert">
          <h3>Product Details</h3>
          <ul>
            <li>Material: 95% Cotton, 5% Elastane</li>
            <li>Care Instructions: Machine wash cold, tumble dry low</li>
            <li>Model is 5'8" and wearing size M</li>
            <li>Ethically made in Sri Lanka</li>
            <li>Sustainable production practices</li>
          </ul>
          <h3>Size Guide</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Size</th>
                <th className="border p-2 text-left">Bust (cm)</th>
                <th className="border p-2 text-left">Waist (cm)</th>
                <th className="border p-2 text-left">Hips (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">XS</td>
                <td className="border p-2">82-85</td>
                <td className="border p-2">63-66</td>
                <td className="border p-2">88-91</td>
              </tr>
              <tr>
                <td className="border p-2">S</td>
                <td className="border p-2">86-89</td>
                <td className="border p-2">67-70</td>
                <td className="border p-2">92-95</td>
              </tr>
              <tr>
                <td className="border p-2">M</td>
                <td className="border p-2">90-93</td>
                <td className="border p-2">71-74</td>
                <td className="border p-2">96-99</td>
              </tr>
              <tr>
                <td className="border p-2">L</td>
                <td className="border p-2">94-97</td>
                <td className="border p-2">75-78</td>
                <td className="border p-2">100-103</td>
              </tr>
              <tr>
                <td className="border p-2">XL</td>
                <td className="border p-2">98-101</td>
                <td className="border p-2">79-82</td>
                <td className="border p-2">104-107</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>
      <TabsContent value="shipping" className="pt-4">
        <div className="prose max-w-none dark:prose-invert">
          <h3>Shipping Information</h3>
          <p>We offer the following shipping options for all orders within Sri Lanka:</p>
          <ul>
            <li>Standard Shipping (3-5 business days): LKR 350</li>
            <li>Express Shipping (1-2 business days): LKR 600</li>
            <li>Free Standard Shipping on orders over LKR 5,000</li>
          </ul>
          <p>
            For international orders, shipping rates and delivery times vary by location. Please contact our customer
            service team for more information.
          </p>

          <h3>Returns Policy</h3>
          <p>
            We want you to love your GroovyGal purchase. If for any reason you're not completely satisfied, we accept
            returns within 14 days of delivery.
          </p>
          <p>
            To be eligible for a return, your item must be unused and in the same condition that you received it. It
            must also be in the original packaging.
          </p>
          <p>
            To initiate a return, please contact our customer service team at returns@groovygal.lk with your order
            number and reason for return.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reviews" className="pt-4">
        <div className="prose max-w-none dark:prose-invert">
          <h3>Customer Reviews</h3>
          <p>This product has no reviews yet. Be the first to share your thoughts!</p>
          {/* In a real implementation, this would display actual reviews */}
        </div>
      </TabsContent>
    </Tabs>
  )
}
