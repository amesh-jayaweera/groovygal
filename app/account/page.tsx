import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { AccountDashboard } from "@/components/account/account-dashboard"

export const metadata = {
  title: "Account | GroovyGal",
  description: "Manage your GroovyGal account.",
}

export default async function AccountPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login?callbackUrl=/account")
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">My Account</h1>
      <AccountDashboard user={session.user} />
    </div>
  )
}
