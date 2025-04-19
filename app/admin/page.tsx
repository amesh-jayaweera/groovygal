import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
// import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata = {
  title: "Admin Dashboard | GroovyGal",
  description: "Manage your GroovyGal store.",
}

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  // In a real implementation, this would check if the user has admin privileges
  if (!session) {
    redirect("/login?callbackUrl=/admin")
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Admin Dashboard</h1>
      {/*<AdminDashboard />*/}
    </div>
  )
}
