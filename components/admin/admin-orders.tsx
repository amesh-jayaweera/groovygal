// "use client"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import type { OrderStatus } from "@/models/order"
//
// // Mock data - would be fetched from database in real implementation
// const orders = [
//   {
//     id: "1",
//     orderNumber: "GG2023001",
//     customer: "John Doe",
//     email: "john.doe@example.com",
//     date: "2023-05-15",
//     status: "delivered" as OrderStatus,
//     total: 8700,
//   },
//   {
//     id: "2",
//     orderNumber: "GG2023015",
//     customer: "Jane Smith",
//     email: "jane.smith@example.com",
//     date: "2023-06-22",
//     status: "processing" as OrderStatus,
//     total: 4500,
//   },
//   {
//     id: "3",
//     orderNumber: "GG2023023",
//     customer: "Robert Johnson",
//     email: "robert.johnson@example.com",
//     date: "2023-07-05",
//     status: "shipped" as OrderStatus,
//     total: 3200,
//   },
//   {
//     id: "4",
//     orderNumber: "GG2023042",
//     customer: "Emily Davis",
//     email: "emily.davis@example.com",
//     date: "2023-08-12",
//     status: "pending" as OrderStatus,
//     total: 5600,
//   },
//   {
//     id: "5",
//     orderNumber: "GG2023056",
//     customer: "Michael Wilson",
//     email: "michael.wilson@example.com",
//     date: "2023-09-03",
//     status: "cancelled" as OrderStatus,
//     total: 2900,
//   },
// ]
//
// interface AdminOrdersProps {
//   limit?: number
// }
//
// export function AdminOrders({ limit }: AdminOrdersProps) {
//   const displayOrders = limit ? orders.slice(0, limit) : orders
//
//   const getStatusBadgeVariant = (status: OrderStatus) => {
//     switch (status) {
//       case "delivered":
//         return "default"
//       case "processing":
//         return "secondary"
//       case "shipped":
//         return "outline"
//       case "pending":
//         return "secondary"
//       case "cancelled":
//         return "destructive"
//       default:
//         return "outline"
//     }
//   }
//
//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Order</TableHead>
//             <TableHead>Customer</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Total</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {displayOrders.map((order) => (
//             <TableRow key={order.id}>
//               <TableCell className="font-medium">#{order.orderNumber}</TableCell>
//               <TableCell>{order.customer}</TableCell>
//               <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>\
