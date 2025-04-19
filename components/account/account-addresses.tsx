"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Address } from "@/models/user"
import { AddressForm } from "@/components/account/address-form"
import { MapPin, Edit, Trash } from "lucide-react"

// Mock data - would be fetched from database in real implementation
const addresses: Address[] = [
  {
    firstName: "John",
    lastName: "Doe",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Colombo",
    province: "Western",
    postalCode: "00100",
    country: "Sri Lanka",
    phone: "+94 71 234 5678",
    isDefault: true,
  },
]

export function AccountAddresses() {
  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState<Address | null>(null)
  const [userAddresses, setUserAddresses] = useState<Address[]>(addresses)

  const handleAddAddress = (address: Address) => {
    setUserAddresses([...userAddresses, address])
    setIsAddingAddress(false)
  }

  const handleEditAddress = (address: Address, index: number) => {
    const newAddresses = [...userAddresses]
    newAddresses[index] = address
    setUserAddresses(newAddresses)
    setEditingAddress(null)
  }

  const handleDeleteAddress = (index: number) => {
    const newAddresses = [...userAddresses]
    newAddresses.splice(index, 1)
    setUserAddresses(newAddresses)
  }

  const handleSetDefault = (index: number) => {
    const newAddresses = userAddresses.map((address, i) => ({
      ...address,
      isDefault: i === index,
    }))
    setUserAddresses(newAddresses)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Addresses</CardTitle>
        <CardDescription>Manage your shipping and billing addresses</CardDescription>
      </CardHeader>
      <CardContent>
        {userAddresses.length === 0 && !isAddingAddress && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="mb-4 text-muted-foreground">You haven't added any addresses yet.</p>
            <Button onClick={() => setIsAddingAddress(true)}>Add Address</Button>
          </div>
        )}

        {userAddresses.length > 0 && (
          <div className="space-y-4">
            {userAddresses.map((address, index) => (
              <div key={index} className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">
                      {address.firstName} {address.lastName}
                    </p>
                    {address.isDefault && (
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {address.addressLine1}
                    {address.addressLine2 && `, ${address.addressLine2}`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {address.city}, {address.province}, {address.postalCode}
                  </p>
                  <p className="text-sm text-muted-foreground">{address.country}</p>
                  <p className="text-sm text-muted-foreground">{address.phone}</p>
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-row">
                  {!address.isDefault && (
                    <Button variant="outline" size="sm" onClick={() => handleSetDefault(index)}>
                      <MapPin className="mr-2 h-4 w-4" />
                      Set as Default
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => setEditingAddress(address)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteAddress(index)}>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
            {!isAddingAddress && !editingAddress && (
              <Button onClick={() => setIsAddingAddress(true)}>Add Address</Button>
            )}
          </div>
        )}

        {isAddingAddress && (
          <div className="mt-4">
            <h3 className="mb-4 text-lg font-medium">Add New Address</h3>
            <AddressForm onSubmit={handleAddAddress} onCancel={() => setIsAddingAddress(false)} />
          </div>
        )}

        {editingAddress && (
          <div className="mt-4">
            <h3 className="mb-4 text-lg font-medium">Edit Address</h3>
            <AddressForm
              address={editingAddress}
              onSubmit={(address) => {
                const index = userAddresses.findIndex(
                  (a) =>
                    a.firstName === editingAddress.firstName &&
                    a.lastName === editingAddress.lastName &&
                    a.addressLine1 === editingAddress.addressLine1,
                )
                handleEditAddress(address, index)
              }}
              onCancel={() => setEditingAddress(null)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
