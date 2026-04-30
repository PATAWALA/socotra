// src/app/admin/layout.tsx
import { redirect } from "next/navigation"
import { AdminHeader } from "@/components/admin/admin-header"
import { createClient } from "@/lib/supabase/server"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  // Protection de la route admin
  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}