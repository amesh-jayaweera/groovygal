export interface ProductVariant {
  id: string
  name: string
  price: number
  sku: string
  inventory: number
  attributes: {
    [key: string]: string
  }
}

export interface Product {
  _id: string
  name: string
  slug: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  categories: string[]
  tags: string[]
  variants: ProductVariant[]
  featured: boolean
  isNew: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
}

export interface Review {
  _id: string
  productId: string
  userId: string
  userName: string
  userImage?: string
  rating: number
  title: string
  comment: string
  createdAt: Date
}
