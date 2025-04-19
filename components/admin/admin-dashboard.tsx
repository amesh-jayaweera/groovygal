// "use client"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { AdminProducts } from "@/components/admin/admin-products"
// import { AdminOrders } from "@/components/admin/admin-orders"
// // import { AdminCustomers } from "@/components/admin/admin-customers"
// // import { AdminAnalytics } from "@/components/admin/admin-analytics"
//
// export function AdminDashboard() {
//   return (
//     <div className="mt-8">
//       <Tabs defaultValue="overview">
//         <TabsList className="grid w-full grid-cols-4">
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="products">Products</TabsTrigger>
//           <TabsTrigger value="orders">Orders</TabsTrigger>
//           <TabsTrigger value="customers">Customers</TabsTrigger>
//         </TabsList>
//         <TabsContent value="overview">
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">LKR 45,231.89</div>
//                 <p className="text-xs text-muted-foreground">+20.1% from last month</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Orders</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+12</div>
//                 <p className="text-xs text-muted-foreground">+19% from last month</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">New Customers</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+32</div>
//                 <p className="text-xs text-muted-foreground">+39% from last month</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">15.2%</div>
//                 <p className="text-xs text-muted-foreground">+2.3% from last month</p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//             <Card className="lg:col-span-4">
//               <CardHeader>
//                 <CardTitle>Sales Overview</CardTitle>
//               </CardHeader>
//               {/*<CardContent>*/}
//               {/*  <AdminAnalytics />*/}
//               {/*</CardContent>*/}
//             </Card>
//             <Card className="lg:col-span-3">
//               <CardHeader>
//                 <CardTitle>Recent Orders</CardTitle>
//                 <CardDescription>Latest 5 orders placed on your store</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <AdminOrders limit={5} />
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//         <TabsContent value="products">
//           <Card>
//             <CardHeader>
//               <CardTitle>Products</CardTitle>
//               <CardDescription>Manage your product inventory</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <AdminProducts />
//             </CardContent>
//           </Card>
//         </TabsContent>
//         <TabsContent value="orders">
//           <Card>
//             <CardHeader>
//               <CardTitle>Orders</CardTitle>
//               <CardDescription>View and manage customer orders</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <AdminOrders />
//             </CardContent>
//           </Card>
//         </TabsContent>
//         <TabsContent value="customers">
//           <Card>
//             <CardHeader>
//               <CardTitle>Customers</CardTitle>
//               <CardDescription>Manage your customer accounts</CardDescription>
//             </CardHeader>
//             {/*<CardContent>*/}
//             {/*  <AdminCustomers />*/}
//             {/*</CardContent>*/}
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }
