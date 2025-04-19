"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import type { Address } from "@/models/user"

interface AddressFormProps {
  address?: Address
  onSubmit: (address: Address) => void
  onCancel: () => void
}

export function AddressForm({ address, onSubmit, onCancel }: AddressFormProps) {
  const [formData, setFormData] = useState<Address>(
    address || {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      province: "",
      postalCode: "",
      country: "Sri Lanka",
      phone: "",
      isDefault: false,
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="addressLine1">Address Line 1</Label>
        <Input id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
        <Input id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="province">Province</Label>
          <Input id="province" name="province" value={formData.province} onChange={handleChange} required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="isDefault"
          checked={formData.isDefault}
          onCheckedChange={(checked) => setFormData({ ...formData, isDefault: checked as boolean })}
        />
        <Label htmlFor="isDefault">Set as default address</Label>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Save Address</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
