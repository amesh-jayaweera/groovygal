export interface Address {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  province: string
  postalCode: string
  country: string
  phone: string
  isDefault?: boolean
}

export interface User {
  _id: string
  name: string
  email: string
  image?: string
  addresses: Address[]
  wishlist: string[]
  createdAt: Date
  updatedAt: Date
}
