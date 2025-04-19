import { NextResponse } from "next/server"
import clientPromise from "@/lib/db"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug

    const client = await clientPromise
    const db = client.db()

    const product = await db.collection("products").findOne({ slug })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}
