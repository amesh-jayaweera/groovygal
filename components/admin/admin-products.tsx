// "use client"
//
// import { useState } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import type { Product } from "@/models/product"
// import { formatPrice } from "@/lib/utils"
// import { Edit, Plus, Search, Trash } from "lucide-react"
//
// // Mock data - would be fetched from database in real implementation
// const products: Product[] = [
//   {
//     _id: "1",
//     name: "Retro Floral Dress",
//     slug: "retro-floral-dress",
//     description: "A beautiful floral dress with a vintage-inspired silhouette.",
//     price: 4500,
//     images: ["/placeholder.svg?height=400&width=300"],
//     categories: ["dresses"],
//     tags: ["floral", "retro", "summer"],
//     variants: [],
//     featured: true,
//     isNew: true,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     _id: "2",
//     name: "High-Waisted Denim Jeans",
//     slug: "high-waisted-denim-jeans",
//     description: "Classic high-waisted jeans with a comfortable stretch fit.",
//     price: 3800,
//     images: ["/placeholder.svg?height=400&width=300"],
//     categories: ["bottoms"],
//     tags: ["denim", "casual", "basics"],
//     variants: [],
//     featured: true,
//     isNew: false,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     _id: "3",
//     name: "Vintage-Inspired Blouse",
//     slug: "vintage-inspired-blouse",
//     description: "A lightweight blouse with delicate embroidery details.",
//     price: 2900,
//     images: ["/placeholder.svg?height=400&width=300"],
//     categories: ["tops"],
//     tags: ["vintage", "elegant", "work"],
//     variants: [],
//     featured: true,
//     isNew: true,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     _id: "4",
//     name: "Statement Earrings",
//     slug: "statement-earrings",
//     description: "Bold, colorful earrings that add a pop to any outfit.",
//     price: 1200,
//     images: ["/placeholder.svg?height=400&width=300"],
//     categories: ["accessories"],
//     tags: ["jewelry", "statement", "colorful"],
//     variants: [],
//     featured: true,
//     isNew: false,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     _id: "5",
//     name: "Pleated Midi Skirt",
//     slug: "pleated-midi-skirt",
//     description: "An elegant pleated skirt that transitions from day to night.",
//     price: 3200,
//     images: ["/placeholder.svg?height=400&width=300"],
//     categories: ["bottoms"],
//     tags: ["elegant", "versatile", "office"],
//     variants: [],
//     featured: false,
//     isNew: true,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ]
//
// export function AdminProducts() {
//   const [searchTerm, setSearchTerm] = useState("")
//
//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase()),
//   )
//
//   return (
//     <div>
//       <div className="flex items-center justify-between pb-4">
//         <div className="relative w-64">
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search products..."
//             className="pl-8"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <Button>
//           <Plus className="mr-2 h-4 w-4" />
//           Add Product
//         </Button>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Image</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredProducts.map((product) => (
//               <TableRow key={product._id}>
//                 <TableCell>
//                   <div className="relative h-10 w-10 overflow-hidden rounded-md bg-muted">
//                     <Image
//                       src={product.images[0] || "/placeholder.svg"}
//                       alt={product.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </TableCell>
//                 <TableCell className="font-medium">{product.name}</TableCell>
//                 <TableCell>{product.categories[0]}</TableCell>
//                 <TableCell>{formatPrice(product.price)}</TableCell>
//                 <TableCell>
//                   {product.isNew ? (
//                     <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-800/20 dark:text-green-400">
//                       New
//                     </span>
//                   ) : (
//                     <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-800/20 dark:text-blue-400">
//                       Active
//                     </span>
//                   )}
//                 </TableCell>
//                 <TableCell className="text-right">
//                   <Button variant="ghost" size="icon">
//                     <Edit className="h-4 w-4" />
//                     <span className="sr-only">Edit</span>
//                   </Button>
//                   <Button variant="ghost" size="icon">
//                     <Trash className="h-4 w-4" />
//                     <span className="sr-only">Delete</span>
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )
// }
