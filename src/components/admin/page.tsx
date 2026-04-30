// src/app/admin/page.tsx
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCards } from "@/components/admin/stats-cards"
import { RecentQuotesTable } from "@/components/admin/recent-quotes-table"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function AdminDashboardPage() {
  const supabase = createClient()
  
  // Vérifier l'authentification
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect("/auth/login")
  }

  // Récupérer les statistiques
  const { data: quotes, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching quotes:", error)
  }

  const stats = {
    total: quotes?.length || 0,
    new: quotes?.filter(q => q.status === "new").length || 0,
    inProgress: quotes?.filter(q => q.status === "contacted" || q.status === "negotiating").length || 0,
    won: quotes?.filter(q => q.status === "won").length || 0,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-socotra-blue">Tableau de Bord</h1>
        <p className="text-gray-500 mt-2">
          Gérez vos demandes de devis et prospects
        </p>
      </div>

      <StatsCards stats={stats} />

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Demandes de devis récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Chargement...</div>}>
              <RecentQuotesTable quotes={quotes || []} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}